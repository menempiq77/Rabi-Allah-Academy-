import { mkdir, writeFile } from 'node:fs/promises'
import { articles } from '../src/data/articles.js'
import { courses } from '../src/data/courses.js'

const siteUrl = 'https://rabiallah.com'
const staticPaths = ['/', '/about', '/courses', '/articles', '/ar/articles', '/contact']
const paths = [
  ...staticPaths,
  ...courses.map(({ slug }) => `/courses/${slug}`),
  ...articles.flatMap(({ slug }) => [`/articles/${slug}`, `/ar/articles/${slug}`]),
]

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

const body = paths
  .map((path) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n  </url>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`

await mkdir('public', { recursive: true })
await writeFile('public/sitemap.xml', sitemap, 'utf8')
