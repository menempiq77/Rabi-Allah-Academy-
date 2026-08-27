import { Mail, MapPin, Clock, Facebook, Instagram, ArrowRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { courses } from '../data/courses'
import { asset } from '../lib/asset'
import { localize } from '../lib/article'
import { WHATSAPP_DISPLAY, whatsappUrl } from '../lib/whatsapp'
import { useLang, useT } from '../i18n'

export default function Contact() {
  const lang = useLang()
  const t = useT()
  const email = t('footer.email')
  const contactData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: t('contact.seoTitle'),
    url: 'https://rabiallah.com/contact',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Rabi Allah Islamic Academy',
      email,
      telephone: '+201158967213',
      contactPoint: {
        '@type': 'ContactPoint',
        email,
        telephone: '+201158967213',
        contactType: 'enrollment',
        availableLanguage: ['English', 'Arabic'],
      },
    },
  }
  return (
    <>
      <SEO
        title={t('contact.seoTitle')}
        description={t('contact.seoDescription')}
        keywords={t('contact.seoKeywords')}
        path="/contact"
        lang={lang}
        alternates={[
          { hrefLang: 'en', path: '/contact' },
          { hrefLang: 'ar', path: '/ar/contact' },
        ]}
      />
      <JsonLd data={contactData} />
      <div className="bg-primary-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">
            {t('contact.heroTitle')}
          </h1>
          <p className="mt-4 text-lg text-primary-100">{t('contact.heroDescription')}</p>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{t('contact.getInTouch')}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{t('contact.getInTouchText')}</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <MessageCircle className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{t('contact.whatsapp')}</h3>
                  <a
                    href={whatsappUrl(undefined, lang)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-primary-700"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{t('contact.email')}</h3>
                  <a href={`mailto:${email}`} className="text-slate-600 hover:text-primary-700">
                    {email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <MapPin className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{t('contact.location')}</h3>
                  <p className="text-slate-600">{t('contact.onlineWorldwide')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <Clock className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{t('contact.hours')}</h3>
                  <p className="text-slate-600">{t('contact.availability')}</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-semibold text-slate-900">{t('contact.followUs')}</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/RabiAllah2"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <Facebook className="h-4 w-4" />
                  {t('contact.facebook')}
                </a>
                <a
                  href="https://www.instagram.com/rabiallah_1/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <Instagram className="h-4 w-4" />
                  {t('contact.instagram')}
                </a>
                <a
                  href={whatsappUrl(undefined, lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('contact.messageWhatsApp')}
                </a>
              </div>
            </div>
            <div className="mt-10">
              <img
                src={asset('/images/contact-arches.jpg')}
                alt={t('contact.imageAlt')}
                className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">{t('contact.sendMessage')}</h2>
            <p className="mt-2 text-slate-600">{t('contact.formDescription')}</p>
            <form
              action={`mailto:${email}`}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              {[
                ['name', 'name'],
                ['email', 'email'],
              ].map(([id, key]) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium text-slate-700">
                    {t(`contact.${key}`)}
                  </label>
                  <input
                    type={id}
                    name={id}
                    id={id}
                    required
                    className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-slate-700">
                  {t('contact.interestedCourse')}
                </label>
                <select
                  name="course"
                  id="course"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">{t('contact.selectCourse')}</option>
                  {courses.map((course) => {
                    const content = localize(course, lang)
                    return (
                      <option key={course.slug} value={content.title}>
                        {content.title}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  {t('contact.message')}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {t('contact.submit')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
