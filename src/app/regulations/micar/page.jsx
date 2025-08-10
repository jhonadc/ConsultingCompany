import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import MicarContent from './micar.mdx'
import { BackButton } from '@/components/BackButton' 

export const metadata = {
  title: 'MiCAR – Conforma Studio',
  description: 'Markets in Crypto-Assets Regulation for EU-wide digital-asset compliance.',
}

export default function MicarPage() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <BackButton />
      <div className="border-t-4 border-amber-200 pt-6">
        <SectionIntro title="MiCAR" />
        <article className="prose mx-auto mt-8 prose-neutral">
          <MicarContent />
        </article>
      </div>
    </Container>
  )
}
