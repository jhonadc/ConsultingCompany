// Server layout: NÃO colocar 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale
    const all = await getMessages({ locale })   // ✅ pass locale explicitly


    const M = all?.aiPolicy ?? {}
    const meta = M?.meta ?? {}

    const site = 'https://www.oversightgovernance.com' // ✅ domínio correto
    const pagePath = `/${locale}/services/ai-services/ai-use-policy`
    const absUrl = new URL(pagePath, site).toString()

    // Fallbacks SEO
    const title = meta.title ?? 'AI Use Policy for GenAI & LLMs (EU AI Act, GDPR)'
    const description =
        meta.description ??
        'Practical AI use policies for GenAI and LLMs. Define roles, transparency, oversight, and compliance with the EU AI Act and GDPR for safe adoption.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/ai-policy.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: aceita string "a, b, c" OU array ["a","b","c"]
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (+ x-default)
    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/services/ai-services/ai-use-policy`]))
    languages['x-default'] = `/${defaultLocale}/services/ai-services/ai-use-policy`

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

export default function AiPolicyLayout({ children }) {
    return children
}
