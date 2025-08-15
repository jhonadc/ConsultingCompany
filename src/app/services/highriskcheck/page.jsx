
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

export const metadata = {
  title: 'High-Risk AI System Assessment — Conforma Studio',
  description:
    'Defensible EU AI Act risk classification for your AI systems. Regulator-ready assessment document plus next steps if high-risk. Avoid misclassification, delays, and fines.',
}

export default function HighRiskAssessmentPage() {
  return (
    <>
      {/* HERO */}
      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-16 sm:px-10 sm:py-24 lg:px-12 lg:py-28 text-white">
          <FadeIn className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">
              High-Risk AI System Assessment
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-200">
              Your first step to full EU AI Act compliance
            </p>
            <p className="mt-6 text-md sm:text-xl text-neutral-300">
              Every AI system must be classified. We deliver a clear, defensible risk assessment for each model or
              system—plus concrete next steps if it is high-risk—so you avoid misclassification, delays, and fines.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105 hover:shadow-md"
              >
                Request your assessment
              </a>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                See what you get
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* RISK & CONSEQUENCE STRIP */}
      <Container className="mt-24">
        <Border />
        <FadeIn className="mt-20">
          <h2 className="font-display text-2xl mt-12 font-semibold text-neutral-950">Why this matters</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900">Classification is mandatory</h3>
                <p className="mt-2 text-md text-neutral-700">
                  The AI Act requires every system to be assessed. Classification dictates all downstream obligations.
                </p>
              </div>
            </div>
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900">Misclassification is expensive</h3>
                <p className="mt-2 text-md text-neutral-700">
                  Wrong tier = wrong controls, delays, procurement friction, and potential market withdrawal.
                </p>
              </div>
            </div>
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900">Real penalty exposure</h3>
                <p className="mt-2 text-md text-neutral-700">
                  Avoid enforcement risk and revenue-scaled fines by getting classification and evidence right early.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* WHY US */}
      <Container className="mt-24 sm:mt-28">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mt-20 sm:text-3xl font-semibold text-neutral-950 text-center">
            Why Conforma Studio
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
            {/* Card 1 */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Law × Engineering</h3>
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                  Led by a Lawyer & Software Engineer
                </p>
                <p className="mt-3 text-base text-neutral-700">
                  We match regulatory definitions to real architectures, data flows, and model behavior.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Defensible outcomes</h3>
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                  Regulator-ready documentation
                </p>
                <p className="mt-3 text-base text-neutral-700">
                  Clear reasoning, Annex references, and evidence links you can show to auditors and enterprise buyers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Precision</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950">Borderline cases handled</p>
                <p className="mt-2 text-md text-neutral-700">
                  We flag gray areas and reclassification risks early to avoid costly pivots later.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Speed</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950">From kickoff to decision</p>
                <p className="mt-2 text-md text-neutral-700">
                  Focused intake, fast iteration, final document ready for procurement and compliance teams.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5" />
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Roadmap</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950">Next steps if high-risk</p>
                <p className="mt-2 text-md text-neutral-700">
                  A practical action plan covering documentation, risk management, testing, and notified-body path.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* WHAT YOU GET */}
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
              { name: 'Risk tier decision', desc: 'Clear classification aligned to AI Act scope and definitions.', Icon: ShieldCheckIcon },
              { name: 'Annex mapping', desc: 'Traceable mapping against Annex III high-risk categories.', Icon: DocumentMagnifyingGlassIcon },
              { name: 'Borderline analysis', desc: 'Flags reclassification hazards and dependency risks.', Icon: ExclamationTriangleIcon },
              { name: 'Evidence list', desc: 'Inputs reviewed, assumptions, and references you can show.', Icon: ClipboardDocumentCheckIcon },
              { name: 'Action plan', desc: 'If high-risk, stepwise obligations and owners.', Icon: QueueListIcon },
              { name: 'Time to value', desc: 'Fast turnaround from kickoff to signed deliverable.', Icon: BoltIcon },
            ].map(({ name, desc, Icon }) => (
              <div key={name} className="flex items-start gap-3">
                <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-neutral-400 mt-0.5" />
                <div>
                  <dt className="text-md font-semibold text-black">{name}</dt>
                  <dd className="mt-1 text-md text-neutral-700 leading-relaxed">{desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* PROCESS (ACCORDION) */}
      <Container className="mt-24">
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
            ].map(({ title, desc, bullets }) => (
              <details
                key={title}
                className="group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm open:ring-neutral-900/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium text-neutral-900">{title}</span>
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
                <div className="mt-3 grid gap-3 text-sm text-neutral-700 md:grid-cols-2">
                  <p>{desc}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-32">
        <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold">Avoid the million-euro mistake.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              Get a defensible classification and a practical roadmap if your system is high-risk. Built by a lawyer and
              software engineer, ready for procurement and regulators.
            </p>
            <a
              href="#booking"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Request assessment
            </a>
          </div>
        </div>
      </Container>

     <BookingForm  />
    </>
  )
}

