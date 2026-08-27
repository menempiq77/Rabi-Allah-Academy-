import { Facebook, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '../lib/whatsapp'

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://www.facebook.com/RabiAllah2"
        target="_blank"
        rel="noreferrer"
        aria-label="Follow us on Facebook"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition hover:scale-105"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Apply on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
