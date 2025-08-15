'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

/** Edit once — used across the site */
export const DEFAULT_SERVICES = [
  { id: 'general',    label: 'General Questions' },
  { id: 'ai-literacy',label: 'AI Literacy Training' },
  { id: 'high-risk',  label: 'High-Risk Assessment' },
  { id: 'ai-policy',  label: 'AI Use Policy for LLMs' },
  { id: 'gdpr',       label: 'GDPR' },
  { id: 'lgpd',       label: 'LGPD' },
]

export function BookingForm({
  id = 'booking',
  eyebrow = 'Booking',
  title = 'Request your session',
  intro = 'After you submit this form we will send proposed dates right away, along with pricing and a tailored outline for your industry and risk profile.',
  services = DEFAULT_SERVICES,
  showServiceField = true,     // hide on generic contact pages if you want
  allowMultiple = false,       // multi-select (checkboxes) vs single (dropdown)
  defaultSelected = [],        // e.g., ['ai-literacy'] or ['general','gdpr']
  formatOptions = ['Remote (video)', 'Onsite (Germany)', 'Onsite (Europe)'],
}) {
  const pathname = usePathname()
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ sending: true, ok: null, msg: '' })

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    // collect multiple services when checkboxes are used
    if (allowMultiple) {
      payload.services = services
        .map(s => form.getAll(`service:${s.id}`)[0] ? s.id : null)
        .filter(Boolean)
    }

    payload.pagePath = pathname || ''

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')

      setStatus({ sending: false, ok: true, msg: 'Thanks! We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setStatus({ sending: false, ok: false, msg: 'Sorry, something went wrong. Please email us directly.' })
    }
  }

  return (
    <Container id={id} className="mt-28 sm:mt-32 mb-24 scroll-mt-28 sm:scroll-mt-32">
      <SectionIntro eyebrow={eyebrow} title={title}>
        <p className="mx-auto max-w-3xl">{intro}</p>
      </SectionIntro>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6">
        {/* Service selector */}
        {showServiceField && (
          <>
            {allowMultiple ? (
              <fieldset className="rounded-2xl border border-neutral-200 p-4">
                <legend className="px-1 text-sm font-medium text-neutral-900">Select service(s)</legend>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {services.map(s => (
                    <label key={s.id} className="flex items-center gap-3 rounded-xl border border-neutral-200 px-4 py-3">
                      <input
                        type="checkbox"
                        name={`service:${s.id}`}
                        defaultChecked={defaultSelected.includes(s.id)}
                        className="h-4 w-4 rounded border-neutral-300"
                      />
                      <span className="text-sm text-neutral-800">{s.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <select
                name="service"
                className="rounded-xl border border-neutral-300 px-4 py-3"
                defaultValue={defaultSelected[0] || services[0]?.id || ''}
              >
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            )}
          </>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            className="rounded-xl border border-neutral-300 px-4 py-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Work email"
            required
            className="rounded-xl border border-neutral-300 px-4 py-3"
          />
        </div>

        <input
          type="text"
          name="company"
          placeholder="Company"
          className="rounded-xl border border-neutral-300 px-4 py-3"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <select
            name="format"
            className="rounded-xl border border-neutral-300 px-4 py-3"
            defaultValue={formatOptions[0]}
          >
            {formatOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            className="rounded-xl border border-neutral-300 px-4 py-3"
          />
        </div>

        <textarea
          name="message"
          rows={4}
          placeholder="Context, goals, preferred dates"
          className="rounded-xl border border-neutral-300 px-4 py-3"
        />

        <label className="flex items-start gap-3 text-sm text-neutral-700">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300" />
          I understand this training supports AI Act literacy requirements and agree to be contacted about scheduling.
        </label>

        {/* Honeypot + path */}
        <input type="hidden" name="pagePath" value={pathname || ''} />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

        <button
          type="submit"
          disabled={status.sending}
          className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 disabled:opacity-60"
        >
          {status.sending ? 'Sending…' : 'Send request'}
        </button>

        {status.msg && (
          <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
        )}

        <p className="text-xs text-neutral-500">We include a sample agenda and an evidence checklist.</p>
      </form>
    </Container>
  )
}
