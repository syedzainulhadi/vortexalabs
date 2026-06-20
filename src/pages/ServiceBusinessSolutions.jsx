import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import { services } from '../data/services'

const service = services.find((s) => s.slug === 'business-solutions')

export default function ServiceBusinessSolutions() {
  return (
    <PageTransition>
      <SEO
        title="Business Solutions | Vortexa Labs"
        description="Digital transformation, automation solutions and business management tools from Vortexa Labs."
      />
      <ServiceDetailLayout service={service} />
    </PageTransition>
  )
}