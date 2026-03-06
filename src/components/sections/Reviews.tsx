
import { Star } from "lucide-react";
import Image from "next/image";

interface Review {
  name: string;
  text: string;
  color: string;
}

const reviews: Review[] = [
  {
    name: "Dr Thiago Gomes",
    text: "Um lugar com inúmeros produtos deliciosos e diferenciados! Mas, além disso, o maior diferencial de tudo é o atendimento de um de seus donos, Marcelo. Uma pessoa muito divertida...",
    color: "bg-blue-600",
  },
  {
    name: "Thiago Miranda",
    text: "Gostei do ambiente, limpeza, dos produtos, do atendimento e do clima leve e agradável do lugar. Como um bom mineiro e amante de queijos... Pretendo retornar!",
    color: "bg-orange-500",
  },
  {
    name: "Barbara Domingos",
    text: "Ótima experiência no Empório! O ambiente é aconchegante e repleto de opções de biscoitos a granel, produtos lights, queijos e outros diferenciais. O dono foi muito simpático...",
    color: "bg-purple-500",
  },
  {
    name: "Roberto Augusto",
    text: "Excelente café, tanto expresso, quanto coado, boa variedade de produtos, os doces são realmente deliciosos, especialmente o pastel de Belém e os atendentes são muito educados.",
    color: "bg-green-600",
  },
  {
    name: "Soraya Oliveira",
    text: "Eles oferecem muitos itens diferentes dos encontrados nos supermercados em geral. Bem localizado, nos sábados pela manhã há uma feira de orgânicos ótima. O dono é muito engraçado...",
    color: "bg-red-500",
  },
  {
    name: "Stefano Uliana",
    text: "Ótimo lugar para encontrar biscoitos, doces, cervejas artesanais e muitas outras delícias tradicionais. Atendimento excelente.",
    color: "bg-yellow-600",
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <a
    href="https://www.google.com/maps/search/?api=1&query=Armazém+Du+Carmo+Santo+Agostinho+BH"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-[300px] md:w-[350px] bg-white p-8 rounded-2xl border border-neutral-100 transition-all duration-300 group hover:scale-[1.02]"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-4 items-center">
        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg shrink-0`}>
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-neutral-900 leading-tight">{review.name}</h4>
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/imagens/iconegoogle.png"
        alt="Google"
        width={24}
        height={24}
        className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <p className="text-neutral-600 text-sm leading-relaxed font-light italic">
      "{review.text}"
    </p>
  </a>
);

export function Reviews() {
  return (
    <section 
      id="reviews" 
      className="sticky top-[-10vh] md:top-0 min-h-[125dvh] md:h-screen pb-[30vh] md:pb-0 w-full bg-[#F5EFE6] z-[80] isolate flex flex-col justify-start md:justify-center pt-0 relative"
    >
      <div className="absolute top-0 left-0 w-full max-w-[100vw] overflow-hidden leading-[0] rotate-180 -translate-y-[98%] pointer-events-none z-[50]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-[#F5EFE6]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container-custom flex flex-col justify-center translate-y-[6vh] md:translate-y-0 pt-0 md:pt-0 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 block font-['Montserrat'] mb-4">Depoimentos</span>
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-[1.15] text-neutral-900 tracking-tight font-headline">
            Aprovado por quem entende de sabor
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl font-light font-body mt-4">
            O que nossos clientes dizem sobre a experiência Du Carmo.
          </p>
        </div>

        <div className="w-full overflow-hidden relative">
          <div className="flex w-fit gap-6 animate-marquee hover:[animation-play-state:paused]">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`${review.name}-${index}`} review={review} />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Armazém+Du+Carmo+Santo+Agostinho+BH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
          >
            Ver todas as 400+ avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
