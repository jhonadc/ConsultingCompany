'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { OversightWordmark } from '@/components/OversightLogo'
import { useTranslations } from 'next-intl'
import { useState } from 'react'             // ✅ add this

function Navigation() {
  const t = useTranslations('c-footer')

  const navItems = [
    { title: t('nav.regulations'), href: '/regulations' },
    { title: t('nav.process'), href: '/process' },
    { title: t('nav.about'), href: '/about' },
    { title: t('nav.blog'), href: '/blog' },
    { title: t('nav.contact'), href: '/contact' },
  ]

  return (
    <nav aria-label="Footer">
      <ul
        role="list"
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-neutral-700"
      >
        {navItems.map((item) => (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              className="transition hover:text-neutral-950 hover:underline underline-offset-4"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  const t = useTranslations('c-footer')
  const [hover, setHover] = useState(false)    // ✅ local hover state

  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      {/* ROW 1: logo | nav | legal */}
      <div className="grid grid-cols-1 items-center gap-6 border-t border-neutral-950/10 pt-8 sm:pt-10 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left: Logo */}
        <div className="flex justify-center lg:justify-start">
          <Link
            href="/"
            aria-label="Home"
            className="shrink-0"
            onMouseEnter={() => setHover(true)}      // ✅ trigger replay on hover
            onMouseLeave={() => setHover(false)}     // ✅ reset on leave
          >
            <OversightWordmark
              markSize={48}
              replayKey={hover ? 'hovered' : 'idle'} // ✅ force remount of the mark
              key={hover ? 'hovered' : 'idle'}        // ✅ (belt & suspenders)
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="order-last lg:order-none">
          <Navigation />
        </div>

        {/* Right: Imprint | Privacy */}
        <div className="flex justify-center lg:justify-end text-xs text-neutral-500">
          <div className="flex items-center gap-x-4">
            <Link
              href="/legal/imprint"
              className="hover:text-neutral-800 hover:underline underline-offset-4"
            >
              {t('legal.imprint')}
            </Link>
            <span aria-hidden>•</span>
            <Link
              href="/legal/privacy"
              className="hover:text-neutral-800 hover:underline underline-offset-4"
            >
              {t('legal.privacy')}
            </Link>
          </div>
        </div>
      </div>

      {/* ROW 2: © */}
      <div className="mt-6 mb-14">
        <p className="text-center text-sm text-neutral-700">
          © Oversight – Regulatory and Governance Advisory. Berlin, {new Date().getFullYear()}
        </p>
      </div>
    </Container>
  )
}
