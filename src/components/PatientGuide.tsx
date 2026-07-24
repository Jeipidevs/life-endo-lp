"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, MapPin, CreditCard, Info, Check, Clock } from "lucide-react";

export const PatientGuide = () => {
  const [activeTab, setActiveTab] = useState<"reembolso" | "colonoscopia" | "endoscopia" | "localizacao">("reembolso");

  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Gostaria%20de%20receber%20as%20instruções%20de%20preparo/reembolso%20no%20meu%20WhatsApp.";

  return (
    <section id="preparo" className="py-24 bg-zinc-50 text-zinc-950 border-y border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção Biofarma Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-300 text-zinc-900 text-xs font-bold">
            <Info className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
            <span>Área de Apoio & Instruções ao Paciente</span>
          </div>
          <h2 className="golden-ratio-h2 font-light tracking-tight text-zinc-950 font-sans">
            Guia de Reembolso, Preparo &{" "}
            <span className="font-normal text-[#0B2C4D]">Localização</span>
          </h2>
          <p className="text-zinc-800 text-base sm:text-lg font-normal leading-relaxed">
            Consulte o passo a passo para solicitar o reembolso do seu convênio e acesse as instruções pré-exame no Hospital Life Plus em Xangri-lá.
          </p>
        </motion.div>

        {/* Tabs de Navegação Clean Biofarma Pill */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { id: "reembolso", icon: CreditCard, label: "Como Reembolsar Convênio (IP)" },
            { id: "colonoscopia", icon: FileText, label: "Preparo Colonoscopia" },
            { id: "endoscopia", icon: Clock, label: "Instruções Endoscopia" },
            { id: "localizacao", icon: MapPin, label: "Localização Hospital Life Plus" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-2xs ${
                  isActive
                    ? "bg-[#0B2C4D] text-white shadow-md border border-[#0B2C4D]"
                    : "bg-white text-zinc-900 hover:bg-zinc-100 border border-zinc-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#C5A059]" : "text-zinc-700"}`} aria-hidden="true" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo Dinâmico das Tabs com AnimatePresence */}
        <div className="bg-white border border-zinc-200/90 rounded-[2.618rem] p-8 sm:p-10 shadow-sm max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === "reembolso" && (
              <motion.div
                key="reembolso"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-zinc-950 font-sans">Passo a Passo para Reembolso pelo Convênio (IP)</h3>
                    <p className="text-xs text-zinc-800 font-medium">Realize seu Exame no Particular e Solicite a Restituição Integral ou Parcial do Valor</p>
                  </div>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 w-fit">
                    Direito do Paciente
                  </span>
                </div>

                <div className="space-y-4 text-xs text-zinc-800">
                  <p className="font-normal leading-relaxed text-zinc-900 text-sm">
                    Você sabia que a maioria dos planos de saúde (Unimed, Bradesco, SulAmérica, IPE Saúde, Cassi, etc.) garante o direito ao <strong className="font-bold text-zinc-950">reembolso de exames</strong> realizados na rede particular? É a oportunidade de realizar sua Endoscopia ou Colonoscopia com agilidade, sem filas e com a máxima segurança hospitalar.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0B2C4D] text-white font-bold flex items-center justify-center text-xs">1</span>
                      <h4 className="font-bold text-zinc-950 text-sm">Solicitação do Exame</h4>
                      <p className="font-medium text-xs text-zinc-800 leading-snug">Apresente a requisição do seu médico ou solicite o atendimento inicial diretamente na Life Endo.</p>
                    </div>

                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0B2C4D] text-white font-bold flex items-center justify-center text-xs">2</span>
                      <h4 className="font-bold text-zinc-950 text-sm">Nota Fiscal & Laudo Oficial</h4>
                      <p className="font-medium text-xs text-zinc-800 leading-snug">Emitimos a Nota Fiscal detalhada com fotodocumentação do exame pronta para reembolso.</p>
                    </div>

                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                      <span className="w-7 h-7 rounded-lg bg-[#0B2C4D] text-white font-bold flex items-center justify-center text-xs">3</span>
                      <h4 className="font-bold text-zinc-950 text-sm">Envio ao seu Plano de Saúde</h4>
                      <p className="font-medium text-xs text-zinc-800 leading-snug">Envie a documentação no aplicativo do seu convênio e receba o valor na sua conta bancária.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 p-5 rounded-2xl border border-zinc-200">
                  <span className="text-xs text-zinc-900 font-bold">Dúvidas sobre o reembolso do seu convênio? Nossa recepção orienta você passo a passo.</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="biofarma-btn-dot shrink-0"
                    aria-label="Tirar Dúvidas sobre Reembolso no WhatsApp"
                  >
                    <span className="btn-text">Tirar Dúvidas no WhatsApp</span>
                    <span className="btn-dot" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === "colonoscopia" && (
              <motion.div
                key="colonoscopia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-zinc-950 font-sans">Preparo Antecipado para Colonoscopia</h3>
                    <p className="text-xs text-zinc-800 font-medium">Orientações de Dieta e Medicação Laxativa Pré-Exame</p>
                  </div>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 w-fit">
                    Leitura Importante
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-800">
                  <div className="space-y-3 bg-zinc-50 p-5 rounded-2xl border border-zinc-200">
                    <h4 className="font-bold text-zinc-950 text-sm">1. Véspera do Exame (Dieta Leve)</h4>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>Ingerir apenas líquidos transparentes (água, chá claro, suco coado de limão).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>Evitar alimentos com sementes, bagaços, leite e líquidos de cor vermelha ou roxa.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 bg-zinc-50 p-5 rounded-2xl border border-zinc-200">
                    <h4 className="font-bold text-zinc-950 text-sm">2. Dia do Exame (Jejum e Medicação)</h4>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>Tomar a solução preparatória recomendada pela clínica rigorosamente nos horários prescritos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>Respeitar o <strong className="font-bold text-zinc-950">jejum absoluto de 4 a 6 horas</strong> (incluindo água) antes da sedação.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-200">
                  <span className="text-xs text-zinc-900 font-bold">Deseja receber o PDF completo com as recomendações detalhadas?</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B2C4D] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#071c32] transition-colors"
                  >
                    <Download className="w-4 h-4 text-[#C5A059]" aria-hidden="true" />
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-zinc-950 font-sans">Instruções para Endoscopia Digestiva Alta</h3>
                    <p className="text-xs text-zinc-800 font-medium">Jejum Necessário e Orientações para o Dia do Exame</p>
                  </div>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 w-fit">
                    Preparo Rápido
                  </span>
                </div>

                <div className="space-y-4 text-xs text-zinc-800">
                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                    <h4 className="font-bold text-zinc-950 text-sm">Jejum Absoluto Obrigatório</h4>
                    <p className="font-medium leading-relaxed">
                      É necessário um período mínimo de <strong className="font-bold text-zinc-950">8 horas de jejum absoluto</strong> para alimentos sólidos e <strong className="font-bold text-zinc-950">4 horas para água pura</strong> antes do procedimento para garantir a total limpeza do estômago e a segurança da anestesia.
                    </p>
                  </div>

                  <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                    <h4 className="font-bold text-zinc-950 text-sm">Acompanhante Maior de Idade</h4>
                    <p className="font-medium leading-relaxed">
                      Devido à sedação consciente assistida, o paciente <strong className="font-bold text-zinc-950">deve vir acompanhado por um adulto maior de 18 anos</strong>. Não é permitido dirigir ou voltar sozinho no dia do exame.
                    </p>
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-200 pb-4 gap-2">
                  <div>
                    <h3 className="font-bold text-xl text-zinc-950 font-sans">Localização no Hospital Life Plus</h3>
                    <p className="text-xs text-zinc-800 font-medium">Xangri-lá / RS - Atendimento Regional Sem Necessidade de Ir a Porto Alegre</p>
                  </div>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 w-fit">
                    Estacionamento Privativo
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-zinc-800">
                  <div className="space-y-3">
                    <p className="font-medium leading-relaxed">
                      A Life Endo Clínica está localizada no <strong className="font-bold text-zinc-950">Hospital Life Plus em Xangri-lá</strong>, oferecendo estacionamento privativo e acesso facilitado para pacientes de Xangri-lá, Capão da Canoa, Torres, Tramandaí e Osório.
                    </p>

                    <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-zinc-950 text-sm">
                        <MapPin className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
                        <span>Endereço Completo:</span>
                      </div>
                      <p className="text-zinc-900 font-semibold leading-snug">
                        Complexo Hospitalar Life Plus - 2º Andar, Sala 209<br />
                        Rua Elias João de Medeiros, nº 2001 (Acesso Rod. Nelson Gonçalves)<br />
                        Bairro Santorini, Xangri-lá - RS, CEP 95588-000
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h4 className="font-bold text-zinc-950 text-sm">Horário de Funcionamento</h4>
                      <p className="font-medium text-zinc-900">Segunda a Sexta-feira: 08:00 às 18:00</p>
                      <p className="font-medium text-zinc-900">Agendamentos via WhatsApp: 24 Horas</p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=Hospital+Life+Plus+Xangri-la"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0B2C4D] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#071c32] transition-colors"
                    >
                      <MapPin className="w-4 h-4" aria-hidden="true" />
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
