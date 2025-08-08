import Link from 'next/link'
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import AiactContent from './aiact.mdx'
import { BackButton } from '@/components/BackButton' 

// ← Only up here, for SEO
export const metadata = {
  title: 'AI Act – Conforma Studio',
  description: 'Europe’s groundbreaking regulation for trustworthy AI systems.',
}

export default function AiactPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      {/* back link */}
      <BackButton />

      {/* coloured border top */}
      <div className="border-t-4 border-purple-200 pt-6">
        {/* title + description hard-coded here */}
        <SectionIntro title="AI Act">
          <p>
            Europe’s groundbreaking regulation for trustworthy AI systems.
          </p>
        </SectionIntro>

        {/* your MDX body */}
        <article className="prose mx-auto mt-8 prose-neutral">
          <AiactContent />
        </article>
      </div>
    </Container>
  )
}
