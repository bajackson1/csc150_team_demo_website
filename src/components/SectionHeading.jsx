function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"

  return (
    <div className={alignment}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
