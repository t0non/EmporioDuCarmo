
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Visit() {
  return (
    <section 
      id="contato" 
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-white z-[100] isolate flex flex-col justify-start pt-6 md:justify-center md:pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[115]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:translate-y-0 pt-2 md:pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start w-full">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.1] font-headline">Estamos no Santo Agostinho</h2>
              <p className="text-neutral-600 text-lg md:text-xl font-light font-body">Se você está por perto, passe aqui e experimente um café especial com quitandas mineiras feitas na hora.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="rounded-full font-bold shadow-xl hover:scale-105 transition-all h-16 px-10 text-base">
                <a href="https://www.google.com/maps/search/?api=1&query=Armazém+Du+Carmo+Santo+Agostinho+BH" target="_blank" rel="noopener noreferrer" className="gap-3">
                  Ver rota no Google Maps <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="block md:hidden pt-4">
              <div className="w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-neutral-50 aspect-square">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.844781682498!2d-43.94828132398517!3d-19.930985538356783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6978438466e3f%3A0xe54d6f8303f8e434!2sR.%20Rodrigues%20Caldas%2C%20525!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="transition-all duration-700"
                ></iframe>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start">
                <div className="bg-neutral-100 p-4 rounded-2xl shrink-0"><MapPin className="h-6 w-6 text-black" /></div>
                <div className="text-left">
                  <h4 className="font-bold text-xl text-neutral-900">Localização</h4>
                  <p className="text-neutral-500 font-light text-lg">R. Rodrigues Caldas, 525<br />Santo Agostinho, BH</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center lg:items-start">
                <div className="bg-neutral-100 p-4 rounded-2xl shrink-0"><Clock className="h-6 w-6 text-black" /></div>
                <div className="text-left">
                  <h4 className="font-bold text-xl text-neutral-900">Horários</h4>
                  <p className="text-neutral-500 font-light text-lg">Seg-Sex: 08h às 19h<br />Sábado: 08h às 14h</p>
                </div>
              </div>
            </div>

          </div>

          <div className="hidden md:block w-full relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-neutral-50 aspect-square md:aspect-video lg:aspect-square">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.844781682498!2d-43.94828132398517!3d-19.930985538356783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6978438466e3f%3A0xe54d6f8303f8e434!2sR.%20Rodrigues%20Caldas%2C%20525!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               loading="lazy"
               className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
