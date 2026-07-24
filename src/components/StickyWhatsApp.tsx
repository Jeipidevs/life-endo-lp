"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export const StickyWhatsApp = () => {
  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Vim%20pelo%20site%20da%20Life%20Endo%20Clínica%20e%20gostaria%20de%20agendar%20um%20exame.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botão Flutuante Principal do WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-emerald-600/30 group"
        aria-label="Falar no WhatsApp com a Life Endo Clínica"
      >
        <MessageCircle className="w-7 h-7 fill-current" aria-hidden="true" />
        <span className="absolute right-16 bg-zinc-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg border border-zinc-800 pointer-events-none">
          Agendar no WhatsApp
        </span>
      </a>
    </div>
  );
};
