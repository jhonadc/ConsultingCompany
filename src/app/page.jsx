
 
import Image from 'next/image'
import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/mica/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { ColorDivider } from '@/components/ColorDivider'
import BFG from '@/images/clients/logos/BFG.svg'
import bihlogo from '@/images/clients/logos/bihlogo.svg'
import chariteLogo from '@/images/clients/logos/chariteLogo.png'
import krisenchat from '@/images/clients/logos/krisenchat.svg'
import WSLaw from '@/images/clients/logos/WSLaw.svg'
import zib from '@/images/clients/logos/zib.svg'
import JhonathanPhoto from '@/images/JhonathanPhoto.jpg'
import BFGImage from '@/images/clients/logos/BFGImage.png'

const clients = [
  ['BFG', BFG],
  ['Charité Accelerator', bihlogo],
  ['Charité Hospital', chariteLogo],
  ['Krisenchat', krisenchat],
  ['WS Law', WSLaw],
  ['Zuse Institute Berlin', zib],
]

const regulations = [
  { title: 'AI Act', slug: 'aiact', description: 'Europe’s groundbreaking regulation for trustworthy AI systems.' },
  { title: 'GDPR', slug: 'gdpr', description: 'EU’s General Data Protection Regulation — protecting personal data since 2018.' },
  { title: 'MiCAR', slug: 'micar', description: 'Markets in Crypto-Assets Regulation for EU-wide digital-asset compliance.' },
  { title: 'Medical Device Regulation (MDR)', slug: 'mdr', description: 'EU’s MDR framework for safety and performance of medical devices.' },
]



function Regulations() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-80">
      <SectionIntro
        eyebrow={<Link href="/regulations" className="hover:underline">Regulations</Link>}
        title="EU Rules We Specialize In"
      >
        <p>From data privacy to AI oversight, explore our expertise across key EU regulations.</p>
      </SectionIntro>

      <Container className="mt-12">
        {/* Mobile: stacked pills */}
        <nav
          aria-label="Regulations"
          className="md:hidden flex flex-col gap-3 items-stretch"
        >
          {regulations.map((reg) => {
            const border =
              reg.slug === 'gdpr'  ? 'border-blue-500'   :
              reg.slug === 'aiact' ? 'border-purple-500' :
              reg.slug === 'mdr'   ? 'border-green-500'  :
                                     'border-amber-700'
            return (
              <Link
                key={reg.slug}
                href={`/regulations/${reg.slug}`}
                className={`group inline-flex items-center justify-between
                            w-full rounded-full border ${border}
                            bg-white/80 px-5 py-3 text-sm text-neutral-700
                            shadow-sm backdrop-blur-sm transition-all duration-200
                            hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
              >
                <span>{reg.title}</span>
                <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
              </Link>
            )
          })}
        </nav>

        {/* Desktop/tablet: original cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {regulations.map((reg) => {
            const hoverRing =
              reg.slug === 'gdpr'  ? 'hover:ring-blue-500'   :
              reg.slug === 'aiact' ? 'hover:ring-purple-500' :
              reg.slug === 'mdr'   ? 'hover:ring-green-500'  :
                                     'hover:ring-amber-700'
            return (
              <Link
                key={reg.slug}
                href={`/regulations/${reg.slug}`}
                className={`group block md:aspect-square rounded-2xl bg-white
                            ring-1 ring-neutral-950/10 shadow-sm
                            flex flex-col justify-center items-center
                            p-6 text-center transition ${hoverRing}`}
              >
                <h4 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-800">
                  {reg.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-600 hidden lg:block">
                  {reg.description}
                </p>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}






function Clients() {
  return (
    <div className="mt-20 rounded-4xl bg-neutral-950 py-14 sm:mt-28 sm:py-20 lg:mt-32">
      <Container>
        <FadeIn className="flex items-center gap-x-6">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6 items-center"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="col-span-1">
                <FadeIn>
                  {/* Tile enforces uniform size; Image uses object-contain */}
                  <div className="relative h-16 sm:h-20 w-full rounded-2xl bg-neutral-900/30 p-4">
                    <Image
                      src={logo}
                      alt={client}
                      fill
                      className="object-contain"
                      sizes="(min-width:1024px) 200px, (min-width:640px) 160px, 140px"
                      priority={false}
                    />
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}


{/* function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro title="EU Regulations and Work Cases" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          We believe technology is the answer to the world&apos;oss greatest
          challenges. It&apos;oss also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>EU Regulation and Work Cases</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
} */}


function ProofOfValue() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-60 mb-20 lg:mb-40">
      <Container>
        {/* Title + paragraph + right-side CTA (stacks on mobile) */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 sm:text-5xl">
              Your success is our business.
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Compliance isn’t paperwork—it’s how you protect runway, accelerate enterprise deals,
              and ship with confidence. You get a boutique that speaks law <em>and</em> code, turns
              rules into tickets, and leaves you with evidence that stands up to scrutiny.
            </p>
          </div>

          {/* CTA on the right (full width on mobile) */}
          <div className="mt-2 md:mt-0 md:justify-self-end">
            <Link
              href="/process"
              className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 sm:w-auto"
              aria-label="See how the process works"
            >
              See how the process works →
            </Link>
          </div>
        </div>

        {/* Impact quadrants */}
        <div className="mt-20 sm:mt-24 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* 1. Penalty risk */}
          <div className="rounded-3xl border-0.9 border-rose-600 bg-white p-6 md:p-8 ring-1 ring-rose-200 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg hover:ring-rose-300">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">Penalty risk &amp; cost avoidance</h3>
            <p className="mt-4 text-neutral-600">
              Fines scale with revenue (GDPR up to 4% of global turnover; EU AI Act up to 7% or capped sums).
              You avoid expensive surprises by putting the right controls and proofs in place <em>before</em> anyone asks.
            </p>
            <p className="mt-3 text-neutral-600">
              What we do: DPIAs, lawful basis design, AI risk &amp; oversight, technical files, approvals, and a living evidence trail.
            </p>
          </div>

          {/* 2. Deal acceleration */}
          <div className="rounded-3xl border-0.9 border-amber-500 bg-white p-6 md:p-8 ring-1 ring-amber-200 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg hover:ring-amber-300">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">Deal acceleration &amp; enterprise trust</h3>
            <p className="mt-4 text-neutral-600">
              Security and privacy questionnaires stop being blockers. You answer procurement once—with clear controls,
              mapped data flows, and contracts your customers recognize.
            </p>
            <p className="mt-3 text-neutral-600">
              What you get: faster redline cycles, fewer escalations, and smoother InfoSec reviews.
            </p>
          </div>

          {/* 3. Launch confidence */}
          <div className="rounded-3xl border-0.9 border-indigo-600 bg-white p-6 md:p-8 ring-1 ring-indigo-200 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg hover:ring-indigo-300">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">Launch confidence</h3>
            <p className="mt-4 text-neutral-600">
              Features ship without last-minute rollbacks. Risks are known, owners are assigned, and mitigations are part
              of the sprint—so go/no-go is a decision, not a fire drill.
            </p>
            <p className="mt-3 text-neutral-600">
              What we do: privacy by design checklists, model/feature approvals, and clear decision logs.
            </p>
          </div>

          {/* 4. Audit-ready docs */}
          <div className="rounded-3xl border-0.9 border-emerald-600 bg-white p-6 md:p-8 ring-1 ring-emerald-200 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-300">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">Audit-ready documentation</h3>
            <p className="mt-4 text-neutral-600">
              You keep evidence that regulators and auditors actually use: Annex IV technical documentation, risk logs,
              change history, and approvals linked to releases.
            </p>
            <p className="mt-3 text-neutral-600">
              Outcome: less time explaining, more time building.
            </p>
          </div>

          {/* 5. Vendor & data resilience */}
          <div className="rounded-3xl border-0.9 border-sky-600 bg-white p-6 md:p-8 ring-1 ring-sky-200 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg hover:ring-sky-300">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">Vendor &amp; data-flow resilience</h3>
            <p className="mt-4 text-neutral-600">
              Third-party risk and data transfers are designed, not patched. Contracts, SCCs, TIAs, and service
              configurations align with how your stack actually works.
            </p>
            <p className="mt-3 text-neutral-600">
              Result: fewer production surprises and cleaner customer commitments.
            </p>
          </div>

          {/* 6. Embedded partner (law × code) */}
          <div className="rounded-3xl border-0.9 border-neutral-700 bg-white p-6 md:p-8 ring-1 ring-neutral-200 shadow-sm transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:shadow-lg hover:ring-neutral-300">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">Embedded partner: law × code</h3>
            <p className="mt-4 text-neutral-600">
              You work with one boutique that exchanges directly with engineers and stakeholders. We translate regulator
              language into backlog items your team can ship.
            </p>
            <p className="mt-3 text-neutral-600">
              Why it matters: less friction, faster outcomes, and decisions your leadership can defend.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}





export function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Turning complex EU rules into clear competitive advantage"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We translate sprawling legislative texts into plain‐language tasks,
          automated controls and training that teams actually remember.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          {/* Image column */}
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List column */}
<ul role="list" className="mt-16 space-y-12 lg:mt-0 lg:w-1/2 lg:pl-4">
  <li>
    <h3 className="font-display text-lg font-semibold text-neutral-900">
      AI Act Literacy & Risk Assessment
    </h3>
    <p className="mt-2 text-neutral-600">
      We run full risk-tier gap analyses…
    </p>
    <ColorDivider
      primaryClass="bg-purple-700"
      secondaryClass="bg-purple-200"
      primaryWidth="w-16"    // feel free to widen if you like
    />
  </li>

  <li>
    <h3 className="font-display text-lg font-semibold text-neutral-900">
      GDPR Privacy Engineering
    </h3>
    <p className="mt-2 text-neutral-600">
      End-to-end DPIAs, user-friendly privacy notices…
    </p>
    <ColorDivider
      primaryClass="bg-blue-700"
      secondaryClass="bg-blue-200"
    />
  </li>

  <li>
    <h3 className="font-display text-lg font-semibold text-neutral-900">
      MiCA Digital-Asset Compliance
    </h3>
    <p className="mt-2 text-neutral-600">
      Token classification, white-paper drafting…
    </p>
    <ColorDivider
      primaryClass="bg-amber-700"
      secondaryClass="bg-amber-200"
    />
  </li>

  <li>
    <h3 className="font-display text-lg font-semibold text-neutral-900">
      Integrated EU Control Framework
    </h3>
    <p className="mt-2 text-neutral-600">
      A single control matrix covering AI Act, GDPR, MiCA, …
    </p>
    <ColorDivider
      primaryClass="bg-green-700"
      secondaryClass="bg-green-200"
    />
  </li>
</ul>
        </div>
      </Container>
    </>
  )
}



export function SpotlightTestimonial() {
  return (
    <section className="relative">
      <div className="bg-neutral-950">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-start gap-10 sm:gap-12 md:grid-cols-2">
            {/* Portrait */}
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-white/10">
              <Image
                src={JhonathanPhoto}
                alt="Jhonathan Campos"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            {/* Quote + meta */}
            <div className="text-neutral-100">
              <p className="mt-4 text-[17px] md:text-[18px] leading-light font-normal">
                AI Governance Specialist with a unique dual background as a Lawyer
                and Software Engineer. My mission is to empower companies and
                research institutions worldwide to confidently navigate the
                complex landscape of regulatory compliance.
                <br /><br />
                With deep expertise in the AI Act, GDPR, ePrivacy Directive,
                ISO&nbsp;42001, and Medical Device Regulation, I create compliance
                frameworks that not only meet legal requirements but also drive
                innovation and growth.
                <br /><br />
                My multidisciplinary approach allows me to translate complex
                regulations into actionable strategies, design and implement
                compliance programs that mitigate risks, and ensure organizations
                remain compliant and competitive—while fostering seamless
                collaboration between legal and technical teams.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-white">Jhonathan Campos</p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Founder — AI Governance Specialist, Lawyer &amp; Software Engineer
                  </p>
                </div>

                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/in/SEU-USUARIO" // <-- troque pelo seu link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-neutral-100 transition hover:border-white/40 hover:bg-white/5"
                  aria-label="View LinkedIn profile"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5ZM3 8.98h3.95V21H3V8.98ZM9.5 8.98H13v1.64h.05c.48-.86 1.66-1.77 3.42-1.77 3.66 0 4.34 2.1 4.34 4.83V21H16.8v-5.35c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.07 1.4-2.07 2.84V21H9.5V8.98Z"/>
                  </svg>
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}






export const metadata = {
  description:
    'We are a Berlin-based compliance studio working at the intersection of law and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56 relative">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl leading-tight">
            Conforma Studio.
          </h1>
          <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-balance text-neutral-950 mt-2">
            Berlin’s boutique at the crossroads of law and technology.
          </h2>

          <p className="mt-6 text-xl text-neutral-600">
            We blend legal precision with engineering expertise to build compliance frameworks that keep your innovations ahead of EU regulation, protecting your growth, reputation, and competitive edge.{' '}
          </p>
        </FadeIn>

        {/* Right-side quick links */}
        <nav
          aria-label="Quick links"
          className="pointer-events-auto z-10 mt-8 flex flex-col gap-3 items-stretch sm:items-center
                    lg:mt-0 lg:absolute lg:right-0 lg:top-8"
        >
          {[
            { href: '/services/ai-literacy', label: 'AI Literacy Training', border: 'border-purple-500' },
            { href: '/services/high-risk', label: 'Am I high-risk?', border: 'border-amber-500' },
            { href: '/services/ai-use-policy', label: 'AI Use Policy', border: 'border-green-500' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group inline-flex items-center justify-between
                          w-full sm:w-72 lg:w-56 rounded-full border ${link.border}
                          bg-white/80 px-5 py-3 text-sm sm:text-[15px] text-neutral-700
                          shadow-sm backdrop-blur-sm transition-all duration-200
                          hover:scale-105 hover:font-semibold hover:shadow-md hover:-translate-y-0.5`}
            >
              <span>{link.label}</span>
              <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-1">➔</span>
            </a>
          ))}
        </nav>

      </Container>
      <Regulations />
      <ProofOfValue />
       <SpotlightTestimonial />
      <Services />
      <Clients />

      {/* <CaseStudies caseStudies={caseStudies} /> */}


      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-20 text-sm md:text-md"
        client={{
          name: 'Norman Wagner - Bettencourt Financial Principal',
          logo: BFGImage, // ✅ pass import, not JSX
          url: 'https://bettencourtfg.com', // 👈 now clickable
        }}
        logoClassName="w-24 h-auto" // ✅ only if Testimonial supports it
      >
        Conforma Studio went above and beyond our expectations, Jhonathan got personally in touch with us and follow the project very closely, making us feel very confident and sure we made the best choice.
        The results are outstanding and we managed to launch in Europe!
      </Testimonial>
      <ContactSection />
    </>
  )
}
