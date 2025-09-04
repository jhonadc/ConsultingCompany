'use client'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { JhonathanCard } from '@/components/JhonathanCard'
import { useTranslations } from 'next-intl'

import imageJhonathan from '@/images/JhonathanPhoto.jpg'


function Culture() {
    const t = useTranslations('about.culture')
    const items = t.raw('items')

    return (
        <div className="rounded-4xl bg-neutral-950 py-24 sm:mt-20 lg:mt-20 lg:py-18">
            <SectionIntro eyebrow={t('eyebrow')} title={t('title')} invert>
                <p>{t('intro')}</p>
            </SectionIntro>

            <Container className="mt-16">
                <GridList>
                    {items.map(({ title, desc, dot }) => (
                        <GridListItem
                            key={title}
                            invert
                            title={
                                <span
                                    className={`relative pl-4 before:absolute before:left-0 before:top-1/2 before:h-2 
                    before:w-2 before:-translate-y-1/2 before:rounded-full ${dot}`}
                                >
                                    {title}
                                </span>
                            }
                        >
                            {desc}
                        </GridListItem>
                    ))}
                </GridList>
            </Container>
        </div>
    )
}

function Team() {
    const t = useTranslations('about.team')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <FadeInStagger>
                <Border as={FadeIn} />
                <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                    <FadeIn>
                        <h2 className="relative pl-3 font-display text-2xl font-semibold text-neutral-950 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                            {t('leadership')}
                        </h2>
                    </FadeIn>
                    <div className="lg:col-span-3">
                        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                            <li>
                                <JhonathanCard
                                    name="Jhonathan Campos"
                                    role={t('role')}
                                    image={imageJhonathan}
                                    linkedinUrl="https://www.linkedin.com/in/jhonathanadc"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </FadeInStagger>
        </Container>
    )
}

export default function About() {
    const t = useTranslations('about')

    return (
        <>
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <p className="relative pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-indigo-500">
                        {t('header.eyebrow')}
                    </p>

                    <h1 className="mt-2 font-display font-semibold text-neutral-950 text-3xl lg:text-6xl">
                        {t('header.title')}
                        <span className="mt-4 block h-px w-16 rounded bg-indigo-500/25" />
                    </h1>

                    <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-12 lg:gap-10 text-justify">
                        <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 lg:col-span-5">
                            {t.rich('body.left', { strong: (chunks) => <span className="font-semibold">{chunks}</span> })}
                        </div>
                        <div className="relative my-6 hidden lg:my-0 lg:block lg:col-span-2" aria-hidden="true">
                            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-200 rounded" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-6 block h-8 w-px rounded bg-indigo-500" />
                        </div>
                        <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 lg:col-span-5">
                            {t.rich('body.right', { strong: (chunks) => <span className="font-semibold">{chunks}</span> })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="mt-24 sm:mt-32 lg:mt-30">
                <SectionIntro eyebrow={t('why.eyebrow')} title={t('why.title')}>
                    <p className="max-w-3xl">{t('why.intro')}</p>
                </SectionIntro>

                <div className="mt-20 mx-auto max-w-2xl md:max-w-7xl px-6 sm:px-8">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-justify">
                        {t.raw('why.items').map(({ k, v, dot, accent }) => (
                            <FadeIn key={k}>
                                <h3
                                    className={`relative pl-4 font-display text-lg font-semibold text-neutral-950 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full ${dot}`}
                                >
                                    {k}
                                </h3>
                                <p className="mt-2 text-md text-neutral-700">{v}</p>
                                <div className="mt-5 h-px w-full bg-neutral-200 relative">
                                    <span className={`absolute top-0 left-0 h-px w-16 ${accent}`} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Container>

            <Culture />
            <Team />
            <ContactSection />
        </>
    )
}
