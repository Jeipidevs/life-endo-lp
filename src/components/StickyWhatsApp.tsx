"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export const StickyWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Vim%20pelo%20site%20da%20Life%20Endo%20Clínica%20e%20gostaria%20de%20agendar%20um%20exame.";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip de Incentivo à Conversão */}
      {showTooltip && (
        <div className="bg-[#0b2c4d] text-white border border-[#c5a059]/40 p-3 rounded-2xl shadow-2xl max-w-xs text-xs relative animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-slate-800 text-slate-400 hover:text-white rounded-full p-1 border border-slate-700"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-bold text-[#c5a059] flex items-center gap-1">
            👋 Atendimento Online
          </p>
          <p className="text-[11px] text-slate-300 font-light mt-0.5">
            Dúvidas sobre endoscopia ou preparo? Agende seu exame via WhatsApp!
          </p>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-emerald-500/30 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-slate-700">
          Agendar no WhatsApp
        </span>
      </a>
    </div>
  );
};
