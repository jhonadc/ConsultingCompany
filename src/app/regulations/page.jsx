// src/app/regulations/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

const regulations = [
  {
    title: 'AI Act',
    slug: 'aiact',
    description: 'Europe’s groundbreaking regulation for trustworthy AI systems.',
  },
  {
    title: 'GDPR',
    slug: 'gdpr',
    description: 'EU’s General Data Protection Regulation — protecting personal data since 2018.',
  },
  {
    title: 'MiCAR',
    slug: 'micar',
    description: 'Markets in Crypto-Assets Regulation for EU-wide digital asset compliance.',
  },
  {
    title: 'Medical Device Regulation (MDR)',
    slug: 'mdr',
    description: 'EU’s MDR framework for safety and performance of medical devices.',
  },
]

export default function RegulationsIndex() {
  return (
    <>
      <SectionIntro
        eyebrow="Regulations"
        title="EU Rules We Specialize In"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Dive into each regulation to see our methodology, tooling, and tailored guidance.
        </p>
      </SectionIntro>

      <Container className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {regulations.map((reg) => (
          <Link
            key={reg.slug}
            href={`/regulations/${reg.slug}`}
            className="block rounded-3xl p-6 ring-1 ring-neutral-950/10 hover:bg-neutral-50"
          >
            <h3 className="font-display text-2xl font-semibold">{reg.title}</h3>
            <p className="mt-2 text-neutral-600">{reg.description}</p>
          </Link>
        ))}
      </Container>
    </>
  )
}
