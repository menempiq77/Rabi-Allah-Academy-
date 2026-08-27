// Resolves a public asset path against the deployment base (e.g. GitHub Pages
// serves the site from /Rabi-Allah-Academy-/ rather than the domain root).
export function asset(path) {
  if (/^(https?:)?\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
