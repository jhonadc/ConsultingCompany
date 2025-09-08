// src/app/layout.tsx
import { RootLayout as Shell } from '@/components/RootLayout'
import '@/styles/tailwind.css'
import Script from 'next/script'
import GATracker from './ga-tracker'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react' // ✅ add this

export const metadata = {
  title: {
    template: '%s – Oversight Governance',
    default: 'Oversight Governance Studio – EU Compliance & AI Act Experts',
  },
  description:
    'Expert legal and engineering guidance for EU regulations. We help European and international companies meet the AI Act, GDPR, and other compliance requirements with precision and trust.',
}


const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {/* Track client-side route changes (must be inside Suspense) */}
        <Suspense fallback={null}>
          <GATracker />
        </Suspense>

        <Analytics />

        {/* Google tag (gtag.js) – loaded once */}
        <Script
          id="ga-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4
            ${GA_ID ? `gtag('config', '${GA_ID}', { send_page_view: false });` : ''}

            // Google Ads (AW)
            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}

            // expose globally
            window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
