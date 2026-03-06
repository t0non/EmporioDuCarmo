
"use client";

import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import fachada from "@/../public/imagens/fachada.png";

export function Hero() {
  const heroImg = fachada;

  return (
    <section className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-white z-0 isolate flex flex-col justify-start md:justify-center pt-0 relative">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[1vh] md:-translate-y-[18vh] lg:-translate-y-[22vh] pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start w-full">
          
          <div className="flex flex-col items-start space-y-4 md:space-y-6">
            <div className="space-y-1.5 md:space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-gray-900 tracking-tight font-headline">
                O café mais especial do Santo Agostinho.
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-[1.6] font-body">
              Cafés especiais, pão de queijo quentinho e receitas mineiras feitas na hora. Passe aqui ou peça pelo WhatsApp e receba tudo fresquinho.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-1 md:pt-2">
              <WhatsAppButton 
                label="Pedir no WhatsApp agora" 
                size="lg" 
                className="h-14 px-10 text-base rounded-full shadow-2xl bg-[#25D366] text-white hover:bg-[#128C7E] border-none" 
              />
            </div>

            <div className="pt-1">
              <span className="text-sm md:text-base text-neutral-500 inline-flex items-center gap-2">
                <Image
                  src="/imagens/iconegoogle.png"
                  alt="Google"
                  width={18}
                  height={18}
                  className="w-4 h-4 md:w-5 md:h-5 object-contain opacity-80"
                />
                Mais de 2.000 clientes atendidos em Belo Horizonte
              </span>
            </div>
          </div>

          <div className="w-full max-w-[560px] mx-auto">
            <div className="relative rounded-[2rem] overflow-hidden border-[10px] border-white bg-white aspect-[545/413]">
              <Image
                src={heroImg}
                alt="Destaque Empório Du Carmo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 560px, 560px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
