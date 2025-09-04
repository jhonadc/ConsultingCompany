// src/components/LocaleLink.jsx
'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

function isInternal(href) {
    return typeof href === 'string' && href.startsWith('/')
}

function buildLocalizedHref(href, locale) {
    if (!isInternal(href)) return href
    // Avoid double prefix if href already has a locale
    const parts = href.split('/').filter(Boolean)
    const first = parts[0]
    if (['en', 'pt', 'de'].includes(first)) return href
    return `/${locale}${href}`
}

export default function LocaleLink({
    href,
    locale: forcedLocale,
    fallbackToDefault = true,
    prefetch = false, // keep network noise down
    ...props
}) {
    const params = useParams()
    const currentLocale = forcedLocale ?? params?.locale ?? 'en'
    const localizedHref = buildLocalizedHref(href, currentLocale)

    // If the localized route 404s, route to the default (non-localized) path.
    async function handleClick(e) {
        if (!fallbackToDefault || !isInternal(href)) return
        try {
            const res = await fetch(localizedHref, { method: 'HEAD' })
            if (res.ok) return // localized page exists → let Link navigate
        } catch { /* ignore network errors and fall back */ }
        e.preventDefault()
        window.location.assign(href) // default route without locale prefix
    }

    return (
        <Link href={localizedHref} prefetch={prefetch} onClick={handleClick} {...props} />
    )
}
