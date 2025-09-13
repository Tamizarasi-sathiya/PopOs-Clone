import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import { AboutSystem76Section } from '@/components/sections/about-system76';
import { EvolvingSection } from '@/components/sections/evolving';
import { MeetPopOsSection } from '@/components/sections/meet-pop-os';
import { WhyPopOsSection } from '@/components/sections/why-pop-os';
import { CompatibilitySection } from '@/components/sections/compatibility';
import { SecuritySection } from '@/components/sections/security';
import { CustomizationSection } from '@/components/sections/customization';
import { OtherFeaturesSection } from '@/components/sections/other-features';
import { HardwareSection } from '@/components/sections/hardware';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { UnleashPotentialSection } from '@/components/sections/unleash-potential';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <EvolvingSection />
        <MeetPopOsSection />
        <WhyPopOsSection />
        <CompatibilitySection />
        <SecuritySection />
        <CustomizationSection />
        <OtherFeaturesSection />
        <HardwareSection />
        <TestimonialsSection />
        <AboutSystem76Section />
        <UnleashPotentialSection />
      </main>
      <Footer />
    </div>
  );
}
