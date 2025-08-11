'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HeroClient() {
  const tabs = [
    {
      key: 'ai-literacy',
      label: 'AI Literacy',
      href: '/services#ai-literacy',
      title: 'AI Literacy that changes behavior',
      body:
        'Upskill product, legal, and engineering with concise, role-based training. Safer velocity, fewer escalations, and decisions leadership can defend.',
    },
    {
      key: 'high-risk',
      label: 'Am I high-risk?',
      href: '/services#high-risk',
      title: 'AI Act classification, fast',
      body:
        'Map use cases and data to the AI Act early. You get a clear risk tier, mitigations, and Annex IV evidence regulators expect.',
    },
    {
      key: 'ai-policy',
      label: 'AI Use Policy',
      href: '/services#ai-use-policy',
      title: 'Clear guardrails, zero friction',
      body:
        'Practical guardrails teams actually follow: approved tools, human oversight, vendor checks, and change control wired into your workflow.',
    },
  ]

  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find(t => t.key === active) || tabs[0]

  return (
    <section className="relative isolate flex items-center min-h-[100svh] py-20 sm:py-24">
      {/* Container substitute */}
      <div className="mx-auto w-full max-w-screen-xl px-6 sm:px-8">
        <div className="max-w-4xl">
          <h1 className="font-display text-5xl font-medium leading-tight tracking-tight text-neutral-950 sm:text-7xl">
            Compliance that ships.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            EU rules shouldn’t slow you down. We turn the AI Act, GDPR, and sector norms into
            clear tickets your team can ship—backed by audit-ready evidence and zero last-minute
            surprises.
          </p>

          {/* Tabs */}
          <div className="mt-8">
            <div
              role="tablist"
              aria-label="Key services"
              className="inline-flex rounded-full border border-neutral-300 p-1 text-sm"
            >
              {tabs.map(t => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={active === t.key}
                  onClick={() => setActive(t.key)}
                  className={`rounded-full px-3 py-1 transition-colors ${
                    active === t.key
                      ? 'bg-white text-neutral-900 ring-1 ring-neutral-300'
                      : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Micro-proof panel */}
            <div className="mt-6 rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-display text-lg font-semibold text-neutral-950">{current.title}</h2>
                  <p className="mt-2 text-neutral-600">{current.body}</p>
                </div>
                <div className="sm:shrink-0">
                  <Link
                    href={current.href}
                    className="inline-flex items-center justify-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side quick links (desktop) */}
      <nav
        aria-label="Quick links"
        className="pointer-events-auto absolute right-4 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-end lg:gap-2"
      >
        {tabs.map((t) => (
          <Link
            key={t.key}
            href={t.href}
            className="rounded-full border border-neutral-300/80 bg-white/80 px-3 py-1 text-xs text-neutral-700 backdrop-blur-sm transition hover:bg-white hover:shadow-sm"
          >
            {t.label} →
          </Link>
        ))}
      </nav>

      {/* Mobile quick links */}
      <div className="fixed inset-x-4 bottom-4 z-10 flex justify-center gap-2 lg:hidden">
        {tabs.map(t => (
          <Link
            key={t.key}
            href={t.href}
            className="flex-1 rounded-full border border-neutral-300 bg-white/90 px-3 py-2 text-center text-xs text-neutral-700 backdrop-blur-sm hover:bg-white"
          >
            {t.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
