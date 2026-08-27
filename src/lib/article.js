export function localize(entity, lang = 'en') {
  return lang === 'ar' && entity.ar ? { ...entity, ...entity.ar } : entity
}

export function localizeArticle(article, lang = 'en') {
  return localize(article, lang)
}
