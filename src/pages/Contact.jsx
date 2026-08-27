import { Mail, MapPin, Clock, Facebook, Instagram, ArrowRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import JsonLd from '../components/JsonLd'
import { courses } from '../data/courses'
import { asset } from '../lib/asset'
import { WHATSAPP_DISPLAY, whatsappUrl } from '../lib/whatsapp'

export default function Contact() {
  const contactData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Rabi Allah Islamic Academy',
    url: 'https://rabiallah.com/contact',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Rabi Allah Islamic Academy',
      email: 'Menempiq123@gmail.com',
      telephone: '+201158967213',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'Menempiq123@gmail.com',
        telephone: '+201158967213',
        contactType: 'enrollment',
        availableLanguage: ['English', 'Arabic'],
      },
    },
  }

  return (
    <>
      <SEO
        title="Contact Rabi Allah Academy | Enroll Today"
        description="Contact Rabi Allah Islamic Academy for enrollment in Classic Arabic, Tarbiyah, and Islam for New Muslims courses. Email: Menempiq123@gmail.com. Available 24/7 online."
        keywords="Contact Rabi Allah, Enroll Islamic Course, Islamic Academy Contact, Online Islamic Classes, New Muslims Course Enrollment"
        path="/contact"
      />
      <JsonLd data={contactData} />
      <div className="bg-primary-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-serif">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-100">
            Ready to begin your journey? Reach out to Rabi Allah Academy today.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you have a question about a course, want to enroll, or simply
              want to learn more about Rabi Allah Islamic Academy, we are here to
              help. Send us an email or message us directly and we will respond as soon
              as possible.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <MessageCircle className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                  <a
                    href={whatsappUrl()}
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
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a
                    href="mailto:Menempiq123@gmail.com"
                    className="text-slate-600 hover:text-primary-700"
                  >
                    Menempiq123@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <MapPin className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="text-slate-600">Online Worldwide</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                  <Clock className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Hours</h3>
                  <p className="text-slate-600">24 / 7</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-slate-900">Follow Us</h3>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/RabiAllah2"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a
                  href="https://www.instagram.com/rabiallah_1/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> Message us on WhatsApp
                </a>
              </div>
            </div>

            <div className="mt-10">
              <img
                src={asset('/images/contact-arches.jpg')}
                alt="Arches of a historic mosque"
                className="aspect-[16/9] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900">Send a Message</h2>
            <p className="mt-2 text-slate-600">Fill out the form below and we will get back to you shortly.</p>
            <form
              action="mailto:Menempiq123@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-slate-700">
                  Interested Course
                </label>
                <select
                  name="course"
                  id="course"
                  className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Select a course</option>
                  {courses.map((course) => (
                    <option key={course.slug} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message
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
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
