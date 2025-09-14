export function languageAlternates(pathname) {
    // Pathname must be the route WITHOUT locale, e.g. '/', '/regulations/gdpr'
    const norm = pathname === '/' ? '' : pathname
    return {
        languages: {
            en: `/en${norm}`,
            de: `/de${norm}`,
            pt: `/pt${norm}`,
            'x-default': `/en${norm}`,
        },
    }
}
