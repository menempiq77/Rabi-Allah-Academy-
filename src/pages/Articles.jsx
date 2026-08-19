import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { ArrowRight } from 'lucide-react'
import { articles } from '../data/articles'

export default function Articles() {
  const articlesData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Rabi Allah Islamic Academy Articles',
    url: 'https://rabiallah.com/articles',
    blogPost: articles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      url: `https://rabiallah.com/articles/${article.slug}`,
      author: {
        '@type': 'Organization',
        name: 'Rabi Allah Islamic Academy',
      },
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Rabi Allah Islamic Academy',
      },
    })),
  }

  return (
    <>
      <SEO
        title="Islamic Articles | Learn Arabic, Understand the Qur’an & Live Islam"
        description="Read articles from Rabi Allah Academy on learning Arabic, memorising and understanding the Qur’an, Tarbiyah, dhikr, Ramadan, and guidance for new Muslims."
        keywords="Islamic Articles, Learn Arabic, Memorise Qur’an, Understand Qur’an, Tafsir, Tarbiyah, Dhikr, Ramadan, New Muslims, Islamic Education"
        path="/articles"
      />
      <JsonLd data={articlesData} />

      <div className="relative overflow-hidden py-24 text-center text-white">
        <img
          src="/images/al-azhar.jpg"
          alt="Courtyard of a historic centre of Islamic learning"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/90" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">Articles</h1>
          <p className="mt-4 text-lg text-primary-100">
            Reflections on Arabic, the Qur’an, Islamic education, and living Islam.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary-950/0 transition group-hover:bg-primary-950/30">
                  <span className="flex translate-y-4 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary-800 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-primary-700 transition">{article.title}</h2>
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
