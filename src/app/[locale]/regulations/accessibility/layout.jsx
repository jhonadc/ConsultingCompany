// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale

    const all = await getMessages({ locale })

    // ✅ Try common namespace shapes first, then flat, then legacy
    const meta =
        all?.accessibility?.eaaMeta ??   // e.g. messages.accessibility.eaaMeta
        all?.eaa?.eaaMeta ??             // e.g. messages.eaa.eaaMeta
        all?.eaaMeta ??                  // flat: messages.eaaMeta
        all?.meta ??                     // legacy
        {}

    const site = 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/regulations/accessibility`
    const absUrl = new URL(pagePath, site).toString()

    const title = meta.title ?? 'EU Accessibility Act (EAA): Requirements & Compliance'
    const description = meta.description ?? 'What the EU Accessibility Act requires and how to comply: WCAG 2.1 AA for digital services, EN 301 549 alignment, documentation and conformity assessment.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/eaa.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    const languages = Object.fromEntries(
        locales.map(l => [l, `/${l}/regulations/accessibility`])
    )
    languages['x-default'] = `/${defaultLocale}/regulations/accessibility`

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

export default function EaaLayout({ children }) {
    return children
}
