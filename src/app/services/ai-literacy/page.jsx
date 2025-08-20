
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
import { BookingForm } from '@/components/BookingForm'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'



export const metadata = {
  title: 'AI Literacy Training — Conforma Studio',
  description:
    'Meet EU AI Act Article 4 requirements with a focused 4 hour AI literacy session. Delivered anywhere in Germany or Europe, tailored to your team and sector, with evidence for audits.',
}

export default function AiLiteracyPage() {
  return (
    <>




      {/* HERO */}
      <Container className="mt-5 sm:mt-8 lg:mt-10">
        <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20 text-white">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              AI Literacy Training
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-200">
              Meet EU AI Act Article 4 requirements in just 4 hours
            </p>
            <p className="mt-5 text-md sm:text-base text-neutral-300">
              Article 4 makes AI literacy a <span className="font-bold">legal obligation</span> for anyone
              designing, deploying, or overseeing AI. This tailored training gives your team the skills to use AI
              safely and effectively, avoids compliance risks, and provides documented proof for audits. Delivered
              in English, anywhere in Germany or Europe.
            </p>
          </FadeIn>
        </div>
      </Container>





      <Container className="mt-24">
        <Border />
        <FadeIn className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Duration & delivery
          </h2>

          <RegulationsFactStrip
            facts={[
              {
                color: '#10B981', // emerald-500
                title: 'Standard',
                value: 'Half day (4 hours)',
                description: 'Focused, efficient format to meet Article 4.'
              },
              {
                color: '#6366F1', // indigo-500
                title: 'Format',
                value: 'Onsite or remote',
                description: 'Anywhere in Germany/EU, or secure video.'
              },
              {
                color: '#F59E0B', // amber-500
                title: 'Deliverables',
                value: 'Completion Certificate + Summary',
                description: 'Compliance-ready documentation for audits.'
              },
            ]}
          />
        </FadeIn>
      </Container>


      {/* WHY WE’RE DIFFERENT */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <SectionIntro eyebrow="Why this training" title="From obligation to operating advantage">
            <p className="mx-auto max-w-3xl">
              Your teams will understand AI, know the rules that apply, and be ready to use it responsibly.
              This training meets legal requirements, builds internal confidence, and provides evidence you can show in any review.
            </p>
          </SectionIntro>

          <div className="mx-auto mt-8 max-w-3xl lg:mt-12 lg:max-w-6xl">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Law × Engineering',
                  desc: 'Led by a lawyer and software engineer for clear, actionable guidance.',
                  Icon: Cog6ToothIcon,
                  color: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
                },
                {
                  name: 'Personalised',
                  desc: 'Examples matched to your sector, systems, and risk profile.',
                  Icon: CloudArrowUpIcon,
                  color: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
                },
                {
                  name: 'Obligation → Action',
                  desc: 'Aligned with EU AI Act Article 4 with evidence you can present.',
                  Icon: LockClosedIcon,
                  color: 'bg-amber-50 text-amber-600 ring-amber-100',
                },
                {
                  name: 'Practical',
                  desc: 'Do / don’t rules for everyday AI-assisted tasks and decisions.',
                  Icon: ArrowPathIcon,
                  color: 'bg-blue-50 text-blue-600 ring-blue-100',
                },
                {
                  name: 'Role-specific',
                  desc: 'Executives, tech, and compliance each get what they need to act.',
                  Icon: FingerPrintIcon,
                  color: 'bg-pink-50 text-pink-600 ring-pink-100',
                },
                {
                  name: 'Proof-ready',
                  desc: 'Attendance log and compliance-ready training summary for audits.',
                  Icon: ServerIcon,
                  color: 'bg-purple-50 text-purple-600 ring-purple-100',
                },
              ].map(({ name, desc, Icon, color }) => (
                <li
                  key={name}
                  className="group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ${color}`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">{name}</h3>
                      <p className="mt-1 text-md text-neutral-700">{desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container >



      {/* SYLLABUS */}
      <Container id="syllabus" className="mt-24 scroll-mt-28 sm:scroll-mt-32">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-3xl font-semibold text-neutral-950 mt-20">
            Syllabus (4 hours)
          </h2>

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
            ].map(({ title, desc, bullets }, idx) => {
              const colors = [
                { border: 'border-emerald-500', dot: 'before:bg-emerald-500', ring: 'group-open:ring-emerald-500/15' },
                { border: 'border-indigo-500', dot: 'before:bg-indigo-500', ring: 'group-open:ring-indigo-500/15' },
                { border: 'border-amber-500', dot: 'before:bg-amber-500', ring: 'group-open:ring-amber-500/15' },
                { border: 'border-rose-500', dot: 'before:bg-rose-500', ring: 'group-open:ring-rose-500/15' },
              ]
              const { border, dot, ring } = colors[idx % colors.length]

              return (
                <details
                  key={title}
                  className={`group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm open:ring-neutral-900/10 ${ring} border-l-2 ${border}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between">
                    <span
                      className={`relative pl-3 font-medium text-neutral-900 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded ${dot}`}
                    >
                      {title}
                    </span>
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

                  <div className="mt-3 grid gap-3 text-md text-neutral-700 md:grid-cols-2">
                    <p>{desc}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              )
            })}
          </div>
        </FadeIn>
      </Container>


      {/* CTA */}
      < Container className="mt-32" >
        <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold">Mandatory by law. Strategic by choice.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              Delivered by a lawyer and software engineer. Personalised to your domain, systems, and risk. Available anywhere in Germany or Europe.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Book AI Literacy Training
            </a>
          </div>
        </div>
      </Container >

      <BookingForm />

      <Container className="mt-15">
        <FadeIn className="mx-auto max-w-6xl">
          <div className="flex justify-end">
            <a
              href="/regulations/aiact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-gray-700 px-4 py-2 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200"
            >
              <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-current text-current transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              <span>Back to AI Act</span>
            </a>
          </div>
        </FadeIn>
      </Container>


    </>
  )
}
