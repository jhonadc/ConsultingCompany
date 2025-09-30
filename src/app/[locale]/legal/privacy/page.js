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
                    <div className="mt-3 text-neutral-700">
                        <p className="font-semibold text-neutral-950">{t('controller.name')}</p>
                        <p>{t('controller.trading')}</p>
                        <p>{t('controller.location')}</p>
                        <p>
                            <span className="font-medium">Email:</span>{' '}
                            <a href="mailto:jhonathanaugusto@gmail.com" className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900">
                                {t('controller.email')}
                            </a>
                        </p>
                    </div>
                    <p className="mt-4 text-sm text-neutral-600">
                        {t('controller.note')}
                    </p>
                </section>

                {/* What we collect */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('collection.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('collection.intro')}
                    </p>
                    <ul className="mt-3 ml-4 space-y-1 list-disc text-neutral-700">
                        <li>{t('collection.items.name')}</li>
                        <li>{t('collection.items.email')}</li>
                        <li>{t('collection.items.message')}</li>
                    </ul>
                </section>

                {/* Cookie Management */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('cookies.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('cookies.intro')}
                    </p>
                    <div className="mt-4 space-y-3 text-neutral-700">
                        <div>
                            <p className="font-medium text-neutral-950 mb-1">{t('cookies.analyticsTitle')}</p>
                            <p className="text-sm">{t('cookies.analytics')}</p>
                        </div>
                        <div>
                            <p className="font-medium text-neutral-950 mb-1">{t('cookies.consentTitle')}</p>
                            <p className="text-sm">{t('cookies.consent')}</p>
                        </div>
                    </div>
                </section>

                {/* Purposes & legal bases */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('purposes.title')}</h2>
                    <div className="mt-3 space-y-4">
                        <div>
                            <p className="font-medium text-neutral-950 mb-2">{t('purposes.contactTitle')}</p>
                            <p className="text-neutral-700 text-sm leading-relaxed">
                                {t('purposes.contactDesc')}{' '}
                                <span className="font-medium bg-neutral-100 px-1.5 py-0.5 rounded text-xs">
                                    {t('purposes.contactBasis1')}
                                </span>{' '}
                                {t('purposes.contactOr')}{' '}
                                <span className="font-medium bg-neutral-100 px-1.5 py-0.5 rounded text-xs">
                                    {t('purposes.contactBasis2')}
                                </span>.
                            </p>
                        </div>
                        <div>
                            <p className="font-medium text-neutral-950 mb-2">{t('purposes.analyticsTitle')}</p>
                            <p className="text-neutral-700 text-sm leading-relaxed">
                                {t('purposes.analyticsDesc')}{' '}
                                <span className="font-medium bg-neutral-100 px-1.5 py-0.5 rounded text-xs">
                                    {t('purposes.analyticsBasis')}
                                </span>.{' '}
                                {t('purposes.analyticsWithout')}{' '}
                                <span className="font-medium bg-neutral-100 px-1.5 py-0.5 rounded text-xs">
                                    {t('purposes.analyticsLegitimate')}
                                </span>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Processors */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('processors.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('processors.intro')}
                    </p>
                    <div className="mt-4 space-y-4">
                        <div className="border-l-4 border-neutral-200 pl-4">
                            <p className="font-semibold text-neutral-950 text-sm">{t('processors.cookiebotName')}</p>
                            <p className="text-neutral-600 text-sm mt-1">{t('processors.cookiebotDesc')}</p>
                        </div>
                        <div className="border-l-4 border-neutral-200 pl-4">
                            <p className="font-semibold text-neutral-950 text-sm">{t('processors.vercelName')}</p>
                            <p className="text-neutral-600 text-sm mt-1">{t('processors.vercelDesc')}</p>
                        </div>
                        <div className="border-l-4 border-neutral-200 pl-4">
                            <p className="font-semibold text-neutral-950 text-sm">{t('processors.brevoName')}</p>
                            <p className="text-neutral-600 text-sm mt-1">{t('processors.brevoDesc')}</p>
                        </div>
                        <div className="border-l-4 border-neutral-200 pl-4">
                            <p className="font-semibold text-neutral-950 text-sm">{t('processors.googleName')}</p>
                            <p className="text-neutral-600 text-sm mt-1">{t('processors.googleDesc')}</p>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-neutral-50 rounded-lg">
                        <p className="text-xs text-neutral-600 leading-relaxed">
                            <span className="font-medium text-neutral-800">{t('processors.transferTitle')}</span>{' '}
                            {t('processors.note')}
                        </p>
                    </div>
                </section>

                {/* Retention */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('retention.title')}</h2>
                    <div className="mt-3 space-y-4">
                        <div>
                            <p className="font-medium text-neutral-950 mb-2">{t('retention.contactTitle')}</p>
                            <p className="text-neutral-700 text-sm">{t('retention.contact')}</p>
                        </div>
                        <div>
                            <p className="font-medium text-neutral-950 mb-2">{t('retention.consentTitle')}</p>
                            <p className="text-neutral-700 text-sm">{t('retention.consent')}</p>
                        </div>
                    </div>
                </section>

                {/* Rights */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">{t('rights.title')}</h2>
                    <p className="mt-3 text-neutral-700">
                        {t('rights.content')}
                    </p>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                        <p className="text-sm text-blue-900 leading-relaxed">
                            <span className="font-medium">{t('rights.authorityTitle')}</span>{' '}
                            <span className="font-semibold">{t('rights.authorityName')}</span>,{' '}
                            {t('rights.authorityAddress')} —{' '}
                            <a
                                href="https://www.datenschutz-berlin.de"
                                target="_blank"
                                rel="noreferrer"
                                className="underline decoration-blue-300 underline-offset-4 hover:decoration-blue-600"
                            >
                                {t('rights.authorityWebsite')}
                            </a>
                        </p>
                    </div>
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
                    <p className="mt-3 text-neutral-500 text-sm">
                        <span className="font-medium">{t('changes.updated')}:</span>{' '}
                        {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                </section>
            </FadeIn>
        </Container>
    )
}
