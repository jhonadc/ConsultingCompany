'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function JhonathanCard({ name, role, image, linkedinUrl }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

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
        aria-label={`${name} — open profile`}
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
                aria-label="Close"
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
                      Email
                      <span
                        aria-hidden
                        className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white/70 text-white"
                      >
                        ➔
                      </span>
                    </a>
                    {/* Optional LinkedIn — keep muted if re-enabled
                    {linkedinUrl && (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                      >
                        LinkedIn
                        <span
                          aria-hidden
                          className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-neutral-300 text-neutral-900"
                        >
                          ↗
                        </span>
                      </a>
                    )} */}
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
                    {['EU AI Act', 'ISO 42001', 'GDPR', 'Model security'].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50/60 px-2.5 py-1 text-xs font-medium text-emerald-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Snapshot — template-aligned text */}
                  <div className="mt-6 space-y-3 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600">
                    <p>
                      Senior <span className="font-semibold">AI Governance & GDPR specialist</span> with a dual background as a{' '}
                      <span className="font-semibold">Lawyer</span> and <span className="font-semibold">Software Engineer</span>. I turn the EU AI Act,
                      ISO&nbsp;42001 and GDPR into <span className="font-semibold">operational advantage</span>—controls that work in production and stand up to audit.
                    </p>
                    <p>
                      <span className="font-semibold">Specialization:</span> Compliance strategy, model-risk governance, and secure ML pipelines for high-stakes environments.
                    </p>
                  </div>
                </section>
              </div>

              {/* ===== UNDERNEATH: airy two-column content ===== */}
              <div className="p-6 sm:p-8">
                <div className="mt-2 grid gap-6 md:grid-cols-2">
                  {/* RESULTS */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      Selected Results
                    </h3>
                    <ul className="mt-3 space-y-3 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700">
                      <li>
                        <span className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                          <span className="font-semibold">krisenchat — Senior AI Compliance Manager:</span> led AI Act implementation, integrated ISO practices, and
                          delivered a governance program credited with a <span className="font-semibold">~90% reduction in regulatory risk exposure</span>.
                        </span>
                      </li>
                      <li>
                        <span className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                          <span className="font-semibold">Zuse Institute Berlin (ZIB) — AI Compliance Framework Developer:</span> built the Institute’s first <span className="font-semibold">AI &amp; Data Governance Framework</span>,
                          created an <span className="font-semibold">MLOps monitoring framework</span> for fairness/metrics, and engineered a <span className="font-semibold">neural network</span> for a research project
                          whose initial findings were <span className="font-semibold">featured in Nature</span>; co-authoring papers on ML and the AI Act.
                        </span>
                      </li>
                      <li>
                        <span className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                          <span className="font-semibold">Charité – Universitätsmedizin Berlin:</span> data science &amp; ML for health tech; helped secure investment after accelerator pitch.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* WHAT I DELIVER */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      What I Deliver
                    </h3>
                    <ul className="mt-3 grid gap-2 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700 md:grid-cols-2">
                      <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                        <span className="font-semibold">AI Act programs:</span> risk classification, Annex IV technical docs, human oversight, post-market monitoring.
                      </li>
                      <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                        <span className="font-semibold">GDPR for AI:</span> DPIAs, data mapping, vendor governance (Art. 28), deletion &amp; retention controls, privacy-by-design.
                      </li>
                      <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                        <span className="font-semibold">ISO 42001 (AIMS):</span> governance design, KPIs, accountable owners, and audit-ready evidence.
                      </li>
                      <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-emerald-500/80">
                        <span className="font-semibold">Model security:</span> adversarial robustness, data-poisoning hygiene, and supply-chain controls for ML.
                      </li>
                    </ul>
                  </div>

                  {/* ROLES */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      Recent Roles
                    </h3>
                    <div className="mt-3 grid gap-2 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700">
                      {[
                        ['Senior AI Compliance Manager', 'krisenchat (2025–present)'],
                        ['Compliance Manager', 'krisenchat (2024–2025)'],
                        ['AI Compliance Framework Developer / AI Researcher', 'Zuse Institute Berlin (2024–present)'],
                        ['Software Engineering (Freelance)', 'Charité – Universitätsmedizin Berlin (2023)'],
                        ['Data Analyst & Full-stack (Freelance)', 'Bettencourt Financial Group (2023–2024)'],
                        ['Software Engineer (Working Student)', 'twigbit technologies (2022–2023)'],
                      ].map(([t, org]) => (
                        <p key={t}>
                          <span className="font-semibold">{t}</span>, {org}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* CREDENTIALS */}
                  <div className="rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500/30">
                    <h3 className="relative pl-3 text-sm font-semibold uppercase tracking-wide text-neutral-700 before:absolute before:left-0 before:top-1/2 before:h-3 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500/80">
                      Credentials
                    </h3>
                    <div className="mt-3 grid gap-2 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-700">
                      <p><span className="font-semibold">CODE University of Applied Sciences (2025)</span> — Software Engineering (AI/ML, Security)</p>
                      <p><span className="font-semibold">Administrative Law Specialization</span> — Compliance &amp; Governance</p>
                      <p><span className="font-semibold">Law School - University of Sao Paulo (2010)</span> — Bachelor of Law</p>
                      <p>DeepLearning.AI TensorFlow Developer Specialization; CNNs in TensorFlow (Coursera)</p>
                      <p>Languages: Portuguese, English, German</p>
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
                    Book a 20-min meeting
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
                      Connect on LinkedIn
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
                  Close with outside click, press <kbd className="rounded border px-1">Esc</kbd>, or tap ×.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
