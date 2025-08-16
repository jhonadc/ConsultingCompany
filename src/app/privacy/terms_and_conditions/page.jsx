// src/app/legal/privacy/page.jsx
import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn } from '@/components/FadeIn'

export const metadata = {
    title: 'Privacy Notice — Compliance Studio',
    description:
        'GDPR privacy notice for the Compliance Studio website. No cookies, no analytics. Contact data processed only to handle enquiries.',
}

export default function PrivacyPage() {
    return (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro title="Privacy Notice">
                <p className="text-md">
                    This notice explains how personal data is processed when you use our website or contact us.
                    We do not use cookies, analytics, tracking pixels, or advertising scripts.
                </p>
            </SectionIntro>

            <FadeIn className="mx-auto mt-10 max-w-3xl space-y-10">
                {/* Controller */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Controller</h2>
                    <p className="mt-3 text-neutral-700">
                        <strong>Jhonathan Campos</strong>, trading as <strong>“Comforma - Compliance Studio”</strong><br />
                        Berlin, Germany<br />
                        Email: <a href="mailto:jhonathanaugusto@gmail.com" className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900">contact@yourdomain.com</a>
                    </p>
                    <p className="mt-3 text-neutral-700">
                        Until incorporation of a separate legal entity, the controller is the natural person above operating under the trade name “Compliance Studio”.
                    </p>
                </section>

                {/* What we collect */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">What data we collect</h2>
                    <p className="mt-3 text-neutral-700">
                        We only process personal data that you actively provide via the contact form or email:
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-neutral-700">
                        <li>Your name</li>
                        <li>Your email address</li>
                        <li>The content of your message</li>
                    </ul>
                    <p className="mt-3 text-neutral-700">
                        We do <strong>not</strong> use cookies or analytics on this website.
                    </p>
                </section>

                {/* Purposes & legal bases */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Purposes and legal bases</h2>
                    <p className="mt-3 text-neutral-700">
                        We process your data solely to respond to your enquiry and manage related correspondence.
                        The legal basis is{' '}
                        <span className="whitespace-nowrap">Art. 6(1)(b) GDPR</span> (steps prior to a contract)
                        or <span className="whitespace-nowrap">Art. 6(1)(f) GDPR</span> (legitimate interest in handling enquiries).
                    </p>
                </section>

                {/* Processors */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Service providers (processors)</h2>
                    <p className="mt-3 text-neutral-700">
                        We use the following service providers under GDPR-compliant data processing terms:
                    </p>
                    <ul className="mt-3 space-y-2 text-neutral-700">
                        <li>
                            <strong>Vercel Inc.</strong> — website hosting and delivery (technical operation).
                        </li>
                        <li>
                            <strong>Brevo (Sendinblue SAS)</strong> — SMTP relay for contact form submissions (email delivery platform based in Paris, France).
                        </li>
                        <li>
                            <strong>Google Workspace — Google Ireland Limited</strong> (with Google LLC, USA as relevant) — mailbox to receive and reply to your messages.
                        </li>
                    </ul>
                    <p className="mt-3 text-neutral-700">
                        Where data is transferred to the United States (e.g., Google LLC), transfers rely on the EU–US Data Privacy Framework and/or the European Commission’s Standard Contractual Clauses, as applicable.
                    </p>
                </section>

                {/* Retention */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Storage duration</h2>
                    <p className="mt-3 text-neutral-700">
                        We retain contact enquiries only as long as necessary to process your request and to comply with statutory retention duties (e.g., German commercial and tax law).
                    </p>
                </section>

                {/* Rights */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Your rights</h2>
                    <p className="mt-3 text-neutral-700">
                        You have the rights of access, rectification, erasure, restriction, portability, and objection (Arts. 15–21 GDPR). You also have the right to lodge a complaint with a supervisory authority.
                    </p>
                    <p className="mt-3 text-neutral-700">
                        Competent authority in Berlin: <strong>Berliner Beauftragte für Datenschutz und Informationsfreiheit</strong>,
                        Alt-Moabit 59–61, 10555 Berlin — <a
                            href="https://www.datenschutz-berlin.de"
                            target="_blank"
                            rel="noreferrer"
                            className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                        >
                            datenschutz-berlin.de
                        </a>.
                    </p>
                </section>

                {/* Security */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Security</h2>
                    <p className="mt-3 text-neutral-700">
                        We use TLS/SSL encryption for transport and secure email transmission via Brevo SMTP. Access to mailboxes is restricted to authorised personnel only.
                    </p>
                </section>

                {/* Changes */}
                <section>
                    <h2 className="font-display text-xl font-semibold text-neutral-950">Changes to this notice</h2>
                    <p className="mt-3 text-neutral-700">
                        We may update this notice to reflect changes in our processing. The latest version is always available on this page.
                    </p>
                    <p className="mt-3 text-neutral-500 text-sm">
                        Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </p>
                </section>
            </FadeIn>
        </Container>
    )
}
