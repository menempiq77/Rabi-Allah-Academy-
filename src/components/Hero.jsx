import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Heart, LogIn } from 'lucide-react'
import { asset } from '../lib/asset'
import { LMS_URL } from '../lib/lms'
import { whatsappUrl } from '../lib/whatsapp'
import { localePath, useLang, useT } from '../i18n'

const slides = [
  '/images/course-islamic-studies.jpg',
  '/images/welcome-quran.jpg',
  '/images/course-memorization.jpg',
  '/images/motif-mihrab.jpg',
]
const highlights = [
  { icon: BookOpen, key: 'quranCentered' },
  { icon: Users, key: 'allAges' },
  { icon: Heart, key: 'holisticTarbiyah' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const lang = useLang()
  const t = useT()
  useEffect(() => {
    const timer = setInterval(() => setActive((current) => (current + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <img
            key={image}
            src={asset(image)}
            alt={t(`hero.slideCaptions.${index}`)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === active ? 'animate-kenburns opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/70 to-primary-950/85" />
        <div className="pattern-overlay absolute inset-0 opacity-25" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-300">
          {t('hero.eyebrow')}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-serif">
          {t('hero.title')}
        </h1>
        <p className="mt-5 max-w-xl text-lg text-primary-100 sm:text-xl">{t('hero.description')}</p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            to={localePath(lang, '/courses')}
            className="btn-primary bg-white text-primary-900 hover:bg-primary-50"
          >
            {t('hero.exploreCourses')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href={whatsappUrl(undefined, lang)}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary border-white text-white hover:bg-white/10"
          >
            {t('hero.applyWhatsApp')}
          </a>
          <a
            href={LMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-gold-400 text-gold-200 hover:bg-gold-400/10"
          >
            <LogIn className="mr-2 h-4 w-4" />
            {t('hero.login')}
          </a>
        </div>
        <p className="mt-3 text-sm text-primary-200">{t('hero.loginHint')}</p>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          {highlights.map(({ icon: Icon, key }) => (
            <span
              key={key}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 text-gold-300" />
              {t(`hero.highlights.${key}`)}
            </span>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={t(`hero.slideCaptions.${index}`)}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${index === active ? 'w-8 bg-gold-400' : 'w-3 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
          <p key={active} className="animate-fade-up text-sm text-primary-200">
            {t(`hero.slideCaptions.${active}`)}
          </p>
        </div>
      </div>
    </section>
  )
}
