"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  EndoscopiaIcon,
  ColonoscopiaIcon,
  CapsulaIcon,
  GastroIcon,
  BalaoIcon,
  HospitalProcIcon,
} from "./MedicalIcons";

export const ServicesGrid = () => {
  const whatsappUrl = "https://wa.me/5551994874760?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20exames/serviços%20da%20Life%20Endo.";

  const services = [
    {
      icon: EndoscopiaIcon,
      badge: "Diagnóstico & Tratamento",
      title: "Endoscopia Digestiva Alta",
      subtitle: "Avaliação minuciosa do esôfago, estômago e duodeno",
      description: "Procedimento realizado com sedação consciente assistida por anestesiologista. Permite diagnóstico preciso de gastrite, refluxo, úlceras e biópsias sem dor.",
      features: ["Sedação consciente sem dor", "Resolução diagnóstica de alta definição", "Pesquisa imediata de H. Pylori"],
    },
    {
      icon: ColonoscopiaIcon,
      badge: "Prevenção de Câncer",
      title: "Colonoscopia Avançada & Polipectomia",
      subtitle: "Prevenção e remoção de pólipos intestinais",
      description: "Exame fundamental para prevenção do câncer colorretal. Realiza a identificação e retirada imediata de pólipos (polipectomia) de forma indolor e segura.",
      features: ["Remoção preventiva de pólipos", "Cromoscopia digital de alta precisão", "Laudo com fotodocumentação completa"],
    },
    {
      icon: CapsulaIcon,
      badge: "Tecnologia Inovadora",
      title: "Enteroscopia por Cápsula (PillCam)",
      subtitle: "Exame em cápsula ingerível sem sedação",
      description: "Câmera em formato de pílula ingerida pelo paciente que capta milhares de imagens em alta resolução do intestino delgado sem necessidade de anestesia.",
      features: ["Totalmente indolor e sem anestesia", "Visualização do intestino delgado", "Retorno imediato às atividades"],
    },
    {
      icon: GastroIcon,
      badge: "Consultas Médicas",
      title: "Gastroenterologia Clínica",
      subtitle: "Acompanhamento especializado do sistema digestivo",
      description: "Atendimento médico humanizado para tratamento de azia, esofagite de refluxo, gordura no fígado (esteatose), síndrome do intestino irritável e prevenção da saúde gastrointestinal.",
      features: ["Investigação detalhada de sintomas", "Plano terapêutico personalizado", "Acompanhamento pré e pós-exame"],
    },
    {
      icon: BalaoIcon,
      badge: "Emagrecimento Seguro",
      title: "Balão Intragástrico Endoscópico",
      subtitle: "Tratamento não cirúrgico da obesidade",
      description: "Colocação de balão por via endoscópica para induzir a sensação de saciedade precoce, auxiliando no reeducamento alimentar e perda de peso saudável sem cortes.",
      features: ["Procedimento ambutorial rápido", "Sem necessidade de cirurgia", "Suporte integrativo de reeducação"],
    },
    {
      icon: HospitalProcIcon,
      badge: "Alta Complexidade Hospitalar",
      title: "CPRE & Gastrostomia (GEP)",
      subtitle: "Tratamento de vias biliares e vias de nutrição",
      description: "Procedimentos avançados para remoção de cálculos nas vias biliares (CPRE) e implantação de sonda de alimentação enteral em ambiente hospitalar seguro.",
      features: ["Realizado no Hospital Life Plus", "Equipe de alta especialização", "Suporte cirúrgico e UTI de retaguarda"],
    },
  ];

  return (
    <section id="especialidades" className="py-24 bg-white text-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Seção Estilo Biofarma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-semibold">
            <span>Especialidades & Exames</span>
          </div>
          <h2 className="golden-ratio-h2 font-light tracking-tight text-zinc-900 font-sans">
            Excelência Médica e Diagnóstico Completo em{" "}
            <span className="font-normal text-[#0B2C4D]">Saúde Digestiva</span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-light leading-relaxed">
            Estrutura planejada para oferecer precisão diagnóstica, agilidade no resultado e o máximo conforto durante procedimentos e exames.
          </p>
        </motion.div>

        {/* Cards Biofarma Style com Ícones Vetoriais Médicos de Alta Qualidade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-[2.618rem] bg-white border border-zinc-200/90 p-8 hover:border-[#0B2C4D]/50 transition-all duration-400 hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Ícone Vetorial Limpo Sem Caixa de Fundo ou Bordas Quadradas */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#0B2C4D]/8 text-[#0B2C4D] flex items-center justify-center group-hover:bg-[#0B2C4D] group-hover:text-white transition-all duration-300 shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <span className="text-[10.5px] font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-700 border border-zinc-200 px-3 py-1 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-semibold text-xl text-zinc-900 group-hover:text-[#0B2C4D] transition-colors mb-1.5 font-sans">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal mb-4">
                    {srv.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6 border-t border-zinc-100 pt-4">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#0B2C4D] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Biofarma Dot CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="biofarma-btn-dot w-full justify-between"
                >
                  <span className="btn-text">Agendar este Exame</span>
                  <span className="btn-dot" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Banner Inferior Estilo Biofarma Container */}
        <div className="mt-16 p-8 sm:p-10 rounded-[2.618rem] bg-zinc-50 border border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-normal text-zinc-900 font-sans">
              Precisa de ajuda para escolher o exame ou verificar o preparo?
            </h4>
            <p className="text-xs text-zinc-600 font-light">
              Nossa recepção no Hospital Life Plus está pronta para orientar você e enviar a lista completa de orientações.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="biofarma-btn-dot shrink-0"
          >
            <span className="btn-text">Conversar no WhatsApp</span>
            <span className="btn-dot" />
          </a>
        </div>

      </div>
    </section>
  );
};
