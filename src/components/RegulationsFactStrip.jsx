// components/RegulationFactStrip.jsx
export default function RegulationsFactStrip({ facts }) {
    return (
        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                {facts.map(({ color, title, value, description }, idx) => (
                    <div key={idx} className="flex gap-3">
                        <span
                            className={`mt-1 h-2.5 w-2.5 rounded-full`}
                            style={{ backgroundColor: color }}
                        ></span>
                        <div>
                            <dt className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">
                                {title}
                            </dt>
                            <dd className="text-sm font-semibold text-neutral-900">{value}</dd>
                            {description && (
                                <p className="text-xs text-neutral-500">{description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </dl>
        </div>
    );
}
