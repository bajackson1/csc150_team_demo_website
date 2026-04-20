import PricingCard from "../components/PricingCard"
import SectionHeading from "../components/SectionHeading"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "A solid starter plan for students or solo users who want one place for tasks, timers, and habits",
    features: [
      "Unlimited tasks",
      "Basic focus timer",
      "Three active habits",
      "Daily progress view",
    ],
    cta: "Choose free",
  },
  {
    name: "Premium",
    price: "$12",
    description: "More control, deeper history, and smarter planning tools for users who want a stronger routine",
    features: [
      "Everything in Free",
      "Custom focus modes",
      "Unlimited habits and streak history",
      "Weekly analytics and templates",
    ],
    highlighted: true,
    cta: "Start premium trial",
  },
]

function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-space"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Start free, upgrade when your workflow grows"
          description="Two simple plans make it easy to try the product first, then unlock deeper tracking when you need more"
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              cta={plan.cta}
            />
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 text-center text-sm font-medium text-slate-600 shadow-sm">
          Premium includes a 14-day trial and no credit card requirement for this demo concept
        </div>
      </div>
    </section>
  )
}

export default PricingSection
