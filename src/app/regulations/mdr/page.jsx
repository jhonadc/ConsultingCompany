// src/app/regulations/mdr/page.jsx
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import MdrContent from './mdr.mdx'

export const metadata = {
  title: 'Medical Device Regulation (MDR) – Conforma Studio',
  description: 'EU’s MDR framework for safety and performance of medical devices.',
}

export default function MdrPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro title="Medical Device Regulation (MDR)" />
      <article className="prose mx-auto mt-8 prose-neutral">
        <MdrContent />
      </article>
    </Container>
  )
}
