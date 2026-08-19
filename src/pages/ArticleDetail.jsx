import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { ArrowLeft } from 'lucide-react'
import { articles } from '../data/articles'

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
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `https://rabiallah.com${article.image}`,
    url: `https://rabiallah.com/articles/${article.slug}`,
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
          src={article.image}
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
        <p className="text-lg font-medium text-slate-700 leading-relaxed">{article.excerpt}</p>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link to="/articles" className="btn-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Articles
          </Link>
        </div>
      </section>
    </>
  )
}
