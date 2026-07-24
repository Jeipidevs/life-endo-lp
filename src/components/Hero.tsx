"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Check, ArrowUpRight, Building2 } from "lucide-react";

export const Hero = () => {
  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Gostaria%20de%20agendar%20um%20exame/consulta%20na%20Life%20Endo%20Clínica.";

  return (
    <section id="clinica" className="bg-white text-zinc-900 pt-12 pb-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Coluna Esquerda: Texto Biofarma Style (Golden Ratio Typography) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Pill Tag Institucional */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100/90 border border-zinc-200 text-zinc-800 text-xs font-semibold">
              <Building2 className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
              <span>Complexo Hospitalar Life Plus &bull; Xangri-lá / RS</span>
            </div>

            {/* H1 biofarma-style: Thin font weight, Golden Ratio scaling */}
            <h1 className="golden-ratio-h1 font-light tracking-tight text-slate-900 font-sans">
              Diagnóstico preciso e tratamento avançado em{" "}
              <span className="font-normal text-[#0B2C4D] underline decoration-[#C5A059]/40 underline-offset-8">
                Gastroenterologia & Endoscopia
              </span>
            </h1>

            {/* Subtítulo / Lead Paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 font-light leading-relaxed max-w-2xl">
              Realize sua <strong className="font-medium text-zinc-900">Endoscopia ou Colonoscopia</strong> com tecnologia de ponta, <strong className="font-medium text-zinc-900">sedação consciente 100% sem dor</strong> e o acolhimento de uma equipe especialista com mais de 30 anos de atuação.
            </p>

            {/* Micro badges clean */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 py-1">
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-1.5 rounded-full">
                <Check className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
                <span className="font-medium">Exames 100% Humanizados</span>
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 px-4 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
                <span className="font-medium">Segurança Hospitalar Integrada</span>
              </div>
            </div>

            {/* Botões CTA Estilo Biofarma (Dot Effect) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="biofarma-btn-dot"
                aria-label="Falar com Atendimento e Agendar Exame no WhatsApp"
              >
                <span className="btn-text">Falar com Atendimento / Agendar Exame</span>
                <span className="btn-dot" aria-hidden="true" />
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200/80 transition-colors"
                aria-label="Conhecer Especialidades e Exames"
              >
                <span>Conhecer Especialidades</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Prova Social Google Badge */}
            <div className="pt-6 border-t border-zinc-200/80 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-[#0B2C4D] text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm">
                  IZ
                </div>
                <div className="w-9 h-9 rounded-full bg-[#C5A059] text-zinc-950 font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm">
                  JS
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow-sm">
                  ★
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                  <span className="font-bold text-zinc-900 text-sm ml-1">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-zinc-500 font-light">
                  <strong className="font-semibold text-zinc-800">277 avaliações reais</strong> de pacientes no Google Meu Negócio
                </p>
              </div>
            </div>

          </motion.div>

          {/* Coluna Direita: Imagem LCP Otimizada em WebP com Dimensions e Priority */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Rounded Frame Biofarma Style: rounded-[2.618rem] */}
              <div className="rounded-[2.618rem] bg-zinc-50 border border-zinc-200/90 p-3.5 shadow-xl relative overflow-hidden group">
                
                {/* Imagem LCP Otimizada WebP */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-zinc-200">
                  <img
                    src="/hero-clinic.webp"
                    alt="Centro de Diagnóstico e Endoscopia Avançada na Life Endo Clínica"
                    width={600}
                    height={450}
                    // @ts-ignore
                    fetchpriority="high"
                    decoding="sync"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Badge Interno sobre a Imagem */}
                  <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                      Centro Diagnóstico Integrado
                    </p>
                    <p className="text-xs text-zinc-200 font-light mt-0.5">
                      Equipamentos HD de Magnificação & Anestesia Assistida
                    </p>
                  </div>
                </div>

                {/* Cards Médicos Fundadores */}
                <div className="mt-3.5 space-y-2">
                  <div className="bg-white p-3.5 rounded-2xl border border-zinc-200/80 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0B2C4D] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        IZ
                      </div>
                      <div>
                        <h2 className="font-bold text-xs text-zinc-900">Dr. Idílio Zamin Júnior</h2>
                        <p className="text-[11px] text-zinc-500 font-light">CRM 19.623 &bull; Mestre e Doutor UFRGS</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      SOBED & SBG
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-zinc-200/80 flex items-center justify-between shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#C5A059] text-zinc-950 flex items-center justify-center font-bold text-xs shrink-0">
                        JS
                      </div>
                      <div>
                        <h2 className="font-bold text-xs text-zinc-900">Dr. José Antônio Saad</h2>
                        <p className="text-[11px] text-zinc-500 font-light">CRM 16.043 &bull; 36 Anos de Medicina</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-0.5 rounded-full">
                      SOBED
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
