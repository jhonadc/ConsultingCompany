
// src/app/[locale]/aiservices/highrisk/page.jsx
'use client'

import { useTranslations, useMessages } from 'next-intl'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import { BookingForm } from '@/components/BookingForm'
import LocaleLink from '@/components/LocaleLink'

import {
    ExclamationTriangleIcon,
    ShieldCheckIcon,
    ClipboardDocumentCheckIcon,
    QueueListIcon,
    DocumentMagnifyingGlassIcon,
    BoltIcon,
} from '@heroicons/react/20/solid'

/* helpers */
const arr = (v) => (Array.isArray(v) ? v : [])

/* palettes (match your original) */
const FACT_COLORS = ['#10B981', '#6366F1', '#F59E0B'] // emerald, indigo, amber

// WHY (5 items)
const WHY_PILLS = [
    'bg-emerald-50 text-emerald-600 ring-emerald-100',
    'bg-indigo-50  text-indigo-600  ring-indigo-100',
    'bg-amber-50   text-amber-600   ring-amber-100',
    'bg-blue-50    text-blue-600    ring-blue-100',
    'bg-pink-50    text-pink-600    ring-pink-100'
]
const WHY_ICONS = [
    ClipboardDocumentCheckIcon, // Law × Engineering
    ShieldCheckIcon,            // Defensible outcomes
    DocumentMagnifyingGlassIcon,// Precision
    BoltIcon,                   // Speed
    QueueListIcon               // Roadmap
]

// DELIVERABLES (6 items)
const DELIV_PILLS = [
    'bg-emerald-50 text-emerald-600 ring-emerald-100',
    'bg-indigo-50  text-indigo-600  ring-indigo-100',
    'bg-amber-50   text-amber-600   ring-amber-100',
    'bg-blue-50    text-blue-600    ring-blue-100',
    'bg-pink-50    text-pink-600    ring-pink-100',
    'bg-purple-50  text-purple-600  ring-purple-100'
]
const DELIV_ICONS = [
    ShieldCheckIcon,            // Risk tier decision
    DocumentMagnifyingGlassIcon,// Annex mapping
    ExclamationTriangleIcon,    // Borderline analysis
    ClipboardDocumentCheckIcon, // Evidence list
    QueueListIcon,              // Action plan
    BoltIcon                    // Time to value
]

export default function HighRiskAssessmentPage() {
    useTranslations()
    const m = useMessages()
    const hr = m?.highRisk || {}

    const hero = hr?.hero || {}
    const hasHero = !!hero?.title

    const whyMattersTitle = hr?.whyMatters?.title
    const facts = arr(hr?.whyMatters?.facts).map((f, i) => ({
        color: f?.color || FACT_COLORS[i % FACT_COLORS.length],
        title: f?.title,
        value: f?.value,
        description: f?.description
    }))
    const hasWhyMatters = !!whyMattersTitle || facts.length > 0

    const why = hr?.why || {}
    const features = arr(why?.features)
    const hasWhy = !!why?.eyebrow || !!why?.title || !!why?.body || features.length > 0

    const deliver = hr?.deliverables || {}
    const deliverItems = arr(deliver?.items)
    const hasDeliver = !!deliver?.eyebrow || !!deliver?.title || !!deliver?.body || deliverItems.length > 0

    const process = hr?.process || {}
    const steps = arr(process?.steps)
    const hasProcess = !!process?.title || steps.length > 0

    const cta = hr?.cta || {}
    const hasCta = !!cta?.title || !!cta?.body

    const back = hr?.back || {}
    const hasBack = !!back?.href || !!back?.label

    return (
        <>
            {/* HERO */}
            {hasHero && (
                <Container className="mt-5 sm:mt-8 lg:mt-10">
                    <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20 text-white">
                        <FadeIn className="max-w-3xl">
                            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
                                {hero.title}
                            </h1>
                            {hero?.tagline && (
                                <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-200">{hero.tagline}</p>
                            )}
                            {hero?.body && (
                                <p className="mt-5 text-md sm:text-base text-neutral-300">{hero.body}</p>
                            )}
                        </FadeIn>
                    </div>
                </Container>
            )}

            {/* WHY THIS MATTERS */}
            {hasWhyMatters && (
                <Container className="mt-24">
                    <Border />
                    <FadeIn className="mt-12">
                        {whyMattersTitle && (
                            <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                {whyMattersTitle}
                            </h2>
                        )}
                        {facts.length > 0 && <RegulationsFactStrip facts={facts} />}
                    </FadeIn>
                </Container>
            )}

            {/* WHY Oversight */}
            {hasWhy && (
                <Container className="mt-24 sm:mt-32">
                    <FadeIn>
                        <SectionIntro eyebrow={why?.eyebrow} title={why?.title}>
                            {why?.body && <p className="mx-auto max-w-3xl">{why.body}</p>}
                        </SectionIntro>

                        {features.length > 0 && (
                            <div className="mx-auto mt-8 max-w-3xl lg:mt-12 lg:max-w-6xl">
                                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {features.map(({ name, desc }, idx) => {
                                        const Icon = WHY_ICONS[idx % WHY_ICONS.length]
                                        const pill = WHY_PILLS[idx % WHY_PILLS.length]
                                        return (
                                            <li
                                                key={`${name} -${idx} `}
                                                className="group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <span className={`inline - flex h - 9 w - 9 items - center justify - center rounded - full ring - 1 ${pill} `}>
                                                        <Icon aria-hidden="true" className="h-5 w-5" />
                                                    </span>
                                                    <div>
                                                        <h3 className="text-sm font-semibold text-neutral-900">{name}</h3>
                                                        <p className="mt-1 text-sm text-neutral-700">{desc}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )}
                    </FadeIn>
                </Container>
            )}

            {/* DELIVERABLES */}
            {hasDeliver && (
                <Container id="deliverables" className="mt-24 sm:mt-32">
                    <SectionIntro eyebrow={deliver?.eyebrow} title={deliver?.title}>
                        {deliver?.body && <p className="mx-auto max-w-3xl">{deliver.body}</p>}
                    </SectionIntro>

                    {deliverItems.length > 0 && (
                        <div className="mx-auto mt-10 max-w-3xl lg:mt-20 lg:max-w-6xl">
                            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
                                {deliverItems.map(({ name, desc }, idx) => {
                                    const Icon = DELIV_ICONS[idx % DELIV_ICONS.length]
                                    const pill = DELIV_PILLS[idx % DELIV_PILLS.length]
                                    return (
                                        <div key={`${name} -${idx} `} className="flex items-start gap-3">
                                            <span className={`inline - flex h - 9 w - 9 items - center justify - center rounded - full ring - 1 ${pill} `}>
                                                <Icon aria-hidden="true" className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <dt className="text-md font-semibold text-black">{name}</dt>
                                                <dd className="mt-1 text-md text-neutral-700 leading-relaxed">{desc}</dd>
                                            </div>
                                        </div>
                                    )
                                })}
                            </dl>
                        </div>
                    )}
                </Container>
            )}

            {/* PROCESS */}
            {hasProcess && (
                <Container className="mt-24 scroll-mt-28 sm:scroll-mt-32">
                    <FadeIn className="max-w-6xl mx-auto">
                        {process?.title && (
                            <h2 className="text-center font-display text-3xl font-semibold text-neutral-950 mt-20">
                                {process.title}
                            </h2>
                        )}

                        {steps.length > 0 && (
                            <div className="mt-8 space-y-4">
                                {steps.map(({ title, desc, bullets }, idx) => {
                                    const colors = [
                                        { border: 'border-emerald-500', dot: 'before:bg-emerald-500', ring: 'group-open:ring-emerald-500/15' },
                                        { border: 'border-indigo-500', dot: 'before:bg-indigo-500', ring: 'group-open:ring-indigo-500/15' },
                                        { border: 'border-amber-500', dot: 'before:bg-amber-500', ring: 'group-open:ring-amber-500/15' },
                                        { border: 'border-rose-500', dot: 'before:bg-rose-500', ring: 'group-open:ring-rose-500/15' },
                                    ]
                                    const { border, dot, ring } = colors[idx % colors.length]

                                    return (
                                        <details
                                            key={`${title} -${idx} `}
                                            className={`group rounded - 2xl bg - white p - 5 ring - 1 ring - neutral - 950 / 10 shadow - sm open: ring - neutral - 900 / 10 ${ring} border - l - 2 ${border} `}
                                        >
                                            <summary className="flex cursor-pointer list-none items-center justify-between">
                                                <span className={`relative pl - 3 font - medium text - neutral - 900 before:absolute before: left - 0 before: top - 1 / 2 before: h - 4 before: w - 1 before: -translate - y - 1 / 2 before:rounded ${dot} `}>
                                                    {title}
                                                </span>
                                                <svg className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.92 1.18l-4.17 3.3a.75.75 0 01-.92 0l-4.17-3.3a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                                </svg>
                                            </summary>

                                            <div className="mt-3 grid gap-3 text-md text-neutral-700 md:grid-cols-2">
                                                {desc && <p>{desc}</p>}
                                                {Array.isArray(bullets) && bullets.length > 0 && (
                                                    <ul className="list-disc pl-5 space-y-1">
                                                        {bullets.map((b, i) => <li key={i}>{b}</li>)}
                                                    </ul>
                                                )}
                                            </div>
                                        </details>
                                    )
                                })}
                            </div>
                        )}
                    </FadeIn>
                </Container>
            )}

            {/* CTA */}
            {hasCta && (
                <Container className="mt-32">
                    <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12">
                        <div className="text-center">
                            <h2 className="font-display text-3xl font-semibold">{cta.title}</h2>
                            {cta?.body && (
                                <p className="mx-auto mt-4 max-w-2xl text-neutral-300">{cta.body}</p>
                            )}
                            <LocaleLink
                                href={cta?.href || '/contact'}
                                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                            >
                                {cta?.button || 'Request assessment'}
                            </LocaleLink>
                        </div>
                    </div>
                </Container>
            )}

            {/* Booking */}
            <BookingForm />

            {/* Back */}
            {hasBack && (
                <Container className="mt-15">
                    <FadeIn className="mx-auto max-w-6xl">
                        <div className="flex justify-end">
                            <LocaleLink
                                href={back?.href || '/regulations/ai-act'}
                                className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-700 px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
                            >
                                <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-current text-current transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
                                <span>{back?.label || 'Back to AI Act'}</span>
                            </LocaleLink>
                        </div>
                    </FadeIn>
                </Container>
            )}
        </>
    )
}

