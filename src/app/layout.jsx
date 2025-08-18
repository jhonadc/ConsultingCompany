// src/app/layout.tsx
import { RootLayout as Shell } from '@/components/RootLayout'
import '@/styles/tailwind.css'
import Script from 'next/script'
import GATracker from './ga-tracker'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  title: {
    template: '%s – Amecari Advisory',
    default:
      'Amecari Regulatory & Governance Advisory,  Tailored EU compliance solutions in Berlin',
  },
  description:
    'We shape compliance to your business needs. Supporting european and international companies to meet EU regulations including the AI Act, GDPR, LGPD, Accessibility Act, and more.',
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        {/* Track client-side route changes */}
        <GATracker />
        <Analytics />

        {/* Google tag (gtag.js) – carregado uma única vez */}
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

            // Google Ads (AW) – inicialização adicional
            ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}

            // Expor gtag globalmente
            window.gtag = window.gtag || function(){ dataLayer.push(arguments); };
          `}
        </Script>

        <Shell>{children}</Shell>
      </body>
    </html>
  )
}
