"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const TechSection = () => {
  return (
    <section id="tecnologia" className="py-24 bg-zinc-50 text-zinc-950 border-y border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Texto & Pilares em Cards Brancos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-300 text-zinc-900 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
              <span>Tecnologia & Segurança Hospitalar</span>
            </div>

            <h2 className="golden-ratio-h2 font-light tracking-tight text-zinc-950 font-sans">
              Tecnologia de ponta a serviço da sua{" "}
              <span className="font-normal text-[#0B2C4D]">tranquilidade e conforto</span>
            </h2>

            <p className="text-zinc-800 text-base font-normal leading-relaxed">
              Exames invasivos como a Endoscopia e a Colonoscopia exigem precisão cirúrgica e segurança extrema. Na Life Endo Clínica, investimos continuamente na inovação que reduz o tempo do procedimento e elimina o desconforto.
            </p>

            {/* Pilares com Ícones 3D Luxo Transparentes (Sem Nenhuma Caixa ou Fundo) */}
            <div className="space-y-4 pt-2">
              
              <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-[#0B2C4D]/40 transition-all flex items-start gap-5 shadow-2xs group">
                <div className="w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/3d-srv-endoscopia.webp"
                    alt="Torres de Endoscopia HD"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain drop-shadow-xs"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950 font-sans">Torres de Endoscopia HD com Cromoscopia</h3>
                  <p className="text-xs text-zinc-800 font-medium mt-1 leading-relaxed">
                    Visualização em altíssima definição com ampliação e iluminação especial que permitem detectar lesões pré-cancerígenas e pólipos microscópicos.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-[#0B2C4D]/40 transition-all flex items-start gap-5 shadow-2xs group">
                <div className="w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/3d-stat-sedation.webp"
                    alt="Sedação Consciente por Anestesiologista"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain drop-shadow-xs"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950 font-sans">Sedação Consciente por Anestesiologista</h3>
                  <p className="text-xs text-zinc-800 font-medium mt-1 leading-relaxed">
                    Você dorme de forma tranquila e acorda sem dor ou enjoo. Monitoramento cardíaco e respiratório ininterrupto em sala cirúrgica.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-[#0B2C4D]/40 transition-all flex items-start gap-5 shadow-2xs group">
                <div className="w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="/3d-stat-hospital.webp"
                    alt="Ambiente do Hospital Life Plus"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain drop-shadow-xs"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950 font-sans">Ambiente do Hospital Life Plus</h3>
                  <p className="text-xs text-zinc-800 font-medium mt-1 leading-relaxed">
                    Diferencial de estar sediada dentro de um complexo hospitalar moderno em Xangri-lá com suporte de UTI de retaguarda.
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Lado Direito: Container Biofarma com Foto REAL WebP do Hospital */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-[2.618rem] bg-white border border-zinc-200/90 p-4 shadow-xl relative overflow-hidden space-y-4">
              
              {/* Foto Real do Hospital WebP com Lazy Loading */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-zinc-100">
                <img
                  src="/hospital-life-plus-real.webp"
                  alt="Instalações Reais da Life Endo no Hospital Life Plus em Xangri-lá"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                    Hospital Life Plus &bull; Xangri-lá / RS
                  </p>
                  <p className="text-xs text-zinc-200 font-medium mt-0.5">
                    Foto Real da Recepção e Fachada no Bairro Santorini
                  </p>
                </div>
              </div>

              <div className="p-4 space-y-3">
                {[
                  "Higienização e desinfecção de alto nível sob rígido controle de infecção hospitalar.",
                  "Laudos rápidos com documentação fotográfica detalhada entregues ao paciente.",
                  "Equipe de enfermagem dedicada ao acolhimento e pós-sedação na recuperação.",
                  "Estrutura 100% adaptada para idosos, gestantes e pacientes PCD (Síndrome de Down T21).",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-zinc-900 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/5551994874760?text=Olá!%20Quero%20agendar%20um%20exame%20com%20sedação%20consciente%20na%20Life%20Endo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="biofarma-btn-dot w-full justify-between"
                  aria-label="Agendar Exame com Sedação Assistida via WhatsApp"
                >
                  <span className="btn-text font-semibold mx-auto">
                    Agendar Exame com Sedação Assistida
                  </span>
                  <span className="btn-dot" aria-hidden="true" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
