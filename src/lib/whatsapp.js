export const WHATSAPP_NUMBER = '201158967213'
export const WHATSAPP_DISPLAY = '+20 115 896 7213'

const GENERAL_MESSAGE =
  'Assalamu Alaikum, I am interested to apply to a course at Rabi Allah Islamic Academy. Please could you give me more details?'

export function whatsappMessage(courseTitle) {
  if (!courseTitle) return GENERAL_MESSAGE
  return `Assalamu Alaikum, I am interested to apply to this course: ${courseTitle}. Please could you give me more details?`
}

export function whatsappUrl(courseTitle) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage(courseTitle))}`
}
