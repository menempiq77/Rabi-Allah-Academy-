export const WHATSAPP_NUMBER = '201158967213'
export const WHATSAPP_DISPLAY = '+20 115 896 7213'

const GENERAL_MESSAGE =
  'Assalamu Alaikum, I am interested to apply to a course at Rabi Allah Islamic Academy. Please could you give me more details?'
const GENERAL_MESSAGE_AR =
  'السلام عليكم، أرغب في التقديم على إحدى الدورات في أكاديمية ربي الله. هل يمكن أن تعطوني مزيدًا من التفاصيل؟'

export function whatsappMessage(courseTitle, lang = 'en') {
  if (lang === 'ar') {
    if (!courseTitle) return GENERAL_MESSAGE_AR
    return `السلام عليكم، أرغب في التقديم على هذه الدورة: ${courseTitle}. هل يمكن أن تعطوني مزيدًا من التفاصيل؟`
  }
  if (!courseTitle) return GENERAL_MESSAGE
  return `Assalamu Alaikum, I am interested to apply to this course: ${courseTitle}. Please could you give me more details?`
}

export function whatsappUrl(courseTitle, lang = 'en') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage(courseTitle, lang))}`
}
