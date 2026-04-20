import Button from "../components/Button"
import logoMark from "../assets/logo-mark.svg"

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-slate-50/85 backdrop-blur">
      <div className="shell flex flex-wrap items-center justify-between gap-4 py-4">
        <a
          href="#top"
          className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-slate-950"
        >
          <img
            src={logoMark}
            alt=""
            className="h-11 w-11 rounded-2xl"
          />

          <span>Momentum</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href="#cta"
          className="px-4 py-2.5"
        >
          Start free
        </Button>

        <nav className="flex w-full flex-wrap items-center gap-5 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
