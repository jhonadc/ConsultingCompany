// src/app/ga-tracker.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export default function GATracker() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (!pathname) return
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
        // @ts-ignore
        window.gtag?.('event', 'page_view', { page_location: url })
    }, [pathname, searchParams])

    return null
}
