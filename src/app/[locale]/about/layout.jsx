// Server layout: DO NOT add 'use client'
import { getMessages } from 'next-intl/server'
import { locales, defaultLocale } from '@/i18n/config'

export const dynamic = 'force-static'
export const revalidate = false

export async function generateMetadata({ params }) {
    const locale = locales.includes(params?.locale) ? params.locale : defaultLocale

    const all = await getMessages({ locale })

    // Prefer namespaced meta (about.aboutMeta), then flat (aboutMeta), then legacy (meta)
    const meta =
        all?.about?.aboutMeta ??
        all?.aboutMeta ??
        all?.meta ??
        {}

    const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oversightgovernance.com'
    const pagePath = `/${locale}/about`
    const absUrl = new URL(pagePath, site).toString()

    // SEO fallbacks
    const title = meta.title ?? 'About — Oversight Governance Studio'
    const description = meta.description ?? 'Who we are and how we work: turning regulation into advantage and compliance into trust.'
    const ogTitle = meta.ogTitle ?? title
    const ogDesc = meta.ogDescription ?? description
    const twTitle = meta.twitterTitle ?? ogTitle
    const twDesc = meta.twitterDescription ?? ogDesc
    const ogImageRel = meta.ogImage ?? '/og/about.png'
    const ogImageAbs = new URL(ogImageRel, site).toString()

    // keywords: accept "a, b, c" string OR ["a","b","c"] array
    let keywords = []
    if (typeof meta.keywords === 'string') {
        keywords = meta.keywords.split(',').map(s => s.trim()).filter(Boolean)
    } else if (Array.isArray(meta.keywords)) {
        keywords = meta.keywords.map(s => String(s).trim()).filter(Boolean)
    }

    // hreflang alternates (+ x-default)
    const languages = Object.fromEntries(locales.map(l => [l, `/${l}/about`]))
    languages['x-default'] = `/${defaultLocale}/about`

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

export default function AboutLayout({ children }) {
    return children
}
