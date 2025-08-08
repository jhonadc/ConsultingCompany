import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/gdpr/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/mica/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/mica/logo-light.svg'
import logoUnseal from '@/images/clients/aiact/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const regulations = [
  { title: 'AI Act', slug: 'aiact', description: 'Europe’s groundbreaking regulation for trustworthy AI systems.' },
  { title: 'GDPR', slug: 'gdpr', description: 'EU’s General Data Protection Regulation — protecting personal data since 2018.' },
  { title: 'MiCAR', slug: 'micar', description: 'Markets in Crypto-Assets Regulation for EU-wide digital-asset compliance.' },
  { title: 'Medical Device Regulation (MDR)', slug: 'mdr', description: 'EU’s MDR framework for safety and performance of medical devices.' },
]

function Regulations() {
  return (
    <>
      <SectionIntro
        eyebrow="Regulations"
        title="EU Rules We Specialize In"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From data privacy to AI oversight, explore our expertise across key EU regulations.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                className={`
                  group
                  block
                  aspect-square
                  rounded-2xl
                  bg-white
                  ring-1 ring-neutral-950/10
                  shadow-sm
                  flex flex-col justify-center items-center
                  p-6 text-center
                  transition
                  ${hoverRing}
                `}
              >
                <h4 className="font-display text-lg font-semibold text-neutral-950 group-hover:text-neutral-800">
                  {reg.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-600 hidden sm:block">
                  {reg.description}
                </p>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
}





function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;osve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
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
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Turning complex EU rules into clear competitive advantage"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We translate sprawling legislative texts into plain-language tasks,
          automated controls and training that teams actually remember.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="AI Act Literacy & Risk Assessment">
              We run full risk-tier gap analyses, draft conformity files and
              deliver hands-on workshops that turn your team into AI-Act-ready
              practitioners.
            </ListItem>

            <ListItem title="GDPR Privacy Engineering">
              End-to-end DPIAs, user-friendly privacy notices, and
              retention/deletion schedules embedded in every sprint—leaving you
              with audit-ready evidence packs.
            </ListItem>

            <ListItem title="MiCA Digital-Asset Compliance">
              Token classification, white-paper drafting and CASP licence
              dossiers so you can launch or list crypto assets EU-wide with zero
              last-minute surprises.
            </ListItem>

            <ListItem title="Integrated EU Control Framework">
              A single control matrix covering AI Act, GDPR, MiCA, DORA, Data
              Act, ESPR and CSRD/CSDDD—mapped to clear RACI ownership and
              automated checks.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
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
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Conforma Studio. A Berlin-based boutique at the intersection of Law
            and Technology.
          </h1>

          <p className="mt-6 text-xl text-neutral-600">
            Founded by a lawyer-engineer, we craft tailor-made frameworks that
            keep cutting-edge products ahead of EU regulation.{' '}
          </p>
        </FadeIn>
      </Container>
      <Regulations />
      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        Conforma Studio went above and beyond our expectations, Jhonathan, the
        CEO, got personally in touch with us and follow the project very
        closely, making us feel very confident and sure we made the best choice.
        The results are outstanding.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
