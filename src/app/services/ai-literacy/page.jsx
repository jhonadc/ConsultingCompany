
// app/services/ai literacy/page.jsx
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Border } from '@/components/Border'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

export const metadata = {
  title: 'AI Literacy Training — Conforma Studio',
  description:
    'Meet EU AI Act Article 4 requirements with a focused 4 hour AI literacy session. Delivered anywhere in Germany or Europe, tailored to your team and sector, with evidence for audits.',
}

export default function AiLiteracyPage() {
  return (
    <>

{/* HERO */}
<Container className="mt-12 sm:mt-16 lg:mt-20">
  <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-16 sm:px-10 sm:py-24 lg:px-12 lg:py-28 text-white">
    <FadeIn className="max-w-4xl">
      <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">
        AI Literacy Training
      </h1>
      <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-200">
        Meet EU AI Act Article 4 requirements in just 4 hours
      </p>
      <p className="mt-6 text-md sm:text-xl text-neutral-300">
        Article 4 makes AI literacy a <span className='font-bold'>legal obligation </span>for anyone designing, deploying or overseeing AI.
        This tailored training gives your team the skills to use AI safely and effectively, avoids compliance risks,
        and provides documented proof for audits. Delivered in English, anywhere in Germany or Europe.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#booking"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105 hover:shadow-md"
        >
          Book your training
        </a>
        <a
          href="#syllabus"
          className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
        >
          View syllabus
        </a>
      </div>
    </FadeIn>
  </div>
</Container>


      {/* DURATION & DELIVERY */}
      <Container className="mt-24">
        <Border />
        <FadeIn className="mt-20">
          <h2 className="font-display text-2xl mt-12 font-semibold text-neutral-950">Duration & delivery</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900 transition group-hover:font-bold">Standard</h3>
                <p className="mt-2 text-md text-neutral-700">Half day (4 hours)</p>
              </div>
            </div>
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900 transition group-hover:font-bold">Format</h3>
                <p className="mt-2 text-md text-neutral-700">Onsite anywhere in Germany or Europe, or remote via secure video</p>
              </div>
            </div>
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900 transition group-hover:font-bold">Deliverables</h3>
                <p className="mt-2 text-md text-neutral-700">
                  Attendance log and compliance ready training summary
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* WHY WE’RE DIFFERENT */}
      <Container className="mt-24 sm:mt-28">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mt-20 sm:text-3xl font-semibold text-neutral-950 text-center">
            Why we are different
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
            {/* Card 1 */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-102"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700 transition group-hover:font-bold">Law x Engineering</h3>
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 transition ">
                  Led by a Lawyer and Software Engineer
                </p>
                <p className="mt-3 text-base text-neutral-700">
                  Complex topics explained in plain language with actionable steps for safe, compliant AI use.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-102"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700 transition group-hover:font-bold">Personalised</h3>
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 transition group-hover:font-bold">
                  Tailored to your reality
                </p>
                <p className="mt-3 text-base text-neutral-700">
                  Examples and guidance customised to your sector, systems, and risk profile.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700 transition group-hover:font-bold">Obligation</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950 transition group-hover:font-bold">
                  AI literacy is mandatory
                </p>
                <p className="mt-2 text-md text-neutral-700">
                  Aligned with Article 4 EU AI Act. Your staff gets the required knowledge. You get evidence for compliance.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700 transition group-hover:font-bold">Practical</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950 transition group-hover:font-bold">
                  Focused on daily use
                </p>
                <p className="mt-2 text-md text-neutral-700">
                  Concrete do and do not rules for everyday AI tasks. 
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700 transition group-hover:font-bold">Role specific</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950 transition group-hover:font-bold">
                  For each team
                </p>
                <p className="mt-2 text-md text-neutral-700">
                  Executives, technical teams, and compliance staff each get exactly what they need to act.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* WHY THIS TRAINING WITH ICON FEATURES */}
      <Container className="mt-24 sm:mt-32">
        <SectionIntro eyebrow="Why this training" title="From obligation to operating advantage">
          <p className="mx-auto max-w-3xl">
            Your teams will understand AI, know the rules that apply, and be ready to use it responsibly.
            This training meets legal requirements, builds internal confidence, and provides evidence you can show in any review.
          </p>
        </SectionIntro>

        <div className="mx-auto mt-10 max-w-3xl lg:mt-20 lg:max-w-6xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {[
              { name: 'Shared language', desc: 'Plain terms everyone understands across legal, product, and engineering.', Icon: CloudArrowUpIcon },
              { name: 'Acceptable use rules', desc: 'Do and do not guidance for prompts, data, and everyday AI assisted tasks.', Icon: LockClosedIcon },
              { name: 'Human oversight basics', desc: 'Simple checks before using outputs and staying in control of decisions.', Icon: Cog6ToothIcon },
              { name: 'Transparency cues', desc: 'When to tell people AI is used and how to do it clearly.', Icon: FingerPrintIcon },
              { name: 'Escalation paths', desc: 'Red flags, stop use moments, and who to contact fast.', Icon: ArrowPathIcon },
              { name: 'Evidence you can show', desc: 'Attendance log and basic proof of guidance for audits.', Icon: ServerIcon },
            ].map(({ name, desc, Icon }) => (
              <div key={name} className="flex items-start gap-3">
                <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-neutral-400 mt-0.5" />
                <div>
                  <dt className="text-md font-semibold text-black">{name}</dt>
                  <dd className="mt-1 text-md text-neutral-700 leading-relaxed">{desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* SYLLABUS */}
      <Container id="syllabus" className="mt-24 scroll-mt-28 sm:scroll-mt-32">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-3xl font-semibold text-neutral-950 mt-20 ">Syllabus (4 hours)</h2>

          <div className="mt-8 space-y-4">
            {[
              {
                title: 'Module 1 - What AI is and how it appears in our work (60 min)',
                desc: 'What AI is, how it works, and where your teams encounter it in daily tasks.',
                bullets: [
                  'AI vs automation with realistic examples',
                  'How AI is already used in your tools or services',
                  'Opportunities and common risks',
                ],
              },
              {
                title: 'Module 2 - Your role: provider, deployer, or user (45 min)',
                desc: 'Understanding whether your organization creates or just uses AI and why it matters.',
                bullets: [
                  'Definitions: provider vs deployer vs user',
                  'What responsibilities come with each role',
                  'How your role shapes accountability',
                ],
              },
              {
                title: 'Module 3 - Risk awareness and safe cues (45 min)',
                desc: 'How to recognize risk levels in AI systems and know when to escalate.',
                bullets: [
                  'Types of risk and early warning signals',
                  'Bias, hallucination, over reliance',
                  'Quick rules for safe daily use',
                ],
              },
              {
                title: 'Module 4 - Tailored guidance and escalation paths (60 min + Q&A)',
                desc: 'What your organization allows, how to escalate issues, and how we document it.',
                bullets: [
                  'Permitted tools and data use policies',
                  'Who to contact when something seems off',
                  'How to log training access and attendance',
                ],
              },
            ].map(({ title, desc, bullets }) => (
              <details
                key={title}
                className="group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm open:ring-neutral-900/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="font-medium text-neutral-900">{title}</span>
                  <svg
                    className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 11.92 1.18l-4.17 3.3a.75.75 0 01-.92 0l-4.17-3.3a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="mt-3 grid gap-3 text-sm text-neutral-700 md:grid-cols-2">
                  <p>{desc}</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* CTA */}
      <Container className="mt-32">
        <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold">Upskill your teams. Satisfy the mandate.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              Delivered by a lawyer and software engineer. Personalised to your domain, systems, and risk. Available anywhere in Germany or Europe.
            </p>
            <a
              href="#booking"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Book AI Literacy Training
            </a>
          </div>
        </div>
      </Container>

      {/* BOOKING */}
      <Container id="booking" className="mt-28 sm:mt-32 mb-24 scroll-mt-28 sm:scroll-mt-32">
        <SectionIntro eyebrow="Booking" title="Request your session">
          <p className="mx-auto max-w-3xl">
            After you submit this form we will send proposed dates right away, along with pricing and a tailored outline for your industry and risk profile.
          </p>
        </SectionIntro>

        <form className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6">
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
              defaultValue="Remote (video)"
            >
              <option>Remote (video)</option>
              <option>Onsite (Germany)</option>
              <option>Onsite (Europe)</option>
            </select>
            <select
              name="duration"
              className="rounded-xl border border-neutral-300 px-4 py-3"
              defaultValue="Half day (4 hours)"
            >
              <option>Half day (4 hours)</option>
              <option>2 x 2 hour sessions</option>
            </select>
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

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
          >
            Send request
          </button>

          <p className="text-xs text-neutral-500">
            We include a sample agenda and an evidence checklist.
          </p>
        </form>
      </Container>
    </>
  )
}
