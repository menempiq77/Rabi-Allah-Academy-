import { mkdir, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

const siteUrl = 'https://rabiallah.com'
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})
const { articles } = await vite.ssrLoadModule('/src/data/articles.js')
const { courses } = await vite.ssrLoadModule('/src/data/courses.js')
await vite.close()
const staticPaths = ['/', '/about', '/courses', '/articles', '/ar/articles', '/contact']
const urls = [
  ...staticPaths.map((path) => ({ path })),
  ...courses.map(({ slug }) => ({ path: `/courses/${slug}` })),
  ...articles.flatMap((article) => {
    const paths = [{ path: `/articles/${article.slug}`, article }]
    if (article.ar) paths.push({ path: `/ar/articles/${article.slug}`, article })
    return paths
  }),
]

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function alternateLinks(article) {
  if (!article?.ar) return ''
  return [
    ['en', `/articles/${article.slug}`],
    ['ar', `/ar/articles/${article.slug}`],
  ]
    .map(
      ([hrefLang, path]) =>
        `\n    <xhtml:link rel="alternate" hreflang="${hrefLang}" href="${escapeXml(`${siteUrl}${path}`)}" />`,
    )
    .join('')
}

const body = urls
  .map(({ path, article }) => {
    const lastmod = article?.date ? `\n    <lastmod>${escapeXml(article.date)}</lastmod>` : ''
    return `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>${lastmod}${alternateLinks(article)}\n  </url>`
  })
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`

await mkdir('public', { recursive: true })
await writeFile('public/sitemap.xml', sitemap, 'utf8')
