import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import ServicesOverview from '../components/home/ServicesOverview'
import CTASection from '../components/home/CTASection'

export default function Services() {
  return (
    <PageTransition>
      <SEO
  title="Our Services | Vortexa Labs — IT Consultancy and Digital Services Company"
  description="Website development, mobile app development, digital marketing, graphic designing and business solutions from Vortexa Labs."
/>
      <ServicesOverview
        eyebrow="Our services"
        title="Everything your business needs to grow online"
        subtitle="Five connected capabilities — pick one to start, or combine them for a complete digital presence."
        sectionClassName="pt-40 pb-24 md:pb-32"
      />
      <CTASection />
    </PageTransition>
  )
}