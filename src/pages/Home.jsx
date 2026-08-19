import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import CourseModal from '../components/CourseModal'
import { ArrowRight, Star, CheckCircle, Play, Calendar, MessageCircle } from 'lucide-react'
import { courses } from '../data/courses'
import { asset } from '../lib/asset'

const features = [
  {
    title: 'Free Evaluation Class',
    description:
      'Start with a free trial so we can assess your level and place you with the right teacher.',
  },
  {
    title: 'One-on-One Online Lessons',
    description:
      'Private live sessions give you personal attention, flexible pacing, and direct feedback.',
  },
  {
    title: 'Structured Learning Plans',
    description:
      'Every student follows a clear roadmap tailored to their goals, age, and schedule.',
  },
  {
    title: 'Dedicated Student Support',
    description:
      'Our team is with you at every step, from enrollment to progress tracking and scheduling.',
  },
  {
    title: 'Affordable Monthly Fees',
    description:
      'Competitive pricing with multiple weekly options so quality Islamic education fits your budget.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Book a Free Trial',
    description: 'Send us a message to schedule a free evaluation class at a time that suits you.',
    icon: MessageCircle,
  },
  {
    step: '02',
    title: 'Choose Your Plan',
    description: 'Pick your course, class length, and weekly schedule that fits your goals.',
    icon: Calendar,
  },
  {
    step: '03',
    title: 'Start Learning',
    description: 'Join live one-to-one online classes with a qualified teacher and structured plan.',
    icon: Play,
  },
]

const testimonials = [
  {
    name: 'Khadijah R.',
    location: 'Australia',
    text: 'My teacher never once made me feel slow or embarrassed. Alhamdulillah, in a few months I moved from struggling with letters to reading with Tajweed.',
  },
  {
    name: 'Abu Ibrahim',
    location: 'Germany',
    text: 'My son now leads the Maghrib prayer at home and his madrasah praised his recitation. May Allah reward his teacher for such patience and care.',
  },
  {
    name: 'Safiyyah M.',
    location: 'South Africa',
    text: 'As a new Muslim I had endless questions. The classes answered them gently and clearly, and now I pray and read the Qur’an with confidence.',
  },
  {
    name: 'Zainab T.',
    location: 'Malaysia',
    text: 'The one-to-one lessons fit around my work and my children. JazakAllahu khayran — our whole family’s connection with the Qur’an has grown.',
  },
]

export default function Home() {
  const [selected, setSelected] = useState(null)

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Rabi Allah Islamic Academy',
    url: 'https://rabiallah.com',
    logo: 'https://rabiallah.com/images/logo.svg',
    description:
      'Rabi Allah Islamic Academy offers online Quran, Arabic, Tajweed, Tafsir, Islamic Studies, and New Muslims courses with qualified teachers and flexible one-to-one classes.',
    sameAs: [
      'https://www.facebook.com/RabiAllah2',
      'https://www.instagram.com/rabiallah_1/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'mailto:Menempiq123@gmail.com',
      contactType: 'enrollment',
      availableLanguage: ['English', 'Arabic'],
    },
  }

  return (
    <>
      <SEO
        title="Rabi Allah Islamic Academy – Learn Arabic & Understand the Qur’an"
        description="Join Rabi Allah Islamic Academy for online Quran, Arabic, Tajweed, Tafsir, Islamic Studies, and New Muslims courses with qualified teachers and flexible one-to-one classes."
        keywords="Rabi Allah, Learn Arabic Online, Qur’an Arabic, Islamic Academy, Tarbiyah, New Muslims, Reverts, Understand Qur’an, Online Islamic Courses"
        path="/"
      />
      <JsonLd data={organizationData} />
      <Hero />

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="section-title">Welcome to Rabi Allah</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Welcome to Rabi Allah Islamic Academy! We are dedicated to enriching
              knowledge and appreciation of Islam through a curriculum grounded in
              Islamic teachings and contemporary educational practices. Our academy
              fosters spiritual, academic, and personal growth in a nurturing
              environment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Our courses are inspired by the Qur’an and the Sunnah of Prophet
              Muhammad (Peace Be Upon Him), focusing on both fundamental Islamic
              principles and their relevance today.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {['Qur’an & Arabic', 'Islamic Studies', 'New Muslims', 'All Ages'].map((tag) => (
                <span key={tag} className="rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-800">
                  <CheckCircle className="mr-1 inline h-4 w-4" /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={asset('/images/welcome-quran.jpg')}
              alt="Open Qur’an prepared for study"
              className="aspect-square w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-gold-500 p-6 text-white shadow-lg">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm font-medium">Online Classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">Our Courses</p>
              <h2 className="section-title mt-2">Programs for Every Stage</h2>
              <p className="section-subtitle">Choose the path that suits your Islamic journey.</p>
            </div>
            <Link to="/courses" className="btn-primary">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <div
                  key={course.slug}
                  onClick={() => setSelected(course)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={asset(course.image)}
                      alt={course.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-primary-800 shadow-sm">
                      {course.price}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <Icon className="h-5 w-5 text-primary-700" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{course.title}</h3>
                    <p className="mt-3 text-slate-600 line-clamp-3">{course.summary}</p>
                    <p className="mt-3 text-sm font-semibold text-primary-700">Click for details</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">How It Works</p>
            <h2 className="section-title mt-2">Start Learning in 3 Steps</h2>
            <p className="section-subtitle">Simple, flexible, and designed around your schedule.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-sm font-bold text-white">
                  {item.step}
                </span>
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100">
                  <item.icon className="h-6 w-6 text-primary-700" />
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-primary-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gold-300">Why Study With Us?</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-serif">Authentic Knowledge, Modern Delivery</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-primary-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">Testimonials</p>
            <h2 className="section-title mt-2">What Our Students Say</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="card">
                <div className="flex gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">“{testimonial.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-slate-900 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <blockquote className="text-xl font-serif italic leading-relaxed sm:text-2xl">
            “Whoever takes a path in search of knowledge, Allah will cause him to
            walk in one of the paths to Paradise. Indeed the angels will lower their
            wings in great pleasure with the one who seeks knowledge.”
          </blockquote>
          <p className="mt-6 text-gold-300 font-semibold">— Prophet Muhammad ﷺ</p>
        </div>
      </section>

      {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
