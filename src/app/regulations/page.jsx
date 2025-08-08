// src/app/regulations/page.jsx
import Link from 'next/link'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'

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
    description: 'Markets in Crypto-Assets Regulation for EU-wide digital-asset compliance.',
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

      <Container className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {regulations.map((reg) => {
            const hoverRing =
              reg.slug === 'aiact' ? 'hover:ring-purple-500' :
              reg.slug === 'gdpr'  ? 'hover:ring-blue-500'   :
              reg.slug === 'micar' ? 'hover:ring-amber-700' :
                                     'hover:ring-green-500'

            return (
              <Link
                key={reg.slug}
                href={`/regulations/${reg.slug}`}
                className={`
                  group
                  block
                  aspect-square
                  rounded-2xl
                  bg-white
                  ring-1 ring-neutral-950/10
                  shadow-sm
                  flex flex-col justify-center items-center
                  p-6 text-center
                  transition
                  ${hoverRing}
                `}
              >
                <h4 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-800">
                  {reg.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-600 hidden sm:block">
                  {reg.description}
                </p>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
}
