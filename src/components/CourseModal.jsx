import { Link } from 'react-router-dom'
import { X, CheckCircle } from 'lucide-react'

export default function CourseModal({ course, onClose }) {
  if (!course) return null
  const Icon = course.icon

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
            <Icon className="h-6 w-6 text-primary-700" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-serif">{course.title}</h2>
            <p className="text-sm font-semibold text-primary-700">{course.price}</p>
          </div>
        </div>

        <p className="mt-6 text-slate-700 leading-relaxed">{course.description}</p>

        <div className="mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">What You Will Learn</h3>
          <ul className="mt-3 space-y-2">
            {course.whatYouWillLearn.map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-600">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Who Is It For</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
              {course.whoIsItFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Format</h3>
            <p className="mt-3 text-slate-600">{course.format}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to={course.paid ? '/contact' : '/contact'}
            onClick={onClose}
            className="btn-primary flex-1 text-center"
          >
            {course.paid ? 'Book Your Free Trial' : 'Enroll for Free'}
          </Link>
          <button
            onClick={onClose}
            className="btn-secondary flex-1 border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
