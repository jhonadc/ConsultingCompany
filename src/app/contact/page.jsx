'use client'

import { useId, useState } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'

function TextInput({ label, required = false, type = 'text', name, ...props }) {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        name={name}
        type={type}
        placeholder=" "
        required={required}
        aria-required={required ? 'true' : undefined}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ sending: true, ok: null, msg: '' })

    const formEl = e.currentTarget
    const form = new FormData(formEl)
    const payload = Object.fromEntries(form.entries())

    // enforce service + basic context
    payload.service = 'general'
    payload.pagePath = typeof window !== 'undefined' ? window.location.pathname : ''
    // honeypot already in the form as "website"

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')

      setStatus({ sending: false, ok: true, msg: 'Thanks! We’ll reply shortly.' })
      formEl.reset()
    } catch (err) {
      console.error(err)
      setStatus({
        sending: false,
        ok: false,
        msg: 'Sorry, something went wrong. Please email us directly.',
      })
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={onSubmit} noValidate>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>

        {/* success / error note */}
        {status.msg && (
          <p
            className={`mt-3 text-sm ${
              status.ok ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.msg}
          </p>
        )}

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput
            label="Message"
            name="message"
            required
          />
        </div>

        {/* Honeypot (bots will fill it; humans won’t see it) */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <Button type="submit" className="mt-10" disabled={status.sending}>
          {status.sending ? 'Sending…' : "Let’s work together"}
        </Button>

        <p className="mt-3 text-xs text-neutral-500">
          <span className="text-red-600">*</span> required fields
        </p>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our office
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? No problem! Send us a message and we can meet at our office or anywhere in Berlin.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['General', 'jhonathanaugusto@gmail.com']].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}


export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can&apos;t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
