import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import LocaleLink from '@/components/LocaleLink'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'
import { languageAlternates } from '@/lib/seo'

const blogMetadata = {
  en: {
    title: 'Blog',
    description:
      'Insights, updates, and practical guidance on compliance, AI governance, and regulations.',
  },
  pt: {
    title: 'Blog',
    description:
      'Análises, atualizações e orientações práticas sobre compliance, governança de IA e regulação.',
  },
  de: {
    title: 'Blog',
    description:
      'Analysen, Updates und praktische Orientierung zu Compliance, KI-Governance und Regulierung.',
  },
}

export function generateMetadata({ params }) {
  const metadata = blogMetadata[params.locale] ?? blogMetadata.en

  return {
    ...metadata,
    alternates: languageAlternates('/blog'),
  }
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function FeaturedArticle({ article }) {
  return (
    <Container className="mt-16 sm:mt-20 lg:mt-24">
      <FadeIn>
        <LocaleLink
          href={article.href}
          className="group grid overflow-hidden rounded-3xl bg-neutral-950 text-white shadow-xl shadow-neutral-950/10 ring-1 ring-neutral-950/10 transition hover:bg-neutral-900 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)]"
          aria-label={`Read latest article: ${article.title}`}
        >
          {article.image?.src && (
            <div className="relative min-h-72 overflow-hidden bg-neutral-900 lg:min-h-96">
              <Image
                src={article.image.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-950/25 to-transparent lg:hidden" />
            </div>
          )}
          <div className="flex min-h-72 flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <p className="text-sm font-semibold text-white/70">
                Latest article · {formatDate(article.date)}
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium tracking-tight text-balance text-white sm:text-4xl">
                {article.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                {article.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-x-3 text-base font-semibold text-white">
              Read article
              <ArrowIcon className="w-6 flex-none fill-current transition group-hover:translate-x-1" />
            </div>
          </div>
        </LocaleLink>
      </FadeIn>
    </Container>
  )
}

export default async function Blog({ params }) {
  const articles = await loadArticles(params.locale)
  const [featuredArticle, ...moreArticles] = articles

  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Insights, updates, and practical guidance on compliance, AI governance,
          and regulations.
        </p>
      </PageIntro>

      {articles.length > 0 ? (
        <>
          <FeaturedArticle article={featuredArticle} />
          {moreArticles.length > 0 && (
            <PageLinks
              className="mt-8 sm:mt-10 lg:mt-12"
              compact
              title="Latest articles"
              intro="Our recent thinking on governance, risk, and regulation."
              pages={moreArticles}
            />
          )}
        </>
      ) : (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <div className="space-y-24 lg:space-y-32 text-center">
            <FadeIn>
              <p className="text-lg text-neutral-600">Blog posts coming soon.</p>
            </FadeIn>
          </div>
        </Container>
      )}

      <ContactSection />
    </>
  )
}
