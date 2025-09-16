// src/app/[locale]/regulations/layout.jsx
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale
    const all = await getMessages({ locale })

    // pull "meta" inside regulations-main.json for this locale
    const meta = all?.['regulations-main']?.meta ?? {}

    const site = 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/regulations`
    const absUrl = new URL(pagePath, site).toString()

    const title = meta.title ?? 'AI Act, GDPR, LGPD & Accessibility Compliance'
    const description =
        meta.description ??
        'Compliance across the EU AI Act, GDPR, LGPD and Accessibility Act. Oversight Governance Studio delivers policies, controls and audit-ready evidence.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/regulations.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map((s) => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map((s) => String(s).trim()).filter(Boolean)
    }

    const languages = Object.fromEntries(locales.map((l) => [l, `/${l}/regulations`]))
    languages['x-default'] = `/${defaultLocale}/regulations`

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

export default function RegulationsLayout({ children }) {
    return children
}
