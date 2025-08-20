
// app/services/ai-use-policy/page.jsx
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Border } from '@/components/Border'
import {
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
  ArrowPathIcon,
} from '@heroicons/react/20/solid'
import { BookingForm } from '@/components/BookingForm'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'

export const metadata = {
  title: 'AI Use Policy (GPAI) — Conforma Studio',
  description:
    'A boutique, legally aligned and technically informed AI Use Policy for general-purpose AI. Built for EU and German requirements to protect trust, speed deals, and enable compliant innovation.',
}

export default function AiUsePolicyPage() {
  return (
    <>
      {/* HERO (compact, no buttons) */}
      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-20 text-white">
          <FadeIn className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              AI Use Policy for General-Purpose AI
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-neutral-200">
              From regulatory risk to enterprise asset
            </p>
            <p className="mt-5 text-sm sm:text-base text-neutral-300">
              In Europe, expectations for general-purpose AI are clear. The EU AI Act and the General-Purpose AI Code of
              Practice require companies to govern how AI is used. An AI Use Policy is the foundation: a legally aligned,
              technically informed document that sets boundaries, roles, and controls for AI in your company.
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* WHY THIS MATTERS → Fact strip */}
      <Container className="mt-24">
        <Border />
        <FadeIn className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-neutral-950">Why you need it</h2>

          <RegulationsFactStrip
            facts={[
              {
                color: '#10B981', // emerald-500
                title: 'Mandatory by implication',
                value: 'Internal governance expected by the AI Act',
                description:
                  'The AI Act expects oversight, transparency, risk mitigation, and clear roles. A documented policy is how you meet and prove these expectations.',
              },
              {
                color: '#6366F1', // indigo-500
                title: 'Enterprise deal enabler',
                value: 'Shorten procurement & reduce objections',
                description:
                  'Buyers ask for evidence of responsible AI. A signed policy shows your controls are clear and enforceable.',
              },
              {
                color: '#F59E0B', // amber-500
                title: 'Risk containment',
                value: 'Protect data, IP, and compliance posture',
                description:
                  'Prevent misuse of confidential data, biased outputs, sector rule breaches, and enforcement risk under the AI Act and GDPR.',
              },
            ]}
          />
        </FadeIn>
      </Container>

      {/* WHAT YOU GET → matches icon list design with color pills */}
      <Container id="deliverables" className="mt-24 sm:mt-32">
        <SectionIntro eyebrow="What you get" title="A policy that enables compliant innovation">
          <p className="mx-auto max-w-3xl">
            Clarity for teams, assurance for customers, and a defensible position for auditors and regulators. A minimum
            investment that returns in faster sales cycles, fewer escalations, and safer AI use.
          </p>
        </SectionIntro>

        <div className="mx-auto mt-10 max-w-3xl lg:mt-20 lg:max-w-6xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {[
              { name: 'Scope & definitions', desc: 'What counts as AI and where it applies across your org.', Icon: ClipboardDocumentListIcon, color: 'bg-emerald-50 text-emerald-600 ring-emerald-100' },
              { name: 'Permitted tools & contexts', desc: 'Which AI tools are allowed, by team and use case.', Icon: ShieldCheckIcon, color: 'bg-indigo-50 text-indigo-600 ring-indigo-100' },
              { name: 'Transparency & attribution', desc: 'When to tell people AI is used and how to do it clearly.', Icon: EyeIcon, color: 'bg-amber-50 text-amber-600 ring-amber-100' },
              { name: 'Human oversight & escalation', desc: 'Checks before use, red flags, and who to contact fast.', Icon: UserGroupIcon, color: 'bg-blue-50 text-blue-600 ring-blue-100' },
              { name: 'Data, IP & confidentiality', desc: 'Rules for prompts, protected data, and output handling.', Icon: ExclamationTriangleIcon, color: 'bg-pink-50 text-pink-600 ring-pink-100' },
              { name: 'Monitoring & updates', desc: 'Review cadence, training links, and change control.', Icon: ArrowPathIcon, color: 'bg-purple-50 text-purple-600 ring-purple-100' },
            ].map(({ name, desc, Icon, color }) => (
              <div key={name} className="flex items-start gap-3">
                <span className={`inline - flex h - 9 w - 9 items - center justify - center rounded - full ring - 1 ${color} `}>
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-md font-semibold text-black">{name}</dt>
                  <dd className="mt-1 text-md text-neutral-700 leading-relaxed">{desc}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      {/* WHY CONFORMA → Clean icon grid with subtle color pills */}
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <SectionIntro eyebrow="Why Conforma" title="Why Conforma Studio">
            <p className="mx-auto max-w-3xl">
              Boutique documents that align legal expectations with technical reality and evidence you can show.
            </p>
          </SectionIntro>

          <div className="mx-auto mt-8 max-w-3xl lg:mt-12 lg:max-w-6xl">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Law × Engineering',
                  desc: 'We translate regulatory language into controls that match your architectures, data flows, and teams.',
                  Icon: ClipboardDocumentListIcon,
                  color: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
                },
                {
                  name: 'Defensible outcomes',
                  desc: 'Clear scope, roles, transparency rules, human oversight, escalation paths, and evidence links you can show.',
                  Icon: ShieldCheckIcon,
                  color: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
                },
                {
                  name: 'Precision',
                  desc: 'Tailored to sector, risk profile, stack, and contracts. A document that works in practice.',
                  Icon: EyeIcon,
                  color: 'bg-amber-50 text-amber-600 ring-amber-100',
                },
                {
                  name: 'Enablement',
                  desc: 'Guardrails speed adoption and remove regulatory anxiety for product and data teams.',
                  Icon: UserGroupIcon,
                  color: 'bg-blue-50 text-blue-600 ring-blue-100',
                },
                {
                  name: 'Integration',
                  desc: 'Links to training logs, incident handling, and risk registers so audits are straightforward.',
                  Icon: ArrowPathIcon,
                  color: 'bg-pink-50 text-pink-600 ring-pink-100',
                },
              ].map(({ name, desc, Icon, color }) => (
                <li
                  key={name}
                  className="group rounded-2xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <span className={`inline - flex h - 9 w - 9 items - center justify - center rounded - full ring - 1 ${color} `}>
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900">{name}</h3>
                      <p className="mt-1 text-sm text-neutral-700">{desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>




      {/* POLICY OUTLINE (matches syllabus design) */}
      <Container id="policy-outline" className="mt-24 scroll-mt-28 sm:scroll-mt-32">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-3xl font-semibold text-neutral-950 mt-20">
            Policy outline
          </h2>

          <div className="mt-8 space-y-4">
            {[
              {
                title: '1. Scope and objectives',
                desc: 'Applies to employees, contractors, and vendors. Defines GPAI and the systems in scope across products and internal use.',
                bullets: [
                  'Definitions and references',
                  'In-scope systems and processes',
                  'Out-of-scope clarifications',
                ],
              },
              {
                title: '2. Roles and responsibilities',
                desc: 'Accountability for providers, deployers, and users; RACI for approvals, monitoring, and incident handling.',
                bullets: [
                  'Model owner, product owner, compliance owner',
                  'Approval authorities',
                  'Contact points and SLAs',
                ],
              },
              {
                title: '3. Permitted use and controls',
                desc: 'Allowed tools, datasets, and tasks by team; prohibited uses; data handling rules for prompts and outputs.',
                bullets: [
                  'Tool allowlist and conditions',
                  'Confidential data handling',
                  'Prohibited and restricted uses',
                ],
              },
              {
                title: '4. Transparency and human oversight',
                desc: 'User-facing disclosures, content attribution rules, and review steps before high-impact use.',
                bullets: [
                  'Disclosure triggers and language',
                  'Attribution for AI-assisted content',
                  'Oversight checklists',
                ],
              },
              {
                title: '5. Monitoring, training, and updates',
                desc: 'Review cadence, policy change control, and links to training logs and risk registers.',
                bullets: [
                  'Periodic reviews and sign-offs',
                  'Training evidence',
                  'Integration with risk management',
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



      {/* CTA (kept href and copy) */}
      <Container className="mt-32">
        <div className="rounded-4xl bg-neutral-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold">A minimum investment, a high-return asset</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              The cost of not having an AI Use Policy is measured in delays, fines, and lost opportunities. The cost of
              having one is modest, especially when it enables faster sales cycles, reduced exposure, smoother adoption,
              and a trustworthy AI-enabled brand.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Request your policy
            </a>
          </div>
        </div>
      </Container>

      <BookingForm />
    </>
  )
}

