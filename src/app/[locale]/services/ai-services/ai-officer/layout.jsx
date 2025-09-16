// src/app/[locale]/services/ai-services/ai-officer/layout.jsx
// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale

    // Load all messages for this locale
    const all = await getMessages({ locale })

    // ✅ Robust meta lookup (namespaced → flat → legacy)
    const meta =
        all?.aiOfficer?.aiOfficerMeta ??      // messages.aiOfficer.aiOfficerMeta
        all?.aiOfficer?.meta ??               // messages.aiOfficer.meta
        all?.['ai-officer']?.aiOfficerMeta ?? // messages['ai-officer'].aiOfficerMeta
        all?.['ai-officer']?.meta ??          // messages['ai-officer'].meta
        all?.aiOfficerMeta ??                 // flat
        all?.meta ??                          // legacy
        {}

    const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://comforma.eu'
    const pagePath = `/${locale}/services/ai-services/ai-officer`
    const absUrl = new URL(pagePath, site).toString()

    // SEO fallbacks
    const title = meta.title ?? 'AI Officer & AI Governance (EU AI Act, GDPR)'
    const description =
        meta.description ??
        'AI governance aligned with the EU AI Act and GDPR. Build controls, reduce risks, and stay audit-ready with clear oversight structures.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc

    const ogImageRel = meta.ogImage ?? '/og/ai-officer.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: accept "a, b, c" OR ["a","b","c"]
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (+ x-default)
    const languages = Object.fromEntries(
        locales.map(l => [l, `/${l}/services/ai-services/ai-officer`])
    )
    languages['x-default'] = `/${defaultLocale}/services/ai-services/ai-officer`

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

export default function AiOfficerLayout({ children }) {
    return children
}
