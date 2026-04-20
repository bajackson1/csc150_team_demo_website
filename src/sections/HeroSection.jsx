import Button from "../components/Button"
import heroVisual from "../assets/hero-visual.svg"

function HeroSection() {
  return (
    <section
      id="top"
      className="section-space overflow-hidden"
    >
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="fade-up max-w-2xl">
          <div className="eyebrow-chip">
            Tasks, focus sessions, and habits in one calm workspace
          </div>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">
            Clear work.
            <span className="block text-brand-600">Steady focus. Real progress</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Momentum helps students and young professionals manage tasks, protect focus time, and keep daily habits consistent in one clean dashboard
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#pricing">
              Start free today
            </Button>

            <Button
              href="#features"
              variant="secondary"
            >
              See features
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="stat-chip">Daily plan in under 2 minutes</span>
            <span className="stat-chip">Built for classes, work, and routines</span>
            <span className="stat-chip">Free plan available</span>
          </div>
        </div>

        <div className="fade-up lg:justify-self-end">
          <div className="panel overflow-hidden border-slate-200/80 p-4 shadow-soft">
            <img
              src={heroVisual}
              alt="Momentum product dashboard showing tasks, timer, habits, and progress cards"
              className="w-full rounded-[1.5rem]"
            />

            <div className="mt-4 grid gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-950">Tasks</p>
                <p>Plan priorities fast</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Focus</p>
                <p>Work in protected blocks</p>
              </div>

              <div>
                <p className="font-semibold text-slate-950">Habits</p>
                <p>Keep streaks visible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
