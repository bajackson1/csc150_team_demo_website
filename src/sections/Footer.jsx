import logoMark from "../assets/logo-mark.svg"

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="shell flex flex-col gap-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logoMark}
            alt=""
            className="h-11 w-11 rounded-2xl"
          />

          <div>
            <p className="font-semibold text-slate-900">Momentum</p>
            <p>© 2026 Demo site for CSC150 team project</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
