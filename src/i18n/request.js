// src/i18n/request.js
import { getRequestConfig } from 'next-intl/server'

const SUPPORTED = ['en', 'pt', 'de']
const DEFAULT = 'en'

export default getRequestConfig(async ({ requestLocale }) => {
    // Determine the locale from the URL (middleware) or fallback
    const requested = await requestLocale
    const locale = SUPPORTED.includes(requested) ? requested : DEFAULT

    // Load JSON bundles; tolerate missing files per-locale
    const [common, aiAct] = await Promise.all([
        import(`../../locales/${locale}/common.json`).then(m => m.default).catch(() => ({})),
        import(`../../locales/${locale}/ai-act.json`).then(m => m.default).catch(() => ({}))
    ])

    // IMPORTANT:
    // - ai-act keys are spread at the root (header.*, offer.*, …)
    // - common stays namespaced (common.*)
    const messages = { common, ...aiAct }

    return { locale, messages }
})
