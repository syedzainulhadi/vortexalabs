import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import { services } from '../data/services'

const service = services.find((s) => s.slug === 'website-development')

export default function ServiceWebsiteDevelopment() {
  return (
    <PageTransition>
      <SEO
        title="Website Development | Vortexa Labs"
        description="Business, portfolio, restaurant and e-commerce websites built fast, responsive and SEO-friendly by Vortexa Labs."
      />
      <ServiceDetailLayout service={service} />
    </PageTransition>
  )
}