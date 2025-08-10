
import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Assess" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin with a structured assessment to understand your{' '}
          <strong className="font-semibold text-neutral-950">business model</strong>, risk appetite, and growth plans. Together we map processes and data flows to see where compliance can enable the product — not slow it down.
        </p>
        <p>
          Through focused stakeholder sessions we inventory AI use cases and data processing, identify applicable obligations (AI Act, GDPR, ePrivacy, and sector rules), and surface quick wins alongside critical gaps.
        </p>
        <p>
          You receive a concise findings brief and a prioritized{' '}
          <strong className="font-semibold text-neutral-950">implementation plan</strong> with effort, impact, and timeline estimates.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>System &amp; data inventory</TagListItem>
        <TagListItem>Regulatory mapping (AI Act, GDPR)</TagListItem>
        <TagListItem>Risk screening &amp; DPIA scoping</TagListItem>
        <TagListItem>Gap analysis</TagListItem>
        <TagListItem>Prioritized roadmap</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Implement" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Using the roadmap, we implement the controls and documentation that matter: AI policy, risk management and human oversight, data protection by design, vendor governance, and clear approval workflows.
        </p>
        <p>
          We set up a lightweight AI Management System (ISO/IEC 42001–aligned), produce the technical documentation and risk-management file (Annex IV), and prepare DPIAs and records of processing where relevant. Work runs in short sprints with weekly check-ins and visible progress.
        </p>
        <p>
          Your team keeps ownership — we co-create templates, automate where possible, and embed the process into your existing tools so it scales with you.
        </p>
      </div>

      <Blockquote
        author={{ name: 'General Counsel', role: 'Growth-stage SaaS' }}
        className="mt-12"
      >
        Clear milestones, zero surprises, and audit-ready documents our external auditors actually used.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Sustain" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before go-live we validate controls, align owners, and finalize operating procedures and KPIs. The goal is durability: compliance that holds under real-world pressure.
        </p>
        <p>
          We run incident tabletop exercises, verify human-in-the-loop oversight, and check vendor and data-transfer safeguards end-to-end.
        </p>
        <p>
          At handover you receive an audit-ready package and a pragmatic{' '}
          <strong className="font-semibold text-neutral-950">maintenance plan</strong> with cadences and checklists, plus options for ongoing support.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Validation &amp; assurance">
          Control testing, documentation review, and traceability checks with evidence indexed for audits.
        </ListItem>
        <ListItem title="Governance infrastructure">
          Registers, policies, training, ticketing workflows, and versioned templates wired into your tools.
        </ListItem>
        <ListItem title="Support">
          Ongoing updates for regulatory change, ad-hoc reviews, and on-call help during audits and client diligence.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Pragmatic, rigorous, human"
      >
        <p>
          We combine legal precision with engineering pragmatism. Vendor-neutral, evidence-based, and focused on outcomes your business can measure — not paperwork for its own sake.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Audit-ready records, clear rationale, and end-to-end traceability across decisions, models, and data.
          </GridListItem>
          <GridListItem title="Efficient">
            Time-boxed sprints, right-sized deliverables, and reusable assets that lower the total cost of compliance.
          </GridListItem>
          <GridListItem title="Adaptable">
            Frameworks that fit your sector, size, and risk profile — never one-size-fits-all.
          </GridListItem>
          <GridListItem title="Honest">
            Direct advice, transparent trade-offs, and clear no-go calls when risks outweigh rewards.
          </GridListItem>
          <GridListItem title="Loyal">
            Partnership mindset: we safeguard your reputation and help teams operate confidently under scrutiny.
          </GridListItem>
          <GridListItem title="Innovative">
            We track regulatory change, adversarial trends, and new standards to keep your program future-proof.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'A Berlin-based compliance boutique delivering clear, audit-ready outcomes through a pragmatic, client-first process.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          Compliance should enable growth. Our process aligns legal, technical, and product teams to reduce risk and unlock speed — without bureaucracy.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}

