import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import imageJhonathan from '@/images/JhonathanPhoto.jpg'
import { loadArticles } from '@/lib/mdx'
import { JhonathanCard } from '@/components/JhonathanCard' // client component (JSX)

function Culture() {
  // cycle subtle accents that read well on dark surfaces
  const items = [
    { title: 'Integrity and Independence', desc: 'We tell the truth when it is easy and when it is hard. Clients deserve advice that is free from sales targets, referral fees, and hidden agendas.', dot: 'before:bg-emerald-400' },
    { title: 'Stewardship of Trust', desc: 'Compliance protects trust. We treat your data, your customers, and your reputation as assets held in our care, not as inputs to process.', dot: 'before:bg-indigo-400' },
    { title: 'Human Dignity', desc: 'Regulation exists to protect people. Privacy, accessibility, and fairness are not features, they are commitments to how a company behaves.', dot: 'before:bg-amber-400' },
    { title: 'Clarity over Complexity', desc: 'Clear language and simple controls beat jargon and theater. Leaders should be able to see the risk, the decision, and the evidence at a glance.', dot: 'before:bg-emerald-400' },
    { title: 'Accountability with Evidence', desc: 'Good governance leaves a trail. Every promise must be backed by who owns it, when it happens, and how it can be proven.', dot: 'before:bg-indigo-400' },
    { title: 'Partnership for the Long Term', desc: 'We aim to be part of your team. Culture, not checklists, is what keeps companies compliant through growth and change.', dot: 'before:bg-amber-400' },
  ]

  return (
    <div className="rounded-4xl bg-neutral-950 py-24 sm:mt-20 lg:mt-20 lg:py-18">
      <SectionIntro
        eyebrow="Our values"
        title="Integrity, trust, and human dignity at the core."
        invert
      >
        <p>
          We believe compliance is more than rules. It is about how companies earn trust, protect people, and act with independence.
          Our values guide every decision, shaping partnerships that last and governance that holds up in the real world.
        </p>
      </SectionIntro>


      <Container className="mt-16">
        <GridList>
          {items.map(({ title, desc, dot }) => (
            <GridListItem
              key={title}
              invert
              title={
                <span
                  className={`relative pl-4 before:absolute before:left-0 before:top-1/2 before:h-2 
                    before:w-2 before:-translate-y-1/2 before:rounded-full ${dot}`}
                >
                  {title}
                </span>
              }
            >
              {desc}
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  )
}

// keep Team in code but hide it; render Leadership with your clickable card
const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Jhonathan Campos',
        role: 'Founder & Principal — AI Governance, GDPR & Security',
        image: { src: imageJhonathan },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      { name: 'Chelsea Hagon', role: 'Senior Developer', image: { src: imageChelseaHagon } },
      { name: 'Emma Dorsey', role: 'Senior Designer', image: { src: imageEmmaDorsey } },
      { name: 'Leonard Krasner', role: 'VP, User Experience', image: { src: imageLeonardKrasner } },
      { name: 'Blake Reid', role: 'Junior Copywriter', image: { src: imageBlakeReid } },
      { name: 'Kathryn Murphy', role: 'VP, Human Resources', image: { src: imageKathrynMurphy } },
      { name: 'Whitney Francis', role: 'Content Specialist', image: { src: imageWhitneyFrancis } },
      { name: 'Jeffrey Webb', role: 'Account Coordinator', image: { src: imageJeffreyWebb } },
      { name: 'Benjamin Russel', role: 'Senior Developer', image: { src: imageBenjaminRussel } },
      { name: 'Angela Fisher', role: 'Front-end Developer', image: { src: imageAngelaFisher } },
      { name: 'Leslie Alexander', role: 'Co-Founder / CEO', image: { src: imageLeslieAlexander } },
      { name: 'Michael Foster', role: 'Co-Founder / CTO', image: { src: imageMichaelFoster } },
      { name: 'Dries Vincent', role: 'Partner & Business Relations', image: { src: imageDriesVincent } },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => {
          const isTeam = group.title === 'Team'
          return (
            <FadeInStagger key={group.title}>
              <Border as={FadeIn} />
              <div className={`grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8 ${isTeam ? 'hidden' : ''}`}>
                <FadeIn>
                  <h2 className="relative pl-3 font-display text-2xl font-semibold text-neutral-950 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                    {group.title}
                  </h2>
                </FadeIn>
                <div className="lg:col-span-3">
                  <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    <li>
                      <JhonathanCard
                        name="Jhonathan Campos"
                        role="Founder & Principal — AI Governance, GDPR & Security"
                        image={imageJhonathan}
                        linkedinUrl="https://www.linkedin.com/in/jhonathanadc"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInStagger>
          )
        })}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us – AmeCari Compliance Studio',
  description:
    'A premium consulting boutique for AI governance and GDPR in Germany. We translate regulation into measurable controls, audit-ready files, and management decisions.',
}

export default async function About() {
  //const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      {/* Header (2-column with subtle divider + template paragraph styles, lighter bold spans) */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          {/* micro accent bar */}
          <p className="relative pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-indigo-500">
            About us
          </p>

          <h1 className="mt-2 font-display font-semibold text-neutral-950 text-3xl lg:text-6xl">
            Regulation into advantage.<br className="hidden sm:block" />
            Compliance into trust.
            {/* soft accent underline */}
            <span className="mt-4 block h-px w-16 rounded bg-indigo-500/25" />
          </h1>

          {/* Body split into two columns with a vertical divider on large screens */}
          <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-12 lg:gap-10 text-justify">
            {/* Left column */}
            <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 lg:col-span-5">
              <p>
                Berlin is Europe’s startup capital and a center of regulatory change with the{' '}
                <span className="font-semibold">AI Act</span>,{' '}
                <span className="font-semibold">GDPR</span> and the{' '}
                <span className="font-semibold">Accessibility Act</span>.
              </p>
              <p>
                <span className="font-semibold">Generic tools carry privacy risks</span> and cannot meet the
                responsibility new regulations demand. We built a Compliance Studio to work within your
                structure and embed regulation into your daily operations.
              </p>
              <p>
                <span className="font-semibold">We integrate with your teams and systems.</span>{' '}
                We design governance with clear ownership, lean routines and audit-ready evidence.
              </p>
            </div>

            {/* Vertical divider (hidden on mobile) */}
            <div className="relative my-6 hidden lg:my-0 lg:block lg:col-span-2" aria-hidden="true">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-neutral-200 rounded" />
              {/* tiny accent tick */}
              <span className="absolute left-1/2 -translate-x-1/2 top-6 block h-8 w-px rounded bg-indigo-500" />
            </div>

            {/* Right column */}
            <div className="space-y-4 text-base sm:text-lg leading-7 sm:leading-8 text-neutral-600 lg:col-span-5">
              <p>
                Compliance is not only about avoiding fines. In Berlin’s AI and health-tech ecosystem it is a{' '}
                <span className="font-semibold">strategic advantage</span> that accelerates deals, builds trust
                and attracts investors.
              </p>
              <p>
                We combine <span className="font-semibold">legal expertise</span>,{' '}
                <span className="font-semibold">engineering knowledge</span> and{' '}
                <span className="font-semibold">security discipline</span> to deliver solutions tailored to your
                risks and goals: <span className="font-semibold">a premium advisory for companies shaping Europe’s digital future.</span>
              </p>
            </div>
          </div>
        </div>
      </Container>




      {/* Why AmeCari */}
      <Container className="mt-24 sm:mt-32 lg:mt-30">
        <SectionIntro eyebrow="Why AmeCari" title="Partnership, not paperwork.">
          <p className="max-w-3xl">
            Many firms auto-generate documents. We don’t. We design controls that run in your
            products and teams—embedding ownership, routines, and evidence, so compliance supports
            growth, security, and trust.
          </p>
        </SectionIntro>

        {/* Align grid with SectionIntro block on sm/md; expand on lg */}
        <div className="mt-20 mx-auto max-w-2xl md:max-w-7xl px-6 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-justify">
            {[
              {
                k: 'Implementation over automation',
                v: 'No boilerplate. We build approvals, risk logs, DPIA cadence, and vendor intake that actually operate in your stack.',
                dot: 'before:bg-purple-500',
                accent: 'bg-purple-600',
              },
              {
                k: 'Culture, not checklists',
                v: 'Training, clear owners, and simple routines turn rules into habit—so compliance survives org changes.',
                dot: 'before:bg-blue-500',
                accent: 'bg-blue-600',
              },
              {
                k: 'Growth & security together',
                v: 'Evidence and control clarity accelerate enterprise deals while reducing enforcement and outage risk.',
                dot: 'before:bg-emerald-500',
                accent: 'bg-emerald-600',
              },
              {
                k: 'Accountable & defensible',
                v: 'Every action maps to law and standard (AI Act, GDPR, ISO 42001) with traceable decisions and proof.',
                dot: 'before:bg-amber-500',
                accent: 'bg-amber-600',
              },
              {
                k: 'Vendor-neutral',
                v: 'No kickbacks or tooling commissions. We recommend what fits your risk, not a sales quota.',
                dot: 'before:bg-rose-500',
                accent: 'bg-rose-600',
              },
              {
                k: 'Long-term partner',
                v: 'We stay on the hook: tune-ups, change logs, and evidence packs that hold up in audits and diligence.',
                dot: 'before:bg-sky-500',
                accent: 'bg-sky-600',
              },
            ].map(({ k, v, dot, accent }) => (
              <FadeIn key={k}>
                <h3
                  className={`relative pl-4 font-display text-lg font-semibold text-neutral-950 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full ${dot}`}
                >
                  {k}
                </h3>
                <p className="mt-2 text-md text-neutral-700">{v}</p>
                <div className="mt-5 h-px w-full bg-neutral-200 relative">
                  <span className={`absolute top-0 left-0 h-px w-16 ${accent}`} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>

      {/*  <Container className="mt-16">
        <StatList>
          <StatListItem value="2 weeks" label="Avg. time to first compliance roadmap" />
          <StatListItem value="100%" label="Controls mapped to Articles/Annexes" />
          <StatListItem value="0" label="Untailored templates used" />
        </StatList>
      </Container> */}

      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Actionable guidance on the EU AI Act, GDPR for ML pipelines, ISO 42001 AIMS, vendor governance, and model-security hardening."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </>
  )
}
