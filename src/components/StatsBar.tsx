"use client";

import React from "react";
import { Star, ShieldCheck, Award, Building2 } from "lucide-react";

export const StatsBar = () => {
  const stats = [
    {
      icon: Star,
      value: "5.0 ★★★★★",
      label: "277 Avaliações Reais no Google",
      desc: "Reputação máxima auditada por pacientes",
    },
    {
      icon: Award,
      value: "30+ Anos",
      label: "Experiência Médica Especializada",
      desc: "Corpo docente e membros SOBED / SBG",
    },
    {
      icon: ShieldCheck,
      value: "100% Sem Dor",
      label: "Sedação Consciente Humanizada",
      desc: "Acompanhamento anestésico em todos os exames",
    },
    {
      icon: Building2,
      value: "Hospital Life Plus",
      label: "Estrutura de Alto Padrão",
      desc: "Centro cirúrgico e UTI de suporte integrados",
    },
  ];

  return (
    <section className="bg-zinc-50 border-y border-zinc-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-zinc-200/80 hover:border-[#0B2C4D]/40 transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-[#0B2C4D] group-hover:bg-[#0B2C4D] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-xl text-zinc-900 tracking-tight font-sans">
                    {item.value}
                  </div>
                  <div className="font-semibold text-xs text-[#0B2C4D] mt-0.5">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-light mt-1 leading-snug">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
