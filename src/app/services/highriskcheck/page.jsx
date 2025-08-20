// app/services/high-risk-assessment/page.jsx
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Border } from '@/components/Border'
import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  QueueListIcon,
  DocumentMagnifyingGlassIcon,
  BoltIcon,
} from '@heroicons/react/20/solid'
import { BookingForm } from '@/components/BookingForm'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'

export const metadata = {
  title: 'High-Risk AI System Assessment — Conforma Studio',
  description:
    'Defensible EU AI Act risk classification for your AI systems. Regulator-ready assessment document plus next steps if high-risk. Avoid misclassification, delays, and fines.',
}

export default function HighRiskAssessmentPage() {
  return (
    <>
      <Container className="mt-15">
        <FadeIn className="mx-auto max-w-6xl">
          <a
            href="/regulations/aiact" /* change if your AI Act route differs */
            className="group inline-flex items-center gap-2 rounded-full border-2 border-indigo-400 px-4 py-2 text-sm  text-indigo-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200"
          >
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-current text-current transition-transform duration-200 group-hover:-translate-x-0.5"
            >
              ←
            </span>
            <span>Back to AI Act</span>
          </a>
        </FadeIn>
      </Container>
      {/* HERO (compact, no buttons) */}
      <Container className="mt-5 sm:mt-8 lg:mt-10">
        <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20 text-white">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              High-Risk AI System Assessment
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-200">
              Your first step to full EU AI Act compliance
            </p>
            <p className="mt-5 text-md sm:text-base text-neutral-300">
              Every AI system must be classified. We deliver a clear, defensible risk assessment for each model or
              system—plus concrete next steps if it is high-risk—so you avoid misclassification, delays, and fines.
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* WHY THIS MATTERS → Fact strip */}
      <Container className="mt-24">
        <Border />
        <FadeIn className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">Why this matters</h2>

          <RegulationsFactStrip
            facts={[
              {
                color: '#10B981', // emerald-500
                title: 'Classification is mandatory',
                value: 'Required by the AI Act',
                description:
                  'Every system must be assessed; classification dictates all downstream obligations.',
              },
              {
                color: '#6366F1', // indigo-500
                title: 'Misclassification is expensive',
                value: 'Delays & procurement friction',
                description:
                  'Wrong tier leads to wrong controls and potential market withdrawal.',
              },
              {
                color: '#F59E0B', // amber-500
                title: 'Penalty exposure',
                value: 'Avoid enforcement risk',
                description:
                  'Get the decision and evidence right early to avoid revenue-scaled fines.',
              },
            ]}
          />
        </FadeIn>
      </Container>

      {/* WHY CONFORMA → clean icon grid with subtle color pills */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <SectionIntro eyebrow="Why this assessment" title="Why Conforma Studio">
            <p className="mx-auto max-w-3xl">
              Led by a lawyer and software engineer, with documentation you can show to procurement, auditors, and regulators.
            </p>
          </SectionIntro>

          <div className="mx-auto mt-8 max-w-3xl lg:mt-12 lg:max-w-6xl">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Law × Engineering',
                  desc: 'We match regulatory definitions to real architectures, data flows, and model behavior.',
                  Icon: ClipboardDocumentCheckIcon,
                  color: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
                },
                {
                  name: 'Defensible outcomes',
                  desc: 'Clear reasoning, Annex references, and evidence links you can show.',
                  Icon: ShieldCheckIcon,
                  color: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
                },
                {
                  name: 'Precision',
                  desc: 'Borderline cases handled. We flag gray areas and reclassification risks early.',
                  Icon: DocumentMagnifyingGlassIcon,
                  color: 'bg-amber-50 text-amber-600 ring-amber-100',
                },
                {
                  name: 'Speed',
                  desc: 'Focused intake, fast iteration, final document ready for procurement and compliance.',
                  Icon: BoltIcon,
                  color: 'bg-blue-50 text-blue-600 ring-blue-100',
                },
                {
                  name: 'Roadmap',
                  desc: 'A practical action plan covering documentation, risk management, testing, and notified-body path.',
                  Icon: QueueListIcon,
                  color: 'bg-pink-50 text-pink-600 ring-pink-100',
                },
              ].map(({ name, desc, Icon, color }) => (
                <li
                  key={name}
                  className="group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${color}`}>
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">{name}</h3>
                      <p className="mt-1 text-sm text-neutral-700">{desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>

      {/* WHAT YOU GET → matches icon list design with color pills */}
      <Container id="deliverables" className="mt-24 sm:mt-32">
        <SectionIntro eyebrow="What you get" title="A professional, regulator-ready assessment">
          <p className="mx-auto max-w-3xl">
            A defensible classification with the legal basis, technical rationale, and evidence links—ready to live in
            your technical file and to answer procurement, auditors, and regulators.
          </p>
        </SectionIntro>

        <div className="mx-auto mt-10 max-w-3xl lg:mt-20 lg:max-w-6xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {[
              { name: 'Risk tier decision', desc: 'Clear classification aligned to AI Act scope and definitions.', Icon: ShieldCheckIcon, color: 'bg-emerald-50 text-emerald-600 ring-emerald-100' },
              { name: 'Annex mapping', desc: 'Traceable mapping against Annex III high-risk categories.', Icon: DocumentMagnifyingGlassIcon, color: 'bg-indigo-50 text-indigo-600 ring-indigo-100' },
              { name: 'Borderline analysis', desc: 'Flags reclassification hazards and dependency risks.', Icon: ExclamationTriangleIcon, color: 'bg-amber-50 text-amber-600 ring-amber-100' },
              { name: 'Evidence list', desc: 'Inputs reviewed, assumptions, and references you can show.', Icon: ClipboardDocumentCheckIcon, color: 'bg-blue-50 text-blue-600 ring-blue-100' },
              { name: 'Action plan', desc: 'If high-risk, stepwise obligations and owners.', Icon: QueueListIcon, color: 'bg-pink-50 text-pink-600 ring-pink-100' },
              { name: 'Time to value', desc: 'Fast turnaround from kickoff to signed deliverable.', Icon: BoltIcon, color: 'bg-purple-50 text-purple-600 ring-purple-100' },
            ].map(({ name, desc, Icon, color }) => (
              <div key={name} className="flex items-start gap-3">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${color}`}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-md font-semibold text-black">{name}</dt>
                  <dd className="mt-1 text-md text-neutral-700 leading-relaxed">{desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* PROCESS (ACCORDION) — matches syllabus accent design */}
      <Container className="mt-24 scroll-mt-28 sm:scroll-mt-32">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-3xl font-semibold text-neutral-950 mt-20">How it works</h2>

          <div className="mt-8 space-y-4">
            {[
              {
                title: 'Step 1 — Kickoff and scoping (30–45 min)',
                desc: 'We map purpose, users, data, model type, integrations, deployment, and markets served.',
                bullets: [
                  'Roles: provider, deployer, user, importer',
                  'Intended purpose and context of use',
                  'Architecture and data flow overview',
                ],
              },
              {
                title: 'Step 2 — Legal–technical analysis',
                desc: 'We test your facts against AI Act scope and Annex III categories; we assess borderline cases.',
                bullets: [
                  'Scope & exclusions screening',
                  'Annex III category tests',
                  'Reclassification risk flags',
                ],
              },
              {
                title: 'Step 3 — Assessment document (draft → final)',
                desc: 'You receive the full write-up with rationale and implications for obligations.',
                bullets: [
                  'Risk tier decision and reasoning',
                  'Evidence and assumptions list',
                  'Review session and edits',
                ],
              },
              {
                title: 'Step 4 — Next steps if high-risk',
                desc: 'A prioritized roadmap aligned to the Act’s obligations and your delivery plan.',
                bullets: [
                  'Technical documentation (Annex IV)',
                  'Risk management, testing, post-market',
                  'Notified body & conformity path',
                ],
              },
            ].map(({ title, desc, bullets }, idx) => {
              const colors = [
                { border: 'border-emerald-500', dot: 'before:bg-emerald-500', ring: 'group-open:ring-emerald-500/15' },
                { border: 'border-indigo-500', dot: 'before:bg-indigo-500', ring: 'group-open:ring-indigo-500/15' },
                { border: 'border-amber-500', dot: 'before:bg-amber-500', ring: 'group-open:ring-amber-500/15' },
                { border: 'border-rose-500', dot: 'before:bg-rose-500', ring: 'group-open:ring-rose-500/15' },
              ]
              const { border, dot, ring } = colors[idx % colors.length]

              return (
                <details
                  key={title}
                  className={`group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm open:ring-neutral-900/10 ${ring} border-l-2 ${border}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span
                      className={`relative pl-3 font-medium text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded ${dot}`}
                    >
                      {title}
                    </span>
                    <svg
                      className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.92 1.18l-4.17 3.3a.75.75 0 01-.92 0l-4.17-3.3a.75.75 0 01-.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>

                  <div className="mt-3 grid gap-3 text-md text-neutral-700 md:grid-cols-2">
                    <p>{desc}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              )
            })}
          </div>
        </FadeIn>
      </Container>

      {/* CTA (match literacy: link to /contact) */}
      <Container className="mt-32">
        <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold">Avoid the million-euro mistake.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              Get a defensible classification and a practical roadmap if your system is high-risk. Built by a lawyer and
              software engineer, ready for procurement and regulators.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Request assessment
            </a>
          </div>
        </div>
      </Container>

      <BookingForm />
    </>
  )
}
