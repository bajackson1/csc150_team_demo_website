function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-brand-600 text-white shadow-soft hover:bg-brand-700 focus-visible:outline-brand-600",
    secondary:
      "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-slate-400",
    ghost:
      "bg-transparent text-slate-700 ring-1 ring-slate-200 hover:bg-white focus-visible:outline-slate-400",
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export default Button
