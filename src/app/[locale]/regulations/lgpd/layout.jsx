// src/app/[locale]/regulations/lgpd/layout.jsx
// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale

    // Load messages for the active locale
    const all = await getMessages({ locale })

    // ✅ Look in the namespaced object first, then flat, then legacy fallback
    const meta =
        all?.lgpd?.lgpdMeta ??  // ← most common with namespaced JSON
        all?.lgpdMeta ??        // ← flat, if you previously spread it
        all?.meta ??            // ← legacy top-level
        {}

    const site = 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/regulations/lgpd`
    const absUrl = new URL(pagePath, site).toString()

    // SEO fallbacks
    const title = meta.title ?? 'LGPD: Requirements & Compliance (Brazil)'
    const description =
        meta.description ??
        'What LGPD requires and how to comply: RIPD (DPIA), records, operator governance, DPO, incident response and international transfers.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/lgpd.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: accept "a, b, c" OR ["a","b","c"]
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (+ x-default)
    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/regulations/lgpd`]))
    languages['x-default'] = `/${defaultLocale}/regulations/lgpd`

    return {
        metadataBase: new URL(site),
        title: { default: title, template: '%s – Oversight Governance Studio' },
        description,
        keywords,
        alternates: { canonical: pagePath, languages },
        openGraph: {
            type: 'website',
            url: absUrl,
            siteName: 'Oversight Governance Studio',
            title: ogTitle,
            description: ogDesc,
            locale,
            images: [{ url: ogImageAbs, width: 1200, height: 630, alt: ogTitle }],
        },
        twitter: {
            card: 'summary_large_image',
            title: twTitle,
            description: twDesc,
            images: [ogImageAbs],
        },
        robots: { index: true, follow: true },
    }
}

export default function LgpdLayout({ children }) {
    return children
}
