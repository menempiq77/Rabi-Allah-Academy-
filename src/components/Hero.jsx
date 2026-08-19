import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Heart, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Islamic geometric architecture background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/70 via-primary-900/60 to-primary-950/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-gold-300 font-semibold tracking-wide uppercase text-sm mb-4">
              From Learning to Living Islam
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-serif">
              Rabi Allah Islamic Academy
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100 sm:text-xl">
              Dedicated to enriching knowledge and appreciation of Islam through a
              curriculum grounded in the Qur’an and Sunnah. We foster spiritual,
              academic, and personal growth in a nurturing, inclusive environment.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/courses" className="btn-primary bg-white text-primary-900 hover:bg-primary-50">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
                Get in Touch
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-primary-200">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-primary-800 bg-gradient-to-br from-gold-300 to-gold-600"
                  />
                ))}
              </div>
              <p>Trusted by students worldwide</p>
            </div>
          </div>

          {/* Visual feature cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/10 transform translate-y-8">
              <BookOpen className="h-10 w-10 text-gold-300" />
              <h3 className="mt-4 text-lg font-semibold">Qur’an-Centered</h3>
              <p className="mt-2 text-sm text-primary-100">
                Learn Classic Arabic directly through the Book of Allah.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/10">
              <Users className="h-10 w-10 text-gold-300" />
              <h3 className="mt-4 text-lg font-semibold">All Ages</h3>
              <p className="mt-2 text-sm text-primary-100">
                Programs for children, youth, adults, and new Muslims.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/10 transform translate-y-8">
              <Heart className="h-10 w-10 text-gold-300" />
              <h3 className="mt-4 text-lg font-semibold">Holistic Tarbiyah</h3>
              <p className="mt-2 text-sm text-primary-100">
                Spiritual, moral, and emotional growth rooted in values.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/20">
                <Play className="h-6 w-6 text-gold-300" />
              </div>
              <p className="mt-3 text-sm font-semibold">Start with a Free Trial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
