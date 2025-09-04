// middleware.js  (place at project root)
import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale, localePrefix } from './src/i18n/config'

export default createMiddleware({
    locales,            // ['en','pt','de']
    defaultLocale,      // 'en'
    localePrefix,       // 'always'
    localeDetection: true // cookie (NEXT_LOCALE) → Accept-Language → default
})

export const config = {
    matcher: [
        // Skip API, Next internals, and any path with a file extension
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
}
