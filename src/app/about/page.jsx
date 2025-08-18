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
  return (
    <div className=" rounded-4xl bg-neutral-950 py-24 sm:mt-20 lg:mt-20 lg:py-18">
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
          <GridListItem title="Integrity and Independence" invert>
            We tell the truth when it is easy and when it is hard. Clients deserve advice that is free from sales targets, referral fees, and hidden agendas.
          </GridListItem>

          <GridListItem title="Stewardship of Trust" invert>
            Compliance protects trust. We treat your data, your customers, and your reputation as assets held in our care, not as inputs to process.
          </GridListItem>

          <GridListItem title="Human Dignity" invert>
            Regulation exists to protect people. Privacy, accessibility, and fairness are not features, they are commitments to how a company behaves.
          </GridListItem>

          <GridListItem title="Clarity over Complexity" invert>
            Clear language and simple controls beat jargon and theater. Leaders should be able to see the risk, the decision, and the evidence at a glance.
          </GridListItem>

          <GridListItem title="Accountability with Evidence" invert>
            Good governance leaves a trail. Every promise must be backed by who owns it, when it happens, and how it can be proven.
          </GridListItem>

          <GridListItem title="Partnership for the Long Term" invert>
            We aim to be part of your team. Culture, not checklists, is what keeps companies compliant through growth and change.
          </GridListItem>
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
                  <h2 className="font-display text-2xl font-semibold text-neutral-950">
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
      {/* Replace <PageIntro>…</PageIntro> with this */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <p className="text-sm font-medium text-neutral-600">About us</p>

          <h1 className="mt-2 font-display text-4xl font-semibold text-neutral-950 sm:text-5xl lg:text-6xl">
            Regulation into advantage.<br className="hidden sm:block" />
            Compliance into trust.
          </h1>

          <div className="mt-6 max-w-6xl space-y-6 text-lg text-neutral-700 leading-7 justify-center">
            <p>
              Berlin is Europe’s startup capital and a testing ground for global innovation. It is also at the center of regulatory change:
              the <strong>AI Act</strong>, <strong>GDPR</strong>, the <strong>Accessibility Act</strong> and new digital rules are being shaped and enforced here.
            </p>

            <p>
              <strong>Generic software tools cannot translate these fast-moving rules </strong>into the governance, evidence and trust that investors, regulators and enterprise clients expect.
              This is why we built a Compliance Studio in Berlin. <strong>Our role is not to generate paperwork. We embed regulation into your company’s DNA.</strong>
            </p>

            <p>
              <strong>We work as a partner inside your flow.</strong> We align with your teams, adapt to your systems and build <strong>governance by design</strong>.
              That means <strong>clear ownership</strong>, lean routines and <strong>audit-ready evidence</strong> that operates in practice.
            </p>

            <p>
              Compliance is more than avoiding fines. In Berlin’s ecosystem of AI, health tech and digital products it is a <strong>strategic differentiator</strong>.
              Done well, it <strong>accelerates enterprise deals, builds user trust and attracts investors who demand accountability.</strong>
            </p>

            <p>
              Our approach applies <strong>legal expertise</strong>, <strong>engineering knowledge</strong> and <strong>security discipline</strong>.
              We <strong>communicate, integrate and deliver solutions</strong> tailored to your risks and goals: <strong>a premium regulatory and governance advisory for companies shaping Europe’s digital future.</strong>
            </p>

          </div>
        </div>
      </Container>


      <Container className="mt-24 sm:mt-32 lg:mt-30">
        <SectionIntro
          eyebrow="Why AmeCari"
          title="Partnership, not paperwork."
        >
          <p className="max-w-3xl">
            Many firms auto-generate documents. We don’t. We design controls that run in your
            products and teams—embedding ownership, routines, and evidence, so compliance supports
            growth, security, and trust.
          </p>
        </SectionIntro>

        {/* Align grid with SectionIntro block on sm/md; expand on lg */}
        <div className="mt-20  mx-auto  max-w-2xl md:max-w-7xl px-6 sm:px-8 ">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                k: 'Implementation over automation',
                v: 'No boilerplate. We build approvals, risk logs, DPIA cadence, and vendor intake that actually operate in your stack.',
                color: 'bg-neutral-200',
                accent: 'bg-purple-600',
              },
              {
                k: 'Culture, not checklists',
                v: 'Training, clear owners, and simple routines turn rules into habit—so compliance survives org changes.',
                color: 'bg-neutral-200',
                accent: 'bg-blue-600',
              },
              {
                k: 'Growth & security together',
                v: 'Evidence and control clarity accelerate enterprise deals while reducing enforcement and outage risk.',
                color: 'bg-neutral-200',
                accent: 'bg-emerald-600',
              },
              {
                k: 'Accountable & defensible',
                v: 'Every action maps to law and standard (AI Act, GDPR, ISO 42001) with traceable decisions and proof.',
                color: 'bg-neutral-200',
                accent: 'bg-amber-600',
              },
              {
                k: 'Vendor-neutral',
                v: 'No kickbacks or tooling commissions. We recommend what fits your risk, not a sales quota.',
                color: 'bg-neutral-200',
                accent: 'bg-rose-600',
              },
              {
                k: 'Long-term partner',
                v: 'We stay on the hook: tune-ups, change logs, and evidence packs that hold up in audits and diligence.',
                color: 'bg-neutral-200',
                accent: 'bg-sky-600',
              },
            ].map(({ k, v, color, accent }) => (
              <FadeIn key={k}>
                <h3 className="font-display text-lg  font-semibold text-neutral-950">{k}</h3>
                <p className="mt-2 text-md text-neutral-700">{v}</p>
                <div className={`mt-5 h-px w-full ${color} relative`}>
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
