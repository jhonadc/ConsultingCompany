// src/app/[locale]/home/page.jsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMessages } from 'next-intl'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { ColorDivider } from '@/components/ColorDivider'
import { BookingForm } from '@/components/BookingForm'

import BFG from '@/images/clients/logos/BFG.svg'
import bihlogo from '@/images/clients/logos/bihlogo.svg'
import chariteLogo from '@/images/clients/logos/chariteLogo.png'
import krisenchat from '@/images/clients/logos/krisenchat.svg'
import WSLaw from '@/images/clients/logos/WSLaw.svg'
import zib from '@/images/clients/logos/zib.svg'
import BFGImage from '@/images/clients/logos/BFGImage.png'
import imageLaptop from '@/images/laptop.jpg'
import JhonathanPhoto from '@/images/JhonathanPhoto.jpg'
import LocaleLink from '@/components/LocaleLink'

const clientsLogos = [
    ['BFG', BFG],
    ['Charité Accelerator', bihlogo],
    ['Charité Hospital', chariteLogo],
    ['Krisenchat', krisenchat],
    ['WS Law', WSLaw],
    ['Zuse Institute Berlin', zib],
]

const arr = (v) => (Array.isArray(v) ? v : [])

function Regulations({ data }) {
    const eyebrow = data?.eyebrow
    const title = data?.title
    const intro = data?.intro
    const list = arr(data?.list)

    // Keep your color mapping stable
    const REG_COLORS = {
        gdpr: { border: 'border-blue-500', hover: 'hover:ring-blue-400' },
        'ai-act': { border: 'border-purple-500', hover: 'hover:ring-purple-500' },
        aiact: { border: 'border-purple-500', hover: 'hover:ring-purple-500' }, // safety for your existing slug
        lgpd: { border: 'border-emerald-500', hover: 'hover:ring-emerald-500' },
        accessibility: { border: 'border-fuchsia-500', hover: 'hover:ring-fuchsia-500' },
        dataact: { border: 'border-amber-500', hover: 'hover:ring-amber-500' },
    }
    const fallback = { border: 'border-neutral-300', hover: 'hover:ring-neutral-300' }

    return (
        <section className="mt-20 sm:mt-24 lg:mt-46">
            <SectionIntro
                eyebrow={eyebrow ? <LocaleLink href="/regulations" className="hover:underline">{eyebrow}</LocaleLink> : undefined}
                title={title}
            >
                <p>{intro}</p>
            </SectionIntro>

            <Container className="mt-12">
                {/* Mobile pills */}
                <nav aria-label="Regulations" className="md:hidden flex flex-col gap-3 items-stretch">
                    {list.map((reg) => {
                        const colors = REG_COLORS[reg.slug] ?? fallback
                        return (
                            <LocaleLink
                                key={reg.slug}
                                href={`/regulations/${reg.slug}`}
                                className={`group inline-flex items-center justify-between
                            w-full rounded-full border ${colors.border}
                            bg-white/80 px-5 py-3 text-sm text-neutral-700
                            shadow-sm backdrop-blur-sm transition-all duration-200
                            hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
                            >
                                <span>{reg.title}</span>
                                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                            </LocaleLink>
                        )
                    })}
                </nav>

                {/* Desktop cards */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {list.map((reg) => {
                        const colors = REG_COLORS[reg.slug] ?? fallback
                        return (
                            <LocaleLink
                                key={reg.slug}
                                href={`/regulations/${reg.slug}`}
                                className={`
                  group relative block aspect-square rounded-2xl bg-white
                  ring-1 ring-neutral-950/10 shadow-sm overflow-hidden
                  transition ${colors.hover}
                `}
                            >
                                <div className="absolute inset-0 flex flex-col p-6 text-left">
                                    <h4 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-800 mb-3">
                                        {reg.title}
                                    </h4>
                                    <div className="flex-1 flex items-center">
                                        <p className="text-md text-neutral-600 line-clamp-3">
                                            {reg.description}
                                        </p>
                                    </div>
                                </div>
                            </LocaleLink>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}

function Clients({ title }) {
    return (
        <div className="mt-20 rounded-4xl bg-neutral-950 py-14 sm:mt-28 sm:py-20 lg:mt-32">
            <Container>
                <FadeIn className="flex items-center gap-x-6">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        {title}
                    </h2>
                    <div className="h-px flex-auto bg-neutral-800" />
                </FadeIn>

                <FadeInStagger faster>
                    <ul role="list" className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6 items-center">
                        {clientsLogos.map(([client, logo]) => (
                            <li key={client} className="col-span-1">
                                <FadeIn>
                                    <div className="relative h-16 sm:h-20 w-full rounded-2xl bg-neutral-900/30 p-4">
                                        <Image
                                            src={logo}
                                            alt={client}
                                            fill
                                            className="object-contain"
                                            sizes="(min-width:1024px) 200px, (min-width:640px) 160px, 140px"
                                        />
                                    </div>
                                </FadeIn>
                            </li>
                        ))}
                    </ul>
                </FadeInStagger>
            </Container>
        </div>
    )
}

function ProofOfValue({ data }) {
    const points = arr(data?.points)

    return (
        <section className="mt-24 sm:mt-32 lg:mt-60 mb-20 lg:mb-40">
            <Container>
                <div className="grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto] md:items-start">
                    <div className="max-w-3xl">
                        <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
                            {data?.title}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-neutral-600">
                            {data?.body}
                        </p>
                    </div>

                    <div className="mt-2 md:mt-0 md:justify-self-end">
                        <LocaleLink
                            href="/process"
                            className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 sm:w-auto"
                            aria-label={data?.ctaAria || data?.cta}
                        >
                            {data?.cta} →
                        </LocaleLink>
                    </div>
                </div>

                {/* Mobile accordions */}
                <div className="mt-12 md:hidden space-y-4">
                    {points.map(({ title, desc, paragraph2, color }) => (
                        <details
                            key={title}
                            className={`group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm open:ring-neutral-900/10 ${color?.ring || ''} border-l-2 ${color?.border || 'border-neutral-300'}`}
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between">
                                <span
                                    className={`relative pl-3 font-medium text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded ${color?.dot || 'before:bg-neutral-400'}`}
                                >
                                    {title}
                                </span>
                                <svg className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.92 1.18l-4.17 3.3a.75.75 0 01-.92 0l-4.17-3.3a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </summary>

                            <div className="mt-3 grid gap-3 text-md text-neutral-700 md:grid-cols-2">
                                <p>{desc}</p>
                                {paragraph2 ? (
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>{paragraph2}</li>
                                    </ul>
                                ) : null}
                            </div>
                        </details>
                    ))}
                </div>

                {/* Desktop grid cards */}
                <div className="mt-12 hidden md:grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {points.map(({ title, desc, paragraph2, color }) => (
                        <div
                            key={title}
                            className={`rounded-3xl bg-white p-6 md:p-8 ring-1 shadow-sm border-l-2 ${color?.border || 'border-neutral-300'} ${color?.ring?.replace('group-open:', '') || ''}`}
                        >
                            <h3 className="font-display text-2xl font-semibold text-neutral-950">{title}</h3>
                            <p className="mt-4 text-neutral-600">{desc}</p>
                            {paragraph2 ? <p className="mt-3 text-neutral-600">{paragraph2}</p> : null}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

function OurProcess({ data }) {
    const steps = data?.steps || {}
    return (
        <>
            <SectionIntro
                eyebrow={data?.eyebrow}
                title={data?.title}
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>{data?.intro}</p>
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

                    <ul role="list" className="mt-16 space-y-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                        {['assess', 'implement', 'sustain'].map((k, idx) => {
                            const colorPairs = [
                                { primary: 'bg-blue-700', secondary: 'bg-blue-200' },
                                { primary: 'bg-pink-500', secondary: 'bg-pink-200' },
                                { primary: 'bg-emerald-700', secondary: 'bg-emerald-200' },
                            ]
                            const c = colorPairs[idx]
                            const item = steps[k]
                            if (!item) return null
                            return (
                                <li key={k}>
                                    <h3 className="font-display text-lg font-semibold text-neutral-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-neutral-600">{item.text}</p>
                                    <ColorDivider primaryClass={c.primary} secondaryClass={c.secondary} />
                                </li>
                            )
                        })}

                        <li className="pt-2">
                            <LocaleLink
                                href="/process"
                                className="inline-flex items-center gap-1 text-md font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                                aria-label={data?.viewProcess}
                            >
                                {data?.viewProcess} →
                            </LocaleLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    )
}

function Spotlight({ data }) {
    if (!data) return null
    return (
        <section className="relative">
            <div className="bg-neutral-950">
                <Container className="py-16 sm:py-20 lg:py-24">
                    <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-2">
                        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10">
                            <Image src={JhonathanPhoto} alt={data?.name || 'Portrait'} className="h-auto w-full object-cover" priority />
                        </div>

                        <div className="text-neutral-100">
                            <p className="mt-4 text-[17px] md:text-[18px] leading-light text-justify font-normal" style={{ whiteSpace: 'pre-line' }}>
                                {data?.bio}
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="font-semibold text-white">{data?.name}</p>
                                    <p className="mt-1 text-sm text-neutral-400">{data?.role}</p>
                                </div>

                                {data?.linkedin ? (
                                    <Link
                                        href="https://www.linkedin.com/in/jhonathanadc"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-neutral-100 transition hover:border-white/40 hover:bg-white/5"
                                        aria-label="LinkedIn"
                                    >
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                                            <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5ZM3 8.98h3.95V21H3V8.98ZM9.5 8.98H13v1.64h.05c.48-.86 1.66-1.77 3.42-1.77 3.66 0 4.34 2.1 4.34 4.83V21H16.8v-5.35c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H9.5V8.98Z" />
                                        </svg>
                                        {data?.linkedin}
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default function HomePage() {
    // Allow both shapes: {hero,...} or {home:{hero,...}}
    const messages = useMessages() || {}
    const home = messages.home ?? messages

    const hero = home.hero || {}
    const quickLinks = arr(home.quickLinks)
    const regulations = home.regulations || {}
    const clients = home.clients || {}
    const proof = home.proof || {}
    const cta = home.cta || {}
    const ourProcess = home.ourProcess || {}
    const spotlight = home.spotlight || {}
    const testimonial = home.testimonial || {}

    return (
        <>

            {/* Hero */}
            <Container className="mt-18 sm:mt-12 md:mt-46 relative">
                <FadeIn className="max-w-4xl">
                    <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl leading-tight">
                        {hero.title}
                    </h1>
                    <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-balance text-neutral-950 mt-2">
                        <span className="italic">{home?.hero?.notItalic || 'Not'}</span>{' '}
                        {home?.hero?.subtitleRest}
                    </h2>

                    {/* Desktop / Tablet */}
                    <p className="hidden sm:block mt-6 text-xl text-neutral-600">
                        {hero.bodyDesktop}
                    </p>

                    {/* Mobile */}
                    <p className="block sm:hidden mt-6 text-xl text-neutral-600">
                        {hero.bodyMobile}
                    </p>
                </FadeIn>

                {/* Quick links */}
                <nav
                    aria-label="Quick links"
                    className="pointer-events-auto z-10 mt-8 flex flex-col gap-3 items-stretch sm:items-center
              lg:mt-0 lg:absolute lg:right-0 lg:top-8"
                >
                    {quickLinks.map((link) => (
                        <LocaleLink
                            key={link.href}
                            href={link.href}
                            className={`group inline-flex items-center justify-between
          w-full sm:w-50 lg:w-60 rounded-full border ${link.border}
          bg-white/80 px-5 py-3 text-sm sm:text-[15px] text-neutral-700
          shadow-sm backdrop-blur-sm transition-all duration-200
          hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
                        >
                            <span>{link.label}</span>
                            <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                        </LocaleLink>
                    ))}

                    {/* Divider */}
                    <div className="my-1 h-px w-full sm:w-600 lg:w-60 bg-neutral-200"></div>

                    {/* Extra Links */}
                    <LocaleLink
                        href={"/regulations/gdpr-dpo"}
                        className="group inline-flex items-center justify-between
        w-full sm:w-50 lg:w-60 rounded-full border border-blue-400
        bg-white/80 px-5 py-3 text-sm sm:text-[15px] text-blue-700
        shadow-sm backdrop-blur-sm transition-all duration-200
        hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5"
                    >
                        <span>Data Protection Officer</span>
                        <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                    </LocaleLink>

                    <LocaleLink
                        href="/services/ai-officer"
                        className="group inline-flex items-center justify-between
        w-full sm:w-50 lg:w-60 rounded-full border border-purple-400
        bg-white/80 px-5 py-3 text-sm sm:text-[15px] text-purple-700
        shadow-sm backdrop-blur-sm transition-all duration-200
        hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5"
                    >
                        <span>AI Officer</span>
                        <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                    </LocaleLink>
                </nav>
            </Container>


            <Regulations data={regulations} />
            <ProofOfValue data={proof} />
            <Spotlight data={spotlight} />

            {/* CTA */}
            <Container className="mt-28">
                <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12 text-center">
                    <h2 className="font-display text-3xl font-semibold">{cta.title}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                        {cta.body}
                    </p>
                    <LocaleLink
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                    >
                        {cta.button}
                    </LocaleLink>
                </div>
            </Container>

            <OurProcess data={ourProcess} />
            <Clients title={clients?.title} />

            {/* Testimonial (kept as your component, only strings localized if present) */}
            <Testimonial
                className="mt-24 sm:mt-32 lg:mt-20 text-sm md:text-md"
                client={{
                    name: 'Norman Wagner - Bettencourt Financial Principal',
                    logo: BFGImage,
                    url: 'https://bettencourtfg.com',
                }}
                logoClassName="w-24 h-auto"
            >
                {testimonial?.quote}
            </Testimonial>

            <BookingForm />
        </>
    )
}
