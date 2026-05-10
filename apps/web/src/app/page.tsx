import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveNotifications } from "@/components/LiveNotifications";
import { PulseBento } from "@/components/PulseBento";
import { IntegrationBeam } from "@/components/IntegrationBeam";
import { TeamSection } from "@/components/TeamSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-operon-bg">
      {/* Dynamic Theme Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[50vw] h-[50vw] bg-operon-accent-dark rounded-full blur-[150px] opacity-[0.15]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-operon-accent rounded-full blur-[150px] opacity-[0.1]" />
      </div>

      <Navbar />

      <div className="grow w-full flex flex-col pt-10">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="alerts">
          <LiveNotifications />
        </div>
        <div id="dashboard">
          <PulseBento />
        </div>
        <div id="integrations">
          <IntegrationBeam />
        </div>
        <div id="team">
          <TeamSection />
        </div>
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
