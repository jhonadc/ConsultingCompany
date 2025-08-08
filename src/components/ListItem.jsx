// src/components/ListItem.jsx
export function ListItem({
  title,
  children,
  dividerPrimary = 'neutral-300',
  dividerSecondary = 'neutral-100',
}) {
  return (
    <li className="flex flex-col">
      <h3 className="font-display text-lg font-semibold text-neutral-900">
        {title}
      </h3>
      <div className="mt-2 text-base text-neutral-600">
        {children}
      </div>
      {/* two-tone divider */}
      <div className="mt-6 flex h-px" aria-hidden="true">
        <span className={`block h-full w-12 bg-${dividerPrimary}`} />
        <span className={`block h-full flex-auto bg-${dividerSecondary}`} />
      </div>
    </li>
  )
}
