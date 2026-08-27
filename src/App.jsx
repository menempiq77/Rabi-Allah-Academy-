import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'
import { LanguageProvider } from './i18n'

function LocalizedSite({ lang }) {
  return (
    <LanguageProvider lang={lang}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:slug" element={<CourseDetail />} />
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:slug" element={<ArticleDetail />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LanguageProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/ar/*" element={<LocalizedSite lang="ar" />} />
      <Route path="/*" element={<LocalizedSite lang="en" />} />
    </Routes>
  )
}

export default App
