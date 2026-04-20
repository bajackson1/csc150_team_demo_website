function TestimonialCard({
  quote,
  name,
  role,
  company,
}) {
  return (
    <article className="panel h-full border-slate-200/80 p-7 shadow-soft">
      <div className="flex items-center gap-1 text-brand-500">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <p className="mt-6 text-lg leading-8 text-slate-700">
        “{quote}”
      </p>

      <div className="mt-8">
        <p className="font-semibold text-slate-950">
          {name}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {role}
        </p>

        <p className="mt-1 text-sm font-semibold text-brand-700">
          {company}
        </p>
      </div>
    </article>
  )
}

export default TestimonialCard
