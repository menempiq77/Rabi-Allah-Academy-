import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogIn, Menu, X } from 'lucide-react'
import { asset } from '../lib/asset'
import { LMS_URL } from '../lib/lms'
import { whatsappUrl } from '../lib/whatsapp'
import { localePath, useLang, useT } from '../i18n'

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'courses', path: '/courses' },
  { key: 'articles', path: '/articles' },
  { key: 'contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const lang = useLang()
  const t = useT()
  const switchPath = localePath(lang === 'ar' ? 'en' : 'ar', location.pathname)

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to={localePath(lang, '/')} className="flex items-center gap-3">
            <img src={asset('/images/logo.png')} alt={t('nav.logoAlt')} className="h-12 w-auto" onError={(e) => { e.target.style.display = 'none' }} />
            <span className="whitespace-nowrap text-xl font-serif font-bold text-slate-900">{t('nav.academyName')}</span>
          </Link>
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              const path = localePath(lang, link.path)
              return <Link key={link.key} to={path} className={`text-sm font-semibold transition ${location.pathname === path ? 'text-primary-700' : 'text-slate-600 hover:text-primary-700'}`}>{t(`nav.${link.key}`)}</Link>
            })}
            <Link to={switchPath} className="text-sm font-semibold text-primary-700 transition hover:text-primary-900">{t(lang === 'ar' ? 'nav.switchToEnglish' : 'nav.switchToArabic')}</Link>
            <a href={LMS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-primary-700"><LogIn className="h-4 w-4" />{t('nav.login')}</a>
            <a href={whatsappUrl(undefined, lang)} target="_blank" rel="noreferrer" className="btn-primary">{t('nav.applyWhatsApp')}</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden" aria-label={t(isOpen ? 'nav.closeMenu' : 'nav.openMenu')}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && <div className="md:hidden"><div className="space-y-1 border-t border-slate-200 bg-white px-4 pb-4 pt-2">
        {navLinks.map((link) => {
          const path = localePath(lang, link.path)
          return <Link key={link.key} to={path} onClick={() => setIsOpen(false)} className={`block rounded-md px-3 py-2 text-base font-medium ${location.pathname === path ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-100'}`}>{t(`nav.${link.key}`)}</Link>
        })}
        <Link to={switchPath} onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-primary-700 hover:bg-primary-50">{t(lang === 'ar' ? 'nav.switchToEnglish' : 'nav.switchToArabic')}</Link>
        <a href={LMS_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-md border border-primary-700 px-3 py-2 text-base font-medium text-primary-700 hover:bg-primary-50"><LogIn className="h-4 w-4" />{t('nav.login')}</a>
        <a href={whatsappUrl(undefined, lang)} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="mt-2 block rounded-md bg-primary-700 px-3 py-2 text-center text-base font-medium text-white hover:bg-primary-800">{t('nav.applyWhatsApp')}</a>
      </div></div>}
    </nav>
  )
}
