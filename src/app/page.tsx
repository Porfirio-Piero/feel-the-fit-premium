import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { Services } from '@/components/sections/Services'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FounderStory } from '@/components/sections/FounderStory'
import { Testimonials } from '@/components/sections/Testimonials'
import { Process } from '@/components/sections/Process'
import { Pricing } from '@/components/sections/Pricing'
import { Location } from '@/components/sections/Location'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <Navigation />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <FounderStory />
      <Testimonials />
      <Process />
      <Pricing />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  )
}