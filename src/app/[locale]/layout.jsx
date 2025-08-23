// src/app/[locale]/layout.jsx
import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale, getMessages } from 'next-intl/server'

// ⚠️ No <html>, no <Shell>, no Footer here.
// This wrapper only provides i18n to pages under /[locale]/...
export default async function LocaleLayout({ children, params: { locale } }) {
    setRequestLocale(locale)                 // ensure correct locale for this request
    const messages = await getMessages()     // resolved via src/i18n/request.js
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    )
}
