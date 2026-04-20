function FeatureCard({
  icon,
  title,
  description,
  meta,
}) {
  return (
    <article className="panel fade-up h-full border-slate-200/80 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-100">
      <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-brand-50">
        <img
          src={icon}
          alt=""
          className="h-14 w-14"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-600">
        {description}
      </p>

      <p className="mt-6 text-sm font-semibold text-brand-700">
        {meta}
      </p>
    </article>
  )
}

export default FeatureCard
