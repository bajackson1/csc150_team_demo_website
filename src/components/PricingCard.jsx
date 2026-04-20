import Button from "./Button"

function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  cta,
}) {
  return (
    <article
      className={`panel relative h-full p-8 ${highlighted ? "border-brand-200 bg-slate-950 text-white shadow-soft" : "border-slate-200/80 bg-white text-slate-900"}`}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          Popular
        </span>
      )}

      <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${highlighted ? "text-brand-100" : "text-brand-600"}`}>
        {name}
      </p>

      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-bold tracking-tight">
          {price}
        </span>
        <span className={`pb-2 text-sm ${highlighted ? "text-slate-300" : "text-slate-500"}`}>
          / month
        </span>
      </div>

      <p className={`mt-5 text-base leading-7 ${highlighted ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm leading-6 ${highlighted ? "text-slate-100" : "text-slate-700"}`}
          >
            <span className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full text-xs ${highlighted ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"}`}>
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button
          href="#cta"
          variant={highlighted ? "primary" : "secondary"}
          className={`w-full ${highlighted ? "bg-white text-slate-950 hover:bg-slate-100 focus-visible:outline-white" : ""}`}
        >
          {cta}
        </Button>
      </div>
    </article>
  )
}

export default PricingCard
