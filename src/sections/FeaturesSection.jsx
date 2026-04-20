import FeatureCard from "../components/FeatureCard"
import SectionHeading from "../components/SectionHeading"
import taskIcon from "../assets/feature-task.svg"
import timerIcon from "../assets/feature-timer.svg"
import habitIcon from "../assets/feature-habit.svg"
import insightIcon from "../assets/feature-insight.svg"

const features = [
  {
    icon: taskIcon,
    title: "Task Management",
    description: "Capture assignments, meetings, and personal to-dos fast, then sort them into a clean view that keeps top priorities obvious",
    meta: "Quick add, priorities, and simple lists",
  },
  {
    icon: timerIcon,
    title: "Focus Timer",
    description: "Run focus sessions that make deep work easier to start and easier to finish without constant switching between tabs and tasks",
    meta: "Pomodoro-style sessions with less drift",
  },
  {
    icon: habitIcon,
    title: "Habit Tracking",
    description: "Track daily routines like reading, workouts, or study blocks with flexible streaks that reward consistency instead of perfection",
    meta: "Daily check-ins and visible streaks",
  },
  {
    icon: insightIcon,
    title: "Daily Insight",
    description: "See progress across tasks, focus blocks, and habits in one simple snapshot so it is easier to notice what is working",
    meta: "One dashboard for whole-day progress",
  },
]

function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-space"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run a focused day"
          description="Momentum combines planning, execution, and daily consistency in one workflow that stays easy to scan on desktop and mobile"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              meta={feature.meta}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
