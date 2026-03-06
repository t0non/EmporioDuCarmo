
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Coffee, Beaker, CupSoda, ThermometerSun } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CafeSection() {
  const rotatingLogo = "/imagens/cafe.png";
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cafeImg = PlaceHolderImages.find((img) => img.id === "cafeteria");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / viewportHeight));
      setRotation(scrollProgress * 360);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const highlights = [
    { title: "Café coado especial", description: "Grãos selecionados preparados no V60.", icon: <Coffee className="h-5 w-5" /> },
    { title: "Café prensa francesa", description: "Sabor intenso e encorpado.", icon: <Beaker className="h-5 w-5" /> },
    { title: "Cappuccino italiano", description: "Café espresso com leite vaporizado cremoso.", icon: <ThermometerSun className="h-5 w-5" /> },
    { title: "Frappuccino Du Carmo", description: "A versão gelada perfeita para dias quentes.", icon: <CupSoda className="h-5 w-5" /> }
  ];

  return (
    <section 
      id="cafe" 
      ref={sectionRef}
      className="sticky top-[-10vh] md:top-0 min-h-[120dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#3E2723] z-40 isolate flex flex-col justify-start md:justify-center pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[50]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#3E2723]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]">
        <div 
          style={{ transform: `rotate(${rotation}deg)` }}
          className="relative w-24 h-24 md:w-40 md:h-40 transition-transform duration-75 ease-linear origin-center"
        >
          <Image 
            src={rotatingLogo} 
            alt="Selo" 
            fill 
            sizes="(max-width: 768px) 96px, 160px"
            className="object-contain drop-shadow-2xl" 
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:translate-y-0 pt-0 relative z-[10]">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 items-center w-full">
          <div className="flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-white tracking-tight font-headline">Cafés especiais preparados na hora</h2>
            </div>
            <p className="text-neutral-200 text-lg md:text-xl leading-[1.6] font-light font-body">Do espresso intenso ao cappuccino cremoso. Cada xícara é preparada com grãos selecionados e métodos artesanais.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-white/60 shrink-0">{item.icon}</div>
                  <div className="text-left">
                    <h4 className="text-white text-sm font-semibold leading-tight">{item.title}</h4>
                    <p className="text-white/30 text-[10px] uppercase">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <WhatsAppButton 
                label="Pedir café agora" 
                variant="default" 
                className="bg-[#25D366] text-white hover:bg-[#128C7E] border-none" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
