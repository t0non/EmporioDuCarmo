
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { History } from "@/components/sections/History";
import { CafeSection } from "@/components/sections/CafeSection";
import { DeliciasSection } from "@/components/sections/DeliciasSection";
import { LanchesSection } from "@/components/sections/LanchesSection";
import { DocesSection } from "@/components/sections/DocesSection";
import { CestasDesejo, CestasExperiencia } from "@/components/sections/CestasSection";
import { Reviews } from "@/components/sections/Reviews";
import { Instagram } from "@/components/sections/Instagram";
import { Visit } from "@/components/sections/Visit";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full relative">
      <Header />
      
      {/* Sequência de Empilhamento Parallax (Irmãos Diretos) */}
      <Hero />
      <History />
      <CestasDesejo />
      <CestasExperiencia />
      <CafeSection />
      <DeliciasSection />
      <LanchesSection />
      <DocesSection />
      <Reviews />
      <Instagram />
      <Visit />
      <ClosingCTA />

      <Footer />
    </main>
  );
}
