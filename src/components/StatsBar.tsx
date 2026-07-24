"use client";

import React from "react";

export const StatsBar = () => {
  const stats = [
    {
      icon3d: "/3d-stat-google.webp",
      value: "5.0 ★★★★★",
      label: "277 Avaliações Reais no Google",
      desc: "Reputação máxima auditada por pacientes",
    },
    {
      icon3d: "/3d-stat-experience.webp",
      value: "30+ Anos",
      label: "Experiência Médica Especializada",
      desc: "Corpo docente e membros SOBED / SBG",
    },
    {
      icon3d: "/3d-stat-sedation.webp",
      value: "100% Sem Dor",
      label: "Sedação Consciente Humanizada",
      desc: "Acompanhamento anestésico em todos os exames",
    },
    {
      icon3d: "/3d-stat-hospital.webp",
      value: "Hospital Life Plus",
      label: "Estrutura de Alto Padrão",
      desc: "Centro cirúrgico e UTI de suporte integrados",
    },
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-[#0B2C4D]/40 transition-all hover:shadow-md group"
            >
              {/* Ícone 3D Luxo Transparente Sem Caixa */}
              <div className="w-14 h-14 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={item.icon3d}
                  alt={item.label}
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain drop-shadow-xs"
                />
              </div>

              <div>
                <div className="font-extrabold text-xl text-zinc-950 tracking-tight font-sans">
                  {item.value}
                </div>
                <div className="font-bold text-xs text-[#0B2C4D] mt-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-800 font-medium mt-1 leading-snug">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
