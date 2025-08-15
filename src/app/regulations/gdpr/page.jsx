// app/regulations/gdpr/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'

export const metadata = {
  title: 'GDPR — Comforma Compliance',
  description:
    'EU’s General Data Protection Regulation — in force since 25 May 2018. Tailored governance, controls, and evidence that stand up to audits.',
}

export default function GdprPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <BackButton />

      <div className="border-t-4 border-blue-400 pt-6">
        {/* Header */}
        <SectionIntro title="GDPR">
          <p>
            EU’s General Data Protection Regulation — clear rules, material fines, and expectations
            for operational controls that work in practice.
          </p>
        </SectionIntro>

        {/* Facts strip (centered) */}

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-4xl bg-neutral-900 px-6 py-4 text-white sm:px-10 sm:py-8 lg:px-12">
            <FadeIn className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  {
                    h: 'Enforced',
                    l1: '25 May 2018',
                    l2: 'Applicable across the EU',
                  },
                  {
                    h: 'Who this affects',
                    l1: 'Any EU-based organisation processing personal data.',
                    l2:
                      'Also non-EU organisations that offer goods/services to people in the EU or monitor their behaviour (e.g., websites, apps, analytics).',
                  },
                  {
                    h: 'Penalty ceiling',
                    l1: '€20 million or 4% global turnover',
                    l2: 'for severe infringements',
                  },
                ].map(({ h, l1, l2 }) => (
                  <div
                    key={h}
                    className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 text-center"
                  >
                    <h3 className="text-sm font-bold text-white/80">{h}</h3>
                    <p className="mt-2 text-xl font-semibold">{l1}</p>
                    <p className="mt-1 text-sm text-white/90">{l2}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

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

        {/* What we offer — first row (full width, 2 cards), then 3-per row.
            Alignment fix: stretch cards and pin CTA to bottom with flex */}
        <Container className="mt-24">
          <FadeIn className="mt-6 mx-auto max-w-6xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
              What we offer
            </h2>

            {/* NOTE under header */}
            <p className="mt-3 text-md text-neutral-600">
              **Programmes are tailored end-to-end and may depend on earlier phases
              (e.g., deletion protocols require prior identification of personal-data flows and systems).

            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
              {/* Row 1: two wide cards */}
              {[
                {
                  title: 'External Data Protection Officer (DPO)',
                  desc:
                    'We act as your independent DPO: advise management, monitor compliance, train staff, oversee DPIAs, liaise with authorities, and report risks with practical remediation paths.',
                  cta: 'Speak with a DPO',
                },
                {
                  title: 'EU Market Entry & Client Readiness',
                  desc:
                    'Make your business contract-ready for EU clients: lawful bases, privacy notices, transfer assessments, vendor clauses, and evidence packs that pass procurement and due-diligence reviews.',
                  cta: 'Plan your EU entry',
                },
              ].map(({ title, desc, cta }) => (
                <div key={title} className="group relative lg:col-span-3">
                  <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.01]" />
                  <div className="relative z-10 h-full rounded-[calc(1.5rem+1px)] p-7 flex flex-col">
                    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                    <div className="mt-auto pt-5">
                      <Link href="/contact" className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white hover:scale-105">
                        {cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Remaining cards: three per row on lg */}
              {[
                {
                  title: 'Records of Processing (RoPA) Programme',
                  desc:
                    'We establish your Article-30 Records of Processing Activities — what you process, why, with whom, where, retention, and security measures — and set a lightweight routine to keep it current.',
                  cta: 'Discuss your RoPA setup',
                },
                {
                  title: 'DPIA — Company-Specific Assessment',
                  desc:
                    'A thorough, personalised DPIA for high-risk processing: scope, stakeholder interviews, risk analysis tailored to your systems and business model, mitigation design, and sign-off documentation.',
                  cta: 'Plan your DPIA',
                },
                {
                  title: 'Incident & Breach Readiness',
                  desc:
                    'Design and embed a 72-hour response playbook with roles, decision trees, and notification templates. We train teams and set up the evidence you’ll need if an incident occurs.',
                  cta: 'Strengthen readiness',
                },
                {
                  title: 'Retention & Deletion Operating Model',
                  desc:
                    'Define lawful retention by data category, implement deletion routines in systems, and set up audit logs to prove execution.',
                  cta: 'Design your model',
                },
                {
                  title: 'Processor & Vendor Oversight',
                  desc:
                    'Practical onboarding and periodic review of processors: requirement baselines, Article-28 clauses, transfer assessments, and an oversight cadence that fits your vendor landscape.',
                  cta: 'Build vendor oversight',
                },
                {
                  title: 'GDPR for AI Systems',
                  desc:
                    'Align AI features and workflows with GDPR: controller/processor role mapping, lawful bases, transparency to users, RoPA updates, DPIA triggers, and acceptable-use guidance for teams.',
                  cta: 'Align AI with GDPR',
                },
              ].map(({ title, desc, cta }) => (
                <div key={title} className="group relative lg:col-span-2">
                  <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.01]" />
                  <div className="relative z-10 h-full rounded-[calc(1.5rem+1px)] p-7 flex flex-col">
                    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                    <div className="mt-auto pt-5">
                      <Link href="/contact" className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white hover:scale-105">
                        {cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>

        {/* Why now (Urgency) */}
        <Container className="mt-20">
          <FadeIn className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
              Why now
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                {
                  k: 'Active enforcement',
                  v: 'Supervisory authorities continue to open investigations, issue orders, and levy fines; clients increasingly require evidence of controls.',
                },
                {
                  k: 'Pre-launch duties',
                  v: 'High-risk processing requires DPIA before deployment; this must be scheduled and evidenced to avoid delays and non-compliance.',
                },
                {
                  k: 'Transfers scrutiny',
                  v: 'Standard Contractual Clauses require documented transfer assessments and safeguards; partners ask for proof during due diligence.',
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

        {/* How we work + process link */}
        <Container className="mt-24">
          <Border />
          <FadeIn className="mt-6 mx-auto max-w-6xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
              How we work
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
              {[
                {
                  t: 'Diagnose',
                  d: 'Focused discovery across product features, data flows, and vendors to baseline actual practice.',
                },
                {
                  t: 'Design',
                  d: 'Co-create bespoke controls and workflows (minimisation, DPIA cadence, vendor intake, breach playbooks) aligned to your reality.',
                },
                {
                  t: 'Implement & Evidence',
                  d: 'Embed changes with your teams and produce evidence packs that stand up in audits and client reviews.',
                },
                {
                  t: 'Assure',
                  d: 'Quarterly tune-ups: RoPA updates, transfer reassessments, spot checks, and change logs that prove control over time.',
                },
              ].map(({ t, d }) => (
                <div key={t} className="group relative">
                  <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.01]" />
                  <div className="relative z-10 h-full rounded-[calc(1.5rem+1px)] p-7 text-left">
                    <h3 className="text-lg font-semibold text-neutral-900">{t}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-left">
              <Link
                href="/our-process"
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
    </Container>
  )
}
