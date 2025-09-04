// src/components/ContactSection.jsx
'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  const t = useTranslations()   // ⬅️ no 'common' namespace
  const locale = useLocale()

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-20 md:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
                {t('contactSection.title')}
              </h2>
              <div className="mt-6 flex">
                <Button href={`/${locale}/contact`} invert>
                  {t('contactSection.cta')}
                </Button>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-10 md:mt-0 md:border-t-0 md:pt-0 md:pl-8">
              <h3 className="font-display text-base font-semibold text-white">
                {t('contactSection.officeHeading')}
              </h3>
              <Offices invert className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
