import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { CreativeShowcase } from "@/components/CreativeShowcase";
import { Marketplace } from "@/components/Marketplace";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { AltitudeProgress } from "@/components/AltitudeProgress";

export default function Home() {
  return (
    <>
      <AltitudeProgress />
      {/*
       * pt-24 = 6rem = 96px = 32px announcement bar + 64px navbar.
       * Using a fixed value instead of a CSS-var calc to guarantee
       * the padding always computes correctly regardless of inheritance scope.
       */}
      <main className="pt-24">
        <Hero />
        <Services />
        <WhoWeServe />
        <Stats />
        <Process />
        <CreativeShowcase />
        <Marketplace />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
    </>
  );
}
