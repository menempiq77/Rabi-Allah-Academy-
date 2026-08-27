import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { ArrowLeft, CheckCircle, MessageCircle } from 'lucide-react'
import { courses, pricingTiers } from '../data/courses'
import { asset } from '../lib/asset'
import { localize } from '../lib/article'
import { whatsappUrl } from '../lib/whatsapp'
import { localePath, useLang, useT } from '../i18n'

export default function CourseDetail() {
  const { slug } = useParams()
  const lang = useLang()
  const t = useT()
  const course = courses.find((item) => item.slug === slug)
  if (!course)
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">{t('courseDetail.notFound')}</h2>
        <Link
          to={localePath(lang, '/courses')}
          className="mt-4 inline-flex items-center text-primary-700 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('courseDetail.backToCourses')}
        </Link>
      </div>
    )
  const content = localize(course, lang)
  const Icon = course.icon
  const route = `/courses/${slug}`
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: content.title,
    description: content.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Rabi Allah Islamic Academy',
      sameAs: 'https://rabiallah.com',
    },
    url: `https://rabiallah.com${localePath(lang, route)}`,
    coursePrerequisites: t('courseDetail.prerequisites'),
    educationalLevel: t('courseDetail.level'),
  }
  return (
    <>
      <SEO
        title={`${content.title} | Rabi Allah Islamic Academy`}
        description={content.description}
        keywords={t('courseDetail.seoKeywords')}
        path={route}
        lang={lang}
        alternates={[
          { hrefLang: 'en', path: route },
          { hrefLang: 'ar', path: `/ar${route}` },
        ]}
      />
      <JsonLd data={courseSchema} />
      <div className="relative h-72 overflow-hidden sm:h-96">
        <img src={asset(course.image)} alt={content.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-900/80 to-primary-900/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <Link
              to={localePath(lang, '/courses')}
              className="mb-4 inline-flex items-center text-sm text-primary-200 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('courseDetail.allCourses')}
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-gold-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                  {content.title}
                </h1>
                <p className="mt-1 text-xl font-semibold text-gold-300">{content.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-lg leading-relaxed">{content.description}</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{t('courseDetail.whatLearn')}</h2>
            <ul className="mt-4 space-y-3">
              {content.whatYouWillLearn.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">{t('courseDetail.whoFor')}</h2>
            <ul className="mt-4 space-y-3">
              {content.whoIsItFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-primary-50 p-8">
          <h2 className="text-xl font-bold text-slate-900">{t('courseDetail.format')}</h2>
          <p className="mt-2 text-slate-700">{content.format}</p>
        </div>
        {course.paid && (
          <div className="mt-12">
            <h2 className="section-title text-center">{t('courseDetail.privateFees')}</h2>
            <p className="section-subtitle text-center">{t('courseDetail.chooseSchedule')}</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-primary-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold">
                      {t('courseDetail.duration')}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      {t('courseDetail.classesWeek')}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      {t('courseDetail.classesMonth')}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">{t('courseDetail.price')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {pricingTiers.flatMap((tier, tierIndex) => {
                    const tierText = t('courses.pricingTiers')[tierIndex] || tier
                    return tier.plans.map((plan, idx) => (
                      <tr
                        key={`${tier.duration}-${plan.monthlyClasses}`}
                        className="hover:bg-slate-50"
                      >
                        {idx === 0 && (
                          <td
                            rowSpan={tier.plans.length}
                            className="px-6 py-4 align-middle font-semibold text-slate-900"
                          >
                            {tierText.duration}
                          </td>
                        )}
                        <td className="px-6 py-4 text-slate-600">{plan.classesPerWeek}</td>
                        <td className="px-6 py-4 text-slate-600">{plan.monthlyClasses}</td>
                        <td className="px-6 py-4 font-semibold text-gold-600">
                          ${plan.priceUSD}{' '}
                          <span className="text-sm text-slate-500">/ £{plan.priceGBP}</span>
                        </td>
                      </tr>
                    ))
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="mt-10 text-center">
          <a
            href={whatsappUrl(content.title, lang)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-8 py-4 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {t('courseDetail.applyWhatsApp')}
          </a>
        </div>
      </section>
    </>
  )
}
