// Arabic wording is filled in separately.
import en from './en'

const ar = {
  nav: { ...en.nav },
  footer: { ...en.footer },
  hero: { ...en.hero, highlights: { ...en.hero.highlights } },
  home: { ...en.home },
  about: { ...en.about },
  courses: { ...en.courses },
  courseDetail: { ...en.courseDetail },
  courseModal: { ...en.courseModal },
  contact: { ...en.contact },
  articles: { ...en.articles },
  articleDetail: { ...en.articleDetail },
  social: { ...en.social },
}

export default ar
