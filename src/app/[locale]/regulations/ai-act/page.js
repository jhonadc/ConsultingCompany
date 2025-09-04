// src/app/[locale]/regulations/ai-act/page.jsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations, useMessages } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { BackButton } from '@/components/BackButton'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import { BookingForm } from '@/components/BookingForm'
import { StylizedImage } from '@/components/StylizedImage'
import { ColorDivider } from '@/components/ColorDivider'
import LocaleLink from '@/components/LocaleLink'

import imageLaptop from '@/images/laptop.jpg'
import JhonathanPhoto from '@/images/JhonathanPhoto.jpg'

/* ---------- helpers ---------- */
const arr = (v) => (Array.isArray(v) ? v : [])

/* Paletas fiéis ao seu original */
const FACT_COLORS = ['#a855f7', '#f59e0b', '#e11d48'] // purple, amber, rose

const OFFER_PALETTE = [
    // 0: purple
    { tint: 'bg-purple-50', ring: 'hover:ring-purple-200', chip: 'text-purple-500 border-purple-500', bar: 'border-purple-500' },
    // 1: amber
    { tint: 'bg-amber-50', ring: 'hover:ring-amber-200', chip: 'text-amber-500 border-amber-500', bar: 'border-amber-500' },
    // 2: emerald
    { tint: 'bg-emerald-50', ring: 'hover:ring-emerald-200', chip: 'text-emerald-500 border-emerald-500', bar: 'border-emerald-500' },
]

const WHY_COLORS = [
    { border: 'border-emerald-500', dot: 'before:bg-emerald-500', ring: 'hover:ring-emerald-200' },
    { border: 'border-indigo-500', dot: 'before:bg-indigo-500', ring: 'hover:ring-indigo-200' },
    { border: 'border-amber-500', dot: 'before:bg-amber-500', ring: 'hover:ring-amber-200' },
]

/* ---------- sub-seções ---------- */
function OurProcess() {
    const t = useTranslations()
    const m = useMessages()
    const steps = arr(m?.ourProcess?.steps)

    return (
        <>
            <SectionIntro
                eyebrow={t('ourProcess.eyebrow')}
                title={t('ourProcess.title')}
                className="mt-12 sm:mt-10 lg:mt-20"
            >
                <p>{t('ourProcess.intro')}</p>
            </SectionIntro>

            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    {/* Imagem */}
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>

                    {/* Lista */}
                    <ul role="list" className="mt-16 space-y-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                        {steps.slice(0, 3).map((step, idx) => (
                            <li key={idx}>
                                <h3 className="font-display text-lg font-semibold text-neutral-900">{step?.title}</h3>
                                <p className="mt-2 text-neutral-600">{step?.text}</p>
                                <ColorDivider
                                    primaryClass={idx === 0 ? 'bg-blue-700' : idx === 1 ? 'bg-pink-500' : 'bg-emerald-700'}
                                    secondaryClass={idx === 0 ? 'bg-blue-200' : idx === 1 ? 'bg-pink-200' : 'bg-emerald-200'}
                                    primaryWidth={idx === 0 ? 'w-16' : undefined}
                                />
                            </li>
                        ))}

                        {/* Link processo detalhado (INTERNAL → LocaleLink) */}
                        <li className="pt-2">
                            <LocaleLink
                                href={t('ourProcess.viewProcessHref')}
                                className="inline-flex items-center gap-1 text-md font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                                aria-label={t('ourProcess.viewProcess')}
                            >
                                {t('ourProcess.viewProcess')}
                            </LocaleLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

function SpotlightTestimonial() {
    const t = useTranslations()

    return (
        <section className="relative">
            <div className="bg-neutral-950">
                <Container className="py-16 sm:py-20 lg:py-24">
                    <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-2">
                        {/* Retrato */}
                        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10">
                            <Image src={JhonathanPhoto} alt="Jhonathan Campos" className="h-auto w-full object-cover" priority />
                        </div>

                        {/* Texto + meta */}
                        <div className="text-neutral-100">
                            <p className="mt-4 text-[17px] md:text-[18px] leading-light font-normal" style={{ whiteSpace: 'pre-wrap' }}>
                                {t('spotlight.bio')}
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="font-semibold text-white">{t('spotlight.name')}</p>
                                    <p className="mt-1 text-sm text-neutral-400">{t('spotlight.role')}</p>
                                </div>

                                {/* EXTERNAL link stays as Next/Link */}
                                <Link
                                    href="https://www.linkedin.com/in/jhonathanadc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-neutral-100 transition hover:border-white/40 hover:bg-white/5"
                                    aria-label={t('common.linkedin')}
                                >
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                                        <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5ZM3 8.98h3.95V21H3V8.98ZM9.5 8.98H13v1.64h.05c.48-.86 1.66-1.77 3.42-1.77 3.66 0 4.34 2.1 4.34 4.83V21H16.8v-5.35c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H9.5V8.98Z" />
                                    </svg>
                                    {t('common.linkedin')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

/* ---------- página ---------- */
export default function AiActPage() {
    const t = useTranslations()
    const m = useMessages()

    /* facts com cores padrão caso o JSON não traga `color` */
    const facts = arr(m?.facts).map((f, i) => ({
        color: f?.color || FACT_COLORS[i % FACT_COLORS.length],
        title: f?.title,
        value: f?.value,
        description: f?.description
    }))

    const offerCards = arr(m?.offer?.cards)
    const obligations = arr(m?.obligations?.items)
    const whyItems = arr(m?.whyNow?.items)

    return (
        <Container className="sm:mt-10 lg:mt-10">

            <BackButton />

            <div className="border-t-4 border-purple-500 pt-6">
                {/* Header */}
                <SectionIntro title={t('header.title')}>
                    <p className="text-md">{t('header.subtitle')}</p>
                </SectionIntro>

                {/* Regulations strip */}
                {facts.length > 0 && <RegulationsFactStrip facts={facts} />}

                {/* What we offer – cards now route with LocaleLink */}
                {(t('offer.title', { default: '' }) || offerCards.length > 0) && (
                    <Container className="mt-10">
                        <FadeIn className="mt-5 mx-auto max-w-6xl">
                            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950">{t('offer.title')}</h2>
                            {t('offer.subtitle', { default: '' }) && (
                                <p className="mt-3 text-md text-neutral-600">{t('offer.subtitle')}</p>
                            )}

                            {offerCards.length > 0 && (
                                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                                    {offerCards.map(({ href, label }, idx) => {
                                        const { tint, ring, chip, bar } = OFFER_PALETTE[idx % OFFER_PALETTE.length]
                                        return (
                                            <LocaleLink
                                                key={href}
                                                href={href}
                                                className={[
                                                    // base
                                                    'group relative flex items-center justify-between sm:justify-center text-left sm:text-center',
                                                    'rounded-3xl ring-1 ring-neutral-950/10 shadow-sm overflow-hidden',
                                                    'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
                                                    // compact mobile; aspect on sm+
                                                    'h-24 px-4 py-4 sm:h-auto sm:aspect-[4/3] sm:px-6',
                                                    // surface
                                                    'bg-white',
                                                    // subtle tint layer
                                                    'after:pointer-events-none after:absolute after:inset-0',
                                                    `after:${tint} after:opacity-50 after:rounded-3xl`,
                                                    // curved left accent
                                                    'border-l-2', bar,
                                                    // hover ring
                                                    ring,
                                                    // focus
                                                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10',
                                                ].join(' ')}
                                            >
                                                <span className="relative z-10 max-w-[75%] sm:max-w-none">
                                                    <span className="block font-display text-[15px] sm:text-xl font-semibold text-neutral-900">
                                                        {label}
                                                    </span>
                                                    <span className="mt-0.5 block text-sm text-neutral-600 opacity-90 sm:mt-1">
                                                        {t('common.learnMore', { default: 'Learn more' })}
                                                    </span>
                                                </span>

                                                {/* chip com seta na cor do card */}
                                                <span
                                                    aria-hidden
                                                    className={[
                                                        'absolute bottom-3 right-3 z-10 inline-flex h-7 w-7 items-center justify-center',
                                                        'rounded-full border-2 bg-transparent',
                                                        'transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5',
                                                        'sm:bottom-4 sm:right-4 sm:h-8 sm:w-8',
                                                        chip,
                                                    ].join(' ')}
                                                >
                                                    ➔
                                                </span>
                                            </LocaleLink>
                                        )
                                    })}
                                </div>
                            )}
                        </FadeIn>
                    </Container>
                )}

                {/* Obligations */}
                {(t('obligations.title', { default: '' }) || obligations.length > 0) && (
                    <Container id="obligations" className="mt-20">
                        <Border className="mt-2" />
                        <FadeIn className="mt-12 mx-auto max-w-6xl">
                            <h2 className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950 mb-8
                     before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2
                     before:rounded before:bg-neutral-500/60">
                                {t('obligations.title')}
                            </h2>

                            {obligations.length > 0 && (
                                <ul className="space-y-8">
                                    {obligations.map((item, idx) => (
                                        <li key={idx}>
                                            <h3 className="font-display text-lg font-semibold text-neutral-950">{item?.title}</h3>
                                            <p className="text-neutral-600 text-base">{item?.text}</p>
                                            <div className="mt-2 h-px w-16 rounded bg-neutral-300">
                                                <span className="block h-px w-10 rounded bg-purple-600/70" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </FadeIn>
                    </Container>
                )}

                {/* Why now */}
                {(t('whyNow.title', { default: '' }) || whyItems.length > 0) && (
                    <Container className="mt-20">
                        <FadeIn className="mx-auto max-w-6xl">
                            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 text-left">
                                {t('whyNow.title')}
                            </h2>
                            {whyItems.length > 0 && (
                                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                                    {whyItems.map(({ k, v }, idx) => {
                                        const { border, dot, ring } = WHY_COLORS[idx % WHY_COLORS.length]
                                        return (
                                            <div
                                                key={`${k}-${idx}`}
                                                className={`rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm text-left border-l-2 ${border} ${ring} transition`}
                                            >
                                                <p
                                                    className={`relative pl-3 text-sm font-semibold text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded ${dot}`}
                                                >
                                                    {k}
                                                </p>
                                                <p className="mt-1 text-sm text-neutral-700">{v}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </FadeIn>
                    </Container>
                )}

                {/* CTA (INTERNAL → LocaleLink) */}
                {(t('cta.title', { default: '' }) || t('cta.body', { default: '' })) && (
                    <Container className="mt-18">
                        <div className="rounded-4xl bg-neutral-950 px-6 py-10 text-white sm:px-10 sm:py-10 lg:px-12 text-center">
                            <h2 className="font-display text-3xl font-semibold">{t('cta.title')}</h2>
                            {t('cta.body', { default: '' }) && (
                                <p className="mx-auto mt-4 max-w-2xl text-neutral-300">{t('cta.body')}</p>
                            )}
                            {t('cta.button', { default: '' }) && (
                                <LocaleLink
                                    href={t('cta.buttonHref', { default: '/contact' })}
                                    className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                                >
                                    {t('cta.button')}
                                </LocaleLink>
                            )}
                        </div>
                    </Container>
                )}

                {/* Process + Form + Spotlight */}
                <OurProcess />
                <BookingForm />
                <SpotlightTestimonial />

                {/* Nota de parceria */}
                {t('partnership.note', { default: '' }) && (
                    <Container className="mt-12">
                        <FadeIn className="mx-auto max-w-4xl text-neutral-700 text-sm">
                            {t('partnership.note')}
                        </FadeIn>
                    </Container>
                )}
            </div>
        </Container>
    )
}
