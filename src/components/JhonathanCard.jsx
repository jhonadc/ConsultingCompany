// src/components/JhonathanCard.jsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLocale, useMessages, useTranslations } from 'next-intl'

export function JhonathanCard({ name, role, image, linkedinUrl }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  // i18n
  const t = useTranslations()           // flat message tree
  const messages = useMessages() || {}  // to read arrays/objects
  const m = messages.jcard || {}
  const locale = useLocale()

  const tags = m.tags || []
  const results = m.sections?.results?.items || []
  const deliverables = m.sections?.deliver?.items || []
  const roles = m.sections?.roles?.items || []
  const credentials = m.sections?.credentials?.items || []
  const snapshot = m.snapshot || [] // paragraphs

  // Lock background scroll + Esc to close
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    if (open) {
      window.addEventListener('keydown', onKey)
      const prev = document.documentElement.style.overflow
      document.documentElement.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', onKey)
        document.documentElement.style.overflow = prev
      }
    }
  }, [open])

  return (
    <>
      {/* Card (click to open) */}
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl bg-neutral-100 ring-1 ring-neutral-950/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800"
        aria-label={t('jcard.aria.openProfile', { name })}
      >
        <Image
          alt={name}
          src={image}
          className="h-80 w-full object-cover object-top [filter:grayscale(80%)_brightness(108%)_contrast(92%)] transition-transform duration-300 group-hover:scale-[1.02] sm:h-96"
          priority
          style={{ objectPosition: 'center 15%' }}
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
          <p className="relative pl-3 font-display text-base/6 font-semibold tracking-wide text-white before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
            {name}
          </p>
          <p className="mt-2 text-sm text-white/90">{role}</p>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="jc-modal-title"
          onClick={() => setOpen(false)}
        >
          <div className="flex min-h-screen items-start justify-center overflow-y-auto py-8 px-4 sm:py-12 sm:px-6">
            {/* Panel (scrolls internally) */}
            <div
              ref={panelRef}
              tabIndex={-1}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl ring-1 ring-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-800 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                aria-label={t('jcard.actions.close')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* ===== TOP SUMMARY ROW (equal heights) ===== */}
              <div className="grid gap-0 sm:grid-cols-3">
                {/* LEFT: portrait + actions — exact same total height as right */}
                <aside className="col-span-1 grid h-full grid-rows-[1fr_auto] border-b border-neutral-200 p-6 sm:border-b-0 sm:border-r sm:p-8">
                  {/* Photo grows to fill available height */}
                  <div className="overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-950/10">
                    <Image
                      alt={name}
                      src={image}
                      className="h-full w-full object-cover [filter:grayscale(80%)_brightness(108%)_contrast(92%)]"
                      priority
                      style={{ objectPosition: 'center 12%' }}
                    />
                  </div>

                  {/* Contact actions pinned to bottom of left column */}
                  <div className="mt-4 grid gap-2">
                    <a
                      href="mailto:jhonathanaugusto@gmail.com"
                      className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                    >
                      {t('jcard.actions.email')}
                      <span
                        aria-hidden
                        className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/70 text-white"
                      >
                        ➔
                      </span>
                    </a>

                    {linkedinUrl && (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                      >
                        {t('jcard.actions.linkedin')}
                        <span
                          aria-hidden
                          className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-neutral-300 text-neutral-900"
                        >
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </aside>

                {/* RIGHT: summary text */}
                <section className="col-span-1 h-full p-6 sm:col-span-2 sm:p-8">
                  <h1
                    id="jc-modal-title"
                    className="relative pr-12 pl-3 text-[22px] font-semibold text-neutral-900 sm:text-3xl before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80"
                  >
                    {name}
                  </h1>
                  <p className="mt-1 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600">{role}</p>

                  {/* Quick focus tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50/60 px-2.5 py-1 text-xs font-medium text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Snapshot */}
                  <div className="mt-6 space-y-3 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600">
                    {snapshot.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              </div>

              {/* ===== UNDERNEATH: airy two-column content ===== */}
              <div className="p-6 sm:p-8">
                <div className="mt-2 grid gap-6 md:grid-cols-2">
                  {/* RESULTS */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      {t('jcard.sections.results.title')}
                    </h3>
                    <ul className="mt-3 space-y-3 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700">
                      {results.map((item, i) => (
                        <li key={i}>
                          <span className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                            <span className="font-semibold">{item.title}</span>{' '}{item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* WHAT I DELIVER */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      {t('jcard.sections.deliver.title')}
                    </h3>
                    <ul className="mt-3 grid gap-2 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700 md:grid-cols-2">
                      {deliverables.map((line, i) => (
                        <li
                          key={i}
                          className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ROLES */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      {t('jcard.sections.roles.title')}
                    </h3>
                    <div className="mt-3 grid gap-2 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700">
                      {roles.map(([title, org], i) => (
                        <p key={i}>
                          <span className="font-semibold">{title}</span>, {org}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* CREDENTIALS */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      {t('jcard.sections.credentials.title')}
                    </h3>
                    <div className="mt-3 grid gap-2 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700">
                      {credentials.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://calendly.com/jhonathanaugusto/20min"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    {t('jcard.actions.book')}
                    <span
                      aria-hidden
                      className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/70 text-white"
                    >
                      ➔
                    </span>
                  </a>
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                    >
                      {t('jcard.actions.connect')}
                      <span
                        aria-hidden
                        className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-neutral-300 text-neutral-900"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </div>

                <p className="mt-6 text-xs text-neutral-500">
                  {t('jcard.aria.hint')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
