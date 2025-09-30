'use client'

import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from '@/components/FadeIn'
import { useTranslations } from 'next-intl'

export default function PrivacyPage() {
    const t = useTranslations('privacy')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro title={t('header.title')}>
                <p className="text-md">
                    {t('header.subtitle')}
                </p>
            </SectionIntro>

            <FadeIn className="mx-auto mt-10 max-w-3xl space-y-10">
                {/* Controller */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('controller.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t.rich('controller.details', {
                            br: () => <br />,
                            strong: (chunks) => <strong>{chunks}</strong>,
                            email: (chunks) => (
                                <a href="mailto:jhonathanaugusto@gmail.com" className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900">
                                    {chunks}
                                </a>
                            )
                        })}
                    </p>
                    <p className="mt-3 text-md text-neutral-700">
                        {t('controller.note')}
                    </p>
                </section>

                {/* What we collect */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('collection.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('collection.intro')}
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-neutral-700">
                        <li>{t('collection.items.name')}</li>
                        <li>{t('collection.items.email')}</li>
                        <li>{t('collection.items.message')}</li>
                    </ul>
                </section>

                {/* Cookie Management */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('cookies.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t.rich('cookies.intro', {
                            strong: (chunks) => <strong>{chunks}</strong>
                        })}
                    </p>
                    <p className="mt-3 text-md text-neutral-700">
                        {t('cookies.analytics')}
                    </p>
                    <p className="mt-3 text-md  text-neutral-700">
                        {t('cookies.consent')}
                    </p>
                </section>

                {/* Purposes & legal bases */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('purposes.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t.rich('purposes.contact', {
                            span: (chunks) => <span className="whitespace-nowrap">{chunks}</span>
                        })}
                    </p>
                    <p className="mt-3 text-neutral-700">
                        {t.rich('purposes.analytics', {
                            span: (chunks) => <span className="whitespace-nowrap">{chunks}</span>
                        })}
                    </p>
                </section>

                {/* Processors */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('processors.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('processors.intro')}
                    </p>
                    <ul className="mt-3 space-y-2 text-neutral-700">
                        <li>
                            {t.rich('processors.cookiebot', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </li>
                        <li>
                            {t.rich('processors.vercel', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </li>
                        <li>
                            {t.rich('processors.brevo', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </li>
                        <li>
                            {t.rich('processors.google', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </li>
                    </ul>
                    <p className="mt-3 text-neutral-700">
                        {t('processors.note')}
                    </p>
                </section>

                {/* Retention */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('retention.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('retention.contact')}
                    </p>
                    <p className="mt-3 text-neutral-700">
                        {t('retention.consent')}
                    </p>
                </section>

                {/* Rights */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('rights.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('rights.content')}
                    </p>
                    <p className="mt-3 text-neutral-700">
                        {t.rich('rights.authority', {
                            strong: (chunks) => <strong>{chunks}</strong>,
                            link: (chunks) => (
                                <a
                                    href="https://www.datenschutz-berlin.de"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                                >
                                    {chunks}
                                </a>
                            )
                        })}
                    </p>
                </section>

                {/* Security */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('security.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('security.content')}
                    </p>
                </section>

                {/* Changes */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('changes.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('changes.content')}
                    </p>
                    <p className="mt-3 text-neutral-500 text-md">
                        {t('changes.updated')}: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                </section>
            </FadeIn>
        </Container>
    )
}
