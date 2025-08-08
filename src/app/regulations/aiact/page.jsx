import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import AiactContent from './aiact.mdx'

export const metadata = {
  title: 'AI Act – Conforma Studio',
  description: 'Europe’s groundbreaking regulation for trustworthy AI systems.',
}

export default function AiactPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      {/* purple accent */}
      <div className="border-t-4 border-purple-200 pt-6">
        <SectionIntro title="AI Act" />
        <article className="prose mx-auto mt-8 prose-neutral">
          <AiactContent />
        </article>
      </div>
    </Container>
  )
}
