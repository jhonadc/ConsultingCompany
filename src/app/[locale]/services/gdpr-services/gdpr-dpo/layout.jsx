// Server layout: do NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale
    const all = await getMessages({ locale })   // ✅ pass locale explicitly
    const M = all?.gdprDpo ?? {}
    const meta = M?.meta ?? {}

    const site = 'https://www.oversightgovernance.com' // correct domain
    const pagePath = `/${locale}/services/gdpr-dpo`     // <— adjust if your slug differs
    const absUrl = new URL(pagePath, site).toString()

    // Robust fallbacks
    const title = meta.title ?? 'European Data Protection Officer (DPO) Services | GDPR Compliance'
    const description = meta.description ?? 'EU-certified DPO for global companies: GDPR assessments, DPIAs, 72h breach response, cross-border transfers, regulatory liaison—avoid multimillion-euro fines.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/gdpr-dpo.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: accept "a, b, c" string OR ["a","b","c"] array
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (+ x-default)
    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/services/gdpr-dpo`]))
    languages['x-default'] = `/${defaultLocale}/services/gdpr-dpo`

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
            images: [{ url: ogImageAbs, width: 1200, height: 630, alt: ogTitle }]
        },
        twitter: {
            card: 'summary_large_image',
            title: twTitle,
            description: twDesc,
            images: [ogImageAbs]
        },
        robots: { index: true, follow: true }
    }
}

export default function GdprDpoLayout({ children }) {
    return children
}
