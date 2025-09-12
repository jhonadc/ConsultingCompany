// Server layout: must NOT have "use client"
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
    const locale = params?.locale || 'en'
    const t = await getTranslations({ locale, namespace: 'aiOfficer' })

    // Safe getter – if key is missing, return undefined
    const safeT = (key) => {
        try {
            return t(key)
        } catch {
            return undefined
        }
    }

    const title =
        safeT('meta.title') ?? 'AI Officer & AI Governance'
    const description =
        safeT('meta.description') ??
        'Operational AI governance aligned with the EU AI Act, GDPR, and security controls.'

    const ogTitle = safeT('meta.ogTitle') ?? title
    const ogDescription = safeT('meta.ogDescription') ?? description
    const twitterTitle = safeT('meta.twitterTitle') ?? ogTitle
    const twitterDescription = safeT('meta.twitterDescription') ?? ogDescription
    const ogImage = safeT('meta.ogImage') ?? '/og/ai-officer.png'

    const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://comforma.eu'
    const pagePath = `/${locale}/services/ai-services/ai-officer`
    const pageUrl = new URL(pagePath, site)

    return {
        metadataBase: new URL(site),
        title: { default: title, template: '%s – Oversight Governance Studio' },
        description,
        alternates: {
            canonical: pagePath
        },
        openGraph: {
            type: 'website',
            url: pageUrl.toString(),
            siteName: 'Oversight Governance Studio',
            title: ogTitle,
            description: ogDescription,
            locale,
            images: [ogImage]
        },
        twitter: {
            card: 'summary_large_image',
            title: twitterTitle,
            description: twitterDescription,
            images: [ogImage]
        },
        robots: { index: true, follow: true }
    }
}

export default function AiOfficerLayout({ children }) {
    return children
}
