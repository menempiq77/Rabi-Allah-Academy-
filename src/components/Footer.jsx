import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="Rabi Allah Islamic Academy logo"
                className="h-8 w-auto"
              />
              <h3 className="text-lg font-serif font-bold text-slate-900">
                Rabi Allah Islamic Academy
              </h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              From Learning to Living Islam. Enriching knowledge and appreciation
              of Islam through a curriculum grounded in the Qur’an and Sunnah.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="https://www.facebook.com/RabiAllah2"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-primary-700"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/rabiallah_1/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-primary-700"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-primary-700">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-700">About</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-700">Courses</Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-primary-700">Articles</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-700">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary-700" />
                <span>Online (worldwide)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary-700" />
                <span>24 / 7 availability</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary-700" />
                <a
                  href="mailto:Menempiq123@gmail.com"
                  className="hover:text-primary-700"
                >
                  Menempiq123@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>Designed by Rabi Allah &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
