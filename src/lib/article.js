export function localizeArticle(article, lang = 'en') {
  return lang === 'ar' && article.ar ? { ...article, ...article.ar } : article
}
