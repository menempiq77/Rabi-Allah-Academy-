import { Target, Compass, Sparkles, User } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { asset } from '../lib/asset'

const teachers = [
  {
    name: 'Ustadha Aisha',
    image: '/images/motif-manuscript.jpg',
    subject: 'Qur’an, Tajweed & Arabic',
    bio: 'Ijazah-trained in recitation, teaching Tajweed and Classical Arabic to sisters and children.',
  },
  {
    name: 'Ustadha Fatima',
    image: '/images/motif-tiles.jpg',
    subject: 'Islamic Studies & Tarbiyah',
    bio: 'Nurtures faith, character, and Islamic manners in children, youth, and adult learners.',
  },
  {
    name: 'Ustadh Yusuf',
    image: '/images/iqra.jpg',
    subject: 'Hifz & Qira’ah',
    bio: 'Guides memorisation with structured revision plans, from short Surahs to the full Qur’an.',
  },
  {
    name: 'Ustadh Bilal',
    image: '/images/motif-mihrab.jpg',
    subject: 'Aqidah & New Muslims',
    bio: 'Welcoming teacher covering the foundations of belief, worship, and daily practice.',
  },
]

export default function About() {
  const aboutData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Rabi Allah Islamic Academy',
    url: 'https://rabiallah.com/about',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Rabi Allah Islamic Academy',
      description:
        'Rabi Allah Islamic Academy provides authentic, accessible Islamic education blending classical sources with contemporary methods.',
    },
  }

  return (
    <>
      <SEO
        title="About Rabi Allah Islamic Academy | Vision, Mission & Founder"
        description="Learn about Rabi Allah Islamic Academy’s vision, mission, teaching methodology, and founder. From Learning to Living Islam."
        keywords="About Rabi Allah, Islamic Academy Vision, Islamic Education Mission, Rabi Allah Founder, From Learning to Living Islam"
        path="/about"
      />
      <JsonLd data={aboutData} />
      <div className="relative overflow-hidden bg-primary-900 py-20 text-center text-white">
        <img
          src={asset('/images/lantern.jpg')}
          alt="Islamic lantern"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-950/85" />
        <div className="pattern-overlay animate-pattern-drift absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">About Rabi Allah</h1>
          <p className="mt-4 text-lg text-primary-100">
            Our vision, mission, and the values that guide every class we teach.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Vision and Mission */}
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
              <Target className="h-6 w-6 text-primary-700" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">Our Vision</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              To cultivate a global community of Muslims who live Islam with
              confidence, compassion, and clarity—transforming knowledge into action
              and faith into character.
            </p>
          </div>
          <div className="card">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100">
              <Compass className="h-6 w-6 text-gold-700" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Rabi Allah Islamic Academy provides authentic, accessible Islamic
              education that blends classical sources with contemporary methods. We
              nurture students spiritually, academically, and morally so they can
              serve their families and communities with excellence.
            </p>
          </div>
        </div>

        {/* The Rabi Allah Way */}
        <div className="mt-20">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
              <Sparkles className="h-6 w-6 text-primary-700" />
            </div>
            <h2 className="mt-6 section-title">The Rabi Allah Way</h2>
            <p className="mt-4 mx-auto max-w-3xl section-subtitle">
              Our methodology is simple but profound: start with sincerity, build
              on authentic knowledge, and grow through consistent practice.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Sincerity (Ikhlas)', desc: 'Every lesson begins with the intention to seek Allah’s pleasure.' },
              { title: 'Authentic Sources', desc: 'Qur’an and authentic Sunnah are the foundation of our teaching.' },
              { title: 'Contemporary Application', desc: 'Lessons are connected to the real questions of modern life.' },
              { title: 'Community & Service', desc: 'Students are encouraged to learn, serve, and uplift others.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose */}
        <div className="mt-20 rounded-3xl bg-primary-50 p-8 sm:p-12">
          <h2 className="section-title text-center">Why Choose Rabi Allah?</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Islamic Foundation</h3>
              <p className="mt-2 text-slate-600">
                The curriculum isn’t just about academic learning; it’s deeply rooted
                in Islamic teachings. We provide a well-rounded education that
                includes in-depth study of the Qur’an, Sunnah, and the life of the
                Prophet Muhammad (PBUH).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Living Faith</h3>
              <p className="mt-2 text-slate-600">
                This foundation helps students apply Islamic principles to
                contemporary issues, making their faith a living, breathing part of
                their everyday lives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Skilled Faculty</h3>
              <p className="mt-2 text-slate-600">
                Our teachers are skilled in their disciplines and guide students as
                both educators and mentors, walking with them throughout their
                journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Flexible & Accessible</h3>
              <p className="mt-2 text-slate-600">
                With online classes available 24/7, students from anywhere in the
                world can learn at their own pace and schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Founder */}
        <div className="mt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary-100 via-gold-100 to-primary-50" />
              <img
                src={asset('/images/founder.jpg')}
                alt="Founder of Rabi Allah Islamic Academy"
                className="relative w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100">
                <User className="h-6 w-6 text-gold-700" />
              </div>
              <h2 className="mt-6 section-title">A Word from the Founder</h2>
              <blockquote className="mt-6 border-l-4 border-gold-400 pl-5 text-lg font-serif italic text-slate-800">
                “Knowledge is not what we collect — it is what we become. Rabi Allah
                exists so that every verse you learn changes the way you live.”
              </blockquote>
              <p className="mt-6 text-slate-600 leading-relaxed">
                I founded Rabi Allah Islamic Academy after seeing how many Muslims love
                the Qur’an yet never find a teacher who fits their language, their
                timezone, or their pace. So we built the academy around the student:
                one-to-one classes, patient teachers, and a curriculum drawn straight
                from the Qur’an and the authentic Sunnah.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our promise is simple. You will not just read Arabic letters — you will
                understand what your Lord is saying to you, and you will carry it into
                your prayer, your home, and your character. Whether you are five or
                fifty, beginning your first Surah or your first year as a Muslim, there
                is a place for you here.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                The Prophet (ﷺ) said: “The best of you are those who learn the Qur’an
                and teach it.” Every class we open is an attempt to stand somewhere in
                that hadith — and to help you do the same.
              </p>
            </div>
          </div>
        </div>

        {/* Teachers */}
        <div className="relative mt-24 overflow-hidden rounded-3xl bg-primary-900 px-6 py-16 sm:px-10">
          <div className="pattern-overlay animate-pattern-drift absolute inset-0 opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/60 via-transparent to-primary-950/60" />
          <div className="relative">
            <div className="text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold-300">Our Faculty</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Well Qualified Teachers</h2>
              <p className="mt-4 mx-auto max-w-3xl text-lg text-primary-100">
                Professional, patient, and committed — two female and two male qualified
                teachers helping every student progress in their Islamic journey.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.name}
                  className="rounded-2xl border border-white/15 bg-white/95 p-6 text-center shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-gold-300/70">
                    <img
                      src={asset(teacher.image)}
                      alt={`Islamic art representing ${teacher.subject}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{teacher.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary-700">{teacher.subject}</p>
                  <p className="mt-3 text-sm text-slate-600">{teacher.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
