// src/components/LanguageSwitcher.jsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LOCALES = ['en', 'pt', 'de']

function stripLocale(pathname) {
    const parts = pathname.split('/')
    // ['', 'en', 'regulations', 'ai-act'] -> remove 'en'|'pt'|'de'
    if (LOCALES.includes(parts[1])) {
        parts.splice(1, 1)
    }
    const base = parts.join('/') || '/'
    return base.startsWith('/') ? base : `/${base}`
}

export default function LanguageSwitcher() {
    const pathname = usePathname()
    const basePath = stripLocale(pathname)

    return (
        <div className="inline-flex items-center gap-2 rounded-full border px-2 py-1 bg-white">
            {LOCALES.map((loc) => (
                <Link
                    key={loc}
                    href={`/${loc}${basePath}`}
                    className="px-3 py-1 rounded-full text-sm transition hover:bg-neutral-200"
                >
                    {loc === 'en' ? '🇬🇧 EN' : loc === 'pt' ? '🇧🇷 PT' : '🇩🇪 DE'}
                </Link>
            ))}
        </div>
    )
}
