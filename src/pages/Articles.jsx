import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { ArrowRight } from 'lucide-react'
import { articles } from '../data/articles'
import { asset } from '../lib/asset'

export default function Articles({ lang = 'en' }) {
  const isArabic = lang === 'ar'
  const listedArticles = isArabic ? articles.filter((article) => article.ar) : articles
  const articlesData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: isArabic
      ? 'مقالات أكاديمية ربي الله الإسلامية'
      : 'Rabi Allah Islamic Academy Articles',
    url: `https://rabiallah.com${isArabic ? '/ar/articles' : '/articles'}`,
    blogPost: listedArticles.map((article) => {
      const content = isArabic ? { ...article, ...article.ar } : article
      return {
      '@type': 'BlogPosting',
      headline: content.title,
      description: content.excerpt,
      image: content.image ? (content.image.startsWith('http') ? content.image : `https://rabiallah.com${content.image}`) : undefined,
      inLanguage: lang,
      url: `https://rabiallah.com${isArabic ? '/ar' : ''}/articles/${article.slug}`,
      author: {
        '@type': 'Organization',
        name: 'Rabi Allah Islamic Academy',
      },
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Rabi Allah Islamic Academy',
      },
      }
    }),
  }

  return (
    <>
      <SEO
        title={isArabic ? 'مقالات إسلامية' : 'Islamic Articles | Learn Arabic, Understand the Qur’an & Live Islam'}
        description={isArabic ? 'اقرأ مقالات أكاديمية ربي الله الإسلامية عن القرآن والتربية وتعليم الإسلام.' : 'Read articles from Rabi Allah Academy on learning Arabic, memorising and understanding the Qur’an, Tarbiyah, dhikr, Ramadan, and guidance for new Muslims.'}
        keywords={isArabic ? 'مقالات إسلامية، القرآن، التفسير، التربية الإسلامية' : 'Islamic Articles, Learn Arabic, Memorise Qur’an, Understand Qur’an, Tafsir, Tarbiyah, Dhikr, Ramadan, New Muslims, Islamic Education'}
        path={isArabic ? '/ar/articles' : '/articles'}
        lang={lang}
        alternates={[
          { hrefLang: 'en', path: '/articles' },
          { hrefLang: 'ar', path: '/ar/articles' },
        ]}
      />
      <JsonLd data={articlesData} />

      <div dir={lang} className={`font-sans ${isArabic ? 'text-right' : ''}`}>
      <div className="relative overflow-hidden py-24 text-center text-white">
        <img
          src={asset('/images/al-azhar.jpg')}
          alt="Courtyard of a historic centre of Islamic learning"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/90" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">{isArabic ? 'المقالات' : 'Articles'}</h1>
          <p className="mt-4 text-lg text-primary-100">
            {isArabic ? 'تأملات في القرآن والتعليم الإسلامي وعيش الإسلام.' : 'Reflections on Arabic, the Qur’an, Islamic education, and living Islam.'}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listedArticles.map((article) => {
            const content = isArabic ? { ...article, ...article.ar } : article
            return (
            <Link
              key={article.slug}
              to={`${isArabic ? '/ar' : ''}/articles/${article.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={asset(article.image)}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary-950/0 transition group-hover:bg-primary-950/30">
                  <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    {isArabic ? 'اقرأ المزيد' : 'Read more'} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-700">
                  {article.category && <span>{article.category}</span>}
                  {article.video && <span className="rounded-full bg-gold-100 px-2 py-1 text-gold-800">{isArabic ? 'فيديو' : 'Watch'}</span>}
                </div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition">{content.title}</h2>
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">{content.excerpt}</p>
              </div>
            </Link>
            )
          })}
        </div>
      </section>
      </div>
    </>
  )
}
