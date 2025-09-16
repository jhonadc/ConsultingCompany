// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale
    const all = await getMessages({ locale })   // ✅ pass locale explicitly
    const M = all?.highRisk ?? {}
    const meta = M?.meta ?? {}

    const site = 'https://www.oversightgovernance.com' // ✅ correct domain
    const pagePath = `/${locale}/services/ai-services/highrisk`
    const absUrl = new URL(pagePath, site).toString()

    // Robust fallbacks
    const title = meta.title ?? 'High-Risk AI System Assessment (EU AI Act)'
    const description =
        meta.description ??
        'Expert assessment of high-risk AI under the EU AI Act. Annex III mapping, classification, and a clear compliance roadmap with audit-ready evidence.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/ai-highrisk.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: accept "a, b, c" string or ["a","b","c"] array
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates + x-default
    const languages = Object.fromEntries(
        locales.map(l => [l, `/${l}/services/ai-services/highrisk`])
    )
    languages['x-default'] = `/${defaultLocale}/services/ai-services/highrisk`

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

export default function HighRiskLayout({ children }) {
    return children
}
