// src/components/Footer.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

/** Flat, up-to-date footer links */
const navItems = [
  { title: 'Regulations', href: '/regulations' },
  { title: 'How We Work', href: '/our-process' }, // or '/process' if that's your route
  { title: 'About Us', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Get in Touch', href: '/contact' },
]

function Navigation() {
  return (
    <nav aria-label="Footer">
      <ul
        role="list"
        className="
          flex flex-wrap items-center
          gap-x-6 gap-y-3
          text-sm text-neutral-700
        "
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

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}




export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        {/* Top row: logo + nav + newsletter (newsletter drops below on small screens) */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center justify-between lg:block">
            <Link href="/" aria-label="Home" className="shrink-0">
              <Logo className="h-8" fillOnHover />
            </Link>
          </div>

          <Navigation />

        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 mb-14 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-8 sm:pt-10">
          <p className="text-sm text-neutral-700">
            © Comforma Compliance — Berlin, {new Date().getFullYear()}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-neutral-500">
            <Link href="/legal/imprint" className="hover:text-neutral-800 hover:underline underline-offset-4">Imprint</Link>
            <span aria-hidden>•</span>
            <Link href="/legal/terms_and_conditions" className="hover:text-neutral-800 hover:underline underline-offset-4">Privacy</Link>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
