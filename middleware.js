import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['en', 'pt', 'de'],
    defaultLocale: 'en',
    localeDetection: true
})

export const config = {
    matcher: ['/((?!_next|.*\\..*).*)']
}
