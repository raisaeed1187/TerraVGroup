import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "1234567890";
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp"
    >
      {/* Pulse Ring Animation */}
      <div className="absolute inset-0 bg-secondary rounded-full animate-pulse-ring opacity-40" />
      
      {/* Main Button */}
      <div className="relative w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-7 h-7 text-secondary-foreground" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card px-3 py-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-border">
        <span className="text-sm font-medium text-foreground">Chat with us</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-card border-r border-t border-border" />
      </div>
    </a>
  );
}
