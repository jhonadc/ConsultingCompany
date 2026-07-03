import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
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

export default async function Blog({ params }) {
  const articles = await loadArticles(params.locale)

  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Insights, updates, and practical guidance on compliance, AI governance,
          and regulations.
        </p>
      </PageIntro>

      {articles.length > 0 ? (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Latest articles"
          intro="Our recent thinking on governance, risk, and regulation."
          pages={articles}
        />
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
