import SectionHeading from "../components/SectionHeading"

const assets = [
  {
    name: "Logo direction",
    prompt: "Minimal app logo for a productivity brand named Momentum, rounded icon, blue and soft neutral palette, clean SaaS style, modern but friendly",
    iterations: "Saved in src/assets/logo-mark.svg with concept direction for brand icon use",
  },
  {
    name: "Feature icons",
    prompt: "Set of simple productivity app icons for task list, focus timer, habit tracking, and insights, matching blue UI style, rounded shapes, modern landing page",
    iterations: "Saved as feature-task.svg, feature-timer.svg, feature-habit.svg, and feature-insight.svg",
  },
  {
    name: "Hero illustration",
    prompt: "Clean SaaS dashboard illustration for productivity app with tasks, timer, habits, analytics, light background, blue accents, polished landing page style",
    iterations: "Saved in src/assets/hero-visual.svg and ready to swap with external AI image output later if needed",
  },
]

function AiProcessSection() {
  return (
    <section
      id="process"
      className="section-space pt-10"
    >
      <div className="shell">
        <div className="panel border-slate-200/80 px-6 py-12 shadow-soft sm:px-10 lg:px-14">
          <SectionHeading
            eyebrow="Process"
            title="AI asset plan and project documentation details"
            description="This section summarizes prompt direction and saved asset files so the team can present process work alongside the landing page"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {assets.map((asset) => (
              <article
                key={asset.name}
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-600">
                  {asset.name}
                </p>

                <p className="mt-5 text-base leading-7 text-slate-700">
                  {asset.prompt}
                </p>

                <p className="mt-6 text-sm leading-6 text-slate-500">
                  {asset.iterations}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AiProcessSection
