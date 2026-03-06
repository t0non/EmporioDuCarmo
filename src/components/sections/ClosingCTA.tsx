import { WhatsAppButton } from "@/components/ui/whatsapp-button";
 
export function ClosingCTA() {
  return (
    <section 
      id="fechamento"
      className="w-full bg-white py-24 md:py-32 text-center"
    >
      <div className="w-full max-w-[1000px] mx-auto px-6 md:px-12 lg:px-16 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight font-headline">
          Café bom, comida mineira e atendimento de verdade.
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl font-light font-body">
          Passe aqui ou peça pelo WhatsApp.
        </p>
        <div className="pt-2">
          <WhatsAppButton 
            label="Pedir agora" 
            size="lg" 
            className="h-16 md:h-20 px-10 md:px-16 text-base md:text-xl rounded-full shadow-2xl bg-[#25D366] text-white hover:bg-[#128C7E] border-none" 
          />
        </div>
      </div>
    </section>
  );
}
