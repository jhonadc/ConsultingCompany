// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale

    // Read messages and prefer aiActMeta; fallback to legacy top-level meta
    const all = await getMessages({ locale })
    const meta = all?.aiActMeta ?? all?.meta ?? {}

    const site = 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/regulations/ai-act`
    const absUrl = new URL(pagePath, site).toString()

    const title = meta.title ?? 'EU AI Act: Requirements & Compliance'
    const description =
        meta.description ??
        'EU AI Act compliance explained: classification, high-risk duties, GPAI rules, governance, and readiness support for companies in the EU market.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/ai-act.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    let keywords = []
    if (typeof meta.keywords === 'string') keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    else if (Array.isArray(meta.keywords)) keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)

    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/regulations/ai-act`]))
    languages['x-default'] = `/${defaultLocale}/regulations/ai-act`

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

export default function AiActLayout({ children }) {
    return children
}
