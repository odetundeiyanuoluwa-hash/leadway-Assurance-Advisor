import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  message?: string;
}

export function WhatsAppButton({ message = "Hello Leadway Assurance, I am interested in learning more about your insurance products. Please contact me." }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/2347030770719?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-4 z-40 md:bottom-8 md:left-8 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></div>
      <FaWhatsapp className="w-8 h-8 relative z-10" />
    </a>
  );
}
