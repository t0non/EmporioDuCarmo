
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Instagram, MapPin, Clock } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  const logoImg = PlaceHolderImages.find(img => img.id === "logo")!;

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-neutral-950 text-white pt-32 pb-12">
      <div className="container-custom px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20 border-b border-neutral-800 pb-20">
          <div className="space-y-10">
            <div className="relative h-16 w-56">
              <Image
                src={logoImg.imageUrl}
                alt={logoImg.description}
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-neutral-400 text-xl font-light leading-[1.6]">
              Tradição, afeto e o verdadeiro sabor de Minas no coração do Santo Agostinho desde 2016.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/emporioducarmosantoagostinho" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 p-4 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">Navegação</h4>
            <ul className="space-y-6 font-light text-neutral-400 text-xl">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#historia" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#delicias" className="hover:text-white transition-colors">Nossa Vitrine</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Localização</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">Onde Estamos</h4>
            <ul className="space-y-8 text-neutral-400 font-light text-xl">
              <li className="flex gap-5 items-start">
                <MapPin className="h-6 w-6 shrink-0 text-neutral-500 mt-1" />
                <span>R. Rodrigues Caldas, 525<br />Santo Agostinho, BH</span>
              </li>
              <li className="flex gap-5 items-start">
                <Clock className="h-6 w-6 shrink-0 text-neutral-500 mt-1" />
                <span>Seg-Sex: 08h às 19h<br />Sáb: 08h às 14h</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">Conversão</h4>
            <p className="text-neutral-400 font-light text-xl leading-[1.6]">
              Encomende cestas personalizadas e viva a experiência completa.
            </p>
            <WhatsAppButton label="Chamar no WhatsApp" variant="outline" className="w-full border-neutral-700 text-white hover:bg-white hover:text-black h-14" />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-neutral-600 font-light text-center md:text-left">
          <p>© {year || "..."} Armazém e Empório Du Carmo. Tradição mineira elevada.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-neutral-300">Privacidade</a>
            <a href="#" className="hover:text-neutral-300">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
