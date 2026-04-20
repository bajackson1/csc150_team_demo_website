import SectionHeading from "../components/SectionHeading"

const steps = [
  {
    number: "01",
    title: "Add your priorities",
    description: "Start by dropping in assignments, work tasks, or personal goals, then choose what matters most for today",
  },
  {
    number: "02",
    title: "Start a focus session",
    description: "Use a built-in timer to lock into one task at a time and create clear work blocks with less distraction",
  },
  {
    number: "03",
    title: "Track progress and habits",
    description: "Wrap up by checking off finished work, logging habits, and seeing progress carry forward into tomorrow",
  },
]

function HowItWorksSection() {
  return (
    <section
      id="about"
      className="section-space"
    >
      <div className="shell">
        <div className="panel border-slate-200/80 px-6 py-12 shadow-soft sm:px-10 lg:px-14">
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps from planning to follow-through"
            description="The flow stays light on purpose so users can get organized fast, work with focus, and keep momentum going"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">
                  {step.number}
                </p>

                <h3 className="mt-5 text-2xl font-semibold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
