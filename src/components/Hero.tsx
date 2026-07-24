"use client";

import React from "react";
import { Star, ArrowUpRight, Building2 } from "lucide-react";

export const Hero = () => {
  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Gostaria%20de%20agendar%20um%20exame%20na%20Life%20Endo%20Clínica.";

  return (
    <section id="clinica" className="bg-white text-zinc-950 pt-8 sm:pt-10 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Coluna Esquerda: Texto Biofarma Style com Quebra de Linha Equilibrada em Mobile */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Tag Institucional */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs font-bold max-w-full">
              <Building2 className="w-4 h-4 text-[#0B2C4D] shrink-0" aria-hidden="true" />
              <span className="truncate">Complexo Hospitalar Life Plus &bull; Xangri-lá / RS</span>
            </div>

            {/* H1 Harmonioso com Quebra de Linha Equilibrada (text-balance) */}
            <div className="max-w-2xl">
              <h1 className="golden-ratio-h1 font-light tracking-tight text-zinc-950 font-sans leading-tight text-balance">
                Diagnóstico preciso e exames de alta tecnologia em{" "}
                <span className="font-semibold text-[#0B2C4D]">
                  Endoscopia & Colonoscopia
                </span>
              </h1>
              {/* Barra Dourada Biofarma de Destaque Símbolo da Marca */}
              <div className="w-20 sm:w-24 h-1 bg-[#C5A059] rounded-full mt-4" aria-hidden="true" />
            </div>

            {/* Subtítulo / Lead Paragraph */}
            <p className="text-base sm:text-lg text-zinc-800 font-normal leading-relaxed max-w-2xl">
              Realize sua <strong className="font-bold text-zinc-950">Endoscopia ou Colonoscopia</strong> com tecnologia de ponta, <strong className="font-bold text-zinc-950">sedação consciente 100% sem dor</strong> e o acolhimento de uma <strong className="font-bold text-zinc-950">equipe médica com mais de 30 anos de experiência</strong>, sediada no Hospital Life Plus.
            </p>

            {/* Botões CTA Estilo Biofarma (Dot Effect) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="biofarma-btn-dot"
                aria-label="Falar com Atendimento e Agendar Exame no WhatsApp"
              >
                <span className="btn-text">Agendar Exame no WhatsApp</span>
                <span className="btn-dot" aria-hidden="true" />
              </a>

              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 transition-colors"
                aria-label="Conhecer Exames Realizados"
              >
                <span>Conhecer Exames</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Prova Social Google Badge com Ícone 3D Luxo Transparente Sem Fundo */}
            <div className="pt-6 border-t border-zinc-200 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                <img src="/3d-stat-google.webp" alt="Selo 5.0 Google" width={48} height={48} className="w-full h-full object-contain drop-shadow-xs" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-600 text-amber-600" aria-hidden="true" />
                  ))}
                  <span className="font-bold text-zinc-950 text-sm ml-1">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-zinc-800 font-medium">
                  <strong className="font-bold text-zinc-950">277 avaliações reais</strong> de pacientes no Google Meu Negócio
                </p>
              </div>
            </div>

          </div>

          {/* Coluna Direita: Imagem Real da Clínica Otimizada para LCP Super Rápido */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Frame Biofarma Style: rounded-[2.618rem] */}
              <div className="rounded-[2.618rem] bg-zinc-50 border border-zinc-200 p-3.5 shadow-xl relative overflow-hidden group">
                
                {/* Responsive <picture> com object-top para exibir a logo do painel da clínica */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[4/4] bg-zinc-100">
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/hero-clinic-mobile.webp" type="image/webp" />
                    <img
                      src="/hero-clinic.webp"
                      alt="Recepção e Painel da Life Endo Clínica no Hospital Life Plus"
                      width={560}
                      height={700}
                      // @ts-ignore
                      fetchpriority="high"
                      decoding="sync"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </picture>
                </div>

                {/* Cards Médicos Fundadores */}
                <div className="mt-3.5 space-y-2">
                  
                  <div className="bg-white p-3 rounded-2xl border border-zinc-200 flex items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-zinc-200 shrink-0 bg-zinc-100">
                        <img
                          src="/dr-idilio-zamin.webp"
                          alt="Dr. Idílio Zamin Júnior"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-[11.5px] text-zinc-950 truncate">Dr. Idílio Zamin Júnior</h2>
                        <p className="text-[10.5px] text-zinc-800 font-medium truncate">CRM 19.623 &bull; Mestre e Doutor UFRGS</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-extrabold uppercase bg-amber-100 text-amber-950 border border-amber-300 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      SOBED & SBG
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-zinc-200 flex items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-zinc-200 shrink-0 bg-zinc-100">
                        <img
                          src="/dr-jose-antonio.webp"
                          alt="Dr. José Antônio Saad"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-[11.5px] text-zinc-950 truncate">Dr. José Antônio Saad</h2>
                        <p className="text-[10.5px] text-zinc-800 font-medium truncate">CRM 16.043 &bull; 36 Anos de Medicina</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-extrabold uppercase bg-blue-100 text-blue-950 border border-blue-300 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                      SOBED
                    </span>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
