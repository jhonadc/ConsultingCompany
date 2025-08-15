// app/regulations/data-act/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'

export const metadata = {
    title: 'EU Data Act — Comforma Compliance',
    description:
        'Regulation (EU) 2023/2854 — fair access to and use of data from connected products and related services. We adapt product design, contracts, and operations to comply without losing competitive edge.',
}

// Facts for Data Act
const facts = [
    {
        color: '#a855f7', // purple
        title: 'Applies from',
        value: '12 September 2025',
        description: 'Directly applicable across the EU',
    },
    {
        color: '#f59e0b', // amber
        title: 'Who this affects',
        value: 'Manufacturers & providers of connected products/services',
        description: 'Plus businesses reusing such data, public bodies requesting access, and cloud/data processing providers.',
    },
    {
        color: '#e11d48', // rose
        title: 'Penalties',
        value: 'Set by each Member State',
        description: 'Aligned with national enforcement frameworks',
    },
]

export default function DataActPage() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-20">
            <BackButton />

            <div className="border-t-4 border-amber-400 pt-6">
                {/* Header */}
                <SectionIntro title="EU Data Act">
                    <p className="text-md">
                        EU rules to make data from connected products and services accessible and usable.
                    </p>
                </SectionIntro>

                <RegulationsFactStrip facts={facts} />



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
                                    Design for user data access
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Connected products and related services must be designed so users (and third parties they authorise) can access the data they generate, in practice—not just on paper.
                                </p>
                                <div className="h-1 w-16 bg-blue-700 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Provide data on request under fair terms
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Supply requested data to users or their authorised third parties without undue delay and on fair, reasonable, and non-discriminatory terms (especially for SMEs).
                                </p>
                                <div className="h-1 w-16 bg-sky-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Adapt B2B contracts for fairness
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Update terms to reflect the Act’s requirements on unfair clauses, data-use permissions, and liability allocation—protecting value while enabling access.
                                </p>
                                <div className="h-1 w-16 bg-amber-500 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Handle public-sector requests lawfully
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Respond to lawful requests from public bodies for crisis management, emergency prevention, or other specified public-interest tasks, in required formats and timelines.
                                </p>
                                <div className="h-1 w-16 bg-indigo-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Enable cloud switching & interoperability
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Allow customers to switch data processing services with minimal friction—no unjustified obstacles—and implement clear data/functional portability.
                                </p>
                                <div className="h-1 w-16 bg-pink-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Safeguard trade secrets & security
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Share data while preserving confidentiality and security measures, with proportionate protections and auditability.
                                </p>
                                <div className="h-1 w-16 bg-cyan-600 mt-2"></div>
                            </li>

                            <li>
                                <p className="text-neutral-600 font-bold text-md">And more</p>
                            </li>
                        </ul>
                    </FadeIn>
                </Container>

                {/* What we offer — first row (full width, 2 cards), then 3-per row; all bespoke */}
                <Container className="mt-24">
                    <FadeIn className="mt-6 mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            What we offer
                        </h2>

                        {/* NOTE under header */}
                        <p className="mt-3 text-md text-neutral-600">
                            Programmes are tailored end-to-end and may depend on earlier phases (e.g., portability planning requires an agreed system and contract baseline).
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
                            {/* Row 1: two wide cards (bespoke leadership/advisory) */}
                            {[
                                {
                                    title: 'Data Act Compliance Lead',
                                    desc:
                                        'We partner with your product, legal, and engineering teams to align designs, contracts, and operations to the Data Act—without eroding competitive advantage.',
                                    cta: 'Discuss your programme',
                                },
                                {
                                    title: 'EU Client & Partner Readiness',
                                    desc:
                                        'Demonstrate readiness to buyers and partners: data access models, lawful request handling, fair terms, and evidence they can rely on.',
                                    cta: 'Get ready for deals',
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

                            {/* Remaining cards: three per row on lg (all bespoke services) */}
                            {[
                                {
                                    title: 'User & Third-Party Data Access Design',
                                    desc:
                                        'We co-design request flows, authorisation patterns, interfaces, and audit logs so users and authorised third parties can access data in practice.',
                                    cta: 'Design access with us',
                                },
                                {
                                    title: 'Contract & Terms Redesign',
                                    desc:
                                        'We revise B2B terms for fairness, permissions, liability and trade-secret safeguards—balanced, defensible, and commercially sound.',
                                    cta: 'Review your terms',
                                },
                                {
                                    title: 'Cloud Switching & Interoperability Enablement',
                                    desc:
                                        'We map dependencies, define portability formats, and remove unjustified obstacles—so switching is feasible without breaking operations.',
                                    cta: 'Enable portability',
                                },
                                {
                                    title: 'Public-Sector Request Response Framework',
                                    desc:
                                        'We set triggers, roles, formats, and evidence routines to handle lawful requests quickly and lawfully.',
                                    cta: 'Set up your framework',
                                },
                                {
                                    title: 'Data Sharing Governance & Safeguards',
                                    desc:
                                        'We implement governance that protects trade secrets and security while enabling sharing under the Act.',
                                    cta: 'Protect while sharing',
                                },
                                {
                                    title: 'Evidence & Assurance',
                                    desc:
                                        'We assemble living proof—policies, design notes, logs, and change records—so you can show compliance at any time.',
                                    cta: 'Build your evidence',
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
                                    k: 'Deadline: September 2025',
                                    v: 'Early action avoids rushed redesigns and renegotiations that stall sales and integrations.',
                                },
                                {
                                    k: 'Buyer pressure',
                                    v: 'Large customers will require evidence of compliance in procurement and partner reviews.',
                                },
                                {
                                    k: 'Protect value',
                                    v: 'Thoughtful implementation enables sharing while preserving trade secrets and leverage.',
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
                                    d: 'Audit products, contracts, and data flows against Data Act requirements and your commercial realities.',
                                },
                                {
                                    t: 'Design',
                                    d: 'Co-create compliant designs, access processes, portability models, and contractual protections.',
                                },
                                {
                                    t: 'Implement & Evidence',
                                    d: 'Roll out changes with your teams and compile proof for partners and authorities.',
                                },
                                {
                                    t: 'Assure',
                                    d: 'Periodic checks and updates as guidance and practice evolve.',
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
                        <h2 className="font-display text-3xl font-semibold">Share data fairly. Protect value. Keep control.</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                            We build Data Act programmes that fit your organisation and provide evidence you can stand behind.
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
