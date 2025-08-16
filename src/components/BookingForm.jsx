'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { DIAL_CODES } from '@/lib/dialCodes'
import Link from 'next/link'

// Convert ISO country code to emoji flag
function isoToFlag(iso) {
  return String.fromCodePoint(...iso.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0)))
}

// Detect browser country
function detectCountryISO() {
  const prefs = typeof navigator !== 'undefined'
    ? (navigator.languages || [navigator.language || ''])
    : []
  for (const loc of prefs) {
    if (!loc) continue
    const parts = loc.split('-')
    const region = (parts[1] || '').toUpperCase()
    if (region && DIAL_CODES.find(x => x.iso === region)) return region
  }
  return 'DE'
}

export function BookingForm({
  id = 'booking',
  eyebrow = 'Booking',
  title = 'Request your session',
  intro = 'After you submit this form we will send proposed dates right away, along with pricing and a tailored outline for your industry and risk profile.',
  service = 'general',
}) {
  const pathname = usePathname()
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' })
  const [countryISO, setCountryISO] = useState('DE')

  useEffect(() => {
    setCountryISO(detectCountryISO())
  }, [])

  const sortedDialCodes = useMemo(
    () => [...DIAL_CODES].sort((a, b) => a.iso.localeCompare(b.iso)),
    []
  )

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus({ sending: true, ok: null, msg: '' })

    const formEl = e.currentTarget
    const form = new FormData(formEl)
    const payload = Object.fromEntries(form.entries())
    const selected = DIAL_CODES.find(x => x.iso === (payload.phoneCountry || countryISO))
    payload.phoneDialCode = selected?.dial || '+49'
    payload.pagePath = pathname || ''
    payload.service = service

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')

      setStatus({ sending: false, ok: true, msg: 'Thanks! We will get back to you shortly.' })
      formEl.reset()
      setCountryISO(detectCountryISO())
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
        <input type="hidden" name="service" value={service} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name">Full name <span className="text-red-600">*</span></label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email">Work email <span className="text-red-600">*</span></label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="company"
            placeholder="Company"
            className="rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
          />

          {/* Dial code + phone, styled to match inputs */}

          <div className="flex gap-2">
            <div className="relative w-20">
              <select
                name="phoneCountry"
                className="
        w-full rounded-xl border border-neutral-300 bg-white px-2 py-3 text-sm
        focus:outline-none focus:ring-2 focus:ring-neutral-900/10 appearance-none pr-6
      "
                value={countryISO}
                onChange={(e) => setCountryISO(e.target.value)}
              >
                {sortedDialCodes.map(({ iso, dial }) => (
                  <option key={iso} value={iso}>
                    {isoToFlag(iso)} {dial}
                  </option>
                ))}
              </select>
              {/* caret */}
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400">
                ▾
              </span>
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="123 456 789"
              className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
          </div>

        </div>

        <textarea
          name="message"
          rows={4}
          placeholder="Context, goals, preferred dates"
          className="rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
        />

        {/* Informational consent line (no checkbox) */}
        <p className="mt-1 text-xs leading-relaxed text-neutral-600">
          By submitting this form, you consent to the processing of your personal data for the purpose of
          handling your request, in accordance with our{' '}
          <Link href="/privacy" className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900">
            Privacy Notice
          </Link>.
        </p>

        <button
          type="submit"
          disabled={status.sending}
          className="rounded-full bg-neutral-900 px-8 py-3 text-sm text-white disabled:opacity-60"
        >
          {status.sending ? 'Sending…' : 'Send request'}
        </button>

        {status.msg && (
          <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
        )}
      </form>
    </Container>
  )
}
