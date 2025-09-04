import LocaleLink from '@/components/LocaleLink'

export function BackButton() {
  return (
    <LocaleLink
      href="/regulations"
      className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900"
    >
      ← Back to regulations
    </LocaleLink>
  )
}
