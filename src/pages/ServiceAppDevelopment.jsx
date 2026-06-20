import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import { services } from '../data/services'

const service = services.find((s) => s.slug === 'app-development')

export default function ServiceAppDevelopment() {
  return (
    <PageTransition>
      <SEO
        title="Mobile App Development | Vortexa Labs"
        description="Android, iOS and cross-platform mobile app development from Vortexa Labs."
      />
      <ServiceDetailLayout service={service} />
    </PageTransition>
  )
}