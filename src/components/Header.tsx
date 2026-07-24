"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Menu, X, Phone, Calendar } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Vim%20pelo%20site%20da%20Life%20Endo%20Clínica%20e%20gostaria%20de%20agendar%20uma%20consulta/exame.";

  return (
    <>
      {/* Top Banner de Prova Social & Contato */}
      <div className="bg-zinc-100/90 text-zinc-700 py-2.5 px-4 sm:px-8 text-xs border-b border-zinc-200/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center gap-1.5 text-amber-700 font-bold bg-amber-50/90 border border-amber-200/80 px-3 py-0.5 rounded-full shadow-2xs">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" aria-hidden="true" />
              5.0 ★★★★★ no Google (277 Avaliações)
            </span>
            <span className="hidden md:inline text-zinc-400" aria-hidden="true">•</span>
            <span className="hidden md:inline text-zinc-600 font-normal">
              Hospital Life Plus - 2º Andar, Sala 209 (Xangri-lá / RS)
            </span>
          </div>
          <div className="flex items-center gap-5 font-medium text-zinc-700 text-[11.5px]">
            <a href="tel:5120500202" className="hover:text-zinc-950 transition-colors hidden sm:inline" aria-label="Telefone Fixo (51) 2050-0202">
              Fixo: (51) 2050-0202
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B2C4D] font-semibold hover:underline flex items-center gap-1.5"
              aria-label="Atendimento via WhatsApp (51) 99487-4760"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B2C4D]" aria-hidden="true" /> (51) 99487-4760
            </a>
          </div>
        </div>
      </div>

      {/* Header Biofarma Floating Navbar Style */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-zinc-200/80 py-3"
            : "bg-white py-4 border-b border-zinc-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Oficial Transparente WebP com Dimensoes Explicitas */}
          <a href="#clinica" className="flex items-center group py-1" aria-label="Página Inicial Life Endo Clínica">
            <img
              src="/logo-life-endo-transparent.webp"
              alt="Life Endo Clínica - Gastroenterologia e Endoscopia"
              width={200}
              height={52}
              decoding="async"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-700" aria-label="Menu de Navegação Principal">
            <a href="#clinica" className="hover:text-[#0B2C4D] transition-colors py-2">
              A Clínica
            </a>
            <a href="#especialidades" className="hover:text-[#0B2C4D] transition-colors py-2">
              Exames & Serviços
            </a>
            <a href="#tecnologia" className="hover:text-[#0B2C4D] transition-colors py-2">
              Tecnologia & Conforto
            </a>
            <a href="#medicos" className="hover:text-[#0B2C4D] transition-colors py-2">
              Corpo Clínico
            </a>
            <a href="#preparo" className="hover:text-[#0B2C4D] transition-colors py-2">
              Preparo & Reembolso
            </a>
            <a href="#faq" className="hover:text-[#0B2C4D] transition-colors py-2">
              Dúvidas
            </a>
          </nav>

          {/* Botão Biofarma Dot Effect */}
          <div className="hidden sm:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="biofarma-btn-dot"
              aria-label="Agendar Consulta ou Exame via WhatsApp"
            >
              <span className="btn-text">Agendar Consulta / Exame</span>
              <span className="btn-dot" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-800 hover:text-zinc-950 p-2.5 rounded-2xl bg-zinc-100 border border-zinc-200"
            aria-label={mobileMenuOpen ? "Fechar Menu de Navegação" : "Abrir Menu de Navegação"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-b border-zinc-200 px-6 pt-4 pb-6 mt-3 space-y-4 shadow-xl"
          >
            <nav className="flex flex-col space-y-3 font-medium text-zinc-700 text-sm" aria-label="Menu Mobile">
              <a
                href="#clinica"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0B2C4D] py-2 border-b border-zinc-100"
              >
                A Clínica
              </a>
              <a
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0B2C4D] py-2 border-b border-zinc-100"
              >
                Exames & Serviços
              </a>
              <a
                href="#tecnologia"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0B2C4D] py-2 border-b border-zinc-100"
              >
                Tecnologia & Conforto
              </a>
              <a
                href="#medicos"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0B2C4D] py-2 border-b border-zinc-100"
              >
                Corpo Clínico
              </a>
              <a
                href="#preparo"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0B2C4D] py-2 border-b border-zinc-100"
              >
                Preparo & Reembolso
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#0B2C4D] py-2"
              >
                Dúvidas Frequentes
              </a>
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0B2C4D] text-white font-semibold text-xs uppercase tracking-wider text-center shadow-md"
              aria-label="Agendar no WhatsApp"
            >
              <Calendar className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
              <span>Agendar no WhatsApp</span>
            </a>
          </motion.div>
        )}
      </header>
    </>
  );
};
