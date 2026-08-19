import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { ArrowLeft } from 'lucide-react'
import { articles } from '../data/articles'
import { asset } from '../lib/asset'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Article not found</h2>
        <Link to="/articles" className="mt-4 inline-flex items-center text-primary-700 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to articles
        </Link>
      </div>
    )
  }

  const Icon = article.icon
  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://rabiallah.com${article.image}`,
    url: `https://rabiallah.com/articles/${article.slug}`,
    datePublished: article.date,
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

  return (
    <>
      <SEO
        title={`${article.title} | Rabi Allah Academy Articles`}
        description={article.excerpt}
        keywords={`Islamic Article, ${article.title}, Rabi Allah Academy, Learn Islam, Qur’an, Arabic, Tarbiyah`}
        path={`/articles/${article.slug}`}
      />
      <JsonLd data={articleSchema} />

      <div className="relative h-72 overflow-hidden sm:h-96">
        <img
          src={asset(article.image)}
          alt={article.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/80 to-primary-900/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <Link to="/articles" className="mb-4 inline-flex items-center text-sm text-primary-200 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> All Articles
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-gold-300" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {formattedDate && (
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">
            {formattedDate}
          </p>
        )}
        <p className="mt-3 text-lg font-medium text-slate-700 leading-relaxed">{article.excerpt}</p>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
          {article.blocks.map((block, idx) => {
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
                  className="border-l-4 border-primary-600 bg-primary-50 px-6 py-4 font-serif italic text-slate-800"
                >
                  {block.text}
                </blockquote>
              )
            }
            return <p key={idx}>{block.text}</p>
          })}
        </div>

        {article.video && (
          <div className="mt-12 aspect-video overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${article.video}`}
              title={article.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        )}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link to="/articles" className="btn-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
        </div>
      </section>
    </>
  )
}
