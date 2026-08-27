import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, CheckCircle, Play, Calendar, MessageCircle } from 'lucide-react'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import CourseModal from '../components/CourseModal'
import { courses } from '../data/courses'
import { asset } from '../lib/asset'
import { localize } from '../lib/article'
import { localePath, useLang, useT } from '../i18n'

const stepIcons = [MessageCircle, Calendar, Play]

export default function Home() {
  const [selected, setSelected] = useState(null)
  const lang = useLang()
  const t = useT()
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Rabi Allah Islamic Academy',
    url: 'https://rabiallah.com',
    logo: 'https://rabiallah.com/images/logo.svg',
    description: t('home.seoDescription'),
    sameAs: ['https://www.facebook.com/RabiAllah2', 'https://www.instagram.com/rabiallah_1/'],
    contactPoint: { '@type': 'ContactPoint', email: 'mailto:Menempiq123@gmail.com', contactType: 'enrollment', availableLanguage: ['English', 'Arabic'] },
  }

  return <>
    <SEO title={t('home.seoTitle')} description={t('home.seoDescription')} keywords={t('home.seoKeywords')} path="/" lang={lang} alternates={[{ hrefLang: 'en', path: '/' }, { hrefLang: 'ar', path: '/ar' }]} />
    <JsonLd data={organizationData} />
    <Hero />
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid items-center gap-12 lg:grid-cols-2">
      <div><h2 className="section-title">{t('home.welcomeTitle')}</h2>{t('home.welcomeParagraphs').map((paragraph) => <p key={paragraph} className="mt-6 text-lg leading-relaxed text-slate-600">{paragraph}</p>)}<div className="mt-8 flex flex-wrap gap-4">{t('home.tags').map((tag) => <span key={tag} className="rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-800"><CheckCircle className="mr-1 inline h-4 w-4" />{tag}</span>)}</div></div>
      <div className="relative"><img src={asset('/images/welcome-quran.jpg')} alt={t('home.imageAlt')} className="aspect-square w-full rounded-2xl object-cover shadow-2xl" /><div className="absolute -bottom-6 -left-6 rounded-xl bg-gold-500 p-6 text-white shadow-lg"><p className="text-3xl font-bold">24/7</p><p className="text-sm font-medium">{t('home.onlineClasses')}</p></div></div>
    </div></section>
    <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-wider text-primary-700">{t('home.ourCourses')}</p><h2 className="section-title mt-2">{t('home.programsForEveryStage')}</h2><p className="section-subtitle">{t('home.choosePath')}</p></div><Link to={localePath(lang, '/courses')} className="btn-primary">{t('home.viewAllCourses')}<ArrowRight className="ml-2 h-4 w-4" /></Link></div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">{courses.map((course) => { const content = localize(course, lang); const Icon = course.icon; return <div key={course.slug} onClick={() => setSelected(course)} className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition hover:shadow-xl"><div className="relative h-36 overflow-hidden"><img src={asset(course.image)} alt={content.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-bold text-primary-800 shadow-sm">{content.price}</div></div><div className="p-5"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100"><Icon className="h-5 w-5 text-primary-700" /></div><h3 className="mt-4 text-xl font-bold text-slate-900">{content.title}</h3><p className="mt-3 text-slate-600 line-clamp-3">{content.summary}</p><p className="mt-3 text-sm font-semibold text-primary-700">{t('home.clickForDetails')}</p></div></div> })}</div>
    </div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="text-sm font-semibold uppercase tracking-wider text-primary-700">{t('home.howItWorks')}</p><h2 className="section-title mt-2">{t('home.startLearning')}</h2><p className="section-subtitle">{t('home.simpleFlexible')}</p></div><div className="mt-12 grid gap-8 md:grid-cols-3">{t('home.steps').map((item, index) => { const Icon = stepIcons[index]; return <div key={item.title} className="relative rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"><span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-4 py-1 text-sm font-bold text-white">{item.number}</span><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-100"><Icon className="h-6 w-6 text-primary-700" /></div><h3 className="mt-6 text-lg font-bold text-slate-900">{item.title}</h3><p className="mt-2 text-slate-600">{item.description}</p></div> })}</div></div></section>
    <section className="bg-primary-900 py-20 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="text-sm font-semibold uppercase tracking-wider text-gold-300">{t('home.whyStudyWithUs')}</p><h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl font-serif">{t('home.authenticKnowledge')}</h2></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{t('home.features').map((feature) => <div key={feature.title} className="rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"><h3 className="text-lg font-bold">{feature.title}</h3><p className="mt-2 text-primary-100">{feature.description}</p></div>)}</div></div></section>
    <section className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="text-sm font-semibold uppercase tracking-wider text-primary-700">{t('home.testimonials')}</p><h2 className="section-title mt-2">{t('home.studentsSay')}</h2></div><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{t('home.testimonialsList').map((testimonial) => <div key={testimonial.name} className="card"><div className="flex gap-1 text-gold-500">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-4 leading-relaxed text-slate-700">“{testimonial.text}”</p><div className="mt-6 flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-bold text-primary-700">{testimonial.name[0]}</div><div><p className="font-semibold text-slate-900">{testimonial.name}</p><p className="text-sm text-slate-500">{testimonial.location}</p></div></div></div>)}</div></div></section>
    <section className="bg-slate-900 py-16 text-center text-white"><div className="mx-auto max-w-3xl px-4"><blockquote className="text-xl font-serif italic leading-relaxed">{t('home.quote')}</blockquote><p className="mt-4 text-gold-300">{t('home.quoteAttribution')}</p></div></section>
    {selected && <CourseModal course={selected} onClose={() => setSelected(null)} />}
  </>
}
