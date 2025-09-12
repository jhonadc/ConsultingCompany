'use client'

import Link from 'next/link'
import { useTranslations, useMessages } from 'next-intl'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import LocaleLink from '@/components/LocaleLink'

const arr = (v) => (Array.isArray(v) ? v : [])

/* Accent palettes to match your other regulation pages */
const WHY_COLORS = [
    { border: 'border-l-2 border-amber-500', dot: 'before:bg-amber-500', ring: 'hover:ring-amber-200' },
    { border: 'border-l-2 border-pink-500', dot: 'before:bg-pink-500', ring: 'hover:ring-pink-200' },
    { border: 'border-l-2 border-emerald-500', dot: 'before:bg-emerald-500', ring: 'hover:ring-emerald-200' },
]
const HOW_ACCENTS = ['before:bg-cyan-500', 'before:bg-violet-500', 'before:bg-rose-500', 'before:bg-amber-500']
const OFFER_BARS = ['border-pink-500', 'border-amber-500', 'border-emerald-500', 'border-sky-500', 'border-violet-500', 'border-cyan-500', 'border-rose-500', 'border-indigo-500']

export default function AccessibilityPage() {
    const t = useTranslations('accessibility')
    const all = useMessages()
    const m = all?.accessibility ?? {}

    const facts = arr(m?.facts)
    const obligations = arr(m?.obligations?.items)
    const offerCards = arr(m?.offer?.cards)
    const whyItems = arr(m?.whyNow?.items)
    const steps = arr(m?.howWeWork?.steps)

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-20">
            <BackButton />

            <div className="border-t-4 border-fuchsia-400 pt-6">
                {/* Header */}
                <SectionIntro title={t('header.title')}>
                    <p className="text-md">{t('header.subtitle')}</p>
                </SectionIntro>

                {/* Facts */}
                {facts.length > 0 && <RegulationsFactStrip facts={facts} />}

                {/* Obligations */}
                <Container className="mt-20">
                    <Border />
                    <FadeIn className="mt-6 max-w-5xl">
                        <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
                            {t('obligations.title')}
                        </h2>
                        <ul className="space-y-8">
                            {obligations.map(({ title, text, barClass }, idx) => (
                                <li key={idx}>
                                    <h3 className="font-display text-lg font-semibold text-neutral-950">{title}</h3>
                                    <p className="text-neutral-600 text-sm">{text}</p>
                                    {/* curved mini-bar (same pattern as other pages) */}
                                    <div className="mt-2 h-px w-16 rounded bg-neutral-300">
                                        <span className={['block h-px w-10 rounded', barClass].join(' ')} />
                                    </div>
                                </li>
                            ))}
                            <li>
                                <p className="text-neutral-600 font-bold text-md">{t('obligations.more')}</p>
                            </li>
                        </ul>
                    </FadeIn>
                </Container>

                {/* What we offer — with curved left accent on each card */}
                <Container className="mt-24">
                    <FadeIn className="mt-6 mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            {t('offer.title')}
                        </h2>
                        <p className="mt-3 text-md text-neutral-600">{t('offer.subtitle')}</p>

                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
                            {/* First row: 2 wide cards */}
                            {offerCards.slice(0, 2).map(({ title, desc, cta }, i) => {
                                const bar = OFFER_BARS[i % OFFER_BARS.length]
                                return (
                                    <div key={`wide-${i}`} className="group relative lg:col-span-3">
                                        <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.01]" />
                                        <div className={['relative z-10 h-full rounded-[calc(1.5rem+1px)] p-7 flex flex-col border-l-2', bar].join(' ')}>
                                            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                                            <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                                            <div className="mt-auto pt-5">
                                                <LocaleLink href="/contact" className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white hover:scale-105">
                                                    {cta}
                                                </LocaleLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {/* Remaining cards */}
                            {offerCards.slice(2).map(({ title, desc, cta }, i) => {
                                const bar = OFFER_BARS[(i + 2) % OFFER_BARS.length]
                                return (
                                    <div key={`rest-${i}`} className="group relative lg:col-span-2">
                                        <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.01]" />
                                        <div className={['relative z-10 h-full rounded-[calc(1.5rem+1px)] p-7 flex flex-col border-l-2', bar].join(' ')}>
                                            <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                                            <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                                            <div className="mt-auto pt-5">
                                                <LocaleLink href="/contact" className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white hover:scale-105">
                                                    {cta}
                                                </LocaleLink>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </FadeIn>
                </Container>

                {/* Why now — curved left accent + colored dot */}
                <Container className="mt-20">
                    <FadeIn className="mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            {t('whyNow.title')}
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                            {whyItems.map(({ k, v }, idx) => {
                                const { border, dot, ring } = WHY_COLORS[idx % WHY_COLORS.length]
                                return (
                                    <div
                                        key={idx}
                                        className={[
                                            'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm text-left transition',
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
                                )
                            })}
                        </div>
                    </FadeIn>
                </Container>

                {/* How we work — tiny colored bar before each step title */}
                <Container className="mt-24">
                    <Border />
                    <FadeIn className="mt-6 mx-auto max-w-6xl">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                            {t('howWeWork.title')}
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
                            {steps.map(({ t: title, d }, idx) => (
                                <div key={idx} className="group relative">
                                    <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transition-transform group-hover:-translate-y-0.5 group-hover:scale-[1.01]" />
                                    <div className="relative z-10 h-full rounded-[calc(1.5rem+1px)] p-7 text-left">
                                        <h3
                                            className={[
                                                'relative pl-3 text-lg font-semibold text-neutral-900',
                                                'before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded',
                                                HOW_ACCENTS[idx % HOW_ACCENTS.length],
                                            ].join(' ')}
                                        >
                                            {title}
                                        </h3>
                                        <p className="mt-2 text-sm text-neutral-700">{d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-left">
                            <LocaleLink
                                href="/process"
                                className="inline-block text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                            >
                                {t('howWeWork.processLinkLabel')}
                            </LocaleLink>
                        </div>
                    </FadeIn>
                </Container>

                {/* CTA */}
                <Container className="mt-28">
                    <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12 text-center">
                        <h2 className="font-display text-3xl font-semibold">{t('cta.title')}</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-neutral-300">{t('cta.body')}</p>
                        <LocaleLink
                            href="/contact"
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                        >
                            {t('cta.button')}
                        </LocaleLink>
                    </div>
                </Container>
            </div>
        </Container>
    )
}
