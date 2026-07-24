"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export const FaqSection = () => {
  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20exames%20da%20Life%20Endo%20Clínica.";

  const faqs = [
    {
      id: "item-1",
      question: "Os exames de Endoscopia e Colonoscopia doem ou causam desconforto?",
      answer: "Não! Na Life Endo Clínica, todos os exames invasivos são realizados sob o protocolo de Sedação Consciente Humanizada, acompanhado por um médico anestesiologista dedicado. O paciente adormece tranquilamente antes do início do procedimento, não sente dor e acorda disposto após o exame sem lembranças desconfortáveis.",
    },
    {
      id: "item-2",
      question: "Como funciona o reembolso pelo meu convênio ou plano de saúde?",
      answer: "É muito simples! Mesmo se seu convênio for Unimed, IPE, Bradesco ou SulAmérica, você pode realizar seu exame no particular com toda a atenção e infraestrutura diferenciada do Hospital Life Plus. Nós emitimos a Nota Fiscal detalhada e o Laudo Médico oficial para que você solicite a restituição do valor diretamente no aplicativo do seu convênio.",
    },
    {
      id: "item-3",
      question: "Quanto tempo dura o exame e em quanto tempo recebo o laudo?",
      answer: "O procedimento de Colonoscopia dura em média de 20 a 30 minutos, enquanto a Endoscopia Alta dura de 10 a 15 minutos. Após o exame e um breve repouso na sala de recuperação pós-anestésica, o paciente já recebe o laudo médico impresso com fotodocumentação em alta definição.",
    },
    {
      id: "item-4",
      question: "É obrigatório levar acompanhante no dia do exame?",
      answer: "Sim. Por conta do protocolo de sedação consciente assistida, a legislação de saúde exige que o paciente esteja acompanhado de um adulto maior de 18 anos durante e após o exame. Não é permitido dirigir veículos motorizados ou voltar sozinho no dia do procedimento.",
    },
    {
      id: "item-5",
      question: "Qual o endereço exato da clínica no Litoral Norte?",
      answer: "Estamos localizados dentro do Complexo Hospitalar Life Plus - 2º Andar, Sala 209 (Rua Elias João de Medeiros, nº 2001 / Acesso via Rod. Nelson Gonçalves), no Bairro Santorini, em Xangri-lá - RS. Atendemos com facilidade pacientes de Xangri-lá, Capão da Canoa, Torres, Osório e Tramandaí.",
    },
    {
      id: "item-6",
      question: "O que é a Enteroscopia por Cápsula Endoscópica (PillCam)?",
      answer: "É uma tecnologia médica revolucionária onde o paciente engole uma cápsula microscópica com câmera embutida. A cápsula percorre o aparelho digestivo captando milhares de imagens do intestino delgado sem necessidade de anestesia ou sedação.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção Biofarma Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-[#0B2C4D]" />
            <span>Perguntas Frequentes & Respostas</span>
          </div>
          <h2 className="golden-ratio-h2 font-light tracking-tight text-zinc-900 font-sans">
            Tire Suas Dúvidas Sobre os{" "}
            <span className="font-normal text-[#0B2C4D]">Exames e Procedimentos</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
            Respostas claras sobre sedação, reembolso, tempo de laudo e acompanhantes para que você faça seu exame com total tranquilidade.
          </p>
        </motion.div>

        {/* Radix UI Accordion Primitives (shadcn/ui style) */}
        <Accordion.Root type="single" defaultValue="item-1" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/70 data-[state=open]:bg-white data-[state=open]:border-[#0B2C4D]/40 data-[state=open]:shadow-md transition-all duration-300 overflow-hidden"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="w-full p-6 text-left flex justify-between items-center gap-4 group focus:outline-none">
                  <span className="font-semibold text-base text-zinc-900 font-sans leading-snug group-hover:text-[#0B2C4D] transition-colors">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-200 group-data-[state=open]:bg-[#0B2C4D] group-data-[state=open]:text-white text-zinc-600 flex items-center justify-center shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-600 font-light leading-relaxed border-t border-zinc-100">
                {faq.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {/* Suporte Direto WhatsApp */}
        <div className="mt-14 text-center bg-zinc-50 border border-zinc-200 rounded-[2.618rem] p-8 sm:p-12 space-y-4 shadow-2xs">
          <h3 className="font-light text-2xl text-zinc-900 font-sans">
            Ficou com alguma dúvida específica não listada aqui?
          </h3>
          <p className="text-xs text-zinc-600 max-w-xl mx-auto font-light leading-relaxed">
            Fale diretamente com nossa recepção no Hospital Life Plus. Estamos prontos para atender você.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="biofarma-btn-dot inline-flex"
          >
            <span className="btn-text flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Tirar Dúvida no WhatsApp
            </span>
            <span className="btn-dot" />
          </a>
        </div>

      </div>
    </section>
  );
};
