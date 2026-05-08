import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "916363702882";
  const message = encodeURIComponent("Hello! I'm interested in Organic Sogadu products.");
  
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Contact on WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
