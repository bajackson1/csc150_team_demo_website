import SectionHeading from "../components/SectionHeading"
import TestimonialCard from "../components/TestimonialCard"

const testimonials = [
  {
    quote: "Momentum helped me stop bouncing between sticky notes, timers, and random phone reminders just to get through classes",
    name: "Sofia Ramirez",
    role: "Marketing student",
    company: "University project team",
  },
  {
    quote: "The focus timer gave me a cleaner way to start deep work, and the habit tracker made routines feel easier to keep",
    name: "Ethan Cole",
    role: "Junior developer",
    company: "Campus startup club",
  },
  {
    quote: "It feels modern, calm, and easy to scan, which is exactly what I want from a productivity app after a long day",
    name: "Nia Patel",
    role: "Graduate assistant",
    company: "Student support office",
  },
]

function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Mock social proof for a demo that still feels believable"
          description="Short testimonials help the landing page feel more complete while making clear value points for the project demo"
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
