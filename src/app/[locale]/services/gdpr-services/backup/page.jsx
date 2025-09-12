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
import LocaleLink from '@/components/LocaleLink'

const arr = (v) => (Array.isArray(v) ? v : [])

export default function GdprDpoPage() {
    const messages = useMessages()
    const M = messages?.gdprDpo ?? {}

    const hero = M.hero ?? {}
    const facts = arr(M.facts)
    const requirements = arr(M.requirements?.items)
    const coreServices = arr(M.coreServices?.items)
    const ongoing = arr(M.ongoing?.items)
    const specialized = arr(M.specialized?.items)
    const steps = arr(M.steps?.items)
    const trust = arr(M.trust?.items)

    // style tokens (static)
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
            {/* HERO */}
            <Container className="mt-24 sm:mt-28 lg:mt-40">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <FadeIn>
                        <p className="relative pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                            {hero.eyebrow}
                        </p>

                        <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 text-balance">
                            {hero.title}
                        </h1>

                        <h2 className="mt-4 text-lg sm:text-xl text-neutral-700 leading-relaxed">
                            <span className="font-semibold">{hero.highlight1}</span> {hero.lead1}{' '}
                            <span className="font-semibold">{hero.highlight2}</span> {hero.lead2}
                        </h2>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <LocaleLink
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:scale-105"
                            >
                                {hero.ctaPrimary}
                            </LocaleLink>
                        </div>
                    </FadeIn>

                    {/* Key Statistics Grid */}
                    <FadeIn>
                        <div className="grid grid-cols-2 gap-6">
                            {arr(M.heroStats).map((card, i) => (
                                <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm">
                                    <div className={`text-3xl font-bold ${card.valueClass}`}>{card.value}</div>
                                    <div className="text-sm font-medium text-neutral-900 mt-1">{card.title}</div>
                                    <div className="text-xs text-neutral-600 mt-1">{card.caption}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Container>

            {/* WHO NEEDS A DPO */}
            <Container id="requirements" className="mt-24">
                <SectionIntro
                    eyebrow={M.requirements?.eyebrow}
                    title={M.requirements?.title}
                >
                    <p dangerouslySetInnerHTML={{ __html: M.requirements?.body ?? '' }} />
                </SectionIntro>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {requirements.map((req, i) => {
                        const colors = requirementColors[i % requirementColors.length]
                        return (
                            <FadeIn key={i}>
                                <div className={`rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} hover:shadow-md transition-shadow`}>
                                    <div className={`inline-flex rounded-lg p-2 ${colors.ring}`}>
                                        <div className={`w-3 h-3 rounded-full ${colors.accent}`} />
                                    </div>
                                    <h3 className="mt-4 text-xl font-semibold text-neutral-900">{req.title}</h3>
                                    <p className="mt-3 text-neutral-700">{req.description}</p>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-2">{M.requirements?.examplesLabel}</h4>
                                        <ul className="space-y-1">
                                            {arr(req.examples).map((example, idx) => (
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
                    <p className="text-neutral-600 mb-4">{M.requirements?.helper}</p>
                    <LocaleLink
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                    >
                        {M.requirements?.cta}
                    </LocaleLink>
                </div>
            </Container>

            {/* GDPR FACTS */}
            <Container className="mt-20">
                <SectionIntro eyebrow={M.factsIntro?.eyebrow} title={M.factsIntro?.title}>
                    <p dangerouslySetInnerHTML={{ __html: M.factsIntro?.body ?? '' }} />
                </SectionIntro>
                <RegulationsFactStrip facts={facts} />
            </Container>

            {/* CORE DPO SERVICES */}
            <Container className="mt-24">
                <SectionIntro eyebrow={M.coreServices?.eyebrow} title={M.coreServices?.title}>
                    <p>{M.coreServices?.intro}</p>
                </SectionIntro>

                <div className="mt-12 space-y-8">
                    {coreServices.map((service, i) => {
                        const colors = coreServiceColors[i % coreServiceColors.length]
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
                                                    <h4 className="font-semibold text-neutral-900 mb-3">{M.coreServices?.deliverablesLabel}</h4>
                                                    <ul className="space-y-2">
                                                        {arr(service.deliverables).map((item, idx) => (
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
                                                            <span className="text-sm font-semibold text-neutral-900">{M.coreServices?.timelineLabel}</span>
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
                <SectionIntro eyebrow={M.ongoing?.eyebrow} title={M.ongoing?.title}>
                    <p>{M.ongoing?.intro}</p>
                </SectionIntro>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {ongoing.map((service, i) => {
                        const colors = ongoingColors[i % ongoingColors.length]
                        return (
                            <FadeIn key={i}>
                                <div className={`group rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} ${colors.ring} transition-all hover:shadow-md hover:-translate-y-1`}>
                                    <h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
                                    <p className="mt-3 text-neutral-700">{service.description}</p>

                                    <div className="mt-6">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-3">{M.ongoing?.featuresLabel}</h4>
                                        <ul className="space-y-2">
                                            {arr(service.features).map((feature, idx) => (
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
                <SectionIntro eyebrow={M.specialized?.eyebrow} title={M.specialized?.title}>
                    <p>{M.specialized?.intro}</p>
                </SectionIntro>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {specialized.map((service, i) => {
                        const colors = specializedColors[i % specializedColors.length]
                        return (
                            <FadeIn key={i}>
                                <div className={`group rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} ${colors.ring} transition-all hover:shadow-md`}>
                                    <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-700">{service.description}</p>

                                    <div className="mt-4">
                                        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">{M.specialized?.regsLabel}</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {arr(service.regulations).map((reg, idx) => (
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
                eyebrow={M.steps?.eyebrow}
                title={M.steps?.title}
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>{M.steps?.intro}</p>
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
                        {steps.map((step, i) => {
                            const colors = [
                                { primary: 'bg-emerald-700', secondary: 'bg-emerald-200', width: 'w-16' },
                                { primary: 'bg-indigo-600', secondary: 'bg-indigo-200' },
                                { primary: 'bg-amber-600', secondary: 'bg-amber-200' }
                            ][i % 3]
                            return (
                                <div key={i} className="mb-12">
                                    <h3 className="font-display text-xl font-semibold text-neutral-900">{step.title}</h3>
                                    <p className="mt-2 text-neutral-600">{step.description}</p>

                                    <div className="mt-3">
                                        <h4 className="text-sm font-semibold text-neutral-700 mb-2">{M.steps?.outputsLabel}</h4>
                                        <ul className="space-y-1">
                                            {arr(step.deliverables).map((deliverable, idx) => (
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
                            <LocaleLink
                                href="/contact"
                                className="inline-flex items-center gap-1 text-lg font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                            >
                                {M.steps?.cta}
                            </LocaleLink>
                        </div>
                    </div>
                </div>
            </Container>

            {/* TRUST METRICS */}
            <Container className="mt-24">
                <Border />
                <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {trust.map((metric, i) => (
                        <div
                            key={i}
                            className={[
                                'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2',
                                ['border-emerald-500', 'border-indigo-500', 'border-amber-500', 'border-rose-500'][i % 4]
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
                        {M.finalCta?.title}
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
                        {M.finalCta?.body}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <LocaleLink
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                        >
                            {M.finalCta?.ctaPrimary}
                        </LocaleLink>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-neutral-400">
                        {arr(M.finalCta?.badges).map((b, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${b.dotClass}`}></div>
                                <span>{b.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            {/* CONTACT FORM */}
            <BookingForm />
        </main>
    )
}
