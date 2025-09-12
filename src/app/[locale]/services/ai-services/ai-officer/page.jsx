'use client'

import { useMessages } from 'next-intl'

import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import { StylizedImage } from '@/components/StylizedImage'
import { ColorDivider } from '@/components/ColorDivider'
import { BookingForm } from '@/components/BookingForm'
import LocaleLink from '@/components/LocaleLink'
import imageLaptop from '@/images/laptop.jpg'

const arr = (v) => (Array.isArray(v) ? v : [])

export default function AiOfficerPage() {
    const messages = useMessages()
    const M = messages?.aiOfficer ?? {}

    const hero = M.hero ?? {}
    const facts = arr(M.facts)
    const requirements = arr(M.requirements?.items)
    const coreServices = arr(M.coreServices?.items)
    const ongoing = arr(M.ongoing?.items)

    // AIMS (ISO/IEC 42001)
    const aimsItems = arr(M.aims?.items)
    const steps = arr(M.steps?.items)
    const trust = arr(M.trust?.items)

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

    const aimsColors = [
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

            {/* REQUIREMENTS */}
            <Container id="requirements" className="mt-24">
                <SectionIntro
                    eyebrow={M.requirements?.eyebrow}
                    title={M.requirements?.title}
                >
                    <p dangerouslySetInnerHTML={{ __html: M.requirements?.body ?? '' }} />
                </SectionIntro>

                {/* mesma altura e alinhamento entre colunas */}
                <div className="mt-12 grid gap-8 lg:grid-cols-3 items-stretch">
                    {requirements.map((req, i) => {
                        const colors = requirementColors[i % requirementColors.length]
                        return (
                            <FadeIn key={i}>
                                {/* card ocupa 100% da altura disponível */}
                                <div
                                    className={`h-full flex flex-col rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} hover:shadow-md transition-shadow`}
                                >
                                    {/* bolinha e título na mesma linha, bolinha no topo */}
                                    <div className="flex items-start gap-2">
                                        <span className={`mt-1 inline-block w-3 h-3 rounded-full ${colors.accent} shrink-0`} />
                                        <h3 className="text-xl font-semibold text-neutral-900 leading-tight">
                                            {req.title}
                                        </h3>
                                    </div>

                                    {/* descrição cresce para equalizar alturas */}
                                    <p className="mt-3 text-neutral-700 flex-1">
                                        {req.description}
                                    </p>

                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-neutral-900 mb-2">
                                            {M.requirements?.examplesLabel}
                                        </h4>
                                        <ul className="space-y-2">
                                            {req.examples.map((example, idx) => (
                                                <li key={idx} className="flex items-start text-sm text-neutral-600">
                                                    <span className={`mt-2 mr-2 inline-block w-1 h-1 rounded-full ${colors.accent} shrink-0`} />
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


            {/* FACTS */}
            <Container className="mt-20">
                <SectionIntro eyebrow={M.factsIntro?.eyebrow} title={M.factsIntro?.title}>
                    <p dangerouslySetInnerHTML={{ __html: M.factsIntro?.body ?? '' }} />
                </SectionIntro>
                <RegulationsFactStrip facts={facts} />
            </Container>

            {/* CORE SERVICES */}
            <Container className="mt-24">
                <SectionIntro eyebrow={M.coreServices?.eyebrow} title={M.coreServices?.title}>
                    <p>{M.coreServices?.intro}</p>
                </SectionIntro>

                <div className="mt-12 space-y-8">
                    {coreServices.map((service, i) => {
                        const colors = coreServiceColors[i % coreServiceColors.length]
                        return (
                            <FadeIn key={i}>
                                <div
                                    className={`rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border}`}
                                >
                                    <div className="lg:flex lg:items-start lg:gap-8">
                                        <div className="lg:flex-1">
                                            {/* quadradinho colorido + título */}
                                            <div className="flex items-center gap-3">
                                                <div className={`rounded-lg p-2 ${colors.icon}`}>
                                                    <div className={`w-4 h-4 rounded ${colors.accent}`} />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-neutral-900">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            <p className="mt-4 text-lg text-neutral-700">
                                                {service.description}
                                            </p>

                                            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                                <div>
                                                    <h4 className="font-semibold text-neutral-900 mb-3">
                                                        {M.coreServices?.deliverablesLabel}
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {service.deliverables.map((item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start text-sm text-neutral-600"
                                                            >
                                                                <div
                                                                    className={`w-1.5 h-1.5 rounded-full ${colors.accent} mt-1.5 mr-3 flex-shrink-0`}
                                                                />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
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

            {/* ONGOING */}
            <Container className="mt-24">
                <SectionIntro eyebrow={M.ongoing?.eyebrow} title={M.ongoing?.title}>
                    <p>{M.ongoing?.intro}</p>
                </SectionIntro>

                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {ongoing.map((service, i) => {
                        const colors = ongoingColors[i % ongoingColors.length]
                        return (
                            <FadeIn key={i}>
                                <div className={`rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} ${colors.ring}`}>
                                    <h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
                                    <p className="mt-3 text-neutral-700">{service.description}</p>
                                    <ul className="mt-6 space-y-2">
                                        {arr(service.features).map((f, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-neutral-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 mr-3" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        )
                    })}
                </div>
            </Container>

            {/* AIMS (ISO/IEC 42001) */}
            <Container className="mt-24">
                <SectionIntro eyebrow={M.aims?.eyebrow} title={M.aims?.title}>
                    <p>{M.aims?.intro}</p>
                </SectionIntro>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                    {aimsItems.map((s, i) => {
                        const colors = aimsColors[i % aimsColors.length]
                        return (
                            <FadeIn key={i}>
                                <div className={`rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-4 ${colors.border} ${colors.ring}`}>
                                    <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-700">{s.description}</p>
                                    <div className="mt-4">
                                        <h4 className="text-xs font-semibold text-neutral-500 uppercase mb-2">{M.aims?.regsLabel}</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {arr(s.regulations).map((r, idx) => (
                                                <span key={idx} className="inline-flex rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600">
                                                    {r}
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

            {/* STEPS */}
            <SectionIntro eyebrow={M.steps?.eyebrow} title={M.steps?.title} className="mt-24 sm:mt-32 lg:mt-40">
                <p>{M.steps?.intro}</p>
            </SectionIntro>

            <Container className="mt-16">
                <div className="lg:flex lg:items-center">
                    <div className="lg:w-1/2 lg:pr-12">
                        <FadeIn>
                            <StylizedImage src={imageLaptop} sizes="(min-width: 1024px) 41rem, 31rem" />
                        </FadeIn>
                    </div>
                    <div className="mt-16 lg:mt-0 lg:w-1/2">
                        {steps.map((step, i) => (
                            <div key={i} className="mb-12">
                                <h3 className="font-display text-xl font-semibold text-neutral-900">{step.title}</h3>
                                <p className="mt-2 text-neutral-600">{step.description}</p>
                                <ul className="mt-3 space-y-1">
                                    {arr(step.deliverables).map((d, idx) => (
                                        <li key={idx} className="text-sm text-neutral-600 flex items-center">
                                            <div className="w-1 h-1 bg-neutral-400 rounded-full mr-2" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                                <ColorDivider primaryClass="bg-emerald-700" secondaryClass="bg-emerald-200" />
                            </div>
                        ))}
                        <LocaleLink
                            href="/contact"
                            className="inline-flex items-center gap-1 text-lg font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                        >
                            {M.steps?.cta}
                        </LocaleLink>
                    </div>
                </div>
            </Container>

            {/* TRUST */}
            <Container className="mt-24">
                <SectionIntro
                    eyebrow={M.trust?.eyebrow}
                    title={M.trust?.title}
                >
                    {M.trust?.intro ? <p>{M.trust.intro}</p> : null}
                </SectionIntro>

                <Border />
                <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {trust.map((t, i) => {
                        // cycle some nice accent colors; or override via JSON (see below)
                        const palette = M.trust?.colors ?? [
                            'border-emerald-500',
                            'border-indigo-500',
                            'border-amber-500',
                            'border-rose-500'
                        ]
                        const borderClass = palette[i % palette.length]

                        return (
                            <div
                                key={i}
                                className={[
                                    'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2',
                                    borderClass,
                                ].join(' ')}
                            >
                                <div className="text-2xl font-bold text-neutral-900 mb-2">{t.metric}</div>
                                <p className="text-sm text-neutral-700">{t.description}</p>
                            </div>
                        )
                    })}
                </FadeInStagger>
            </Container>


            {/* FINAL CTA */}
            <Container className="mt-24">
                <div className="rounded-4xl bg-neutral-950 px-6 py-12 text-white text-center">
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold">{M.finalCta?.title}</h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">{M.finalCta?.body}</p>
                    <LocaleLink
                        href="/contact"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 shadow-sm hover:scale-105"
                    >
                        {M.finalCta?.ctaPrimary}
                    </LocaleLink>
                </div>
            </Container>

            <BookingForm />
        </main>
    )
}
