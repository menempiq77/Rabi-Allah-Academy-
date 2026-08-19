import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Heart } from 'lucide-react'

const slides = [
  {
    image: '/images/course-islamic-studies.jpg',
    caption: 'Live classes, real teachers',
  },
  {
    image: '/images/welcome-quran.jpg',
    caption: 'Read. Understand. Live it.',
  },
  {
    image: '/images/course-memorization.jpg',
    caption: 'Memorise with a plan',
  },
  {
    image: '/images/motif-mihrab.jpg',
    caption: 'Rooted in the Qur’an & Sunnah',
  },
]

const highlights = [
  { icon: BookOpen, label: 'Qur’an-Centered' },
  { icon: Users, label: 'All Ages' },
  { icon: Heart, label: 'Holistic Tarbiyah' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden text-white">
      {/* Moving educational slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.caption}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === active ? 'animate-kenburns opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/85 via-primary-900/70 to-primary-950/85" />
        <div className="pattern-overlay absolute inset-0 opacity-25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-300">
          From Learning to Living Islam
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-serif">
          Rabi Allah Islamic Academy
        </h1>
        <p className="mt-5 max-w-xl text-lg text-primary-100 sm:text-xl">
          Online Qur’an, Arabic and Islamic Studies — one-to-one, at your pace.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link to="/courses" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">
            Explore Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
            Book a Free Trial
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {highlights.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
            >
              <item.icon className="h-4 w-4 text-gold-300" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.image}
                type="button"
                aria-label={slide.caption}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === active ? 'w-8 bg-gold-400' : 'w-3 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          <p key={active} className="animate-fade-up text-sm text-primary-200">
            {slides[active].caption}
          </p>
        </div>
      </div>
    </section>
  )
}
