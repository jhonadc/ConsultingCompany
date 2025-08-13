
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      {/* Reduced padding for a tighter black panel */}
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-16 sm:mx-0 sm:py-20 md:px-10">
        {/* Widened a touch to allow a clean two-column layout */}
        <div className="mx-auto max-w-5xl">
          {/* Two columns on md+; stacked on mobile */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
            {/* Left column: heading + CTA */}
            <div>
              <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
                Tell us about your project
              </h2>
              <div className="mt-6 flex">
                <Button href="/contact" invert>
                  Say Hallo
                </Button>
              </div>
            </div>

            {/* Right column: office info (stacks below on mobile) */}
            <div className="mt-10 border-t border-white/10 pt-10 md:mt-0 md:border-t-0 md:pt-0 md:pl-8">
              <h3 className="font-display text-base font-semibold text-white">
                Our office
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

