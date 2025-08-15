
// app/regulations/eu-accessibility-act/page.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'

export const metadata = {
    title: 'EU Accessibility Act — Comforma Compliance',
    description:
        'Directive (EU) 2019/882 — mandatory accessibility requirements for products and services in the EU from 28 June 2025. Design, implementation, and evidence for compliance.',
}

export default function EuAccessibilityActPage() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <BackButton />

            <div className="border-t-4 border-fuchsia-400 pt-6">
                {/* Header */}
                <SectionIntro title="EU Accessibility Act">
                    <p>
                        EU-wide rules to ensure products and services are accessible to persons with disabilities — covering ICT, e-commerce, banking, transport, media, and more.
                    </p>
                </SectionIntro>

                {/* Facts strip */}
                <div className="mt-10">
                    <div className="relative overflow-hidden rounded-4xl bg-neutral-900 px-6 py-4 text-white sm:px-10 sm:py-8 lg:px-12">
                        <FadeIn className="mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                {[
                                    {
                                        h: 'In application',
                                        l1: 'From 28 June 2025',
                                        l2: 'Transposed into national law',
                                    },
                                    {
                                        h: 'Who this affects',
                                        l1: 'Manufacturers, importers, distributors',
                                        l2:
                                            'Plus service providers in ICT, e-commerce, banking, ticketing, media, and transport sectors — both public and private.',
                                    },
                                    {
                                        h: 'Enforcement & penalties',
                                        l1: 'Fines set by each Member State',
                                        l2: 'Typically aligned with consumer protection regimes',
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
                <Container className="mt-20">
                    <Border />
                    <FadeIn className="mt-6 max-w-5xl">
                        <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
                            Obligations
                        </h2>
                        <ul className="space-y-8">
                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Meet core accessibility requirements
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Ensure products and services are perceivable, operable, understandable, and robust for persons with disabilities, following harmonised EN standards where available.
                                </p>
                                <div className="h-1 w-16 bg-emerald-700 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Design & development integration
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Embed accessibility in design, testing, and procurement processes, ensuring accessibility features are considered from concept to release.
                                </p>
                                <div className="h-1 w-16 bg-amber-500 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Information & instructions
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Provide product and service information, usage instructions, and support channels in accessible formats (digital and physical).
                                </p>
                                <div className="h-1 w-16 bg-indigo-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Digital service compliance
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Websites, apps, e-commerce platforms, and self-service terminals must comply with Web Content Accessibility Guidelines (WCAG) 2.1 AA.
                                </p>
                                <div className="h-1 w-16 bg-pink-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Procurement & supply chain oversight
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Contractually require accessibility compliance from suppliers and ensure third-party products integrate without barriers.
                                </p>
                                <div className="h-1 w-16 bg-cyan-600 mt-2"></div>
                            </li>

                            <li>
                                <h3 className="font-display text-lg font-semibold text-neutral-950">
                                    Documentation & conformity assessment
                                </h3>
                                <p className="text-neutral-600 text-sm">
                                    Maintain technical documentation, declarations of conformity, and evidence to prove compliance to authorities and clients.
                                </p>
                                <div className="h-1 w-16 bg-yellow-600 mt-2"></div>
                            </li>

                            <li>
                                <p className="text-neutral-600 font-bold text-md">And more</p>
                            </li>
                        </ul>
                    </FadeIn>
                </Container>

                {/* What we offer */}
                <Container className="mt-24">
                    <FadeIn className="mt-6 mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            What we offer
                        </h2>
                        <p className="mt-3 text-md text-neutral-600">
                            Programmes are tailored end-to-end and may depend on earlier phases (e.g., digital audits require prior asset inventory).
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
                            {/* Row 1: two wide cards */}
                            {[
                                {
                                    title: 'Accessibility Compliance Lead',
                                    desc:
                                        'We act as your dedicated compliance partner: oversee accessibility strategy, train teams, review designs, and liaise with regulators and clients.',
                                    cta: 'Speak with an expert',
                                },
                                {
                                    title: 'EU Market Access Readiness',
                                    desc:
                                        'Prepare products and services for EU market entry: assess against EAA requirements, close compliance gaps, and produce conformity documentation.',
                                    cta: 'Plan your EU launch',
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
                                    title: 'Accessibility Gap Assessment',
                                    desc:
                                        'Fast evaluation of your products/services against EAA requirements with a practical remediation plan.',
                                    cta: 'Start your gap check',
                                },
                                {
                                    title: 'WCAG 2.1 AA Compliance Sprint',
                                    desc:
                                        'Quickly bring websites, apps, and e-commerce into WCAG 2.1 AA compliance with design, code, and content fixes.',
                                    cta: 'Fix accessibility now',
                                },
                                {
                                    title: 'Accessible Documentation Pack',
                                    desc:
                                        'Prepare product/service manuals, usage instructions, and customer communications in accessible formats.',
                                    cta: 'Get accessible docs',
                                },
                                {
                                    title: 'Supplier Accessibility Onboarding',
                                    desc:
                                        'Integrate accessibility into procurement: RFP templates, contractual clauses, and supplier verification routines.',
                                    cta: 'Align your suppliers',
                                },
                                {
                                    title: 'Self-service Terminal & Device Review',
                                    desc:
                                        'Assess ATMs, kiosks, and ticketing machines for accessibility and deliver retrofit or replacement recommendations.',
                                    cta: 'Check your devices',
                                },
                                {
                                    title: 'Conformity File & Declaration Setup',
                                    desc:
                                        'Create technical documentation and Declarations of Conformity to satisfy enforcement and client requirements.',
                                    cta: 'Prepare your file',
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

                {/* Why now */}
                <Container className="mt-20">
                    <FadeIn className="mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            Why now
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                            {[
                                {
                                    k: 'Mandatory from June 2025',
                                    v: 'Non-compliance risks fines, product withdrawal, or loss of market access.',
                                },
                                {
                                    k: 'Procurement advantage',
                                    v: 'Public and private buyers increasingly require proof of accessibility compliance.',
                                },
                                {
                                    k: 'Brand & customer trust',
                                    v: 'Accessible products and services expand your market reach and reduce complaints.',
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

                {/* How we work */}
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
                                    d: 'Focused audit of products, services, and digital assets to baseline accessibility status.',
                                },
                                {
                                    t: 'Design',
                                    d: 'Co-create accessible designs, procurement clauses, and compliance workflows.',
                                },
                                {
                                    t: 'Implement & Evidence',
                                    d: 'Deliver fixes, train teams, and produce evidence packs for clients and authorities.',
                                },
                                {
                                    t: 'Assure',
                                    d: 'Periodic re-checks to ensure accessibility compliance is maintained over time.',
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
                        <h2 className="font-display text-3xl font-semibold">Comply. Include. Expand your market.</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                            We design Accessibility Act compliance programmes that fit your organisation and generate proof you can stand behind.
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
