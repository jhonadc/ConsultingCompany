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
        className="group relative block w-full overflow-hidden rounded-3xl bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-800"
        aria-label={`${name} — open profile`}
      >
        <Image
          alt={name}
          src={image}
          className="h-96 w-full object-cover object-top [filter:grayscale(80%)_brightness(108%)_contrast(92%)] transition-transform duration-300 group-hover:scale-[1.02]"
          priority
          style={{ objectPosition: 'center 15%' }} // ensure face shows
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
          <p className="font-display text-base/6 font-semibold tracking-wide text-white">{name}</p>
          <p className="mt-2 text-sm text-white">{role}</p>
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
          {/* top/bottom spacing + center */}
          <div className="flex min-h-screen items-start justify-center overflow-y-auto py-8 px-4 sm:py-12 sm:px-6">
            {/* Panel */}
            <div
              ref={panelRef}
              tabIndex={-1}
              className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 flex flex-col sm:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* LEFT: portrait + actions */}
              <aside className="flex-shrink-0 w-full sm:w-[320px] p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-neutral-200">
                <div className="h-[340px] w-full overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    alt={name}
                    src={image}
                    className="h-full w-full object-cover [filter:grayscale(80%)_brightness(108%)_contrast(92%)]"
                    priority
                    style={{ objectPosition: 'center 12%' }} // crop higher for face
                  />
                </div>
                <div className="mt-4 grid gap-2">
                  <a
                    href="mailto:jhonathanaugusto@gmail.com"
                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    Email
                  </a>
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </aside>

              {/* RIGHT: content (scrolls) */}
              <section className="relative flex-1 max-h-[80vh] overflow-y-scroll p-6 sm:p-10">
                {/* Close button (own space, never behind image) */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 hover:bg-neutral-300"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <h1 id="jc-modal-title" className="text-[22px] sm:text-3xl font-semibold text-neutral-900 pr-12">
                  {name}
                </h1>
                <p className="mt-1 text-sm sm:text-[15px] text-neutral-600">{role}</p>

                {/* SNAPSHOT (punchy marketing) */}
                <div className="mt-6 space-y-3 text-[15px] leading-relaxed text-neutral-800">
                  <p>
                    Senior <strong>AI Governance & GDPR specialist</strong> with a dual background as a <strong>Lawyer</strong> and <strong>Software Engineer</strong>.
                    I turn the EU AI Act, ISO&nbsp;42001 and GDPR into <strong>operational advantage</strong>—controls that work in production and stand up to audit.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Specialization:</strong> Compliance strategy, model-risk governance, and secure ML pipelines for high-stakes environments.
                  </p>
                </div>

                {/* PROOF / RESULTS */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Selected Results</h3>
                  <ul className="mt-3 space-y-3 text-[15px] text-neutral-900">
                    <li>
                      <strong>krisenchat — Senior AI Compliance Manager:</strong> led AI Act implementation, integrated ISO practices, and
                      delivered a governance program credited with a <strong>~90% reduction in regulatory risk exposure</strong>.
                    </li>
                    <li>
                      <strong>Zuse Institute Berlin (ZIB) — AI Compliance Framework Developer:</strong> built the Institute’s first <strong>AI & Data Governance Framework</strong>,
                      created an <strong>MLOps monitoring framework</strong> for fairness/metrics, and engineered a <strong>neural network</strong> for a research project
                      whose initial findings were <strong>featured in Nature</strong>; co-authoring papers on ML and the AI Act.
                    </li>
                    <li>
                      <strong>Charité – Universitätsmedizin Berlin:</strong> data science & ML for health tech; helped secure investment after accelerator pitch.
                    </li>
                  </ul>
                </div>

                {/* OFFER / WHAT YOU GET */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">What I Deliver</h3>
                  <ul className="mt-3 grid gap-3 text-[15px]">
                    <li><strong>AI Act programs:</strong> risk classification, Annex IV technical docs, human oversight, post-market monitoring.</li>
                    <li><strong>GDPR for AI:</strong> DPIAs, data mapping, vendor governance (Art. 28), deletion & retention controls, privacy-by-design.</li>
                    <li><strong>ISO 42001 (AIMS):</strong> governance design, KPIs, accountable owners, and audit-ready evidence.</li>
                    <li><strong>Model security:</strong> adversarial robustness, data-poisoning hygiene, and supply-chain controls for ML.</li>
                  </ul>
                </div>

                {/* ROLES (compact CV style) */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Recent Roles</h3>
                  <div className="mt-3 grid gap-2 text-[15px] text-neutral-800">
                    <p><strong>Senior AI Compliance Manager</strong>, krisenchat (2025–present)</p>
                    <p><strong>Compliance Manager</strong>, krisenchat (2024–2025)</p>
                    <p><strong>AI Compliance Framework Developer / AI Researcher</strong>, Zuse Institute Berlin (2024–present)</p>
                    <p><strong>Software Engineering (Freelance)</strong>, Charité – Universitätsmedizin Berlin (2023)</p>
                    <p><strong>Data Analyst & Full-stack (Freelance)</strong>, Bettencourt Financial Group (2023–2024)</p>
                    <p><strong>Software Engineer (Working Student)</strong>, twigbit technologies (2022–2023)</p>
                  </div>
                </div>

                {/* CREDENTIALS */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">Credentials</h3>
                  <div className="mt-3 grid gap-2 text-[15px] text-neutral-800">
                    <p><strong>CODE University of Applied Sciences</strong> — Software Engineering (AI/ML, Security)</p>
                    <p><strong>Administrative Law Specialization</strong> — Compliance & Governance</p>
                    <p>DeepLearning.AI TensorFlow Developer Specialization; CNNs in TensorFlow (Coursera)</p>
                    <p>Languages: Portuguese, English, German</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:jhonathanaugusto@gmail.com"
                    className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    Book a 30-min diagnostic call
                  </a>
                  {linkedinUrl && (
                    <a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                    >
                      Connect on LinkedIn
                    </a>
                  )}
                </div>

                <p className="mt-6 text-xs text-neutral-500">
                  Close with outside click, press <kbd className="rounded border px-1">Esc</kbd>, or tap ×.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
