// src/components/BackButton.jsx
import Link from 'next/link'

export function BackButton({ href = '/regulations', label = '← Back to Regulations' }) {
  return (
    <Link
      href={href}
      className="inline-block mb-4 text-sm text-neutral-600 hover:underline"
    >
      {label}
    </Link>
  )
}
