'use client'

import { useTranslations, useMessages } from 'next-intl'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import LocaleLink from '@/components/LocaleLink'

const arr = (v) => (Array.isArray(v) ? v : [])

const OFFER_COLORS = [
    { border: 'border-l-2 border-amber-500', ring: 'hover:ring-amber-200' },
    { border: 'border-l-2 border-pink-500', ring: 'hover:ring-pink-200' },
    { border: 'border-l-2 border-emerald-500', ring: 'hover:ring-emerald-200' },
]

// Match GDPR page color schemas
const WHY_COLORS = [
    { border: 'border-amber-500', dot: 'before:bg-amber-500', ring: 'hover:ring-amber-200' },
    { border: 'border-pink-500', dot: 'before:bg-pink-500', ring: 'hover:ring-pink-200' },
    { border: 'border-emerald-500', dot: 'before:bg-emerald-500', ring: 'hover:ring-emerald-200' },
]
const HOW_ACCENTS = ['before:bg-cyan-500', 'before:bg-violet-500', 'before:bg-rose-500', 'before:bg-amber-500']

export default function LgpdPage() {
    const t = useTranslations('lgpd')
    const m = useMessages().lgpd

    const facts = arr(m?.facts)
    const obligations = arr(m?.obligations?.items)
    const offerCards = arr(m?.offer?.cards)
    const whyItems = arr(m?.whyNow?.items)
    const steps = arr(m?.howWeWork?.steps)

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-20">
            <BackButton />

            <div className="border-t-4 border-emerald-400 pt-6">
                {/* Header */}
                <SectionIntro title={t('header.title')}>
                    <p className="text-md">{t('header.subtitle')}</p>
                </SectionIntro>

                {facts.length > 0 && <RegulationsFactStrip facts={facts} />}

                {/* Obligations */}
                {(t('obligations.title', { default: '' }) || obligations.length > 0) && (
                    <Container className="mt-20">
                        <Border />
                        <FadeIn className="mt-6 max-w-5xl">
                            <h2 className="font-display text-2xl mb-10 sm:text-3xl font-semibold text-neutral-950 text-left">
                                {t('obligations.title')}
                            </h2>
                            <ul className="space-y-8">
                                {obligations.map((item, idx) => (
                                    <li key={idx}>
                                        <h3 className="font-display text-lg font-semibold text-neutral-950">{item?.title}</h3>
                                        <p className="text-neutral-600 text-sm">{item?.text}</p>
                                        <div className="h-1 w-16 bg-neutral-300 mt-2">
                                            <span className="block h-1 w-10 rounded bg-blue-600" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </Container>
                )}

                {/* What we offer */}
                {(t('offer.title', { default: '' }) || offerCards.length > 0) && (
                    <Container className="mt-24">
                        <FadeIn className="mt-6 mx-auto max-w-6xl">
                            {t('offer.title', { default: '' }) && (
                                <h2
                                    className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left
                  before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                  before:rounded before:bg-blue-500/60"
                                >
                                    {t('offer.title')}
                                </h2>
                            )}
                            {t('offer.subtitle', { default: '' }) && (
                                <p className="mt-3 text-md text-neutral-600">{t('offer.subtitle')}</p>
                            )}

                            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6 items-stretch">
                                {offerCards.map(({ title, desc, cta, href, span, border, ring }, idx) => {
                                    const fallback = OFFER_COLORS[idx % OFFER_COLORS.length]
                                    return (
                                        <div key={idx} className={span || 'lg:col-span-2'}>
                                            <div
                                                className={[
                                                    'rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm flex h-full flex-col',
                                                    'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
                                                    'focus-within:ring-2 hover:mouse',
                                                    ring || fallback.ring,
                                                    border || fallback.border,
                                                ].join(' ')}
                                            >
                                                <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                                                <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </FadeIn>
                    </Container>
                )}

                {/* Why now */}
                {(t('whyNow.title', { default: '' }) || whyItems.length > 0) && (
                    <Container className="mt-20">
                        <FadeIn className="mx-auto max-w-6xl">
                            {t('whyNow.title', { default: '' }) && (
                                <h2
                                    className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left
                  before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                  before:rounded before:bg-blue-500/60"
                                >
                                    {t('whyNow.title')}
                                </h2>
                            )}
                            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                                {whyItems.map(({ k, v }, idx) => {
                                    const { border, dot, ring } = WHY_COLORS[idx % WHY_COLORS.length]
                                    return (
                                        <div
                                            key={idx}
                                            className={[
                                                'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm text-left',
                                                'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
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
                )}

                {/* How we work */}
                {(t('howWeWork.title', { default: '' }) || steps.length > 0) && (
                    <Container className="mt-24">
                        <Border />
                        <FadeIn className="mt-6 mx-auto max-w-6xl">
                            <h2
                                className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left
                before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                before:rounded before:bg-blue-500/60"
                            >
                                {t('howWeWork.title')}
                            </h2>
                            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-4">
                                {steps.map(({ t: stepTitle, d }, idx) => (
                                    <div
                                        key={idx}
                                        className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
                                    >
                                        <h3
                                            className={[
                                                'relative pl-3 text-lg font-semibold text-neutral-900',
                                                'before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded',
                                                HOW_ACCENTS[idx % HOW_ACCENTS.length],
                                            ].join(' ')}
                                        >
                                            {stepTitle}
                                        </h3>
                                        <p className="mt-2 text-sm text-neutral-700">{d}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-left">
                                <LocaleLink
                                    href={t('howWeWork.processLinkHref')}
                                    className="inline-block text-sm font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                                >
                                    {t('howWeWork.processLinkLabel')}
                                </LocaleLink>
                            </div>
                        </FadeIn>
                    </Container>
                )}

                {/* CTA */}
                {(t('cta.title', { default: '' }) || t('cta.body', { default: '' })) && (
                    <Container className="mt-28">
                        <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12 text-center">
                            <h2 className="font-display text-3xl font-semibold">{t('cta.title')}</h2>
                            {t('cta.body', { default: '' }) && (
                                <p className="mx-auto mt-4 max-w-2xl text-neutral-300">{t('cta.body')}</p>
                            )}
                            {t('cta.button', { default: '' }) && (
                                <LocaleLink
                                    href={t('cta.buttonHref')}
                                    className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                                >
                                    {t('cta.button')}
                                </LocaleLink>
                            )}
                        </div>
                    </Container>
                )}
            </div>
        </Container>
    )
}
