import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import { services } from '../data/services'

const service = services.find((s) => s.slug === 'digital-marketing')

export default function ServiceDigitalMarketing() {
  return (
    <PageTransition>
      <SEO
        title="Digital Marketing | Vortexa Labs"
        description="Social media marketing, SEO, content marketing and Google Ads management from Vortexa Labs."
      />
      <ServiceDetailLayout service={service} />
    </PageTransition>
  )
}