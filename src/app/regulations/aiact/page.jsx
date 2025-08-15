// app/regulations/ai-act/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'

export const metadata = {
  title: 'EU AI Act — Comforma Compliance',
  description:
    'Regulation (EU) — mandatory requirements for AI systems in the EU. Training, governance, and readiness checks for compliance.',
}

const facts = [
  {
    color: '#a855f7', // purple
    title: 'In application',
    value: 'Phased 2024–2026',
    description: 'High-risk requirements from mid-2026',
  },
  {
    color: '#f59e0b', // amber
    title: 'Who this affects',
    value: 'Providers, deployers, importers, distributors',
    description: 'Includes GPAI/foundation models & transparency duties',
  },
  {
    color: '#e11d48', // rose
    title: 'Enforcement & penalties',
    value: 'Up to €35M or 7% global turnover',
    description: 'Varies by infringement type and role',
  },
]

export default function AiActPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-20">
      <BackButton />

      <div className="border-t-4 border-purple-500 pt-6">
        {/* Header */}
        <SectionIntro title="EU AI Act">
          <p className='text-md'>
            The world’s first horizontal AI regulation, setting rules for the design, development,
            and deployment of AI systems across the EU.
          </p>
        </SectionIntro>
        <RegulationsFactStrip facts={facts} />


        {/* Obligations */}
        <Container className="mt-20">
          <Border />
          <FadeIn className="mt-6 max-w-5xl">
            <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
              Obligations
            </h2>
            <ul className="space-y-8">
              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  AI system classification
                </h3>
                <p className="text-neutral-600 text-sm">
                  Identify whether your AI system is prohibited, high-risk, limited-risk, or
                  minimal-risk, applying the Annex III criteria and relevant exemptions.
                </p>
                <div className="h-1 w-16 bg-purple-700 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  High-risk system compliance
                </h3>
                <p className="text-neutral-600 text-sm">
                  Implement and document risk management, data governance, transparency,
                  human oversight, and post-market monitoring measures as per Annex IV.
                </p>
                <div className="h-1 w-16 bg-amber-500 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  General-purpose AI duties
                </h3>
                <p className="text-neutral-600 text-sm">
                  Meet transparency, technical documentation, and model evaluation requirements
                  for general-purpose AI and foundation models.
                </p>
                <div className="h-1 w-16 bg-indigo-600 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Deployers’ responsibilities
                </h3>
                <p className="text-neutral-600 text-sm">
                  Conduct conformity checks, maintain use logs, provide user instructions, and
                  monitor systems for compliance throughout their lifecycle.
                </p>
                <div className="h-1 w-16 bg-green-600 mt-2"></div>
              </li>

              <li>
                <p className="text-neutral-600 font-bold text-md">And more, depending on role and risk tier</p>
              </li>
            </ul>
          </FadeIn>
        </Container>

        {/* What we offer — 3-col grid with hero nav style */}
        <Container className="mt-24">
          <FadeIn className="mt-6 mx-auto max-w-6xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
              What we offer
            </h2>
            <p className="mt-3 text-md text-neutral-600">
              Targeted, high-impact services to get you compliant fast.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: '/services/ai-literacy', label: 'AI Literacy Training', border: 'border-purple-500' },
                { href: '/services/highriskcheck', label: 'Am I high-risk?', border: 'border-amber-500' },
                { href: '/services/ai-use-policy', label: 'AI Use Policy', border: 'border-green-500' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group inline-flex items-center justify-between
                    w-full rounded-full border ${link.border}
                    bg-white/80 px-5 py-4 text-sm sm:text-[15px] text-neutral-700
                    shadow-sm backdrop-blur-sm transition-all duration-200
                    hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
                >
                  <span>{link.label}</span>
                  <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </Container>

        {/* Why now */}
        <Container className="mt-20">
          <FadeIn className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
              Why now
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  k: 'Early preparation advantage',
                  v: 'Build compliance into your roadmap now to avoid costly rework later.',
                },
                {
                  k: 'Market trust',
                  v: 'Clients and partners will expect AI Act compliance as a baseline.',
                },
                {
                  k: 'Avoid severe penalties',
                  v: 'Non-compliance risks significant fines and market exclusion.',
                },
              ].map(({ k, v }) => (
                <div key={k} className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm text-left">
                  <p className="text-sm font-semibold text-neutral-900">{k}</p>
                  <p className="mt-1 text-sm text-neutral-700">{v}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>

        {/* Partnership note */}
        <Container className="mt-12">
          <FadeIn className="mx-auto max-w-4xl text-neutral-700 text-sm">
            We are partnering with leaders in <strong>xAI</strong> to deliver a complete AI Act
            applicability and readiness programme. Details will be announced here as soon as they are ready.
          </FadeIn>
        </Container>

        {/* CTA */}
        <Container className="mt-28">
          <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12 text-center">
            <h2 className="font-display text-3xl font-semibold">Comply. Compete. Lead with AI you can trust.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              We design AI Act compliance programmes that fit your organisation and generate
              audit-ready proof you can stand behind.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Talk to us
            </Link>
          </div>
        </Container>
      </div>
    </Container>
  )
}
