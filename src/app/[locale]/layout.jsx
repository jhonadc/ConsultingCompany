// src/app/[locale]/layout.jsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { locales } from '@/i18n/config'          // ✅ add this
import { RootLayout as AppShell } from '@/components/RootLayout'

// ✅ Tell Next to output static HTML for this whole subtree
export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false                  // build-time only (no ISR)

// ✅ Pre-generate /en, /pt, /de
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params: { locale } }) {
    setRequestLocale(locale)
    const messages = await getMessages()

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <AppShell>{children}</AppShell>
        </NextIntlClientProvider>
    )
}
