// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale

    // Load messages and pick this page's meta
    const all = await getMessages({ locale })
    // ✅ Robust lookup: namespaced first, then flat, then legacy
    const meta =
        all?.process?.processMeta ??  // e.g. locales/{locale}/process.json -> { "processMeta": { ... } }
        all?.process?.meta ??         // if you kept it as "meta" inside process.json
        all?.processMeta ??           // flat spread
        all?.meta ??                  // legacy
        {}

    const site = 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/process`
    const absUrl = new URL(pagePath, site).toString()

    // SEO-safe fallbacks
    const title = meta.title ?? 'How We Work: Assess • Implement • Sustain'
    const description = meta.description ?? 'Our pragmatic, audit-ready compliance process: assess risks, implement controls and documentation, and sustain performance with measurable outcomes.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/process.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: accept "a, b, c" string OR ["a","b","c"] array
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (+ x-default)
    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/process`]))
    languages['x-default'] = `/${defaultLocale}/process`

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

export default function ProcessLayout({ children }) {
    return children
}
