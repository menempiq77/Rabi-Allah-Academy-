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

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/ar/articles" element={<Articles lang="ar" />} />
          <Route path="/ar/articles/:slug" element={<ArticleDetail lang="ar" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
