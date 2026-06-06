'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Offices } from '@/components/Offices'

import LanguageSwitcher from '@/components/LanguageSwitcher'
import LocaleLink from '@/components/LocaleLink'

// New logo components
import { OversightMark, OversightWordmark } from '@/components/OversightLogo'

const RootLayoutContext = createContext(null)

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function EnvelopeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect x="3" y="6.5" width="18" height="11" rx="1.5" stroke="currentColor" />
      <path d="M3 7l9 7 9-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Header({ panelId, icon: Icon, expanded, onToggle, toggleRef, invert = false }) {
  const { logoHovered, setLogoHovered } = useContext(RootLayoutContext)
  const t = useTranslations('c-rootlayout')

  return (
    <Container>
      <div className="flex items-center justify-between">
        <LocaleLink
          href="/"
          aria-label={t('header.homeAria')}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          {/* MOBILE (48px logo, text-lg, gap-1, color flips with invert) */}
          <div
            className={clsx(
              'sm:hidden flex items-center gap-1 text-lg tracking-tight',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            <OversightMark
              key={logoHovered ? 'hovered' : 'idle'}  // replay animation on hover
              size={34}
              invert={invert}
            />
            <span className="font-bold leading-none">Oversight</span>{' '}
            <span className="font-medium leading-none">Governance</span>
          </div>

          {/* DESKTOP wordmark (66px logo, text-xl inside component, gap-1, auto color) */}
          <div className="hidden sm:block">
            <OversightWordmark
              key={logoHovered ? 'hovered' : 'idle'} // replay animation on hover
              invert={invert}
              markSize={66}
              replayKey={logoHovered ? 'hovered' : 'idle'}
            />
          </div>
        </LocaleLink>

        <div className="flex items-center gap-x-4 sm:gap-x-8">
          <div className={clsx(invert ? 'text-white' : 'text-neutral-950')}>
            <LanguageSwitcher invert={invert} />
          </div>

          <div className="hidden sm:block">
            <LocaleLink href="/contact" className="inline-block">
              <Button asChild invert={invert}>
                <span>{t('header.contactCta')}</span>
              </Button>
            </LocaleLink>
          </div>

          <LocaleLink
            href="/contact"
            aria-label={t('header.contactAria')}
            className={clsx(
              'sm:hidden group -m-2.5 rounded-full p-2.5 transition',
              invert
                ? 'hover:bg-white/10 text-white hover:text-neutral-200'
                : 'hover:bg-neutral-950/10 text-neutral-950 hover:text-neutral-700',
            )}
          >
            <EnvelopeIcon className="h-6 w-6" />
          </LocaleLink>

          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-label={t('header.toggleNavAria')}
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="mt-px first:mt-0 sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, children }) {
  return (
    <LocaleLink
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </LocaleLink>
  )
}

function Navigation() {
  const t = useTranslations('c-rootlayout')
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/regulations">{t('nav.regulations')}</NavigationItem>
        <NavigationItem href="/process">{t('nav.process')}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/about">{t('nav.about')}</NavigationItem>
        <NavigationItem href="/blog">{t('nav.blog')}</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/contact">{t('nav.contact')}</NavigationItem>
        <div aria-hidden className="hidden sm:block" />
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }) {
  const t = useTranslations('c-rootlayout')
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef(null)
  let closeRef = useRef(null)
  let navRef = useRef(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (event.target instanceof HTMLElement && event.target.closest('a')?.href === window.location.href) {
        setExpanded(false)
      }
    }
    window.addEventListener('click', onClick)
    return () => window.removeEventListener('click', onClick)
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        {/* top nav */}
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            invert={expanded}
            onToggle={() => {
              setExpanded((prev) => !prev)
              window.setTimeout(() => closeRef.current?.focus({ preventScroll: true }))
            }}
          />
        </div>

        {/* slideout */}
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pt-14 pb-16">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((prev) => !prev)
                  window.setTimeout(() => openRef.current?.focus({ preventScroll: true }))
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">{t('header.ourOffices')}</h2>
                    <Offices invert className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2" />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-x-hidden bg-white pt-14"
      >
        <motion.div layout className="relative isolate flex w-full flex-col pt-9">
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
