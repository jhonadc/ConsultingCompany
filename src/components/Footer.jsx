// src/components/Footer.jsx
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

const navItems = [
  { title: 'Regulations', href: '/regulations' },
  { title: 'How We Work', href: '/process' },
  { title: 'About Us', href: '/about' },
  { title: 'Blog', href: '/blog' },
  { title: 'Get in Touch', href: '/contact' },
]

function Navigation() {
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
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">

      {/* ROW 1: logo (1fr) | nav (2fr) | legal (1fr) */}
      <div className="grid grid-cols-1 items-center gap-6 border-t border-neutral-950/10 pt-8 sm:pt-10 lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left: Logo */}
        <div className="flex justify-center lg:justify-start">
          <Link href="/" aria-label="Home" className="shrink-0">
            <Logo className="h-8" fillOnHover />
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
              Imprint
            </Link>
            <span aria-hidden>•</span>
            <Link
              href="/legal/privacy"
              className="hover:text-neutral-800 hover:underline underline-offset-4"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>

      {/* ROW 2: © centered */}
      <div className="mt-6 mb-14">
        <p className="text-center text-sm text-neutral-700">
          © Amecari – Regulatory and Governance Advisory. Berlin, {new Date().getFullYear()}
        </p>
      </div>

    </Container>
  )
}
