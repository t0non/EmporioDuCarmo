"use client";

import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "cafeteria",
    title: "Cafeteria Especial",
    description: "Grãos selecionados e métodos precisos como Hario V-60 e Prensa Francesa para os verdadeiros amantes do café.",
    imageKey: "cafeteria"
  },
  {
    id: "quentinhas",
    title: "Delícias Quentinhas",
    description: "O legítimo Pão de Queijo 'Xodó de Minas', tradicional ou recheado na chapa, saindo quentinho a todo momento.",
    imageKey: "delicias"
  },
  {
    id: "doces",
    title: "Doces e Sobremesas",
    description: "Do Bolo Búlgaro que derrete na boca às tortas artesanais. Um convite irrecusável ao prazer.",
    imageKey: "doces"
  },
  {
    id: "cestas",
    title: "Cestas e Presentes",
    description: "Curadoria exclusiva de produtos mineiros em cestas personalizadas para presentear quem você ama.",
    imageKey: "cestas"
  }
];

export function Showcase() {
  return (
    <section className="bg-neutral-50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15]">Uma Vitrine de Puro Desejo</h2>
          <p className="text-neutral-500 text-xl md:text-2xl font-light leading-[1.6]">
            Selecionamos o melhor de Minas para despertar seus sentidos. Cada item é uma celebração ao paladar artesanal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {categories.map((cat) => {
            const img = PlaceHolderImages.find(i => i.id === cat.imageKey)!;
            return (
              <div key={cat.id} className="group space-y-8">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-[2.5rem] shadow-xl transition-all duration-700 hover:shadow-2xl">
                  <Image
                    src={img.imageUrl}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <div className="space-y-4 px-4">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{cat.title}</h3>
                  <p className="text-neutral-600 text-lg md:text-xl leading-[1.6] font-light">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 text-center">
          <WhatsAppButton 
            label="Deseja encomendar? Fale com nossa equipe" 
            size="lg"
            className="w-full sm:w-auto px-16 py-8 h-20 text-xl rounded-full" 
          />
        </div>
      </div>
    </section>
  );
}
