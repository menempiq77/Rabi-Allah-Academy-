import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { ArrowLeft } from 'lucide-react'
import { articles } from '../data/articles'
import { asset } from '../lib/asset'

function absoluteUrl(path) {
  return /^(https?:)?\/\//.test(path) ? path : `https://rabiallah.com${path}`
}

function durationToIso8601(seconds) {
  if (!seconds) return undefined
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainder = seconds % 60
  return `PT${hours ? `${hours}H` : ''}${minutes ? `${minutes}M` : ''}${remainder ? `${remainder}S` : ''}`
}

export default function ArticleDetail({ lang = 'en' }) {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  const isArabic = lang === 'ar'

  if (!article) {
    return (
      <div dir={isArabic ? 'rtl' : 'ltr'} className={`mx-auto max-w-7xl px-4 py-20 text-center ${isArabic ? 'font-sans' : ''}`}>
        <h2 className="text-2xl font-bold text-slate-900">{isArabic ? 'المقال غير موجود' : 'Article not found'}</h2>
        <Link to={isArabic ? '/ar/articles' : '/articles'} className="mt-4 inline-flex items-center text-primary-700 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> {isArabic ? 'العودة إلى المقالات' : 'Back to articles'}
        </Link>
      </div>
    )
  }

  const content = isArabic && article.ar ? { ...article, ...article.ar } : article
  const hasArabic = Boolean(article.ar)
  const Icon = article.icon
  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString(isArabic ? 'ar-EG' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null
  const path = `${isArabic ? '/ar' : ''}/articles/${article.slug}`
  const alternates = hasArabic
    ? [
        { hrefLang: 'en', path: `/articles/${article.slug}` },
        { hrefLang: 'ar', path: `/ar/articles/${article.slug}` },
      ]
    : undefined
  const image = article.image ? absoluteUrl(article.image) : undefined
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: content.title,
    alternativeHeadline: content.metaTitle,
    description: content.excerpt,
    keywords: content.keywords,
    image,
    url: `https://rabiallah.com${path}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rabiallah.com${path}`,
    },
    datePublished: article.date,
    inLanguage: lang,
    author: {
      '@type': 'Organization',
      name: 'Rabi Allah Islamic Academy',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Rabi Allah Islamic Academy',
      logo: 'https://rabiallah.com/images/logo.svg',
    },
  }
  const videoSchema = article.video
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: content.title,
        description: content.excerpt,
        thumbnailUrl: image,
        uploadDate: article.date,
        duration: durationToIso8601(article.videoDuration),
        embedUrl: `https://www.youtube-nocookie.com/embed/${article.video}`,
        contentUrl: `https://www.youtube.com/watch?v=${article.video}`,
        inLanguage: lang,
      }
    : null
  const faqSchema = content.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: a,
          },
        })),
      }
    : null

  return (
    <>
      <SEO
        title={content.metaTitle || content.title}
        description={content.excerpt}
        keywords={content.keywords}
        image={content.image}
        type="article"
        lang={lang}
        path={path}
        alternates={alternates}
      />
      <JsonLd data={articleSchema} />
      {videoSchema && <JsonLd data={videoSchema} />}
      {faqSchema && <JsonLd data={faqSchema} />}

      <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'font-sans' : ''}>
        <div className="relative h-72 overflow-hidden sm:h-96">
          <img
            src={asset(article.image)}
            alt={content.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/80 to-primary-900/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
              <Link to={isArabic ? '/ar/articles' : '/articles'} className="mb-4 inline-flex items-center text-sm text-primary-200 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" /> {isArabic ? 'كل المقالات' : 'All Articles'}
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Icon className="h-8 w-8 text-gold-300" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                  {content.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          {hasArabic && (
            <Link
              to={isArabic ? `/articles/${article.slug}` : `/ar/articles/${article.slug}`}
              className="mb-6 inline-flex text-sm font-semibold text-primary-700 hover:underline"
            >
              {isArabic ? 'English' : 'العربية'}
            </Link>
          )}
          {formattedDate && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              {formattedDate}
            </p>
          )}
          <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">{content.excerpt}</p>

          {article.video && (
            <div className="mt-10">
              <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${article.video}`}
                  title={content.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                />
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${article.video}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex font-semibold text-primary-700 hover:underline"
              >
                {isArabic ? 'شاهد الفيديو كامل على يوتيوب' : 'Watch the full video on YouTube'}
              </a>
            </div>
          )}

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
            {content.blocks.map((block, idx) => {
              if (block.type === 'h') {
                return (
                  <h2 key={idx} className="pt-4 text-2xl font-bold text-slate-900">
                    {block.text}
                  </h2>
                )
              }
              if (block.type === 'li') {
                return (
                  <div key={idx} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-gold-500" />
                    <p>{block.text}</p>
                  </div>
                )
              }
              if (block.type === 'quote') {
                return (
                  <blockquote
                    key={idx}
                    className={`${isArabic ? 'border-r-4' : 'border-l-4'} border-primary-600 bg-primary-50 px-6 py-4 font-serif italic text-slate-800`}
                  >
                    {block.text}
                  </blockquote>
                )
              }
              return <p key={idx}>{block.text}</p>
            })}
          </div>

          {content.faq?.length > 0 && (
            <section className="mt-14 border-t border-slate-200 pt-10">
              <h2 className="text-2xl font-bold text-slate-900">
                {isArabic ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
              </h2>
              <div className="mt-6 space-y-6">
                {content.faq.map(({ q, a }) => (
                  <div key={q}>
                    <h3 className="text-lg font-bold text-slate-900">{q}</h3>
                    <p className="mt-2 text-lg leading-relaxed text-slate-700">{a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 border-t border-slate-200 pt-8">
            <Link to={isArabic ? '/ar/articles' : '/articles'} className="btn-secondary">
              <ArrowLeft className="mr-2 h-4 w-4" /> {isArabic ? 'العودة إلى المقالات' : 'Back to Articles'}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
