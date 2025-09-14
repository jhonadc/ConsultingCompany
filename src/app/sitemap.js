import { locales } from '@/i18n/config'

/**
 * List canonical paths ONCE (without locale).
 * This expands to /en, /pt, /de.
 */
const CANONICAL_ROUTES = [
    '/',                      // Home
    '/regulations',           // Regulations index
    '/regulations/gdpr',
    '/regulations/ai-act',
    '/regulations/lgpd',
    '/regulations/accessibility',        // ✅ fixed spelling
    '/services/ai-services/ai-literacy',
    '/services/ai-services/ai-policy',
    '/services/ai-services/high-risk',
    '/services/ai-services/ai-officer',
    '/services/gdpr-services/gdpr-dpo',  // ✅ fixed typo
    '/process',
    '/about',
    '/blog',
    '/contact',
]

export default async function sitemap() {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oversightgovernance.com'

    return CANONICAL_ROUTES.flatMap((path) =>
        locales.map((locale) => ({
            url: `${baseUrl}/${locale}${path === '/' ? '' : path}`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: path === '/' ? 1.0 : 0.6,
        }))
    )
}
