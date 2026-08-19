import { Target, Compass, Sparkles, User } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'

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
      <div className="bg-primary-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
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
              <img
                src="/images/arabic.jpg"
                alt="Islamic education and learning"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100">
                <User className="h-6 w-6 text-gold-700" />
              </div>
              <h2 className="mt-6 section-title">The Founder</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Rabi Allah Islamic Academy was founded with a sincere desire to make
                authentic Islamic education accessible to all. The founder established
                Rabi Allah to bridge the gap between classical Islamic knowledge and the
                contemporary learner.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                With a heart for education and community upliftment, the academy was built
                on the belief that seeking knowledge is a noble path that draws a person
                closer to Allah and equips them to benefit others.
              </p>
            </div>
          </div>
        </div>

        {/* Teachers */}
        <div className="mt-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-700">Our Faculty</p>
            <h2 className="mt-2 section-title">Well Qualified Teachers</h2>
            <p className="mt-4 mx-auto max-w-3xl section-subtitle">
              Professional, patient, and committed — we have male and female qualified teachers — helping every student progress in their Islamic journey.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Ustadha Aisha',
                image: '/images/teacher1.jpg',
                subject: 'Qur’an, Tajweed & Arabic',
                bio: 'Experienced in teaching Quranic recitation, Tajweed rules, and Classical Arabic to students of all ages.',
              },
              {
                name: 'Ustadha Fatima',
                image: '/images/teacher2.jpg',
                subject: 'Islamic Studies & Tarbiyah',
                bio: 'Passionate about nurturing faith, character, and Islamic manners in children, youth, and adults.',
              },
              {
                name: 'Ustadha Maryam',
                image: '/images/teacher3.jpg',
                subject: 'New Muslims & Aqidah',
                bio: 'Welcoming and patient instructor guiding new Muslims through the foundations of faith and practice.',
              },
            ].map((teacher) => (
              <div key={teacher.name} className="card text-center overflow-hidden">
                <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                  <img
                    src={teacher.image}
                    alt={`${teacher.name}, ${teacher.subject}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{teacher.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary-700">{teacher.subject}</p>
                <p className="mt-3 text-slate-600">{teacher.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
