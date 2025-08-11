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
import imageJhonathan from'@/images/JhonathanPhoto.jpg'
import { loadArticles } from '@/lib/mdx'
import { JhonathanCard } from '@/components/JhonathanCard' // client component (JSX)

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Premium compliance is discipline, independence, and measurable outcomes."
        invert
      >
        <p>
          We operate to the standards our clients are judged by: defensible decisions, documented controls, and governance that survives audit and scrutiny.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity & Independence" invert>
            Unvarnished advice from an independent partner—no vendor kickbacks, no commissioned tooling, no conflicts.
          </GridListItem>
          <GridListItem title="Confidentiality by Design" invert>
            Strict need-to-know access, clear data boundaries, retention controls, and NDAs for all contributors.
          </GridListItem>
          <GridListItem title="Proportional & Pragmatic" invert>
            Controls tailored to your risk profile. No checkbox theater—only frameworks your teams can run.
          </GridListItem>
          <GridListItem title="Accountable & Traceable" invert>
            Every recommendation maps to an owner, deadline, and Article/Clause for audit-ready evidence.
          </GridListItem>
          <GridListItem title="Security & Resilience" invert>
            Secure-by-design for models, data, and supply chain to reduce rework and enforcement exposure.
          </GridListItem>
          <GridListItem title="Human-Centric" invert>
            Safeguards aligned with fundamental rights and your values—turning compliance into customer trust.
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
  title: 'About Us – Accordant Compliance Studio',
  description:
    'A premium consulting boutique for AI governance and GDPR in Germany. We translate regulation into measurable controls, audit-ready files, and management decisions.',
}

export default async function About() {
  const blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Regulation into advantage. Compliance into trust.">
        <p>
          We help boards and product leaders turn the EU AI Act and GDPR into a durable competitive edge. Our work blends legal precision, engineering depth, and security discipline—controls that work in production, not just on paper.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded by a lawyer–engineer tired of recycled slideware, we deliver C-suite briefings, developer enablement, and system-specific risk audits. Every action maps to Articles and Annexes for evidence that stands up to auditors and regulators.
          </p>
          <p>
            Timelines matter: prohibited AI practices apply from <strong>February&nbsp;2,&nbsp;2025</strong>; general-purpose AI provider duties start in <strong>2025</strong>; high-risk system obligations apply from <strong>2027</strong>. We design lean governance now so you’re compliant before it’s compulsory.
          </p>
          <p>
            Each engagement ends with an independent compliance roadmap across AI Act, GDPR, and ISO&nbsp;42001—clear owners, deadlines, and KPIs. Practical. Defensible. Auditable.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="2 weeks" label="Avg. time to first compliance roadmap" />
          <StatListItem value="100%" label="Controls mapped to Articles/Annexes" />
          <StatListItem value="0" label="Untailored templates used" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Actionable guidance on the EU AI Act, GDPR for ML pipelines, ISO 42001 AIMS, vendor governance, and model-security hardening."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
