// middleware.js
import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['en', 'pt', 'de'],
    defaultLocale: 'en',
    localeDetection: true,    // cookie (NEXT_LOCALE) → Accept-Language → default
    localePrefix: 'always'    // always serve /<locale>/... for consistency
})

export const config = {
    matcher: [
        // Skip Next.js internals and static files (and API if you have one)
        '/((?!api|_next|.*\\..*).*)'
    ]
}
