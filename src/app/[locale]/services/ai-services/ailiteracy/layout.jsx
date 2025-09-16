// Server layout: NÃO colocar 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale
    const all = await getMessages({ locale })   // ✅ pass locale explicitly
    const M = all?.aiLiteracy ?? {}
    const meta = M?.meta ?? {}

    const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/services/ai-services/ailiteracy`
    const absUrl = new URL(pagePath, site).toString()

    // Fallbacks SEO otimizados
    const title = meta.title ?? 'AI Literacy Training for Teams (EU AI Act, GDPR)'
    const description =
        meta.description ??
        'Hands-on AI literacy training for product, data and ops teams. Enable safe and compliant GenAI use with policies, risk controls, and audit-ready skills.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/ai-literacy.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords aceita string "a, b, c" OU array ["a","b","c"]
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (inclui x-default)
    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/services/ai-services/ailiteracy`]))
    languages['x-default'] = `/${defaultLocale}/services/ai-services/ailiteracy`

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

export default function AiLiteracyLayout({ children }) {
    return children
}
