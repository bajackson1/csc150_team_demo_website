import Navbar from "./sections/Navbar"
import HeroSection from "./sections/HeroSection"
import FeaturesSection from "./sections/FeaturesSection"
import HowItWorksSection from "./sections/HowItWorksSection"
import TestimonialsSection from "./sections/TestimonialsSection"
import PricingSection from "./sections/PricingSection"
import AiProcessSection from "./sections/AiProcessSection"
import FinalCtaSection from "./sections/FinalCtaSection"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_58%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-grid bg-[size:38px_38px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0))]" />

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <AiProcessSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
