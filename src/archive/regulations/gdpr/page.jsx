// app/regulations/gdpr/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'


export const metadata = {
  title: 'GDPR — Comforma Compliance',
  description:
    'EU’s General Data Protection Regulation — in force since 25 May 2018. Tailored governance, controls, and evidence that stand up to audits.',
}

// Facts for GDPR (place near top of the file)
const facts = [
  {
    color: '#2563eb', // blue-600
    title: 'Enforced',
    value: '25 May 2018',
    description: 'Applicable across the EU',
  },
  {
    color: '#f59e0b', // amber-500
    title: 'Who this affects',
    value: 'Organisations processing personal data in the EU',
    description:
      'Also non-EU companies offering goods/services to people in the EU or monitoring their behaviour.',
  },
  {
    color: '#e11d48', // rose-600
    title: 'Penalty ceiling',
    value: 'Up to €20M or 4% global turnover',
    description: 'For severe infringements',
  },
]

export default function GdprPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-20">
      <BackButton />

      <div className="border-t-4 border-blue-400 pt-6">
        {/* Header */}
        {/* Header */}
        <SectionIntro title="GDPR">
          <p className="text-md">
            EU’s General Data Protection Regulation: Privacy for personal data.
          </p>
        </SectionIntro>

        {/* Compact facts strip */}
        <RegulationsFactStrip facts={facts} />



        {/* Obligations */}
        {/* Obligations – streamlined list form */}
        <Container className="mt-20">
          <Border />
          <FadeIn className="mt-6  max-w-5xl">
            <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
              Obligations
            </h2>
            <ul className="space-y-8">
              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Implement Risk-Appropriate Measures
                </h3>
                <p className="text-neutral-600 text-sm">
                  Apply and maintain technical and organisational safeguards proportionate to your processing risks, ensuring they operate effectively in practice.
                </p>
                <div className="h-1 w-16 bg-purple-700 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Maintain Records of Processing Activities (RoPA)
                </h3>
                <p className="text-neutral-600 text-sm">
                  Keep a formal register of processing purposes, data categories, recipients, retention periods, and security measures, as required by GDPR Article&nbsp;30.
                </p>
                <div className="h-1 w-16 bg-blue-600 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Conduct Data Protection Impact Assessments (DPIAs)
                </h3>
                <p className="text-neutral-600 text-sm">
                  Carry out and document DPIAs before launching any high-risk processing, ensuring risk mitigation is designed and implemented before go-live.
                </p>
                <div className="h-1 w-16 bg-yellow-500 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Ensure Processor & Vendor Governance
                </h3>
                <p className="text-neutral-600 text-sm">
                  Use compliant contracts, monitor processor performance, and maintain oversight of processors and sub-processors as required by GDPR Article&nbsp;28.
                </p>
                <div className="h-1 w-16 bg-green-500 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Embed Privacy by Design & Default
                </h3>
                <p className="text-neutral-600 text-sm">
                  Integrate privacy safeguards into systems, processes, and products from the start, ensuring compliance is part of the design process.
                </p>
                <div className="h-1 w-16 bg-red-500 mt-2"></div>
              </li>

              <li>
                <h3 className="font-display text-lg font-semibold text-neutral-950">
                  Demonstrate Accountability
                </h3>
                <p className="text-neutral-600 text-sm">
                  Keep evidence of compliance and ongoing monitoring so you can prove adherence to the law at any time.
                </p>
                <div className="h-1 w-16 bg-teal-500 mt-2"></div>
              </li>
              <li>

                <p className="text-neutral-600 font-bold text-md">
                  And more                </p>

              </li>
            </ul>

          </FadeIn>
        </Container>

        {/* What we offer */}
        <Container className="mt-24">
          <FadeIn className="mt-6 mx-auto max-w-6xl">
            <h2
              className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left
                 before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                 before:rounded before:bg-blue-500/60"
            >
              What we offer
            </h2>

            <p className="mt-3 text-md text-neutral-600">
              Targeted, high-impact services that embed privacy-by-design and produce audit-ready evidence.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
              {[
                {
                  title: 'External Data Protection Officer (DPO)',
                  desc:
                    'We act as your independent DPO: advise management, monitor compliance, train staff, oversee DPIAs, liaise with authorities, and report risks with practical remediation paths.',
                  cta: 'Speak with a DPO',
                  span: 'lg:col-span-3',
                  border: 'border-l-2 border-pink-500',
                  ring: 'hover:ring-pink-200',
                },
                {
                  title: 'EU Market Entry & Client Readiness',
                  desc:
                    'Make your business contract-ready for EU clients: lawful bases, privacy notices, transfer assessments, vendor clauses, and evidence packs that pass procurement and due-diligence reviews.',
                  cta: 'Plan your EU entry',
                  span: 'lg:col-span-3',
                  border: 'border-l-2 border-amber-500',
                  ring: 'hover:ring-amber-200',
                },
                {
                  title: 'Records of Processing (RoPA) Programme',
                  desc:
                    'We establish your Article-30 Records of Processing Activities—what you process, why, with whom, where, retention, and security measures—and set a lightweight routine to keep it current.',
                  cta: 'Discuss your RoPA setup',
                  span: 'lg:col-span-2',
                  border: 'border-l-2 border-emerald-500',
                  ring: 'hover:ring-emerald-200',
                },
                {
                  title: 'DPIA — Company-Specific Assessment',
                  desc:
                    'A thorough, personalised DPIA for high-risk processing: scope, stakeholder interviews, risk analysis tailored to your systems and business model, mitigation design, and sign-off documentation.',
                  cta: 'Plan your DPIA',
                  span: 'lg:col-span-2',
                  border: 'border-l-2 border-sky-500',
                  ring: 'hover:ring-sky-200',
                },
                {
                  title: 'Incident & Breach Readiness',
                  desc:
                    'Design and embed a 72-hour response playbook with roles, decision trees, and notification templates. We train teams and set up the evidence you’ll need if an incident occurs.',
                  cta: 'Strengthen readiness',
                  span: 'lg:col-span-2',
                  border: 'border-l-2 border-violet-500',
                  ring: 'hover:ring-violet-200',
                },
                {
                  title: 'Retention & Deletion Operating Model',
                  desc:
                    'Define lawful retention by data category, implement deletion routines in systems, and set up audit logs to prove execution.',
                  cta: 'Design your model',
                  span: 'lg:col-span-2',
                  border: 'border-l-2 border-cyan-500',
                  ring: 'hover:ring-cyan-200',
                },
                {
                  title: 'Processor & Vendor Oversight',
                  desc:
                    'Practical onboarding and periodic review of processors: requirement baselines, Article-28 clauses, transfer assessments, and an oversight cadence that fits your vendor landscape.',
                  cta: 'Build vendor oversight',
                  span: 'lg:col-span-2',
                  border: 'border-l-2 border-rose-500',
                  ring: 'hover:ring-rose-200',
                },
                {
                  title: 'GDPR for AI Systems',
                  desc:
                    'Align AI features and workflows with GDPR: controller/processor role mapping, lawful bases, transparency to users, RoPA updates, DPIA triggers, and acceptable-use guidance for teams.',
                  cta: 'Align AI with GDPR',
                  span: 'lg:col-span-2',
                  border: 'border-l-2 border-indigo-500',
                  ring: 'hover:ring-indigo-200',
                },
              ].map(({ title, desc, cta, span, border, ring }) => (
                <div key={title} className={span}>
                  <div
                    className={[
                      'rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm flex h-full flex-col',
                      'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
                      'focus-within:ring-2',
                      ring,
                      border,
                    ].join(' ')}
                  >
                    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                    <div className="mt-auto pt-5">
                      <Link
                        href="/contact"
                        className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                      >
                        {cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>

        {/* Why now */}
        <Container className="mt-20">
          <FadeIn className="mx-auto max-w-6xl">
            <h2
              className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left
                 before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                 before:rounded before:bg-blue-500/60"
            >
              Why now
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  k: 'Active enforcement',
                  v: 'Supervisory authorities continue to open investigations, issue orders, and levy fines; clients increasingly require evidence of controls.',
                  border: 'border-l-2 border-amber-500',
                  dot: 'before:bg-amber-500',
                  ring: 'hover:ring-amber-200',
                },
                {
                  k: 'Pre-launch duties',
                  v: 'High-risk processing requires DPIA before deployment; this must be scheduled and evidenced to avoid delays and non-compliance.',
                  border: 'border-l-2 border-pink-500',
                  dot: 'before:bg-pink-500',
                  ring: 'hover:ring-pink-200',
                },
                {
                  k: 'Transfers scrutiny',
                  v: 'Standard Contractual Clauses require documented transfer assessments and safeguards; partners ask for proof during due diligence.',
                  border: 'border-l-2 border-emerald-500',
                  dot: 'before:bg-emerald-500',
                  ring: 'hover:ring-emerald-200',
                },
              ].map(({ k, v, border, dot, ring }) => (
                <div
                  key={k}
                  className={[
                    'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm text-left',
                    'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
                    border,
                    ring,
                  ].join(' ')}
                >
                  <p
                    className={[
                      'relative pl-3 text-sm font-semibold text-neutral-900',
                      'before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded',
                      dot,
                    ].join(' ')}
                  >
                    {k}
                  </p>
                  <p className="mt-1 text-sm text-neutral-700">{v}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>

        {/* How we work */}
        <Container className="mt-24">
          <Border />
          <FadeIn className="mt-10 mx-auto max-w-6xl">
            <h2
              className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left
                 before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                 before:rounded before:bg-blue-500/60"
            >
              How we work
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
              {[
                { t: 'Diagnose', d: 'Focused discovery across product features, data flows, and vendors to baseline actual practice.', accent: 'before:bg-cyan-500' },
                { t: 'Design', d: 'Co-create bespoke controls and workflows (minimisation, DPIA cadence, vendor intake, breach playbooks) aligned to your reality.', accent: 'before:bg-violet-500' },
                { t: 'Implement & Evidence', d: 'Embed changes with your teams and produce evidence packs that stand up in audits and client reviews.', accent: 'before:bg-rose-500' },
                { t: 'Assure', d: 'Quarterly tune-ups: RoPA updates, transfer reassessments, spot checks, and change logs that prove control over time.', accent: 'before:bg-amber-500' },
              ].map(({ t, d, accent }) => (
                <div
                  key={t}
                  className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3
                    className={[
                      'relative pl-3 text-lg font-semibold text-neutral-900',
                      'before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded',
                      accent,
                    ].join(' ')}
                  >
                    {t}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-700">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-left">
              <Link
                href="/process"
                className="inline-block text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
              >
                See our full compliance process
              </Link>
            </div>
          </FadeIn>
        </Container>





        {/* CTA */}
        <Container className="mt-28">
          <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12 text-center">
            <h2 className="font-display text-3xl font-semibold">Avoid fines. Protect trust. Keep your business running.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              We design GDPR controls that fit your organisation and generate evidence you can stand behind.
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
    </Container >
  )
}
