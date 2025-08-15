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

export const metadata = {
  title: 'AI Use Policy (GPAI) — Conforma Studio',
  description:
    'A boutique, legally aligned and technically informed AI Use Policy for general-purpose AI. Built for EU and German requirements to protect trust, speed deals, and enable compliant innovation.',
}

export default function AiUsePolicyPage() {
  return (
    <>
      {/* HERO */}
      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <div className="relative overflow-hidden rounded-4xl bg-neutral-950 px-6 py-16 sm:px-10 sm:py-24 lg:px-12 lg:py-28 text-white">
          <FadeIn className="max-w-4xl">
            <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight">
              AI Use Policy for General-Purpose AI
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-200">
              From regulatory risk to enterprise asset
            </p>
            <p className="mt-6 text-md sm:text-xl text-neutral-300">
              In Europe, expectations for general-purpose AI are clear. The EU AI Act and the General-Purpose AI Code of
              Practice require companies to govern how AI is used. An AI Use Policy is the foundation: a legally aligned,
              technically informed document that sets boundaries, roles, and controls for AI in your company.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105 hover:shadow-md"
              >
                Request your policy
              </a>
              <a
                href="#deliverables"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                See what you get
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* WHY THIS MATTERS */}
      <Container className="mt-24">
        <Border />
        <FadeIn className="mt-20">
          <h2 className="font-display text-2xl mt-12 font-semibold text-neutral-950">Why you need it</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Mandatory by implication */}
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900">Mandatory by implication</h3>
                <p className="mt-2 text-md text-neutral-700">
                  The AI Act expects internal governance for oversight, transparency, risk mitigation, and clear roles.
                  A documented policy is how you meet and prove these expectations.
                </p>
              </div>
            </div>
            {/* Enterprise deal enabler */}
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900">Enterprise deal enabler</h3>
                <p className="mt-2 text-md text-neutral-700">
                  Buyers ask for evidence of responsible AI. A signed policy shortens procurement, reduces objections,
                  and shows your controls are clear and enforceable.
                </p>
              </div>
            </div>
            {/* Risk containment */}
            <div className="group relative rounded-2xl p-6">
              <div className="absolute inset-0 rounded-2xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"></div>
              <div className="relative z-10">
                <h3 className="font-medium text-neutral-900">Risk containment</h3>
                <p className="mt-2 text-md text-neutral-700">
                  Prevent misuse of confidential data in prompts, IP leakage, biased outputs, sector rule breaches, and
                  enforcement risk under the AI Act and GDPR.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* WHY CONFORMA */}
      <Container className="mt-24 sm:mt-28">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl mt-20 sm:text-3xl font-semibold text-neutral-950 text-center">
            Why Conforma Studio
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-6 lg:grid-rows-2">
            {/* Law × Engineering */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Law × Engineering</h3>
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                  Boutique documents, built on reality
                </p>
                <p className="mt-3 text-base text-neutral-700">
                  We translate regulatory language into controls that match your architectures, data flows, and teams.
                </p>
              </div>
            </div>

            {/* Defensible outcomes */}
            <div className="relative lg:col-span-3 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Defensible outcomes</h3>
                <p className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                  Regulator-ready and procurement-ready
                </p>
                <p className="mt-3 text-base text-neutral-700">
                  Clear scope, roles, transparency rules, human oversight, escalation paths, and evidence links you can show.
                </p>
              </div>
            </div>

            {/* Precision */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Precision</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950">No generic templates</p>
                <p className="mt-2 text-md text-neutral-700">
                  Tailored to sector, risk profile, stack, and contracts. A document that works in practice.
                </p>
              </div>
            </div>

            {/* Enablement */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Enablement</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950">Adopt AI with confidence</p>
                <p className="mt-2 text-md text-neutral-700">
                  Guardrails speed adoption and remove regulatory anxiety for product and data teams.
                </p>
              </div>
            </div>

            {/* Integration */}
            <div className="relative lg:col-span-2 group">
              <div className="absolute inset-0 rounded-3xl bg-white ring-1 ring-neutral-950/10 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-0.5"></div>
              <div className="relative z-10 h-full overflow-hidden rounded-[calc(1.5rem+1px)] p-8">
                <h3 className="text-sm font-semibold text-neutral-700">Integration</h3>
                <p className="mt-2 text-xl sm:text-2xl font-semibold text-neutral-950">Evidence built-in</p>
                <p className="mt-2 text-md text-neutral-700">
                  Links to training logs, incident handling, and risk registers so audits are straightforward.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* WHAT YOU GET */}
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
              { name: 'Scope & definitions', desc: 'What counts as AI and where it applies across your org.', Icon: ClipboardDocumentListIcon },
              { name: 'Permitted tools & contexts', desc: 'Which AI tools are allowed, by team and use case.', Icon: ShieldCheckIcon },
              { name: 'Transparency & attribution', desc: 'When to tell people AI is used and how to do it clearly.', Icon: EyeIcon },
              { name: 'Human oversight & escalation', desc: 'Checks before use, red flags, and who to contact fast.', Icon: UserGroupIcon },
              { name: 'Data, IP & confidentiality', desc: 'Rules for prompts, protected data, and output handling.', Icon: ExclamationTriangleIcon },
              { name: 'Monitoring & updates', desc: 'Review cadence, training links, and change control.', Icon: ArrowPathIcon },
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

      {/* POLICY OUTLINE (ACCORDION) */}
      <Container className="mt-24">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-3xl font-semibold text-neutral-950 mt-20">Policy outline</h2>

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
            <h2 className="font-display text-3xl font-semibold">A minimum investment, a high-return asset</h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
              The cost of not having an AI Use Policy is measured in delays, fines, and lost opportunities. The cost of
              having one is modest, especially when it enables faster sales cycles, reduced exposure, smoother adoption,
              and a trustworthy AI-enabled brand.
            </p>
            <a
              href="#booking"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
            >
              Request your policy
            </a>
          </div>
        </div>
      </Container>

      <BookingForm  />

    </>
  )
}
