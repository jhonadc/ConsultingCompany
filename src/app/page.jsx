// app/page.tsx  (server component)
import { redirect } from 'next/navigation'
import { defaultLocale } from '@/i18n/config'  // -> 'en'

export default function RootRedirect() {
  redirect(`/${defaultLocale}`)
}
