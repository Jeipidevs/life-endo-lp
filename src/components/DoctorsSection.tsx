"use client";

import React from "react";
import { UserCheck, CheckCircle2, ArrowUpRight } from "lucide-react";

export const DoctorsSection = () => {
  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20o%20corpo%20clínico%20da%20Life%20Endo.";

  const doctors = [
    {
      initials: "IZ",
      name: "Dr. Idílio Zamin Júnior",
      crm: "CRM 19.623",
      rqe: "Titular SBG & SOBED",
      badgeColor: "bg-[#0B2C4D] text-white",
      title: "Gastroenterologista & Endoscopista",
      experience: "Mestre e Doutor em Medicina | 30+ Anos de Atuação",
      bio: "Médico Titular da Sociedade Brasileira de Gastroenterologia (SBG) e da Sociedade Brasileira de Endoscopia Digestiva (SOBED). Referência técnica regional em diagnóstico e tratamento de doenças digestivas complexas.",
      bullets: [
        "Mestrado e Doutorado em Medicina pela UFRGS",
        "Titular das Sociedades SOBED & SBG",
        "Especialista em Endoscopia Diagnóstica e Terapêutica",
      ],
    },
    {
      initials: "JS",
      name: "Dr. José Antônio Saad",
      crm: "CRM 16.043",
      rqe: "Especialista SOBED",
      badgeColor: "bg-[#C5A059] text-zinc-950",
      title: "Endoscopista & Gastroenterologista",
      experience: "36 Anos de Medicina | 23 Anos em Endoscopia",
      bio: "Especialista em Endoscopia Digestiva pela SOBED com vasta carreira dedicada ao tratamento gastrointestinal. Reconhecido pela precisão técnica e acolhimento humano em exames com sedação consciente.",
      bullets: [
        "Especialista em Endoscopia Digestiva (SOBED)",
        "36 anos dedicados à prática médica",
        "Vasta experiência em exames e biópsias digestivas",
      ],
    },
    {
      initials: "DG",
      name: "Dr. Guilherme",
      crm: "CRM Ativo RS",
      rqe: "Gastroenterologia Clínica",
      badgeColor: "bg-emerald-700 text-white",
      title: "Gastroenterologista Clínico",
      experience: "Acompanhamento Clínico Integrativo",
      bio: "Focado na investigação detalhada e no acompanhamento continuado de dores abdominais, gastrites crônicas, esofagite de refluxo e síndrome do intestino irritável.",
      bullets: [
        "Acompanhamento continuado de sintomas digestivos",
        "Abordagem integrativa e preventiva de saúde",
        "Orientações terapêuticas personalizadas",
      ],
    },
    {
      initials: "DV",
      name: "Dr. Vicente",
      crm: "CRM Ativo RS",
      rqe: "Equipe de Exames & Procedimentos",
      badgeColor: "bg-purple-800 text-white",
      title: "Médico Endoscopista",
      experience: "Procedimentos Diagnósticos Avançados",
      bio: "Integrante atuante da equipe cirúrgica e de diagnóstico por imagem da Life Endo Clínica no Hospital Life Plus. Amplamente elogiado pela atenção no atendimento ao paciente.",
      bullets: [
        "Atuação em exames de Endoscopia e Colonoscopia",
        "Protocolo rigoroso de sedação humanizada",
        "Fotodocumentação e laudos explicativos",
      ],
    },
  ];

  return (
    <section id="medicos" className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção Biofarma Style */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-medium">
            <UserCheck className="w-4 h-4 text-[#0B2C4D]" />
            <span>Corpo Clínico & Autoridade Médica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-zinc-900 font-sans leading-[1.15]">
            Especialistas Renomados com Décadas de{" "}
            <span className="font-normal text-[#0B2C4D]">Tradição em Medicina</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
            Sua saúde digestiva sob os cuidados de médicos mestres, doutores e especialistas reconhecidos pelas principais sociedades médicas do Brasil.
          </p>
        </div>

        {/* Cards dos Médicos Biofarma Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200 rounded-[2rem] p-8 hover:border-[#0B2C4D]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl group"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl ${doc.badgeColor} flex items-center justify-center font-bold text-xl shadow-xs shrink-0 border border-zinc-200`}>
                      {doc.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-zinc-900 group-hover:text-[#0B2C4D] transition-colors font-sans">
                        {doc.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#0B2C4D] font-medium mt-0.5">
                        <span>{doc.crm}</span>
                        <span>&bull;</span>
                        <span>{doc.rqe}</span>
                      </div>
                      <p className="text-xs text-zinc-500 font-light mt-0.5">
                        {doc.experience}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  {doc.bio}
                </p>

                <div className="space-y-2 border-t border-zinc-100 pt-4 mb-6">
                  {doc.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-zinc-700 font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#0B2C4D] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-between px-6 py-3.5 rounded-full border border-zinc-300 text-zinc-800 font-medium text-xs uppercase tracking-wider overflow-hidden group/btn transition-all duration-300 hover:border-[#0B2C4D]"
              >
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">
                  Agendar Consulta com Especialista
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B2C4D] group-hover/btn:scale-[18] transition-transform duration-500 ease-out shrink-0 relative z-0" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
