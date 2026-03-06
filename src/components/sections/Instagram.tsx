
import Image from "next/image";
import { Instagram as InstagramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Instagram() {
  const instagramImage = "/imagens/fachada.png";
  const instagramLink = "https://instagram.com/emporioducarmosantoagostinho";

  return (
    <section 
      id="instagram" 
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#FAFAFA] z-[90] isolate flex flex-col justify-start pt-2 md:justify-center md:pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[105]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#FAFAFA]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:translate-y-0 pt-0 md:pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
          
          <div className="relative order-2 lg:order-1 flex justify-center mt-8 md:mt-0 z-[120]">
            <div className="relative w-full max-w-[280px] md:max-w-[320px]">
              <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] shadow-2xl border-[8px] md:border-[10px] border-[#1a1a1a] overflow-hidden ring-1 ring-white/10">
                <div className="absolute inset-0 w-full h-full overflow-hidden rounded-[2.8rem] md:rounded-[3rem]">
                  <Image
                    src={instagramImage}
                    alt="Instagram Feed"
                    fill
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 320px"
                  />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 border border-white/5 opacity-80"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-30 border border-neutral-100 hidden md:flex">
                <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-3 rounded-xl">
                  <InstagramIcon className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">PROVA SOCIAL</span>
                  <span className="text-sm font-bold text-neutral-900">+ de 10k seguidores</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 block font-['Montserrat']">Redes Sociais</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.1] font-headline">Siga o Aroma no Instagram.</h2>
            </div>
            <p className="text-neutral-500 text-lg md:text-xl font-light leading-[1.6] font-body">Acompanhe nossos bastidores e novidades quentinhas saindo do forno todos os dias.</p>
            <Button 
              asChild 
              size="lg" 
              className="rounded-full bg-[linear-gradient(90deg,#f58529,#dd2a7b,#8134af,#515bd4)] text-white shadow-2xl h-16 px-10 text-base mb-16 md:mb-0 hover:brightness-110 active:brightness-95"
            >
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="gap-3">
                <InstagramIcon className="h-6 w-6" />
                Seguir @emporioducarmo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
