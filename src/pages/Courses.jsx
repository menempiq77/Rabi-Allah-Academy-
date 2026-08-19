import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import CourseModal from '../components/CourseModal'
import { ArrowRight } from 'lucide-react'
import { courses, pricingTiers } from '../data/courses'

export default function Courses() {
  const [selected, setSelected] = useState(null)

  const courseListData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Course',
        name: course.title,
        description: course.summary,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Rabi Allah Islamic Academy',
          sameAs: 'https://rabiallah.com',
        },
        url: `https://rabiallah.com/courses/${course.slug}`,
      },
    })),
  }

  return (
    <>
      <SEO
        title="Online Islamic Courses | Quran, Arabic, Tafsir & Islamic Studies"
        description="Explore Rabi Allah Academy’s online courses: Quran Reading, Recitation, Tajweed, Memorization, Arabic Language, Tafsir, Sirah, Hadith, Aqidah, and Islam for New Muslims."
        keywords="Online Quran Classes, Learn Arabic Online, Quran Recitation Course, Tajweed Rules, Quran Memorization, Tafsir Course, Islamic Studies Online, Aqidah, Hadith, Sirah"
        path="/courses"
      />
      <JsonLd data={courseListData} />
      <div className="bg-primary-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">Our Courses</h1>
          <p className="mt-4 text-lg text-primary-100">
            A complete curriculum aligned with authentic Islamic learning goals and student levels.
          </p>
        </div>
      </div>

      {/* Course cards */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <div
                key={course.slug}
                onClick={() => setSelected(course)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-bold text-primary-800 shadow-sm">
                    {course.price}
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-slate-900">{course.title}</h2>
                  <p className="mt-2 flex-grow text-slate-600 leading-relaxed">{course.summary}</p>
                  <p className="mt-4 text-sm font-semibold text-primary-700">Click for details</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">Pricing</p>
            <h2 className="section-title mt-2">Private One-to-One Class Fees</h2>
            <p className="section-subtitle">Choose your class length and weekly schedule. Free trial available.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.duration} className="card">
                <h3 className="text-2xl font-bold text-slate-900">{tier.duration}</h3>
                <p className="mt-2 text-slate-600">{tier.description}</p>
                <div className="mt-6 space-y-3">
                  {tier.plans.map((plan) => (
                    <div
                      key={plan.monthlyClasses}
                      className="flex items-center justify-between rounded-lg border border-slate-100 bg-white p-4"
                    >
                      <div>
                        <p className="font-semibold text-slate-900">{plan.classesPerWeek} class / week</p>
                        <p className="text-sm text-slate-500">{plan.monthlyClasses} classes / month</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gold-600">${plan.priceUSD}</p>
                        <p className="text-sm text-slate-500">£{plan.priceGBP}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Book Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
