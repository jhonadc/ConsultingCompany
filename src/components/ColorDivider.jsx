// src/components/ColorDivider.jsx
export function ColorDivider({
  primaryClass = 'bg-neutral-300',
  secondaryClass = 'bg-neutral-100',
  primaryWidth = 'w-12',
}) {
  return (
    <div className="mt-6 flex" aria-hidden="true">
      <span className={`block h-0.5 ${primaryWidth} ${primaryClass}`} />
      <span className={`block h-0.5 flex-auto ${secondaryClass}`} />
    </div>
  )
}

