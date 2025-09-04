'use client'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { useTranslations } from 'next-intl'

import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children, accent = 'emerald' }) {
    const accents = {
        emerald: {
            num: 'after:text-emerald-600',
            bar: 'before:bg-emerald-500',
        },
        indigo: {
            num: 'after:text-indigo-600',
            bar: 'before:bg-indigo-500',
        },
        amber: {
            num: 'after:text-amber-600',
            bar: 'before:bg-amber-500',
        },
    }
    const { num, bar } = accents[accent] ?? accents.emerald

    return (
        <Container className="group/section [counter-increment:section]">
            <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                <div className="flex justify-center">
                    <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                        <StylizedImage
                            {...image}
                            sizes="(min-width: 1024px) 41rem, 31rem"
                            className="justify-center lg:justify-end lg:group-even/section:justify-start"
                        />
                    </FadeIn>
                </div>
                <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                    <FadeIn>
                        <div
                            className={`font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:content-[counter(section,decimal-leading-zero)] ${num}`}
                            aria-hidden="true"
                        />
                        <h2
                            className={`mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl relative pl-3 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded ${bar}`}
                        >
                            {title}
                        </h2>
                        <div className="mt-6">{children}</div>
                    </FadeIn>
                </div>
            </div>
        </Container>
    )
}

function Discover() {
    const t = useTranslations('process.discover')
    return (
        <Section title={t('title')} image={{ src: imageWhiteboard }} accent="emerald">
            <div className="space-y-6 text-base text-neutral-600">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
            </div>
            <h3 className="mt-12 font-display text-base font-semibold text-neutral-950 relative pl-3 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                {t('included')}
            </h3>
            <TagList className="mt-4">
                {t.raw('tags').map((item, i) => (
                    <TagListItem key={i}>{item}</TagListItem>
                ))}
            </TagList>
        </Section>
    )
}

function Build() {
    const t = useTranslations('process.build')
    return (
        <Section title={t('title')} image={{ src: imageLaptop, shape: 1 }} accent="indigo">
            <div className="space-y-6 text-base text-neutral-600">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
            </div>
            <Blockquote
                author={{ name: t('quote.author'), role: t('quote.role') }}
                className="mt-12 border-l-2 border-indigo-500 pl-4"
            >
                {t('quote.text')}
            </Blockquote>
        </Section>
    )
}

function Deliver() {
    const t = useTranslations('process.deliver')
    return (
        <Section title={t('title')} image={{ src: imageMeeting, shape: 2 }} accent="amber">
            <div className="space-y-6 text-base text-neutral-600">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
            </div>
            <h3 className="mt-12 font-display text-base font-semibold text-neutral-950 relative pl-3 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-amber-500">
                {t('included')}
            </h3>
            <List className="mt-8">
                {t.raw('list').map((item, i) => (
                    <ListItem key={i} title={item.title}>
                        {item.text}
                    </ListItem>
                ))}
            </List>
        </Section>
    )
}

function Values() {
    const t = useTranslations('process.values')
    const items = t.raw('items')
    return (
        <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
            <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
                <GridPattern
                    className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
                    yOffset={-270}
                />
            </div>
            <SectionIntro eyebrow={t('eyebrow')} title={t('title')}>
                <p>{t('subtitle')}</p>
            </SectionIntro>
            <Container className="mt-24">
                <GridList>
                    {items.map(({ title, desc, dot }, i) => (
                        <GridListItem
                            key={i}
                            title={
                                <span
                                    className={`relative pl-4 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full ${dot}`}
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

export default function Process() {
    const t = useTranslations('process.pageIntro')
    return (
        <>
            <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
                <p>{t('subtitle')}</p>
            </PageIntro>
            <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
                <Discover />
                <Build />
                <Deliver />
            </div>
            <Values />
            <ContactSection />
        </>
    )
}
