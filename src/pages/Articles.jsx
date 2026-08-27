import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { articles } from '../data/articles'
import { asset } from '../lib/asset'
import { localizeArticle } from '../lib/article'
import { localePath, useLang, useT } from '../i18n'

export default function Articles() {
  const lang = useLang()
  const t = useT()
  const isArabic = lang === 'ar'
  const listedArticles = isArabic ? articles.filter((article) => article.ar) : articles
  const articlesData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: t('articles.blogName'),
    url: `https://rabiallah.com${localePath(lang, '/articles')}`,
    blogPost: listedArticles.map((article) => {
      const content = localizeArticle(article, lang)
      return {
        '@type': 'BlogPosting',
        headline: content.title,
        description: content.excerpt,
        image: content.image
          ? /^(https?:)?\/\//.test(content.image)
            ? content.image
            : `https://rabiallah.com${content.image}`
          : undefined,
        inLanguage: lang,
        url: `https://rabiallah.com${localePath(lang, `/articles/${article.slug}`)}`,
        author: { '@type': 'Organization', name: 'Rabi Allah Islamic Academy' },
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
        title={t('articles.seoTitle')}
        description={t('articles.seoDescription')}
        keywords={t('articles.seoKeywords')}
        path="/articles"
        lang={lang}
        alternates={[
          { hrefLang: 'en', path: '/articles' },
          { hrefLang: 'ar', path: '/ar/articles' },
        ]}
      />
      <JsonLd data={articlesData} />
      <div className="relative overflow-hidden py-24 text-center text-white">
        <img
          src={asset('/images/al-azhar.jpg')}
          alt={t('articles.imageAlt')}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/90" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            {t('articles.heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-primary-100">{t('articles.heroDescription')}</p>
        </div>
      </div>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {listedArticles.map((article) => {
            const content = localizeArticle(article, lang)
            return (
              <Link
                key={article.slug}
                to={localePath(lang, `/articles/${article.slug}`)}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={asset(article.image)}
                    alt={content.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-950/0 transition group-hover:bg-primary-950/30">
                    <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                      {t('articles.readMore')}
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary-700">
                    {content.category && <span>{content.category}</span>}
                    {content.video && (
                      <span className="rounded-full bg-gold-100 px-2 py-1 text-gold-800">
                        {t('articles.watch')}
                      </span>
                    )}
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 transition group-hover:text-primary-700">
                    {content.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm text-slate-600">{content.excerpt}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
