"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, MapPin, CreditCard, Info, Check, Clock } from "lucide-react";

export const PatientGuide = () => {
  const [activeTab, setActiveTab] = useState<"colonoscopia" | "endoscopia" | "reembolso" | "localizacao">("colonoscopia");

  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Gostaria%20de%20receber%20as%20instruções%20de%20preparo/reembolso%20no%20meu%20WhatsApp.";

  return (
    <section id="preparo" className="py-24 bg-zinc-50 text-zinc-900 border-y border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção Biofarma Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-800 text-xs font-semibold">
            <Info className="w-4 h-4 text-[#0B2C4D]" />
            <span>Área de Apoio & Instruções ao Paciente</span>
          </div>
          <h2 className="golden-ratio-h2 font-light tracking-tight text-zinc-900 font-sans">
            Preparo de Exames, Guias & Instruções de{" "}
            <span className="font-normal text-[#0B2C4D]">Reembolso</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
            Consulte as recomendações pré-exame e tire suas dúvidas sobre acompanhantes, jejum e solicitação de reembolso junto ao seu convênio.
          </p>
        </motion.div>

        {/* Tabs de Navegação Clean Biofarma Pill */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: "colonoscopia", icon: FileText, label: "Preparo Colonoscopia" },
            { id: "endoscopia", icon: Clock, label: "Instruções Endoscopia" },
            { id: "reembolso", icon: CreditCard, label: "Como Reembolsar Convênio" },
            { id: "localizacao", icon: MapPin, label: "Localização Life Plus" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-2xs ${
                  isActive
                    ? "bg-[#0B2C4D] text-white shadow-md"
                    : "bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A059]" : "text-zinc-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo Dinâmico das Tabs com AnimatePresence */}
        <div className="bg-white border border-zinc-200/90 rounded-[2.618rem] p-8 sm:p-10 shadow-sm max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === "colonoscopia" && (
              <motion.div
                key="colonoscopia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 gap-2">
                  <div>
                    <h3 className="font-semibold text-xl text-zinc-900 font-sans">Preparo Antecipado para Colonoscopia</h3>
                    <p className="text-xs text-zinc-500 font-light">Orientações de Dieta e Medicação Laxativa Pré-Exame</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0B2C4D] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit">
                    Leitura Importante
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-600">
                  <div className="space-y-3 bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80">
                    <h4 className="font-semibold text-zinc-900 text-sm">1. Véspera do Exame (Dieta Leve)</h4>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" />
                        <span>Ingerir apenas líquidos transparentes (água, chá claro, suco coado de limão).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" />
                        <span>Evitar alimentos com sementes, bagaços, leite e líquidos de cor vermelha ou roxa.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80">
                    <h4 className="font-semibold text-zinc-900 text-sm">2. Dia do Exame (Jejum e Medicação)</h4>
                    <ul className="space-y-2 font-light">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" />
                        <span>Tomar a solução preparatória recomendada pela clínica rigorosamente nos horários prescritos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" />
                        <span>Respeitar o **jejum absoluto de 4 a 6 horas** (incluindo água) antes da sedação.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-200/80">
                  <span className="text-xs text-zinc-700 font-light">Deseja receber o PDF completo com as recomendações detalhadas?</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2C4D] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#071c32] transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#C5A059]" />
                    <span>Receber Guia no WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === "endoscopia" && (
              <motion.div
                key="endoscopia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 gap-2">
                  <div>
                    <h3 className="font-semibold text-xl text-zinc-900 font-sans">Instruções para Endoscopia Digestiva Alta</h3>
                    <p className="text-xs text-zinc-500 font-light">Jejum Necessário e Orientações para o Dia do Exame</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0B2C4D] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit">
                    Preparo Rápido
                  </span>
                </div>

                <div className="space-y-4 text-xs text-zinc-600">
                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Jejum Absoluto Obrigatório</h4>
                    <p className="font-light leading-relaxed">
                      É necessário um período mínimo de <strong>8 horas de jejum absoluto</strong> para alimentos sólidos e <strong>4 horas para água pura</strong> antes do procedimento para garantir a total limpeza do estômago e a segurança da anestesia.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                    <h4 className="font-semibold text-zinc-900 text-sm">Acompanhante Maior de Idade</h4>
                    <p className="font-light leading-relaxed">
                      Devido à sedação consciente assistida, o paciente <strong>deve vir acompanhado por um adulto maior de 18 anos</strong>. Não é permitido dirigir ou voltar sozinho no dia do exame.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "reembolso" && (
              <motion.div
                key="reembolso"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 gap-2">
                  <div>
                    <h3 className="font-semibold text-xl text-zinc-900 font-sans">Passo a Passo para Reembolso pelo Convênio (IP)</h3>
                    <p className="text-xs text-zinc-500 font-light">Realize seu Exame no Particular e Solicite a Restituição do Valor</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0B2C4D] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit">
                    Direito do Paciente
                  </span>
                </div>

                <div className="space-y-4 text-xs text-zinc-600">
                  <p className="font-light leading-relaxed text-zinc-800">
                    Você sabia que a maioria dos planos de saúde (Unimed, Bradesco, SulAmérica, IPE, etc.) garante o direito ao **reembolso integral ou parcial** de exames realizados fora da rede credenciada?
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0B2C4D] text-white font-bold flex items-center justify-center text-xs">1</span>
                      <h5 className="font-semibold text-zinc-900">Solicitação de Exame</h5>
                      <p className="font-light text-[11px] text-zinc-500">Apresente o pedido médico da consulta ou solicite o pedido na própria clínica.</p>
                    </div>

                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0B2C4D] text-white font-bold flex items-center justify-center text-xs">2</span>
                      <h5 className="font-semibold text-zinc-900">Emissão de Nota & Laudo</h5>
                      <p className="font-light text-[11px] text-zinc-500">Emitimos a Nota Fiscal detalhada e o laudo médico oficial logo após o exame.</p>
                    </div>

                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0B2C4D] text-white font-bold flex items-center justify-center text-xs">3</span>
                      <h5 className="font-semibold text-zinc-900">Envio ao Convênio</h5>
                      <p className="font-light text-[11px] text-zinc-500">Submeta os documentos no aplicativo do seu convênio e receba o valor em sua conta.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "localizacao" && (
              <motion.div
                key="localizacao"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-100 pb-4 gap-2">
                  <div>
                    <h3 className="font-semibold text-xl text-zinc-900 font-sans">Localização no Hospital Life Plus</h3>
                    <p className="text-xs text-zinc-500 font-light">Xangri-lá / RS - Atendimento Regional</p>
                  </div>
                  <span className="text-xs font-semibold text-[#0B2C4D] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 w-fit">
                    Fácil Estacionamento
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-600">
                  <div className="space-y-3">
                    <p className="font-light leading-relaxed">
                      A Life Endo Clínica está localizada dentro do **Hospital Life Plus**, oferecendo estacionamento privativo e acesso facilitado para quem vem de Xangri-lá, Capão da Canoa, Torres ou Osório.
                    </p>

                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200/80 space-y-2">
                      <div className="flex items-center gap-2 font-semibold text-zinc-900 text-sm">
                        <MapPin className="w-4 h-4 text-[#0B2C4D]" />
                        <span>Endereço Completo:</span>
                      </div>
                      <p className="text-zinc-600 font-light leading-snug">
                        Complexo Hospitalar Life Plus - 2º Andar, Sala 209<br />
                        Rua Elias João de Medeiros, nº 2001 (Acesso Rod. Nelson Gonçalves)<br />
                        Bairro Santorini, Xangri-lá - RS, CEP 95588-000
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200/80 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-zinc-900 text-sm">Horário de Funcionamento</h4>
                      <p className="font-light text-zinc-600">Segunda a Sexta-feira: 08:00 às 18:00</p>
                      <p className="font-light text-zinc-600">Agendamentos via WhatsApp: 24 Horas</p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Hospital+Life+Plus+Xangri-la"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0B2C4D] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#071c32] transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Abrir Rota no Google Maps</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
