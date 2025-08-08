// src/app/regulations/gdpr/page.jsx
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
      <SectionIntro title="GDPR" />
      <article className="prose mx-auto mt-8 prose-neutral">
        <GdprContent />
      </article>
    </Container>
  )
}
