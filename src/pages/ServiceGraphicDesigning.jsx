import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import ServiceDetailLayout from '../components/services/ServiceDetailLayout'
import { services } from '../data/services'

const service = services.find((s) => s.slug === 'graphic-designing')

export default function ServiceGraphicDesigning() {
  return (
    <PageTransition>
      <SEO
        title="Graphic Designing | Vortexa Labs"
        description="Logo design, branding material, social media creatives, posters and flyers from Vortexa Labs."
      />
      <ServiceDetailLayout service={service} />
    </PageTransition>
  )
}