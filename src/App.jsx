import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import CustomCursor from './components/layout/CustomCursor'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceWebsiteDevelopment from './pages/ServiceWebsiteDevelopment'
import ServiceAppDevelopment from './pages/ServiceAppDevelopment'
import ServiceDigitalMarketing from './pages/ServiceDigitalMarketing'
import ServiceGraphicDesigning from './pages/ServiceGraphicDesigning'
import ServiceBusinessSolutions from './pages/ServiceBusinessSolutions'
import Projects from './pages/Projects'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Quotation from './pages/Quotation'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  return (
    <div className="bg-bg min-h-screen flex flex-col">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/website-development" element={<ServiceWebsiteDevelopment />} />
            <Route path="/services/app-development" element={<ServiceAppDevelopment />} />
            <Route path="/services/digital-marketing" element={<ServiceDigitalMarketing />} />
            <Route path="/services/graphic-designing" element={<ServiceGraphicDesigning />} />
            <Route path="/services/business-solutions" element={<ServiceBusinessSolutions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App