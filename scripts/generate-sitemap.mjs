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
const pairedPaths = [
  ['/', '/ar'],
  ['/about', '/ar/about'],
  ['/courses', '/ar/courses'],
  ['/articles', '/ar/articles'],
  ['/contact', '/ar/contact'],
]
const urls = pairedPaths.flatMap(([englishPath, arabicPath]) => [
  { path: englishPath, alternates: [['en', englishPath], ['ar', arabicPath]] },
  { path: arabicPath, alternates: [['en', englishPath], ['ar', arabicPath]] },
])

for (const { slug } of courses) {
  const englishPath = `/courses/${slug}`
  const arabicPath = `/ar/courses/${slug}`
  urls.push(
    { path: englishPath, alternates: [['en', englishPath], ['ar', arabicPath]] },
    { path: arabicPath, alternates: [['en', englishPath], ['ar', arabicPath]] },
  )
}

for (const article of articles) {
  const englishPath = `/articles/${article.slug}`
  const paths = [{ path: englishPath, article }]
  if (article.ar) paths.push({ path: `/ar/articles/${article.slug}`, article })
  for (const entry of paths) {
    entry.alternates = article.ar
      ? [['en', englishPath], ['ar', `/ar/articles/${article.slug}`]]
      : undefined
    urls.push(entry)
  }
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function alternateLinks(alternates) {
  if (!alternates) return ''
  return alternates
    .map(
      ([hrefLang, path]) =>
        `\n    <xhtml:link rel="alternate" hreflang="${hrefLang}" href="${escapeXml(`${siteUrl}${path}`)}" />`,
    )
    .join('')
}

const body = urls
  .map(({ path, article, alternates }) => {
    const lastmod = article?.date ? `\n    <lastmod>${escapeXml(article.date)}</lastmod>` : ''
    return `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>${lastmod}${alternateLinks(alternates)}\n  </url>`
  })
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`

await mkdir('public', { recursive: true })
await writeFile('public/sitemap.xml', sitemap, 'utf8')
