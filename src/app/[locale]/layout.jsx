// src/app/[locale]/layout.jsx
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'

// Import your big client-side RootLayout (the one with Header, Navigation, Footer, etc.)
import { RootLayout as AppShell } from '@/components/RootLayout'

// This layout is a Server Component
export default async function LocaleLayout({ children, params: { locale } }) {
    // Ensure locale is locked for this request
    setRequestLocale(locale)

    // Load all messages for this locale (configured in next-intl)
    const messages = await getMessages()

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <AppShell>{children}</AppShell>
        </NextIntlClientProvider>
    )
}