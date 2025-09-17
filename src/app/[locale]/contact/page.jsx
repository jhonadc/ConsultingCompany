// app/[locale]/contact/page.jsx
'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'

// helper seguro: só dispara se gtag existir; debug_mode só em dev
function track(eventName, params = {}) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, {
            ...(process.env.NODE_ENV !== 'production' ? { debug_mode: true } : {}),
            ...params,
        })
    }
}

function TextInput({ label, required = false, type = 'text', name, ...props }) {
    const id = useId()
    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                id={id}
                name={name}
                type={type}
                placeholder=" "
                required={required}
                aria-required={required ? 'true' : undefined}
                className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
                {...props}
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
                {label}
                {required && <span className="ml-1 text-red-600">*</span>}
            </label>
        </div>
    )
}

function ContactForm() {
    const t = useTranslations('contact.form')
    const locale = useLocale()
    const [status, setStatus] = useState({ sending: false, ok: null, msg: '' })

    async function onSubmit(e) {
        e.preventDefault()
        if (status.sending) return
        setStatus({ sending: true, ok: null, msg: '' })

        const formEl = e.currentTarget
        const form = new FormData(formEl)
        const payload = Object.fromEntries(form.entries())

        payload.service = 'general'
        payload.pagePath = typeof window !== 'undefined' ? window.location.pathname : ''

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || 'Failed')

            setStatus({ sending: false, ok: true, msg: t('status.success') })
            formEl.reset()

            // ✅ Conversão no sucesso
            track('generate_lead', {
                form_id: formEl.id || 'contact-form',
                form_name: formEl.getAttribute('aria-label') || 'Contact Form',
                service: 'general',
                locale,
                page_location: typeof window !== 'undefined' ? window.location.href : '',
                page_title: typeof document !== 'undefined' ? document.title : '',
                value: 1,
            })
        } catch (err) {
            console.error(err)
            setStatus({
                sending: false,
                ok: false,
                msg: t('status.error', { email: 'jhonathanagusto@gmail.com' }),
            })
        }
    }

    return (
        <FadeIn className="lg:order-last">
            <form id="contact-form" aria-label="Contact Form" onSubmit={onSubmit}>
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    {t('title')}
                </h2>

                {status.msg && (
                    <p className={`mt-3 text-md font-bold ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
                        {status.msg}
                    </p>
                )}

                <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                    <TextInput label={t('fields.name')} name="name" autoComplete="name" required />
                    <TextInput label={t('fields.email')} type="email" name="email" autoComplete="email" required />
                    <TextInput label={t('fields.company')} name="company" autoComplete="organization" />
                    <TextInput label={t('fields.phone')} type="tel" name="phone" autoComplete="tel" />
                    <TextInput label={t('fields.message')} name="message" required />
                </div>

                {/* Honeypot */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

                <Button
                    type="submit"
                    className="mt-10"
                    disabled={status.sending}
                    onClick={() => {
                        // 🔹 Tentativa (topo de funil) — não marque como conversão
                        track('lead_click', {
                            form_id: 'contact-form',
                            form_name: 'Contact Form',
                            service: 'general',
                            locale,
                            page_location: typeof window !== 'undefined' ? window.location.href : '',
                            page_title: typeof document !== 'undefined' ? document.title : '',
                        })
                    }}
                >
                    {status.sending ? t('cta.sending') : t('cta.primary')}
                </Button>

                <p className="mt-3 text-xs text-neutral-500">
                    <span className="text-red-600">*</span> {t('requiredNote')}
                </p>

                <PrivacyNote />
            </form>
        </FadeIn>
    )
}

function PrivacyNote() {
    const t = useTranslations('contact.form')
    const locale = useLocale()
    return (
        <p className="mt-4 text-xs text-neutral-500">
            {t('privacy.before')}{' '}
            <Link href={`/${locale}/privacy`} className="underline underline-offset-2 hover:text-neutral-900">
                {t('privacy.link')}
            </Link>.
        </p>
    )
}

function ContactDetails() {
    const t = useTranslations('contact.details')
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                {t('title')}
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                {t('desc')}
            </p>

            <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    {t('emailUs')}
                </h2>
                <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                    {[['General', 'jhonathanaugusto@gmail.com']].map(([label, email]) => (
                        <div key={email}>
                            <dt className="font-semibold text-neutral-950">{t('channels.general')}</dt>
                            <dd>
                                <Link href={`mailto:${email}`} className="text-neutral-600 hover:text-neutral-950">
                                    {email}
                                </Link>
                            </dd>
                        </div>
                    ))}
                </dl>
            </Border>
        </FadeIn>
    )
}

export default function Contact() {
    const t = useTranslations('contact.header')
    return (
        <>
            <PageIntro eyebrow={t('eyebrow')} title={t('title')}>
                <p>{t('subtitle')}</p>
            </PageIntro>

            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </Container>
        </>
    )
}
