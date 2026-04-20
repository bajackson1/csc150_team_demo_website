import Button from "../components/Button"

function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="section-space pt-10"
    >
      <div className="shell">
        <div className="panel overflow-hidden border-brand-100 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),rgba(255,255,255,0.95))] px-6 py-12 shadow-soft sm:px-10 lg:px-14 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-700">
              Ready to reset your workflow
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Stay organized, protect focus, and keep habits moving in one place
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Momentum brings together the tools people already piece together by hand, then wraps them in a cleaner flow that is easier to keep using
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#top">
                Get started free
              </Button>

              <Button
                href="#process"
                variant="ghost"
              >
                View process notes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCtaSection
