import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s – Comforma Compliance',
    default: 'Comforma Compliance – Tailored EU compliance solutions in Berlin',
  },
  description: 'We shape compliance to your business needs. Supporting european and international companies to meet EU regulations including the AI Act, GDPR, LGPD, Data Act, Accessibility Act, and more.',
}


export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
