// src/app/regulations/page.jsx
import Link from 'next/link'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'

const regulations = [
  { title: 'AI Act', slug: 'aiact', description: 'Europe’s groundbreaking regulation for trustworthy AI systems.' },
  { title: 'GDPR', slug: 'gdpr', description: 'EU’s General Data Protection Regulation — protecting personal data since 2018.' },
  { title: 'LGPD', slug: 'lgpd', description: 'Brazil’s General Data Protection Regulation.' },
  { title: 'EU Accessibility Act', slug: 'accessibility', description: 'Ensuring digital products and services are accessible to all EU users by 2025.' },
  { title: 'Data Act', slug: 'dataact', description: 'Regulating data access, sharing, and contractual frameworks across the EU.' },
]

// Color map for each regulation slug
const REG_COLORS = {
  gdpr: { border: 'border-blue-500', hover: 'hover:ring-blue-400' },
  aiact: { border: 'border-purple-500', hover: 'hover:ring-purple-500' },
  lgpd: { border: 'border-emerald-500', hover: 'hover:ring-emerald-500' },
  accessibility: { border: 'border-fuchsia-500', hover: 'hover:ring-fuchsia-500' },
  dataact: { border: 'border-amber-500', hover: 'hover:ring-amber-500' },
}

const fallback = { border: 'border-neutral-300', hover: 'hover:ring-neutral-300' }

export default function RegulationsIndex() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Regulations"
        title="EU Rules We Specialize In"
      >
        <p>
          Dive into each regulation to see our methodology, tooling, and tailored guidance.
        </p>
      </SectionIntro>

      <Container className="mt-12">
        {/* Mobile: stacked pills */}
        <nav aria-label="Regulations" className="md:hidden flex flex-col gap-3 items-stretch">
          {regulations.map((reg) => {
            const colors = REG_COLORS[reg.slug] ?? fallback
            return (
              <Link
                key={reg.slug}
                href={`/regulations/${reg.slug}`}
                className={`group inline-flex items-center justify-between
                            w-full rounded-full border ${colors.border}
                            bg-white/80 px-5 py-3 text-sm text-neutral-700
                            shadow-sm backdrop-blur-sm transition-all duration-200
                            hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
              >
                <span>{reg.title}</span>
                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
              </Link>
            )
          })}
        </nav>

        {/* Desktop/tablet: cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6">
          {regulations.map((reg) => {
            const colors = REG_COLORS[reg.slug] ?? fallback
            return (
              <Link
                key={reg.slug}
                href={`/regulations/${reg.slug}`}
                className={`
                  group relative block aspect-square rounded-2xl bg-white
                  ring-1 ring-neutral-950/10 shadow-sm overflow-hidden
                  transition ${colors.hover}
                `}
              >
                {/* Absolute content fills the square */}
                <div className="absolute inset-0 flex flex-col p-6 text-left">
                  {/* Title pinned top-left */}
                  <h4 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-800 mb-3">
                    {reg.title}
                  </h4>

                  {/* Description centered in remaining space */}
                  <div className="flex-1 flex items-center">
                    <p className="text-sm text-neutral-600 line-clamp-3">
                      {reg.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
