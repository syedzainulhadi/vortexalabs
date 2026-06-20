import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Hero from '../components/home/Hero'
import MarqueeStrip from '../components/ui/MarqueeStrip'
import Stats from '../components/home/Stats'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Process from '../components/home/Process'
import Testimonials from '../components/home/Testimonials'
import FeaturedProjects from '../components/home/FeaturedProjects'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <PageTransition>
      <SEO
  title="Vortexa Labs | IT Consultancy and Digital Services Company"
  description="Vortexa Labs builds websites, mobile apps, digital marketing campaigns and business automation tools for businesses in Goa and beyond."
/>
      <Hero />
      <MarqueeStrip />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FeaturedProjects />
      <CTASection />
    </PageTransition>
  )
}