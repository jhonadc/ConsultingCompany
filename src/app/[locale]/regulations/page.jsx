'use client'

import { useMessages } from 'next-intl'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import LocaleLink from '@/components/LocaleLink'

const REG_COLORS = {
    'ai-act': { border: 'border-purple-500', hover: 'hover:ring-purple-500' }, // ✅ exact slug
    aiact: { border: 'border-purple-500', hover: 'hover:ring-purple-500' }, // ✅ b/c old key
    gdpr: { border: 'border-blue-500', hover: 'hover:ring-blue-400' },
    lgpd: { border: 'border-emerald-500', hover: 'hover:ring-emerald-500' },
    accessibility: { border: 'border-yellow-500', hover: 'hover:ring-yellow-500' }
}

const FALLBACK = { border: 'border-neutral-300', hover: 'hover:ring-neutral-300' }
const arr = (v) => (Array.isArray(v) ? v : [])

export default function RegulationsMain() {
    const messages = useMessages()
    const scope =
        messages?.regulationsIndex ||
        messages?.regulationsMain ||
        messages?.['regulations-main'] ||
        messages?.regulations ||
        messages

    const intro = scope?.intro ?? ''
    const eyebrow = scope?.eyebrow ?? 'Regulations'
    const title = scope?.title ?? 'EU Rules We Specialize In'
    const regulations = arr(scope?.list)

    return (
        <section className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro eyebrow={eyebrow} title={title}>
                <p>{intro}</p>
            </SectionIntro>

            <Container className="mt-12">
                {/* Mobile: stacked pills */}
                <nav aria-label="Regulations" className="md:hidden flex flex-col gap-3 items-stretch">
                    {regulations.map((reg) => {
                        const colors = REG_COLORS[reg.slug] ?? FALLBACK
                        return (
                            <LocaleLink
                                key={reg.slug}
                                href={`regulations/${reg.slug}`}
                                className={`group inline-flex items-center justify-between
                  w-full rounded-full border ${colors.border}
                  bg-white/80 px-5 py-3 text-lg text-neutral-700
                  shadow-sm backdrop-blur-sm transition-all duration-200
                  hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
                            >
                                <span>{reg.title}</span>
                                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
                            </LocaleLink>
                        )
                    })}
                </nav>

                {/* Desktop/tablet: cards */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 mx-auto max-w-6xl">
                    {regulations.map((reg) => {
                        const colors = REG_COLORS[reg.slug] ?? FALLBACK
                        return (
                            <LocaleLink
                                key={reg.slug}
                                href={`regulations/${reg.slug}`}
                                className={`
          group relative block aspect-square rounded-2xl bg-white
          ring-1 ring-neutral-950/10 shadow-sm overflow-hidden
          transition ${colors.hover}
          border-l-2 ${colors.border}  
        `}
                            >
                                <div className="absolute inset-0 flex flex-col p-6 text-left">
                                    <h4
                                        className="font-display text-base sm:text-lg font-semibold text-neutral-950 group-hover:text-neutral-800 mb-3 break-words"
                                        style={{ hyphens: 'auto' }}  /* ← wrap very long German words */
                                    >
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
