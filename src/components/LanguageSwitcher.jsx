// src/components/LanguageSwitcher.jsx
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

const LOCALES = ['en', 'pt', 'de']

function stripLocale(pathname) {
    const parts = pathname.split('/')
    if (LOCALES.includes(parts[1])) parts.splice(1, 1)
    const base = parts.join('/') || '/'
    return base.startsWith('/') ? base : `/${base}`
}
function getCurrentLocaleFromPath(pathname) {
    const seg1 = pathname.split('/')[1]
    return LOCALES.includes(seg1) ? seg1 : 'en'
}
function getCookie(name) {
    return document.cookie
        .split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1]
}
function setCookieSafe(name, value) {
    const maxAge = 60 * 60 * 24 * 365
    const secure = typeof window !== 'undefined' && window.location?.protocol === 'https:'
    let cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`
    if (secure) cookie += '; Secure'
    document.cookie = cookie
    try { localStorage.setItem(name, value) } catch { }
}
function getPreferredLocaleFromStorage() {
    try {
        const v = localStorage.getItem('NEXT_LOCALE')
        if (v && LOCALES.includes(v)) return v
    } catch { }
    return null
}
function detectBrowserLocale() {
    const candidates = [
        ...(navigator.languages || []),
        navigator.language,
        navigator.userLanguage,
    ].filter(Boolean)
    for (const lang of candidates) {
        const lc = String(lang).toLowerCase()
        if (lc.startsWith('pt')) return 'pt'
        if (lc.startsWith('de')) return 'de'
        if (lc.startsWith('en')) return 'en'
    }
    return 'en'
}

export default function LanguageSwitcher({ invert = false }) {
    const pathname = usePathname()
    const router = useRouter()
    const basePath = stripLocale(pathname)
    const current = getCurrentLocaleFromPath(pathname)

    const [open, setOpen] = useState(false)
    const wrapperRef = useRef(null)

    function handleLocaleChange(locale) {
        setCookieSafe('NEXT_LOCALE', locale)
    }

    useEffect(() => {
        const cookie = getCookie('NEXT_LOCALE')
        const stored = getPreferredLocaleFromStorage()
        const effective = cookie || stored
        if (!effective) {
            const preferred = detectBrowserLocale()
            handleLocaleChange(preferred)
            if (preferred !== current) {
                router.replace(`/${preferred}${basePath}`)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        function onClickOutside(e) {
            if (open && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', onClickOutside)
        return () => document.removeEventListener('mousedown', onClickOutside)
    }, [open])

    const FLAGS = useMemo(() => ({ en: '🇺🇸', pt: '🇧🇷', de: '🇩🇪' }), [])
    const LABELS = useMemo(() => ({ en: 'US', pt: 'PT', de: 'DE' }), [])
    const others = LOCALES.filter((l) => l !== current)

    // classes that flip in "invert" mode
    const pillClass = invert
        ? 'border-white/30 bg-transparent text-white hover:ring-white/30'
        : 'border-neutral-300 bg-white text-neutral-900 hover:ring-neutral-300'
    const menuClass = invert
        ? 'border-white/10 bg-neutral-900 text-white'
        : 'border-neutral-200 bg-white text-neutral-900'
    const itemHover = invert ? 'hover:bg-white/10' : 'hover:bg-neutral-100'

    return (
        <div ref={wrapperRef} className="relative inline-block text-left">
            {/* Trigger pill */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className={[
                    'inline-flex items-center gap-1 sm:gap-2 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 shadow-sm',
                    'transition text-xs sm:text-sm border hover:ring-1',
                    pillClass,
                ].join(' ')}
                aria-haspopup="menu"
                aria-expanded={open}
            >
                <span className="text-base sm:text-lg leading-none">{FLAGS[current]}</span>
                <span className="font-medium">{LABELS[current]}</span>
                <svg
                    className="h-3 w-3 sm:h-4 sm:w-4 opacity-70"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.094l3.71-3.864a.75.75 0 0 1 1.08 1.04l-4.24 4.41a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    role="menu"
                    aria-label="Change language"
                    className={[
                        'absolute right-0 z-20 mt-1 w-28 sm:w-32 origin-top-right rounded-2xl shadow-lg p-1 sm:p-1.5',
                        'backdrop-blur',
                        'border',
                        menuClass,
                    ].join(' ')}
                >
                    {others.map((loc) => (
                        <Link
                            key={loc}
                            href={`/${loc}${basePath}`}
                            onClick={() => {
                                handleLocaleChange(loc)
                                setOpen(false)
                            }}
                            role="menuitem"
                            className={[
                                'flex items-center gap-2 rounded-xl px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm transition',
                                itemHover,
                            ].join(' ')}
                        >
                            <span className="text-base sm:text-lg leading-none">{FLAGS[loc]}</span>
                            <span className="font-medium">{LABELS[loc]}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
