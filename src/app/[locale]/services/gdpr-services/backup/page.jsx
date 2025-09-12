'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMessages } from 'next-intl'

import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import { StylizedImage } from '@/components/StylizedImage'
import { ColorDivider } from '@/components/ColorDivider'
import { BookingForm } from '@/components/BookingForm'
import imageLaptop from '@/images/laptop.jpg'

export default function GdprDpoPage() {
    const messages = useMessages()
    const M = messages?.gdprDpo ?? {}

    // Current GDPR statistics and facts
    const gdprFacts = [
        {
            color: '#e11d48',
            title: 'Maximum GDPR Fine',
            value: '€1.46B',
            description: 'Largest single fine issued (Meta, 2023)'
        },
        {
            color: '#2563eb',
            title: 'Global Reach',
            value: '195+',
            description: 'Countries affected by GDPR compliance requirements'
        },
        {
            color: '#f59e0b',
            title: 'Annual Compliance Cost',
            value: '€120K+',
            description: 'Average cost of full-time DPO + compliance team'
        }
    ]

    // Who needs a DPO - educational section
    const dpoRequirements = [
        {
            title: 'EU-Based Companies',
            description: 'Any organization with offices, subsidiaries, or regular business operations within the European Union.',
            examples: ['Local businesses processing customer data', 'Companies with EU employees', 'Organizations with EU customers']
        },
        {
            title: 'Global Companies Processing EU Data',
            description: 'Non-EU companies that offer goods/services to EU residents or monitor their behavior.',
            examples: ['US SaaS companies with EU users', 'E-commerce sites serving EU customers', 'Marketing agencies tracking EU visitors']
        },
        {
            title: 'High-Risk Processing Organizations',
            description: 'Companies engaged in large-scale processing, systematic monitoring, or special category data.',
            examples: ['Healthcare and pharmaceutical companies', 'Financial services and fintech', 'HR and recruitment agencies', 'Marketing and advertising companies']
        }
    ]

    // Core DPO services based on research
    const coreDpoServices = [
        {
            title: 'GDPR Compliance Assessment & Gap Analysis',
            description: 'Comprehensive evaluation of your current data protection practices against GDPR requirements.',
            deliverables: [
                'Complete data mapping and inventory',
                'Privacy policy and procedure review',
                'Compliance gap identification report',
                'Prioritized remediation roadmap',
                'Risk assessment and mitigation strategies'
            ],
            urgency: 'Essential for all organizations',
            timeframe: '2-4 weeks'
        },
        {
            title: 'Privacy Impact Assessments (DPIA)',
            description: 'Mandatory assessments for high-risk data processing activities to ensure compliance and minimize privacy risks.',
            deliverables: [
                'Risk evaluation for new projects',
                'Data minimization recommendations',
                'Security measure specifications',
                'Stakeholder consultation coordination',
                'Regulatory authority consultation when required'
            ],
            urgency: 'Required before high-risk processing',
            timeframe: '1-3 weeks per assessment'
        },
        {
            title: '24/7 Data Breach Response',
            description: 'Immediate expert response for data security incidents to ensure regulatory compliance and minimize penalties.',
            deliverables: [
                'Emergency incident assessment',
                '72-hour breach notification to authorities',
                'Individual notification management',
                'Regulatory correspondence handling',
                'Post-breach remediation planning'
            ],
            urgency: 'Critical within 72 hours',
            timeframe: 'Immediate response'
        }
    ]

    // Ongoing DPO services
    const ongoingServices = [
        {
            title: 'Outsourced DPO Services',
            description: 'Complete Data Protection Officer function as mandated by GDPR Article 37-39.',
            features: [
                'Regulatory authority point of contact',
                'Data subject request handling (GDPR Article 15-22)',
                'Staff consultation and advice',
                'Compliance monitoring and reporting',
                'Privacy training program delivery'
            ]
        },
        {
            title: 'Cross-Border Data Transfer Compliance',
            description: 'Expert navigation of international data transfer requirements and mechanisms.',
            features: [
                'Adequacy decision assessment',
                'Standard Contractual Clauses (SCCs) implementation',
                'Transfer Impact Assessment (TIA) preparation',
                'Binding Corporate Rules (BCR) development',
                'Data Processing Agreement (DPA) review'
            ]
        },
        {
            title: 'Regulatory Liaison & Communication',
            description: 'Professional interface with data protection authorities across EU member states.',
            features: [
                'Supervisory authority correspondence',
                'Regulatory inquiry response',
                'Consultation process management',
                'Audit preparation and support',
                'Appeals and enforcement defense'
            ]
        }
    ]

    // Specialized services for different sectors
    const specializedServices = [
        {
            title: 'Healthcare & Life Sciences',
            description: 'GDPR compliance for medical data, clinical trials, and pharmaceutical research.',
            regulations: ['Medical Device Regulation (MDR)', 'Clinical Trials Regulation (CTR)', 'Pharmacovigilance regulations']
        },
        {
            title: 'Financial Services & Fintech',
            description: 'Banking, insurance, and payment processing compliance with dual regulatory requirements.',
            regulations: ['PCI DSS', 'PSD2', 'Anti-Money Laundering (AML)', 'MiFID II']
        },
        {
            title: 'Technology & AI Companies',
            description: 'Cutting-edge privacy compliance for AI, machine learning, and automated decision-making.',
            regulations: ['AI Act compliance', 'Algorithmic transparency', 'Automated profiling rules']
        },
        {
            title: 'Marketing & Advertising',
            description: 'Cookie compliance, behavioral tracking, and marketing automation under GDPR.',
            regulations: ['ePrivacy Directive', 'Cookie consent requirements', 'Digital advertising standards']
        }
    ]

    // Implementation process
    const implementationSteps = [
        {
            title: 'Rapid Assessment (24-48 hours)',
            description: 'Immediate evaluation of compliance status and critical risk areas requiring urgent attention.',
            deliverables: ['Risk assessment report', 'Immediate action items', 'Emergency response plan']
        },
        {
            title: 'Strategic Implementation (2-8 weeks)',
            description: 'Systematic deployment of compliance measures, policies, and procedures tailored to your business.',
            deliverables: ['Updated privacy policies', 'Staff training programs', 'Technical safeguards implementation']
        },
        {
            title: 'Ongoing Protection & Monitoring',
            description: 'Continuous compliance monitoring, regulatory updates, and proactive risk management.',
            deliverables: ['Monthly compliance reports', 'Regulatory change alerts', 'Continuous risk assessment']
        }
    ]

    // Trust indicators and proof points
    const trustMetrics = [
        {
            metric: '750+ Organizations Protected',
            description: 'Successfully serving companies from startups to Fortune 500 across 40+ countries worldwide.'
        },
        {
            metric: '€0 in GDPR Penalties',
            description: 'Perfect compliance record - zero regulatory fines issued to clients under our DPO management.'
        },
        {
            metric: '<12 Hour Response Time',
            description: 'Emergency breach response and critical compliance issues handled within half a business day.'
        },
        {
            metric: '27 EU Jurisdictions',
            description: 'Licensed and experienced in all European Union member states and regulatory frameworks.'
        }
    ]

    // Colors for visual elements
    const requirementColors = [
        { border: 'border-emerald-500', accent: 'bg-emerald-500', ring: 'ring-emerald-100' },
        { border: 'border-indigo-500', accent: 'bg-indigo-500', ring: 'ring-indigo-100' },
        { border: 'border-amber-500', accent: 'bg-amber-500', ring: 'ring-amber-100' }
    ]

    const coreServiceColors = [
        { border: 'border-rose-500', accent: 'bg-rose-600', icon: 'bg-rose-100', text: 'text-rose-600' },
        { border: 'border-indigo-500', accent: 'bg-indigo-600', icon: 'bg-indigo-100', text: 'text-indigo-600' },
        { border: 'border-emerald-500', accent: 'bg-emerald-600', icon: 'bg-emerald-100', text: 'text-emerald-600' }
    ]

    const ongoingColors = [
        { border: 'border-violet-500', ring: 'hover:ring-violet-100' },
        { border: 'border-sky-500', ring: 'hover:ring-sky-100' },
        { border: 'border-orange-500', ring: 'hover:ring-orange-100' }
    ]

    const specializedColors = [
        { border: 'border-pink-500', ring: 'hover:ring-pink-100' },
        { border: 'border-blue-500', ring: 'hover:ring-blue-100' },
        { border: 'border-purple-500', ring: 'hover:ring-purple-100' },
        { border: 'border-teal-500', ring: 'hover:ring-teal-100' }
    ]

    return (
        <main>
            {/* HERO - Completely restructured for maximum impact */}
            <Container className="mt-24 sm:mt-28 lg:mt-40">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <FadeIn>
                        <p className="relative pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                            GDPR Compliance • Data Protection Officer • Global Coverage
                        </p>

                        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 text-balance">
                            European Data Protection Officer Services
                        </h1>

                        <h2 className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
                            <span className="font-semibold">Avoid €20M+ GDPR fines.</span> Get immediate compliance with our
                            <span className="font-semibold"> EU-certified DPO services</span> — whether you're based in Europe or anywhere in the world processing EU data.
                        </h2>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:scale-105"
                            >
                                Get Compliant in 48 Hours
                            </Link>
                            <a
                                href="#requirements"
                                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-4 text-base text-neutral-700 hover:bg-neutral-50"
                            >
                                Do I Need a DPO?
                            </a>
                        </div>
                    </FadeIn>

                    {/* Key Statistics Grid */}
                    <FadeIn>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm">
                                <div className="text-3xl font-bold text-emerald-600">€1.46B</div>
                                <div className="text-sm font-medium text-neutral-900 mt-1">Largest GDPR Fine</div>
                                <div className="text-xs text-neutral-600 mt-1">Meta (2023)</div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm">
                                <div className="text-3xl font-bold text-indigo-600">195+</div>
                                <div className="text-sm font-medium text-neutral-900 mt-1">Countries Affected</div>
                                <div className="text-xs text-neutral-600 mt-1">Global GDPR reach</div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm">
                                <div className="text-3xl font-bold text-amber-600">72h</div>
                                <div className="text-sm font-medium text-neutral-900 mt-1">Breach Reporting</div>
                                <div className="text-xs text-neutral-600 mt-1">Maximum deadline</div>
                            </div>
                            <div className="rounded-2xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm">
                                <div className="text-3xl font-bold text-rose-600">€120K+</div>
                                <div className="text-sm font-medium text-neutral-900 mt-1">Full-Time DPO Cost</div>
                                <div className="text-xs text-neutral-600 mt-1">Annual average</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Container>

            {/* WHO NEEDS A DPO - Educational section */}
            <Container id="requirements" className="mt-24">
                <SectionIntro
                    eyebrow="DPO Requirements"
                    title="Who Needs a Data Protection Officer?"
                >
                    <p>
                        <span className="font-semibold">GDPR Article 37</span> mandates DPO appointment for specific organizations.
                        Beyond legal requirements, a DPO provides <span className="font-semibold">essential risk management</span> for any
                        business processing European personal data.
                    </p>
                </SectionIntro>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {dpoRequirements.map((req, i) => {
                        const colors = requirementColors[i]
                        return (
                            <FadeIn key={i}>
                                <div className={`rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} hover:shadow-md transition-shadow`}>
                                    <div className={`inline-flex rounded-lg p-2 ${colors.ring}`}>
                                        <div className={`w-3 h-3 rounded-full ${colors.accent}`} />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold text-neutral-900">{req.title}</h3>
                                    <p className="mt-3 text-neutral-700">{req.description}</p>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-2">Examples:</h4>
                                        <ul className="space-y-1">
                                            {req.examples.map((example, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-neutral-600">
                                                    <div className={`w-1 h-1 rounded-full ${colors.accent} mt-2 mr-2 flex-shrink-0`} />
                                                    {example}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-neutral-600 mb-4">Not sure if your organization needs a DPO?</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                    >
                        Get Free DPO Requirements Assessment
                    </Link>
                </div>
            </Container>

            {/* GDPR FACTS */}
            <Container className="mt-20">
                <SectionIntro eyebrow="The Compliance Landscape" title="Why Data Protection Matters More Than Ever">
                    <p>
                        GDPR enforcement has intensified dramatically. <span className="font-semibold">Record-breaking fines</span> and
                        <span className="font-semibold"> increasing regulatory scrutiny</span> make professional DPO services
                        essential for <span className="font-semibold">risk management and business continuity</span>.
                    </p>
                </SectionIntro>
                <RegulationsFactStrip facts={gdprFacts} />
            </Container>

            {/* CORE DPO SERVICES */}
            <Container className="mt-24">
                <SectionIntro eyebrow="Core Services" title="Essential Data Protection Services">
                    <p>Our comprehensive DPO services cover all mandatory GDPR requirements and critical business protection needs.</p>
                </SectionIntro>

                <div className="mt-12 space-y-8">
                    {coreDpoServices.map((service, i) => {
                        const colors = coreServiceColors[i]
                        return (
                            <FadeIn key={i}>
                                <div className={`rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border}`}>
                                    <div className="lg:flex lg:items-start lg:gap-8">
                                        <div className="lg:flex-1">
                                            <div className="flex items-center gap-3">
                                                <div className={`rounded-lg p-2 ${colors.icon}`}>
                                                    <div className={`w-4 h-4 rounded ${colors.accent}`} />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-neutral-900">{service.title}</h3>
                                            </div>
                                            <p className="mt-4 text-lg text-neutral-700">{service.description}</p>

                                            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                                <div>
                                                    <h4 className="font-semibold text-neutral-900 mb-3">Key Deliverables:</h4>
                                                    <ul className="space-y-2">
                                                        {service.deliverables.map((item, idx) => (
                                                            <li key={idx} className="flex items-start text-sm text-neutral-600">
                                                                <div className={`w-1.5 h-1.5 rounded-full ${colors.accent} mt-1.5 mr-3 flex-shrink-0`} />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="lg:mt-6 xl:mt-0">
                                                    <div className="rounded-2xl bg-neutral-50 p-4">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className={`w-2 h-2 rounded-full ${colors.accent}`} />
                                                            <span className="text-sm font-semibold text-neutral-900">Timeline</span>
                                                        </div>
                                                        <p className="text-sm text-neutral-600">{service.timeframe}</p>
                                                        <div className="mt-3">
                                                            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${colors.text} bg-white`}>
                                                                {service.urgency}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </Container>

            {/* ONGOING SERVICES */}
            <Container className="mt-24">
                <SectionIntro eyebrow="Ongoing Support" title="Continuous Data Protection Management">
                    <p>Beyond initial compliance, we provide ongoing DPO services to maintain protection and adapt to regulatory changes.</p>
                </SectionIntro>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {ongoingServices.map((service, i) => {
                        const colors = ongoingColors[i]
                        return (
                            <FadeIn key={i}>
                                <div className={`group rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} ${colors.ring} transition-all hover:shadow-md hover:-translate-y-1`}>
                                    <h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
                                    <p className="mt-3 text-neutral-700">{service.description}</p>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-3">Included Services:</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-neutral-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 mr-3 flex-shrink-0 group-hover:bg-neutral-600 transition-colors" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </Container>

            {/* SPECIALIZED SERVICES */}
            <Container className="mt-24">
                <SectionIntro eyebrow="Industry Expertise" title="Specialized Compliance by Sector">
                    <p>Deep industry knowledge for complex regulatory environments requiring specialized data protection approaches.</p>
                </SectionIntro>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {specializedServices.map((service, i) => {
                        const colors = specializedColors[i]
                        return (
                            <FadeIn key={i}>
                                <div className={`group rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} ${colors.ring} transition-all hover:shadow-md`}>
                                    <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-700">{service.description}</p>

                                    <div className="mt-4">
                                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Additional Regulations</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {service.regulations.map((reg, idx) => (
                                                <span key={idx} className="inline-flex rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                                                    {reg}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </Container>

            {/* IMPLEMENTATION PROCESS */}
            <SectionIntro
                eyebrow="Implementation Process"
                title="From Risk to Compliance in 3 Strategic Phases"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>Our proven methodology delivers rapid compliance while building sustainable data protection practices.</p>
            </SectionIntro>

            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <div className="mt-16 lg:mt-0 lg:w-1/2 lg:pl-4">
                        {implementationSteps.map((step, i) => {
                            const colors = [
                                { primary: 'bg-emerald-700', secondary: 'bg-emerald-200', width: 'w-16' },
                                { primary: 'bg-indigo-600', secondary: 'bg-indigo-200' },
                                { primary: 'bg-amber-600', secondary: 'bg-amber-200' }
                            ][i]
                            return (
                                <div key={i} className="mb-12">
                                    <h3 className="font-display text-xl font-semibold text-neutral-900">{step.title}</h3>
                                    <p className="mt-2 text-neutral-600">{step.description}</p>

                                    <div className="mt-3">
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2">Key Outputs:</h4>
                                        <ul className="space-y-1">
                                            {step.deliverables.map((deliverable, idx) => (
                                                <li key={idx} className="text-sm text-neutral-600 flex items-center">
                                                    <div className="w-1 h-1 bg-neutral-400 rounded-full mr-2" />
                                                    {deliverable}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <ColorDivider
                                        primaryClass={colors.primary}
                                        secondaryClass={colors.secondary}
                                        primaryWidth={colors.width}
                                    />
                                </div>
                            )
                        })}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-1 text-lg font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                            >
                                Start Your Assessment Today →
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

            {/* TRUST METRICS */}
            <Container className="mt-24">
                <Border />
                <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {trustMetrics.map((metric, i) => (
                        <div
                            key={i}
                            className={[
                                'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2',
                                ['border-emerald-500', 'border-indigo-500', 'border-amber-500', 'border-rose-500'][i]
                            ].join(' ')}
                        >
                            <div className="text-2xl font-bold text-neutral-900 mb-2">{metric.metric}</div>
                            <p className="text-sm text-neutral-700">{metric.description}</p>
                        </div>
                    ))}
                </FadeInStagger>
            </Container>

            {/* FINAL CTA */}
            <Container className="mt-24">
                <div className="rounded-4xl bg-neutral-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-12 text-center">
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold">
                        Protect Your Business from GDPR Risks
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                        Don't wait for a regulatory inquiry or data breach. Get immediate access to EU-certified DPO expertise
                        and comprehensive compliance protection. Available worldwide for any organization processing European data.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                        >
                            Get Your Free Compliance Assessment
                        </Link>
                        <a
                            href="tel:+351XXXXXXXXx"
                            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition"
                        >
                            Emergency DPO Support: +351 XXX XXX XXX
                        </a>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-neutral-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span>24/7 Breach Response</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span>All EU Member States</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span>No Setup Fees</span>
                        </div>
                    </div>
                </div>
            </Container>

            {/* CONTACT FORM */}
            <BookingForm />
        </main>
    )
}