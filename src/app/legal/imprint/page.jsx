// src/app/impressum/page.jsx
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata = {
    title: 'Imprint (Impressum)',
}

export default function ImprintPage() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="Legal"
                title="Imprint (Impressum)"
            >
                <p className="text-lg text-neutral-600">
                    Information provided according to § 5 TMG and § 18 Abs. 2 MStV.
                </p>
            </SectionIntro>

            <div className="mt-12 max-w-2xl ml-8 space-y-10 text-neutral-800">
                <div>
                    <h3 className="text-base font-semibold text-neutral-950">Operator</h3>
                    <p className="mt-2">
                        Compliance Studio<br />
                        Jhonathan Campos<br />
                        10829 Berlin, Germany
                    </p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">Contact</h3>
                    <p className="mt-2">
                        E-Mail:{' '}
                        <a href="mailto:jhonathanasiaugusto@gmail.com" className="underline hover:text-neutral-950">
                            jhonathanasiaugusto@gmail.com
                        </a><br />
                        Website:{' '}
                        <a href="https://comformacompliance.com" className="underline hover:text-neutral-950">
                            comformacompliance.com
                        </a>
                    </p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">Responsible for Content</h3>
                    <p className="mt-2">
                        According to § 18 Abs. 2 MStV:<br />
                        Jhonathan Campos
                    </p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">Professional Status</h3>
                    <p className="mt-2">Freelance consultant under German law.</p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">Disclaimer</h3>
                    <p className="mt-2 text-sm text-neutral-700">
                        Despite careful content control, we assume no liability for the content of external links.
                        The operators of linked pages are solely responsible for their content.
                    </p>
                </div>

                <div>
                    <h3 className="text-base font-semibold text-neutral-950">EU Dispute Resolution</h3>
                    <p className="mt-2 text-sm text-neutral-700">
                        The European Commission provides a platform for online dispute resolution (OS):{' '}
                        <a href="https://ec.europa.eu/consumers/odr" className="underline hover:text-neutral-950">
                            https://ec.europa.eu/consumers/odr
                        </a>
                        <br />
                        We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.
                    </p>
                </div>
            </div>
        </Container>
    )
}
