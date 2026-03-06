
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Header() {
  const logoData = PlaceHolderImages.find(img => img.id === "logo")!;

  return (
    <header className="w-full flex flex-col sticky top-0 z-[100] shadow-md">
      {/* Bloco da Logo - Altura Controlada */}
      <div className="bg-black w-full h-[48px] md:h-[72px] flex items-center">
        <div className="container-custom flex justify-center items-center">
          <div className="relative h-10 w-28 md:h-14 md:w-48 lg:h-16 lg:w-56 transition-transform duration-500 hover:scale-105">
            <Image
              src={logoData.imageUrl}
              alt={logoData.description}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Faixa de Destaque - Altura Controlada */}
      <div className="bg-[#3E2723] w-full h-[24px] md:h-[32px] flex items-center border-t border-white/5">
        <div className="container-custom text-center">
          <p className="text-white text-[8px] md:text-[10px] lg:text-[11px] font-extralight tracking-[0.2em] md:tracking-[0.4em] uppercase font-['Montserrat'] truncate">
            FAÇA UM PEDIDO NO WHATSAPP E TENHA A MELHOR EXPERIÊNCIA!
          </p>
        </div>
      </div>
    </header>
  );
}
