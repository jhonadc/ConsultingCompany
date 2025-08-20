

// app/regulations/ai-act/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import { BookingForm } from '@/components/BookingForm'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import { ColorDivider } from '@/components/ColorDivider'
import JhonathanPhoto from '@/images/JhonathanPhoto.jpg'
import Image from 'next/image'

export const metadata = {
  title: 'EU AI Act — AmeCari Compliance',
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

export function OurProcess() {
  return (
    <>
      <SectionIntro
        eyebrow="How we work"
        title="Turning complex EU rules into clear competitive advantage"
        className="mt-24 sm:mt-10 lg:mt-40"
      >
        <p>
          Compliance should enable growth. We align legal, technical, and product teams
          to reduce risk and unlock speed
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          {/* Image column (unchanged) */}
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>

          {/* List column (updated items only) */}
          <ul role="list" className="mt-16 space-y-12 lg:mt-0 lg:w-1/2 lg:pl-4">


            {/* Assess */}
            <li>
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                Assess
              </h3>
              <p className="mt-2 text-neutral-600">
                We map business model, risk appetite, data flows, and AI use cases to pinpoint
                obligations (AI Act, GDPR, sector rules) and surface quick wins vs. critical gaps.
                You get a concise findings brief and a prioritised plan with effort/impact/timelines.
              </p>
              <ColorDivider
                primaryClass="bg-blue-700"
                secondaryClass="bg-blue-200"
                primaryWidth="w-16"
              />
            </li>

            {/* Implement */}
            <li>
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                Implement
              </h3>
              <p className="mt-2 text-neutral-600">
                We co-create the controls that matter: AI policy, risk &amp; human oversight,
                privacy by design, vendor governance, and approvals—plus an ISO/IEC 42001-aligned
                AI Management System, Annex IV technical documentation, DPIAs, and RoPA where needed.
              </p>
              <ColorDivider
                primaryClass="bg-pink-500"
                secondaryClass="bg-pink-200"
              />
            </li>

            {/* Sustain */}
            <li>
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                Sustain
              </h3>
              <p className="mt-2 text-neutral-600">
                Before go-live we validate controls, align owners, and set KPIs. We run tabletop
                exercises, verify human-in-the-loop, and check transfer/vendor safeguards end-to-end.
                Handover includes an audit-ready pack and a pragmatic maintenance cadence.
              </p>
              <ColorDivider
                primaryClass="bg-emerald-700"
                secondaryClass="bg-emerald-200"
              />
            </li>

            {/* Link to detailed process */}
            <li className="pt-2">
              <Link
                href="/process"
                className="inline-flex items-center gap-1 text-md font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                aria-label="View detailed process"
              >
                View detailed process →
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  )
}

export function SpotlightTestimonial() {
  return (
    <section className="relative">
      <div className="bg-neutral-950">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-2">
            {/* Portrait */}
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10">
              <Image
                src={JhonathanPhoto}
                alt="Jhonathan Campos"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Quote + meta */}
            <div className="text-neutral-100">
              <p className="mt-4 text-[17px] md:text-[18px] leading-light font-normal">
                AI Governance Specialist with a unique dual background as a Lawyer
                and Software Engineer. My mission is to empower companies and
                research institutions worldwide to confidently navigate the
                complex landscape of regulatory compliance.
                <br /><br />
                With deep expertise in the AI Act, GDPR, ePrivacy Directive,
                ISO&nbsp;42001, and Medical Device Regulation, I create compliance
                frameworks that not only meet legal requirements but also drive
                innovation and growth.
                <br /><br />
                My multidisciplinary approach allows me to translate complex
                regulations into actionable strategies, design and implement
                compliance programs that mitigate risks, and ensure organizations
                remain compliant and competitive—while fostering seamless
                collaboration between legal and technical teams.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white">Jhonathan Campos</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Founder — AI Governance Specialist, Lawyer &amp; Software Engineer
                  </p>
                </div>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/jhonathanadc" // <-- troque pelo seu link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-neutral-100 transition hover:border-white/40 hover:bg-white/5"
                  aria-label="View LinkedIn profile"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5ZM3 8.98h3.95V21H3V8.98ZM9.5 8.98H13v1.64h.05c.48-.86 1.66-1.77 3.42-1.77 3.66 0 4.34 2.1 4.34 4.83V21H16.8v-5.35c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H9.5V8.98Z" />
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}


export default function AiActPage() {
  return (
    <Container className=" sm:mt-10 lg:mt-10">
      <BackButton />

      <div className="border-t-4 border-purple-500 pt-6">
        {/* Header */}
        <SectionIntro title="EU AI Act">
          <p className='text-md'>
            The world’s first AI regulation, setting rules for the design, development,
            and deployment of AI systems across the EU.
          </p>
        </SectionIntro>
        <RegulationsFactStrip facts={facts} />

        {/* What we offer — understated tinted cards with curved left accent + color-matched arrow chip */}
        <Container className="mt-10">
          <FadeIn className="mt-5 mx-auto max-w-6xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950">
              What we offer
            </h2>
            <p className="mt-3 text-md text-neutral-600">
              Targeted, high-impact services to get you compliant fast.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                {
                  href: '/services/ai-literacy',
                  label: 'AI Literacy Training',
                  tint: 'bg-purple-50',
                  ring: 'hover:ring-purple-200',
                  chip: 'text-purple-500 border-purple-500',
                  bar: 'border-purple-500',
                },
                {
                  href: '/services/highriskcheck',
                  label: 'Am I high-risk?',
                  tint: 'bg-amber-50',
                  ring: 'hover:ring-amber-200',
                  chip: 'text-amber-500 border-amber-500',
                  bar: 'border-amber-500',
                },
                {
                  href: '/services/ai-use-policy',
                  label: 'AI Use Policy',
                  tint: 'bg-emerald-50',
                  ring: 'hover:ring-emerald-200',
                  chip: 'text-emerald-500 border-emerald-500',
                  bar: 'border-emerald-500',
                },
              ].map(({ href, label, tint, ring, chip, bar }) => (
                <a
                  key={href}
                  href={href}
                  className={[
                    // base
                    'group relative flex items-center justify-between sm:justify-center text-left sm:text-center',
                    'rounded-3xl ring-1 ring-neutral-950/10 shadow-sm overflow-hidden',
                    'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
                    // compact mobile size; restore aspect on sm+
                    'h-24 px-4 py-4 sm:h-auto sm:aspect-[4/3] sm:px-6',
                    // surface
                    'bg-white',
                    // subtle tint layer
                    'after:pointer-events-none after:absolute after:inset-0',
                    `after:${tint} after:opacity-50 after:rounded-3xl`,
                    // curved left accent (follows rounded corners)
                    'border-l-2', bar,
                    // hover ring color
                    ring,
                    // focus
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10',
                  ].join(' ')}
                >
                  <span className="relative z-10 max-w-[75%] sm:max-w-none">
                    <span className="block font-display text-[15px] sm:text-xl font-semibold text-neutral-900">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm text-neutral-600 opacity-90 sm:mt-1">Learn more</span>
                  </span>

                  {/* color-matched outline arrow chip */}
                  <span
                    aria-hidden
                    className={[
                      'absolute bottom-3 right-3 z-10 inline-flex h-7 w-7 items-center justify-center',
                      'rounded-full border-2 bg-transparent',
                      'transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                      'sm:bottom-4 sm:right-4 sm:h-8 sm:w-8',
                      chip, // sets both border and arrow (via text color) to match the left bar
                    ].join(' ')}
                  >
                    ➔
                  </span>
                </a>
              ))}
            </div>
          </FadeIn>
        </Container>


        {/* Obligations */}
        <Container id="obligations" className="mt-20">
          <Border className="mt-2" />
          <FadeIn className="mt-12 mx-auto max-w-6xl">
            <h2 className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 mb-8
                   before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2
                   before:rounded before:bg-neutral-500/60">
              Obligations
            </h2>

            <ul className="space-y-8">
              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  AI system classification
                </h3>
                <p className="text-neutral-600 text-base">
                  Identify whether your AI system is prohibited, high-risk, limited-risk, or
                  minimal-risk, applying the Annex III criteria and relevant exemptions.
                </p>
                <div className="mt-2 h-px w-16 rounded bg-neutral-300">
                  <span className="block h-px w-10 rounded bg-purple-600/70" />
                </div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  High-risk system compliance
                </h3>
                <p className="text-neutral-600 text-base">
                  Implement and document risk management, data governance, transparency,
                  human oversight, and post-market monitoring measures as per Annex IV.
                </p>
                <div className="mt-2 h-px w-16 rounded bg-neutral-300">
                  <span className="block h-px w-10 rounded bg-amber-500/80" />
                </div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  General-purpose AI duties
                </h3>
                <p className="text-neutral-600 text-base">
                  Meet transparency, technical documentation, and model evaluation requirements
                  for general-purpose AI and foundation models.
                </p>
                <div className="mt-2 h-px w-16 rounded bg-neutral-300">
                  <span className="block h-px w-10 rounded bg-indigo-600/80" />
                </div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Deployers’ responsibilities
                </h3>
                <p className="text-neutral-600 text-base">
                  Conduct conformity checks, maintain use logs, provide user instructions, and
                  monitor systems for compliance throughout their lifecycle.
                </p>
                <div className="mt-2 h-px w-16 rounded bg-neutral-300">
                  <span className="block h-px w-10 rounded bg-emerald-600/80" />
                </div>
              </li>

              <li>
                <p className="text-neutral-700 font-medium text-base">
                  And more, depending on role and risk tier
                </p>
              </li>
            </ul>
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
              ].map(({ k, v }, idx) => {
                const colors = [
                  { border: 'border-emerald-500', dot: 'before:bg-emerald-500', ring: 'hover:ring-emerald-200' },
                  { border: 'border-indigo-500', dot: 'before:bg-indigo-500', ring: 'hover:ring-indigo-200' },
                  { border: 'border-amber-500', dot: 'before:bg-amber-500', ring: 'hover:ring-amber-200' },
                ]
                const { border, dot, ring } = colors[idx % colors.length]

                return (
                  <div
                    key={k}
                    className={`rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm text-left border-l-2 ${border} ${ring} transition`}
                  >
                    <p
                      className={`relative pl-3 text-sm font-semibold text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded ${dot}`}
                    >
                      {k}
                    </p>
                    <p className="mt-1 text-sm text-neutral-700">{v}</p>
                  </div>
                )
              })}
            </div>
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
        <OurProcess />




        <BookingForm />


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




        {/* Partnership note */}
        <Container className="mt-12">
          <FadeIn className="mx-auto max-w-4xl text-neutral-700 text-sm">
            We are partnering with leaders in <strong>xAI</strong> to deliver a complete AI Act
            applicability and readiness programme. Details will be announced here as soon as they are ready.
          </FadeIn>
        </Container>


      </div>
    </Container>
  )
}