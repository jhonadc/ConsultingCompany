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
import JhonathanPhoto from '@/images/JhonathanPhoto.jpg'
import imageLaptop from '@/images/laptop.jpg'

export default function GdprDpoPage() {
    const messages = useMessages()
    const M = messages?.gdprDpo ?? {}

    // Arrays from JSON (with safe fallbacks)
    const facts = (Array.isArray(M.facts) ? M.facts : []).map((f, i) => ({
        color: ['#2563eb', '#f59e0b', '#e11d48'][i] || '#2563eb',
        title: f.title ?? '',
        value: f.value ?? '',
        description: f.description ?? ''
    }))

    const quickProof = Array.isArray(M.quickProof?.items) ? M.quickProof.items : []
    const related = Array.isArray(M.relatedServices?.cards) ? M.relatedServices.cards : []
    const processSteps = Array.isArray(M.process?.steps) ? M.process.steps : []
    const proofs = Array.isArray(M.proofs) ? M.proofs : []

    // Purely visual colors (stay in code)
    const quickProofColors = [
        'before:bg-emerald-500',
        'before:bg-indigo-500',
        'before:bg-amber-500',
        'before:bg-rose-500',
    ]

    const relatedColors = [
        { border: 'border-pink-500', ring: 'hover:ring-pink-200', span: 'lg:col-span-3' },
        { border: 'border-sky-500', ring: 'hover:ring-sky-200', span: 'lg:col-span-3' },
        { border: 'border-amber-500', ring: 'hover:ring-amber-200', span: 'lg:col-span-2' },
        { border: 'border-emerald-500', ring: 'hover:ring-emerald-200', span: 'lg:col-span-2' },
        { border: 'border-violet-500', ring: 'hover:ring-violet-200', span: 'lg:col-span-2' },
        { border: 'border-rose-500', ring: 'hover:ring-rose-200', span: 'lg:col-span-2' },
    ]

    const processColors = [
        { primary: 'bg-emerald-700', secondary: 'bg-emerald-200', width: 'w-16' },
        { primary: 'bg-indigo-600', secondary: 'bg-indigo-200', width: undefined },
        { primary: 'bg-amber-600', secondary: 'bg-amber-200', width: undefined },
    ]

    const proofCardBorders = [
        'border-emerald-500',
        'border-amber-500',
        'border-indigo-500',
    ]

    return (
        <main>
            {/* HERO */}
            <Container className="mt-24 sm:mt-28 lg:mt-40">
                <FadeIn className="max-w-5xl">
                    <p className="relative pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                        {M?.hero?.eyebrow ?? ''}
                    </p>

                    <h1 className="mt-3 font-display text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-950 text-balance">
                        {M?.hero?.title ?? ''}
                    </h1>

                    <h2 className="mt-4 text-xl sm:text-2xl text-neutral-700 leading-relaxed">
                        {M?.hero?.subtitle?.[0]?.before ?? ''}
                        <span className="font-semibold">{M?.hero?.subtitle?.[0]?.bold ?? ''}</span>
                        {M?.hero?.subtitle?.[0]?.after ?? ''}
                        <span className="font-semibold"> {M?.hero?.subtitle?.[1]?.bold1 ?? ''}</span>
                        {M?.hero?.subtitle?.[1]?.mid ?? ''}
                        <span className="font-semibold"> {M?.hero?.subtitle?.[1]?.bold2 ?? ''}</span>
                        {M?.hero?.subtitle?.[1]?.after ?? ''}
                        <span className="font-semibold"> {M?.hero?.subtitle?.[2]?.bold ?? ''}</span>
                        {M?.hero?.subtitle?.[2]?.after ?? ''}
                    </h2>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                        >
                            {M?.hero?.primaryCta ?? ''}
                        </Link>
                        <a
                            href="#oferta"
                            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                            {M?.hero?.secondaryCta ?? ''}
                        </a>
                    </div>
                </FadeIn>
            </Container>

            {/* FOTO + PROVA RÁPIDA */}
            <Container className="mt-14 sm:mt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <FadeIn className="lg:col-span-4">
                        <div className="overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-950/10">
                            <Image src={JhonathanPhoto} alt="Jhonathan Campos" className="w-full h-auto object-cover" priority />
                        </div>
                    </FadeIn>
                    <FadeIn className="lg:col-span-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {quickProof.map((item, i) => (
                                <li key={i} className="rounded-3xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm">
                                    <h3
                                        className={[
                                            'relative pl-4 font-display text-base font-semibold text-neutral-950',
                                            'before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full',
                                            quickProofColors[i] || quickProofColors[0],
                                        ].join(' ')}
                                    >
                                        {item.title ?? ''}
                                    </h3>
                                    <p className="mt-2 text-sm text-neutral-700">{item.desc ?? ''}</p>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </Container>

            {/* FATOS GDPR */}
            <Container className="mt-16">
                <SectionIntro eyebrow={M?.factsSection?.eyebrow ?? ''} title={M?.factsSection?.title ?? ''}>
                    <p>
                        {M?.factsSection?.intro?.[0]?.before ?? ''}
                        <span className="font-semibold">{M?.factsSection?.intro?.[0]?.bold1 ?? ''}</span>
                        {M?.factsSection?.intro?.[0]?.mid ?? ''}
                        <span className="font-semibold">{M?.factsSection?.intro?.[0]?.bold2 ?? ''}</span>
                        {M?.factsSection?.intro?.[0]?.after ?? ''}
                        <span className="font-semibold">{M?.factsSection?.intro?.[0]?.bold3 ?? ''}</span>.
                    </p>
                </SectionIntro>
                <RegulationsFactStrip facts={facts} />
            </Container>

            {/* OFERTA PRINCIPAL */}
            <Container id="oferta" className="mt-20">
                <FadeIn className="mx-auto max-w-6xl">
                    <h2
                        className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950
                       before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                       before:rounded before:bg-emerald-500/70"
                    >
                        {M?.offer?.title ?? ''}
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Card 0 */}
                        <div className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500">
                            <h3 className="text-lg font-semibold text-neutral-900">{M?.offer?.cards?.[0]?.title ?? ''}</h3>
                            <p className="mt-2 text-sm text-neutral-700">{M?.offer?.cards?.[0]?.text ?? ''}</p>
                            <div className="mt-4 h-px w-full bg-neutral-200 relative">
                                <span className="absolute top-0 left-0 h-px w-16 bg-emerald-600" />
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-indigo-500">
                            <h3 className="text-lg font-semibold text-neutral-900">{M?.offer?.cards?.[1]?.title ?? ''}</h3>
                            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                                {(M?.offer?.cards?.[1]?.list ?? []).map((li, i) => <li key={i}>{li}</li>)}
                            </ul>
                            <div className="mt-4 h-px w-full bg-neutral-200 relative">
                                <span className="absolute top-0 left-0 h-px w-16 bg-indigo-600" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-amber-500">
                            <h3 className="text-lg font-semibold text-neutral-900">{M?.offer?.cards?.[2]?.title ?? ''}</h3>
                            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                                {(M?.offer?.cards?.[2]?.list ?? []).map((li, i) => <li key={i}>{li}</li>)}
                            </ul>
                            <div className="mt-4 h-px w-full bg-neutral-200 relative">
                                <span className="absolute top-0 left-0 h-px w-16 bg-amber-600" />
                            </div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                        >
                            {M?.offer?.primaryCta ?? ''}
                        </Link>
                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                            {M?.offer?.secondaryCta ?? ''}
                        </a>
                    </div>
                </FadeIn>
            </Container>

            {/* SERVIÇOS RELACIONADOS */}
            <Container id="servicos" className="mt-20">
                <FadeIn className="mx-auto max-w-6xl">
                    <h2
                        className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950
                       before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                       before:rounded before:bg-indigo-500/70"
                    >
                        {M?.relatedServices?.title ?? ''}
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6">
                        {(related).map((card, i) => {
                            const c = relatedColors[i] || relatedColors[0]
                            return (
                                <div key={i} className={`group ${c.span}`}>
                                    <div
                                        className={[
                                            'rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm flex h-full flex-col',
                                            'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
                                            'border-l-2',
                                            c.border,
                                            c.ring,
                                        ].join(' ')}
                                    >
                                        <h3 className="text-lg font-semibold text-neutral-900">{card.title ?? ''}</h3>
                                        <p className="mt-2 text-sm text-neutral-700">{card.desc ?? ''}</p>
                                        <div className="mt-auto pt-5">
                                            <Link
                                                href="/contact"
                                                className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                                            >
                                                {card.cta ?? ''}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </FadeIn>
            </Container>

            {/* PROCESSO */}
            <SectionIntro
                eyebrow={M?.process?.eyebrow ?? ''}
                title={M?.process?.title ?? ''}
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>{M?.process?.intro ?? ''}</p>
            </SectionIntro>

            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    {/* imagem */}
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    {/* lista */}
                    <ul role="list" className="mt-16 space-y-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                        {processSteps.map((step, i) => (
                            <li key={i}>
                                <h3 className="font-display text-lg font-semibold text-neutral-900">{step.title ?? ''}</h3>
                                <p className="mt-2 text-neutral-600">{step.desc ?? ''}</p>
                                <ColorDivider
                                    primaryClass={processColors[i]?.primary}
                                    secondaryClass={processColors[i]?.secondary}
                                    primaryWidth={processColors[i]?.width}
                                />
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link
                                href="/process"
                                className="inline-flex items-center gap-1 text-md font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                                aria-label={M?.process?.moreAria ?? ''}
                            >
                                {M?.process?.moreLink ?? ''}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>

            {/* SEÇÃO PROVAS / POR QUE COMPRAR */}
            <Container className="mt-24">
                <Border />
                <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {proofs.map((p, i) => (
                        <div
                            key={i}
                            className={[
                                'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2',
                                proofCardBorders[i] || proofCardBorders[0],
                            ].join(' ')}
                        >
                            <p
                                className={[
                                    'relative pl-3 text-sm font-semibold text-neutral-900',
                                    'before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded',
                                ].join(' ')}
                            >
                                {p.k ?? ''}
                            </p>
                            <p className="mt-1 text-sm text-neutral-700">{p.v ?? ''}</p>
                        </div>
                    ))}
                </FadeInStagger>
            </Container>

            {/* CHAMADA FINAL */}
            <Container className="mt-24">
                <div className="rounded-4xl bg-neutral-950 px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-12 text-center">
                    <h2 className="font-display text-3xl font-semibold">
                        {M?.finalCta?.title ?? ''}
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                        {M?.finalCta?.subtitle ?? ''}
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                    >
                        {M?.finalCta?.button ?? ''}
                    </Link>
                </div>
            </Container>

            {/* FORM DE AGENDAMENTO */}
            <BookingForm />
        </main>
    )
}
