import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  label: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
}

export function WhatsAppButton({ label, className, variant = "default", size = "lg" }: WhatsAppButtonProps) {
  // Link oficial do WhatsApp do Empório
  const whatsappLink = "https://wa.me/5531994320525";

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        "gap-2 font-semibold shadow-md transition-all hover:scale-105 flex items-center justify-center",
        variant === "default" && "bg-black text-white hover:bg-neutral-800",
        className
      )}
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
        <img
          src="/imagens/iconedowhatsapp.png"
          alt="WhatsApp"
          className="w-5 h-5 md:w-6 md:h-6 object-contain brightness-0 invert"
          decoding="async"
          loading="eager"
        />
        {label}
      </a>
    </Button>
  );
}
