import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav/Nav.tsx'
import Blog from './components/Pages/Blog.tsx'
import Home from './components/Pages/Home.tsx'
import Title from './components/Reusable/Title.tsx'
import Projects from './components/Pages/Projects.tsx'
import Newsletter from './components/Pages/Newsletter.tsx'
import Footer from './components/Footer/Footer.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <div className="flex flex-col justify-between min-h-screen">
    <div className="flex flex-col gap-[32px]">
        <Nav />
        <Title />
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
        <Route path="newsletter" element={<Newsletter />} />
    </Routes>
    <Footer />
    </div>
    </BrowserRouter>
)
