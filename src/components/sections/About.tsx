import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-store")!;

  return (
    <section className="bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative h-[450px] md:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image
              src={aboutImg.imageUrl}
              alt={aboutImg.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImg.imageHint}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 block">Nossa Essência</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-neutral-900">
                Onde o tempo desacelera e o café abraça.
              </h2>
              <div className="h-1.5 w-24 bg-black rounded-full"></div>
            </div>
            
            <div className="space-y-8 text-neutral-600 text-lg md:text-xl leading-[1.6] font-light">
              <p>
                No coração do bairro Santo Agostinho, o <strong>Armazém e Empório Du Carmo</strong> nasceu para ser mais que uma loja; somos um ponto de encontro com as raízes de Minas.
              </p>
              <p>
                Desde 2016, selecionamos artesanalmente cada grão e iguaria para garantir que sua pausa seja inesquecível. Aqui, cada detalhe foi pensado para fazer você se sentir em casa.
              </p>
              <p className="font-medium text-neutral-900 italic text-xl md:text-2xl border-l-4 border-black pl-8 py-4">
                "Um pedacinho do interior de Minas pulsando com elegância e sabor em Belo Horizonte."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
