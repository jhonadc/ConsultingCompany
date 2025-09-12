import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
// import { formatDate } from '@/lib/formatDate'
// import { loadArticles } from '@/lib/mdx'

export const metadata = {
  title: 'Blog',
  description:
    'Insights, updates, and practical guidance on compliance, AI governance, and regulations. Blog posts will be published soon.',
}

export default async function Blog() {
  // let articles = await loadArticles()

  return (
    <>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          We’re preparing a series of blog posts with insights on compliance,
          AI governance, and regulations. Check back soon for updates.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32 text-center">
          {/* Articles temporarily disabled */}
          {/* {articles.map((article) => ( ... ))} */}
          <FadeIn>
            <p className="text-lg text-neutral-600">Blog posts coming soon.</p>
          </FadeIn>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
