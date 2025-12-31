"use client";

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber = "2348140989555",
  message = "Hello! I'd like to know more about your services.",
  className = ""
}: WhatsAppButtonProps) {
  // Format: https://wa.me/PHONENUMBER?text=MESSAGE
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50
        bg-[#25D366] hover:bg-[#20BA5A]
        text-white
        rounded-full
        p-4
        shadow-lg hover:shadow-xl
        transition-all duration-300
        hover:scale-110
        animate-pulse hover:animate-none
        ${className}
      `}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </Link>
  );
}