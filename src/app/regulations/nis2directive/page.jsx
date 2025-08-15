// app/regulations/nis2/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'

export const metadata = {
    title: 'NIS2 — Comforma Compliance',
    description:
        'EU NIS2 Directive (2022/2555) — applicable via national laws since Oct 2024. Governance, risk, incident reporting, and supply-chain security made operational.',
}

export default function Nis2Page() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <BackButton />

            <div className="border-t-4 border-rose-400 pt-6">
                {/* Header */}
                <SectionIntro title="NIS2">
                    <p>
                        EU’s cybersecurity baseline for essential and important entities — focused on board
                        accountability, risk management, incident reporting, and supplier control.
                    </p>
                </SectionIntro>

                {/* Facts strip (centered) */}
                <div className="mt-10">
                    <div className="relative overflow-hidden rounded-4xl bg-neutral-900 px-6 py-4 text-white sm:px-10 sm:py-8 lg:px-12">
                        <FadeIn className="mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                {[
                                    {
                                        h: 'In application',
                                        l1: 'Since Oct 2024',
                                        l2: 'via Member State laws',
                                    },
                                    {
                                        h: 'Who this affects',
                                        l1: '“Essential” & “Important” entities',
                                        l2:
                                            'Energy, transport, health, finance, digital infrastructure (incl. cloud/MSPs/DCs), public admin & more (size-cap rules apply).',
                                    },
                                    {
                                        h: 'Penalty ceiling',
                                        l1: 'Up to €10M or 2%',
                                        l2: 'Essential: €10M/2% • Important: €7M/1.4%',
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

                {/* Obligations – horizontal lines style */}
                <Container className="mt-20">
                    <Border />
                    <FadeIn className="mt-6 max-w-5xl">
                        <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
                            Obligations
                        </h2>
                        <ul className="space-y-8">
                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Governance & management accountability
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Management approves risk measures, receives regular training, and can be held liable for non-compliance. Cybersecurity is a board-level duty.
                                </p>
                                <div className="h-1 w-16 bg-rose-700 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Risk management measures (technical & organisational)
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Policies for risk analysis, incident handling, business continuity & disaster recovery, backup/restore testing, IAM/MFA, logging/monitoring,
                                    encryption, secure development, and vulnerability handling.
                                </p>
                                <div className="h-1 w-16 bg-orange-500 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Incident reporting timelines
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Early warning to the CSIRT/authority within 24 hours of awareness, an initial notification within 72 hours, and a final report within one month.
                                </p>
                                <div className="h-1 w-16 bg-amber-500 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Supply-chain & third-party security
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Evaluate and contractually require controls from ICT service providers (e.g., MSPs, cloud), monitor performance, and plan for critical supplier failure.
                                </p>
                                <div className="h-1 w-16 bg-lime-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Business continuity & resilience
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Maintain and test continuity plans, offline/immutable backups, recovery time objectives, and crisis communication procedures.
                                </p>
                                <div className="h-1 w-16 bg-sky-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Vulnerability disclosure & secure development
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Operate a coordinated vulnerability disclosure (CVD) channel and integrate secure-by-design practices into your SDLC.
                                </p>
                                <div className="h-1 w-16 bg-indigo-600 mt-2"></div>
                            </li>

                            <li>
                                <p className="text-neutral-600 font-bold text-md">And more</p>
                            </li>
                        </ul>
                    </FadeIn>
                </Container>

                {/* What we offer — first row (full width, 2 cards), then 3-per row */}
                <Container className="mt-24">
                    <FadeIn className="mt-6 mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            What we offer
                        </h2>

                        <p className="mt-3 text-md text-neutral-600">
                            Programmes are tailored end-to-end and may depend on earlier phases
                            (e.g., continuity and incident runbooks rely on an agreed control baseline and logging coverage).
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
                            {/* Row 1: two wide cards */}
                            {[
                                {
                                    title: 'vCISO / NIS2 Programme Lead',
                                    desc:
                                        'We act as your fractional security lead: board briefings, policy approvals, risk register governance, control roadmap, and audit-ready evidence packs.',
                                    cta: 'Speak with a vCISO',
                                },
                                {
                                    title: 'EU Client & Tender Readiness (NIS2)',
                                    desc:
                                        'Prepare for procurement and due diligence: policy set, incident-reporting process, supplier controls, KPIs, and proof points aligned to buyer checklists.',
                                    cta: 'Get client-ready',
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

                            {/* Remaining cards */}
                            {[
                                {
                                    title: 'NIS2 Readiness Scan & Gap Plan',
                                    desc:
                                        'Fast discovery against NIS2 requirements with a pragmatic remediation plan mapped to ownership, effort, and risk impact.',
                                    cta: 'Start a readiness scan',
                                },
                                {
                                    title: 'Core Controls Implementation Sprint',
                                    desc:
                                        'Get the minimum effective baseline in place: MFA, backup & restore tests, logging/retention, admin access, vulnerability & patch cadence.',
                                    cta: 'Build your baseline',
                                },
                                {
                                    title: 'Incident Reporting & IR Playbook',
                                    desc:
                                        'Design the 24h/72h/30-day reporting workflow, decision trees, comms templates, stakeholder list, and escalation paths. Tabletop included.',
                                    cta: 'Set up reporting',
                                },
                                {
                                    title: 'Supplier & MSP Hardening Pack',
                                    desc:
                                        'Contract clauses, security schedules, onboarding checklist, and monitoring cadence for cloud/MSP/ICT providers — aligned to NIS2.',
                                    cta: 'Harden suppliers',
                                },
                                {
                                    title: 'Continuity & Backup Assurance',
                                    desc:
                                        'Restore testing routine, offline/immutable backup patterns, and evidence logs so you can prove resilience at any time.',
                                    cta: 'Assure continuity',
                                },
                                {
                                    title: 'Secure SDLC & CVD Setup',
                                    desc:
                                        'Lightweight secure-by-design controls, dependency and vuln management, and a coordinated vulnerability disclosure channel.',
                                    cta: 'Improve SDLC',
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
                                    k: 'Buyer pressure',
                                    v: 'Large customers and public bodies now ask for NIS2 evidence in procurement. Being ready wins deals.',
                                },
                                {
                                    k: 'Board liability',
                                    v: 'Management must approve measures and can be sanctioned for non-compliance — training and documentation are expected.',
                                },
                                {
                                    k: 'Reporting clock',
                                    v: '24h early warning and 72h initial notification require a rehearsed IR workflow and clear ownership.',
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
                                    d: 'Focused discovery across assets, providers, and controls to baseline real practice against NIS2.',
                                },
                                {
                                    t: 'Design',
                                    d: 'Bespoke control set and workflows: incident reporting, continuity, supplier oversight, and governance cadence.',
                                },
                                {
                                    t: 'Implement & Evidence',
                                    d: 'Embed changes with teams and produce evidence packs that satisfy audits and client reviews.',
                                },
                                {
                                    t: 'Assure',
                                    d: 'Quarterly tune-ups: control checks, supplier reviews, tabletop exercises, and change logs.',
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
                            We build a NIS2 control baseline that fits your organisation and provides evidence you can stand behind.
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
