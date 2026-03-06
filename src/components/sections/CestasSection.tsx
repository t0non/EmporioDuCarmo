
"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Heart, Sparkles, ChevronDown, ShoppingBag, Volume2, VolumeX } from "lucide-react";

export function CestasDesejo() {
  const videoDesejoUrl = "/imagens/Exclusividade & Luxo.mp4";
  const [videoError, setVideoError] = useState(false);

  return (
    <section 
      id="cestas-desejo" 
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#2A1A14] z-20 isolate flex flex-col justify-start md:justify-center pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[50]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#2A1A14]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:-translate-y-[3vh] lg:-translate-y-[4vh] pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center w-full">
          
          <div className="flex flex-col items-start space-y-4 md:space-y-8 order-1">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C27A3E] block font-['Montserrat']">
                Exclusividade & Luxo
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight font-headline">
                O Presente Perfeito tem Sabor de Minas.
              </h2>
            </div>
            
            <p className="text-neutral-300 text-base md:text-xl leading-[1.6] font-light font-body">
              Surpreenda quem você ama com uma cesta exclusiva, recheada com os melhores queijos, cafés especiais e doces artesanais selecionados por nós.
            </p>

            <div className="pt-1 md:pt-4">
              <WhatsAppButton 
                label="Montar Minha Cesta Exclusiva" 
                variant="default" 
                className="bg-[#C27A3E] text-white hover:bg-[#A66632] border-none h-14 md:h-16 px-8 md:px-10 text-sm md:text-base shadow-2xl" 
              />
            </div>
          </div>

          <div className="relative flex justify-center items-center order-2">
            <div className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] max-h-[50vh] md:max-h-none rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 group">
              {!videoError ? (
                <video 
                  src={videoDesejoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="metadata"
                  poster="/imagens/fachada.png"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover" 
                />
              ) : (
                <Image 
                  src="/imagens/fachada.png"
                  alt="Prévia da cesta"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-[80] pointer-events-none">
        <span className="text-white text-center font-bold text-xs md:text-base uppercase tracking-[0.2em] font-headline drop-shadow-md">
          Veja como preparamos a sua cesta
        </span>
        <ChevronDown className="text-white h-5 w-5 md:h-6 md:w-6 drop-shadow-md" />
      </div>
    </section>
  );
}

export function CestasExperiencia() {
  const videoMarceloUrl = "/imagens/Feito à Mão.mp4";
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch((err) => {
              console.log("Autoplay blocked or failed", err);
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      setShowHint(false);
    }
  };

  const passos = [
    { title: "Escolha no WhatsApp", desc: "Você define o perfil da pessoa e nós sugerimos os itens.", icon: <ShoppingBag className="h-5 w-5" /> },
    { title: "Montagem Artesanal", desc: "Laços e detalhes feitos à mão com muito afeto.", icon: <Heart className="h-5 w-5" /> },
    { title: "Entrega Garantida", desc: "Levamos uma experiência inesquecível até você.", icon: <Sparkles className="h-5 w-5" /> }
  ];

  return (
    <section 
      id="cestas-experiencia" 
      ref={sectionRef}
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#3E241A] z-30 isolate flex flex-col justify-start md:justify-center pt-2 md:pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[50]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#3E241A]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:-translate-y-[3vh] lg:-translate-y-[4vh] pt-2 md:pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
          
          <div className="relative flex justify-center order-2 lg:order-1">
            <div 
              className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] max-h-[50vh] md:max-h-none rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 bg-black group cursor-pointer"
              onClick={toggleMute}
            >
              {!videoError ? (
                <video 
                  ref={videoRef}
                  src={videoMarceloUrl} 
                  muted={isMuted}
                  loop
                  playsInline 
                  preload="none"
                  poster="/imagens/fachada.png"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover" 
                />
              ) : (
                <Image 
                  src="/imagens/fachada.png"
                  alt="Prévia das cestas"
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 right-6 flex items-center gap-3 z-30">
                {isMuted && showHint && (
                  <span className="bg-white/90 text-black text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse uppercase tracking-wider whitespace-nowrap">
                    Ativar Som
                  </span>
                )}
                <button 
                  className={`bg-white/40 backdrop-blur-md p-3 rounded-full text-white border border-white/40 hover:bg-white/60 transition-all ${isMuted && showHint ? 'ring-4 ring-white/20' : ''}`}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C27A3E] block font-['Montserrat']">
                Feito à Mão
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.1] text-white tracking-tight font-headline">
                Cuidado e afeto do seu jeito.
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-6 w-full">
              {passos.map((p, i) => (
                <div key={i} className="flex gap-4 md:gap-5 items-start group">
                  <div className="bg-white/5 p-2 md:p-3 rounded-xl md:rounded-2xl text-[#C27A3E] border border-white/5 group-hover:bg-[#C27A3E] group-hover:text-white transition-all duration-300">
                    {p.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-base md:text-lg">{p.title}</h4>
                    <p className="text-white/40 font-light text-xs md:text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 md:pt-4">
              <WhatsAppButton 
                label="Falar com o Marcelo no WhatsApp" 
                variant="default" 
                className="bg-[#25D366] text-white hover:bg-[#128C7E] border-none h-14 md:h-16 px-8 md:px-10 text-sm md:text-base shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
