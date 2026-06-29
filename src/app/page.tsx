import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { Marketplace } from "@/components/Marketplace";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { AltitudeProgress } from "@/components/AltitudeProgress";

export default function Home() {
  return (
    <>
      {/* Fixed altitude progress indicator — right edge, desktop only */}
      <AltitudeProgress />

      <main className="pt-[calc(var(--announcement-height,32px)+64px)]">
        <Hero />
        <Services />
        <WhoWeServe />
        <Stats />
        <Process />
        <Marketplace />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}
