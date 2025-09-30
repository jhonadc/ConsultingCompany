'use client'

import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { useTranslations } from 'next-intl'

export default function ImprintPage() {
    const t = useTranslations('imprint')

    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro eyebrow={t('eyebrow')} title={t('title')}>
                <p className="text-lg text-neutral-600">{t('intro')}</p>
            </SectionIntro>

            <div className="mt-12 max-w-2xl ml-8 space-y-10 text-neutral-800">
                <div>
                    <h3 className="text-base font-semibold text-neutral-950">{t('operatorTitle')}</h3>
                    <p className="mt-2">{t.rich('operatorBody', { br: () => <br /> })}</p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">{t('contactTitle')}</h3>
                    <p className="mt-2">
                        {t('emailLabel')}: {' '}
                        <a href="mailto:jhonathanasiaugusto@gmail.com" className="underline hover:text-neutral-950">
                            jhonathanasiaugusto@gmail.com
                        </a>
                        <br />
                        {t('websiteLabel')}: {' '}
                        <a href="https://www.oversightgovernance.com" className="underline hover:text-neutral-950" target="_blank" rel="noopener noreferrer">
                            www.oversightgovernance.com
                        </a>
                    </p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">{t('responsibleTitle')}</h3>
                    <p className="mt-2">{t.rich('responsibleBody', { br: () => <br /> })}</p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">{t('statusTitle')}</h3>
                    <p className="mt-2">{t('statusBody')}</p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">{t('disclaimerTitle')}</h3>
                    <p className="mt-2 text-sm text-neutral-700">{t('disclaimerBody')}</p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">{t('disputeTitle')}</h3>
                    <p className="mt-2 text-sm text-neutral-700">
                        {t.rich('disputeBody', {
                            a: (chunks) => (
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    className="underline hover:text-neutral-950"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {chunks}
                                </a>
                            ),
                            br: () => <br />
                        })}
                    </p>
                </div>
            </div>
        </Container>
    )
}
