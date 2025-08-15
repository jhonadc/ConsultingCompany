// app/regulations/lgpd/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'

export const metadata = {
    title: 'LGPD — Comforma Compliance',
    description:
        'Brazil’s General Data Protection Law (LGPD) — in force since 18 September 2020. Tailored governance, controls, and evidence that stand up to ANPD scrutiny.',
}

export default function LgpdPage() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <BackButton />

            <div className="border-t-4 border-emerald-400 pt-6">
                {/* Header */}
                <SectionIntro title="LGPD">
                    <p>
                        Brazil’s General Data Protection Law — clear obligations, material fines, and
                        expectations for operational controls that work in practice.
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
                                        l1: '18 September 2020',
                                        l2: 'Admin sanctions since 1 Aug 2021',
                                    },
                                    {
                                        h: 'Who this affects',
                                        l1: 'Any organisation processing personal data in Brazil or about people in Brazil.',
                                        l2:
                                            'Also those offering goods/services to people in Brazil or collecting data in Brazil—regardless of where you are established.',
                                    },
                                    {
                                        h: 'Penalty ceiling',
                                        l1: 'Up to 2% of Brazilian revenue',
                                        l2: 'capped at R$50 million per infraction',
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

                {/* Obligations – streamlined list with horizontal color bars */}
                <Container className="mt-20">
                    <Border />
                    <FadeIn className="mt-6 max-w-5xl">
                        <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
                            Obligations
                        </h2>
                        <ul className="space-y-8">
                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Implement Security Measures
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Adopt and maintain technical and organisational measures proportionate to your risks to protect personal data in daily operations (Art. 46).
                                </p>
                                <div className="h-1 w-16 bg-emerald-700 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Keep Records of Processing Operations
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Maintain a formal register of processing operations—purpose, data categories, recipients, retention, and safeguards—available to the ANPD upon request (Art. 37).
                                </p>
                                <div className="h-1 w-16 bg-sky-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Prepare Data Protection Impact Reports (RIPD) when required
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Produce a RIPD for high-risk processing when required by the ANPD or per guidance (e.g., legitimate-interest scenarios), documenting risks and mitigations (Arts. 10 §3, 38).
                                </p>
                                <div className="h-1 w-16 bg-amber-500 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Govern Operators (Processors)
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Define controller instructions, use compliant contracts, and oversee operators and sub-operators to ensure adherence (Art. 39).
                                </p>
                                <div className="h-1 w-16 bg-lime-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Appoint a DPO (Encarregado) and respond to data subjects
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Designate a DPO (unless exempted by ANPD rules), provide a public contact channel, and handle rights requests within LGPD timelines (Art. 41; Art. 18).
                                </p>
                                <div className="h-1 w-16 bg-rose-500 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Purpose Limitation & Necessity
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Process only what is necessary for specific, legitimate purposes; embed minimisation into systems and workflows (Art. 6, items I & III).
                                </p>
                                <div className="h-1 w-16 bg-cyan-600 mt-2"></div>
                            </li>

                            <li>
                                <p className="text-neutral-600 font-bold text-md">And more</p>
                            </li>
                        </ul>
                    </FadeIn>
                </Container>

                {/* What we offer — first row (2 wide cards), then 3-per row */}
                <Container className="mt-24">
                    <FadeIn className="mt-6 mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            What we offer
                        </h2>

                        {/* NOTE under header */}
                        <p className="mt-3 text-md text-neutral-600">
                            Programmes are tailored end-to-end and may depend on earlier phases
                            (e.g., deletion protocols require prior identification of personal-data flows and systems).
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
                            {/* Row 1: two wide cards */}
                            {[
                                {
                                    title: 'External DPO (Encarregado)',
                                    desc:
                                        'We act as your DPO: advise management, monitor compliance, train staff, oversee RIPDs, liaise with the ANPD, and report risks with practical remediation paths.',
                                    cta: 'Speak with a DPO',
                                },
                                {
                                    title: 'Brazil Market Entry & Client Readiness',
                                    desc:
                                        'Be contract-ready for Brazilian customers: lawful bases, privacy notices, transfer mechanisms, operator clauses, and evidence packs that pass procurement and due diligence.',
                                    cta: 'Plan your Brazil entry',
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
                                    title: 'Records of Processing (Art. 37)',
                                    desc:
                                        'We establish your register of processing operations—what you process, why, with whom, where, retention, and safeguards—and set a lightweight routine to keep it current.',
                                    cta: 'Set up records',
                                },
                                {
                                    title: 'RIPD — Company-Specific Impact Report',
                                    desc:
                                        'A thorough, personalised RIPD for high-risk processing: scope, stakeholder interviews, risk analysis tailored to your systems and business model, mitigation design, and sign-off documentation.',
                                    cta: 'Plan your RIPD',
                                },
                                {
                                    title: 'Incident & Breach Readiness',
                                    desc:
                                        'Design and embed a 72-hour response playbook with roles, decision trees, and notification templates (ANPD and data subjects). We train teams and set up the evidence you’ll need if an incident occurs.',
                                    cta: 'Strengthen readiness',
                                },
                                {
                                    title: 'Retention & Deletion Operating Model',
                                    desc:
                                        'Define lawful retention by data category, implement deletion routines in systems, and set up audit logs to prove execution.',
                                    cta: 'Design your model',
                                },
                                {
                                    title: 'Operator (Processor) Oversight',
                                    desc:
                                        'Practical onboarding and periodic review of operators: requirement baselines, contractual clauses, transfer mechanisms, and an oversight cadence that fits your vendor landscape.',
                                    cta: 'Build operator oversight',
                                },
                                {
                                    title: 'LGPD for AI Systems',
                                    desc:
                                        'Align AI features and workflows with LGPD: controller/operator role mapping, legal bases, transparency to users, records updates, RIPD triggers, and acceptable-use guidance for teams.',
                                    cta: 'Align AI with LGPD',
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
                                    v: 'The ANPD is issuing guidance, opening procedures, and can impose fines, public notices, and processing restrictions.',
                                },
                                {
                                    k: 'Pre-launch duties',
                                    v: 'High-risk processing may require a RIPD and controls before go-live. Planning these steps avoids delays and non-compliance.',
                                },
                                {
                                    k: 'Transfers scrutiny',
                                    v: 'International transfers require valid mechanisms (adequacy, clauses, or seals). Clients increasingly ask for proof during due diligence.',
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

                {/* How we work + process link (unchanged) */}
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
                                    d: 'Co-create bespoke controls and workflows (minimisation, RIPD cadence, operator intake, breach playbooks) aligned to your reality.',
                                },
                                {
                                    t: 'Implement & Evidence',
                                    d: 'Embed changes with your teams and produce evidence packs that stand up in audits and client reviews.',
                                },
                                {
                                    t: 'Assure',
                                    d: 'Quarterly tune-ups: records updates, transfer reassessments, spot checks, and change logs that prove control over time.',
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
                            We design LGPD controls that fit your organisation and generate evidence you can stand behind.
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
