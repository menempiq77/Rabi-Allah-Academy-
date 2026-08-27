import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { asset } from '../lib/asset'
import { WHATSAPP_DISPLAY, whatsappUrl } from '../lib/whatsapp'
import { localePath, useLang, useT } from '../i18n'

export default function Footer() {
  const lang = useLang()
  const t = useT()
  const links = [['home', '/'], ['about', '/about'], ['courses', '/courses'], ['articles', '/articles'], ['contact', '/contact']]

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2"><img src={asset('/images/logo.png')} alt={t('footer.logoAlt')} className="h-8 w-auto" /><h3 className="text-lg font-serif font-bold text-slate-900">{t('footer.academyName')}</h3></div>
            <p className="mt-2 text-sm text-slate-600">{t('footer.tagline')}</p>
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/RabiAllah2" target="_blank" rel="noreferrer" aria-label={t('footer.facebook')} className="text-slate-400 hover:text-primary-700"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/rabiallah_1/" target="_blank" rel="noreferrer" aria-label={t('footer.instagram')} className="text-slate-400 hover:text-primary-700"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{t('footer.quickLinks')}</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">{links.map(([key, path]) => <li key={key}><Link to={localePath(lang, path)} className="hover:text-primary-700">{t(`nav.${key}`)}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{t('footer.contact')}</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary-700" /><span>{t('footer.onlineWorldwide')}</span></li>
              <li className="flex items-start gap-3"><Clock className="h-5 w-5 shrink-0 text-primary-700" /><span>{t('footer.availability')}</span></li>
              <li className="flex items-start gap-3"><MessageCircle className="h-5 w-5 shrink-0 text-primary-700" /><a href={whatsappUrl(undefined, lang)} target="_blank" rel="noreferrer" className="hover:text-primary-700">{WHATSAPP_DISPLAY}</a></li>
              <li className="flex items-start gap-3"><Mail className="h-5 w-5 shrink-0 text-primary-700" /><a href={`mailto:${t('footer.email')}`} className="hover:text-primary-700">{t('footer.email')}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500"><p>{t('footer.designedBy', { year: new Date().getFullYear() })}</p></div>
      </div>
    </footer>
  )
}
