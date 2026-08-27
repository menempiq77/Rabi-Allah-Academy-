import { X, CheckCircle, MessageCircle } from 'lucide-react'
import { localize } from '../lib/article'
import { whatsappUrl } from '../lib/whatsapp'
import { useLang, useT } from '../i18n'

export default function CourseModal({ course, onClose }) {
  const lang = useLang()
  const t = useT()
  if (!course) return null
  const content = localize(course, lang)
  const Icon = course.icon
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm" onClick={onClose}><div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8" onClick={(e) => e.stopPropagation()}><button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label={t('courseModal.close')}><X className="h-5 w-5" /></button><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100"><Icon className="h-6 w-6 text-primary-700" /></div><div><h2 className="font-serif text-2xl font-bold text-slate-900">{content.title}</h2><p className="text-sm font-semibold text-primary-700">{content.price}</p></div></div><p className="mt-6 leading-relaxed text-slate-700">{content.description}</p><div className="mt-6"><h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{t('courseModal.whatLearn')}</h3><ul className="mt-3 space-y-2">{content.whatYouWillLearn.map((item) => <li key={item} className="flex items-start gap-2 text-slate-600"><CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />{item}</li>)}</ul></div><div className="mt-6 grid gap-6 sm:grid-cols-2"><div><h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{t('courseModal.whoFor')}</h3><ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">{content.whoIsItFor.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{t('courseModal.format')}</h3><p className="mt-3 text-slate-600">{content.format}</p></div></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={whatsappUrl(content.title, lang)} target="_blank" rel="noreferrer" onClick={onClose} className="btn-primary flex-1 text-center"><MessageCircle className="mr-2 inline h-4 w-4" />{t('courseModal.applyWhatsApp')}</a><button onClick={onClose} className="btn-secondary flex-1 border-slate-200 text-slate-700 hover:bg-slate-50">{t('courseModal.close')}</button></div></div></div>
}
