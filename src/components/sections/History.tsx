
"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

export function History() {
  const videoUrl = "/imagens/Exclusividade & Luxo.mp4";
  const [isMuted, setIsMuted] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoError, setVideoError] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      setShowHint(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch(() => {});
          } else if (!entry.isIntersecting && videoRef.current) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="historia"
      ref={sectionRef}
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#FFF3E6] z-10 isolate flex flex-col justify-start pt-2 md:justify-center md:pt-0 relative"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center translate-y-[6vh] md:-translate-y-[2vh] lg:-translate-y-[2vh] pt-0 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          
          <div className="relative flex justify-center order-2 lg:order-1">
            <div 
              className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[9/16] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-neutral-50 transition-transform duration-700 hover:scale-105 group cursor-pointer"
              onClick={toggleMute}
            >
              {!videoError ? (
                <video 
                  ref={videoRef}
                  src={videoUrl} 
                  loop 
                  muted={isMuted} 
                  playsInline 
                  preload="none"
                  poster="/imagens/fachada.png"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover" 
                />
              ) : (
                <Image 
                  src="/imagens/fachada.png"
                  alt="Prévia do vídeo"
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
          
          <div className="flex flex-col items-start space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold leading-[1.15] text-neutral-900 tracking-tight font-headline">
                Uma tradição mineira feita com carinho.
              </h2>
              <div className="h-1 w-20 bg-black/10"></div>
            </div>
            
            <div className="space-y-5 md:space-y-6 text-neutral-600 text-lg md:text-xl leading-[1.6] font-light font-body">
              <p>
                O Armazém Du Carmo nasceu em 2016 com um propósito simples: servir produtos mineiros de verdade, com qualidade e sabor que lembram casa.
              </p>
              <p>
                Hoje somos um ponto querido no Santo Agostinho, onde café especial, quitandas e lanches são preparados todos os dias para quem ama comer bem.
              </p>
              
              <div className="pt-3 md:pt-4 border-t border-neutral-100">
                <p className="font-['Montserrat'] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-neutral-900 italic">
                  Prazer, sou Marcelo. Te espero aqui para um café.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
