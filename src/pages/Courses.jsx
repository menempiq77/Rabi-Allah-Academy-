import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import CourseModal from '../components/CourseModal'
import { courses, pricingTiers } from '../data/courses'
import { asset } from '../lib/asset'
import { localize } from '../lib/article'
import { whatsappUrl } from '../lib/whatsapp'
import { useLang, useT } from '../i18n'

export default function Courses() {
  const [selected, setSelected] = useState(null)
  const lang = useLang()
  const t = useT()
  const courseListData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((course, index) => {
      const content = localize(course, lang)
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: content.title,
          description: content.summary,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Rabi Allah Islamic Academy',
            sameAs: 'https://rabiallah.com',
          },
          url: `https://rabiallah.com${lang === 'ar' ? '/ar' : ''}/courses/${course.slug}`,
        },
      }
    }),
  }
  return (
    <>
      <SEO
        title={t('courses.seoTitle')}
        description={t('courses.seoDescription')}
        keywords={t('courses.seoKeywords')}
        path="/courses"
        lang={lang}
        alternates={[
          { hrefLang: 'en', path: '/courses' },
          { hrefLang: 'ar', path: '/ar/courses' },
        ]}
      />
      <JsonLd data={courseListData} />
      <div className="relative overflow-hidden bg-primary-900 py-20 text-center text-white">
        <img
          src={asset('/images/motif-dome.jpg')}
          alt={t('courses.domeAlt')}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/85" />
        <div className="pattern-overlay animate-pattern-drift absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            {t('courses.heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-primary-100">{t('courses.heroDescription')}</p>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {courses.map((course) => {
            const content = localize(course, lang)
            const Icon = course.icon
            return (
              <div
                key={course.slug}
                onClick={() => setSelected(course)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={asset(course.image)}
                    alt={content.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-bold text-primary-800 shadow-sm">
                    {content.price}
                  </div>
                </div>
                <div className="flex flex-grow flex-col p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-slate-900">{content.title}</h2>
                  <p className="mt-2 flex-grow leading-relaxed text-slate-600">{content.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-primary-700">
                    {t('courses.clickDetails')}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              {t('courses.pricing')}
            </p>
            <h2 className="section-title mt-2">{t('courses.privateFees')}</h2>
            <p className="section-subtitle">{t('courses.chooseSchedule')}</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, tierIndex) => {
              const tierText = t('courses.pricingTiers')[tierIndex] || tier
              return (
                <div key={tier.duration} className="card">
                  <h3 className="text-2xl font-bold text-slate-900">{tierText.duration}</h3>
                  <p className="mt-2 text-slate-600">{tierText.description}</p>
                  <div className="mt-6 space-y-3">
                    {tier.plans.map((plan) => (
                      <div
                        key={plan.monthlyClasses}
                        className="flex items-center justify-between rounded-lg border border-slate-100 bg-white p-4"
                      >
                        <div>
                          <p className="font-semibold text-slate-900">
                            {plan.classesPerWeek} {t('courses.classPerWeek')}
                          </p>
                          <p className="text-sm text-slate-500">
                            {plan.monthlyClasses} {t('courses.classesPerMonth')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gold-600">${plan.priceUSD}</p>
                          <p className="text-sm text-slate-500">£{plan.priceGBP}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <a
              href={whatsappUrl(undefined, lang)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              {t('courses.applyWhatsApp')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
