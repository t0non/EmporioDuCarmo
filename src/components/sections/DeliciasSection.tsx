
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Utensils, Heart, ChefHat, Timer } from "lucide-react";

export function DeliciasSection() {
  const paoDeQueijoImg = "/imagens/paodequeijo.png";
  const [rotation, setRotation] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  const menu = [
    { name: "Pão de queijo recheado", desc: "Com goiabada ou doce de leite.", icon: <Heart className="h-5 w-5" /> },
    { name: "Coxinha cremosa", desc: "Crocante por fora, cremosa por dentro.", icon: <Timer className="h-5 w-5" /> },
    { name: "Empada especial da casa", desc: "Sabores exclusivos preparados diariamente.", icon: <Utensils className="h-5 w-5" /> },
    { name: "Esfiha artesanal", desc: "Massa macia com recheios selecionados.", icon: <ChefHat className="h-5 w-5" /> }
  ];

  return (
    <section 
      id="delicias" 
      ref={sectionRef} 
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#C27A3E] z-50 isolate flex flex-col justify-start md:justify-center pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[50]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#C27A3E]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]">
        <div 
          style={{ transform: `rotate(${rotation}deg)` }} 
          className="relative w-32 h-32 md:w-56 md:h-56 transition-transform duration-75 ease-linear origin-center"
        >
          <Image 
            src={paoDeQueijoImg} 
            alt="Pão de Queijo" 
            fill 
            sizes="(max-width: 768px) 128px, 224px"
            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
          />
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:translate-y-0 pt-0 relative z-[10]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          <div className="flex flex-col items-start space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-white tracking-tight font-headline">Saindo do forno todos os dias</h2>
            </div>
            <p className="text-white/90 text-lg md:text-xl leading-[1.6] font-light font-body">Pão de queijo quentinho, coxinhas crocantes e receitas mineiras feitas com ingredientes selecionados.</p>
            <WhatsAppButton label="Quero pedir agora" variant="default" className="bg-[#25D366] text-white hover:bg-[#128C7E] border-none" />
          </div>

          <div className="bg-black/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-widest opacity-80 font-headline">Favoritos do Forno</h3>
            <ul className="space-y-6">
              {menu.map((item, index) => (
                <li key={index} className="flex gap-4 group">
                  <div className="bg-white/10 p-3 rounded-xl text-white/60 group-hover:bg-white group-hover:text-[#C27A3E] transition-all">{item.icon}</div>
                  <div className="text-left">
                    <h4 className="text-white text-base md:text-lg font-semibold leading-none">{item.name}</h4>
                    <p className="text-white/50 font-light text-xs md:text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
