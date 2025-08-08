import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import GdprContent from './gdpr.mdx'

export const metadata = {
  title: 'GDPR – Conforma Studio',
  description: 'EU’s General Data Protection Regulation — protecting personal data since 2018.',
}

export default function GdprPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="border-t-4 border-blue-200 pt-6">
        <SectionIntro title="GDPR" />
        <article className="prose mx-auto mt-8 prose-neutral">
          <GdprContent />
        </article>
      </div>
    </Container>
  )
}
