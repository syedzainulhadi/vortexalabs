import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/layout/PageTransition'
import SEO from '../components/layout/SEO'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found | Vortexa Labs" description="The page you're looking for doesn't exist." />
      <section className="pt-44 pb-32 text-center">
        <Container>
          <p className="font-mono text-7xl md:text-8xl text-ink-faint tracking-tight">404</p>
          <h1 className="font-heading font-semibold text-2xl text-ink mt-4 mb-3">Page not found</h1>
          <p className="text-ink-muted mb-10 max-w-md mx-auto">
            The page you're looking for may have been moved or doesn't exist.
          </p>
          <div className="flex justify-center">
            <Button to="/" variant="primary" icon={ArrowLeft}>
              Back to home
            </Button>
          </div>
        </Container>
      </section>
    </PageTransition>
  )
}