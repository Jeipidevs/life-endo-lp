"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-950 text-xs border-t border-zinc-300">
      
      {/* Bloco Principal do Rodapé Biofarma Light - Alto Contraste A11y 100 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Marca & Logo Oficial Transparente WebP */}
          <div className="space-y-4">
            <a href="#clinica" className="flex items-center" aria-label="Voltar ao início da página Life Endo Clínica">
              <img
                src="/logo-life-endo-transparent.webp"
                alt="Life Endo Clínica - Gastroenterologia e Endoscopia"
                width={140}
                height={77}
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            <p className="text-zinc-900 font-medium leading-relaxed">
              Centro especializado em diagnóstico e tratamento de doenças do aparelho digestivo. Localizado no Hospital Life Plus em Xangri-lá / RS.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-300 text-[#0B2C4D] text-[11px] font-bold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#0B2C4D]" aria-hidden="true" />
              <span>Acreditação de Segurança Hospitalar</span>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="space-y-3">
            <h2 className="font-extrabold text-sm text-zinc-950 uppercase tracking-wider font-sans border-b border-zinc-300 pb-2">
              Navegação
            </h2>
            <ul className="space-y-2 text-zinc-900 font-semibold">
              <li>
                <a href="#clinica" className="hover:text-[#0B2C4D] transition-colors py-1 inline-block">
                  A Clínica & Estrutura
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#0B2C4D] transition-colors py-1 inline-block">
                  Exames & Especialidades
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-[#0B2C4D] transition-colors py-1 inline-block">
                  Tecnologia & Sedação
                </a>
              </li>
              <li>
                <a href="#medicos" className="hover:text-[#0B2C4D] transition-colors py-1 inline-block">
                  Corpo Clínico (CRM/RQE)
                </a>
              </li>
              <li>
                <a href="#preparo" className="hover:text-[#0B2C4D] transition-colors py-1 inline-block">
                  Preparo & Reembolso (IP)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0B2C4D] transition-colors py-1 inline-block">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Exames Realizados */}
          <div className="space-y-3">
            <h2 className="font-extrabold text-sm text-zinc-950 uppercase tracking-wider font-sans border-b border-zinc-300 pb-2">
              Exames Principais
            </h2>
            <ul className="space-y-2 text-zinc-900 font-semibold">
              <li>Endoscopia Digestiva Alta</li>
              <li>Colonoscopia & Polipectomia</li>
              <li>Enteroscopia por Cápsula (PillCam)</li>
              <li>Gastroenterologia Clínica</li>
              <li>Balão Intragástrico Endoscópico</li>
              <li>CPRE & Gastrostomia (GEP)</li>
            </ul>
          </div>

          {/* Endereço & CFM Normas */}
          <div className="space-y-3">
            <h2 className="font-extrabold text-sm text-zinc-950 uppercase tracking-wider font-sans border-b border-zinc-300 pb-2">
              Localização & Contato
            </h2>
            
            <div className="space-y-2 text-zinc-900 font-semibold">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Hospital Life Plus - 2º Andar, Sala 209<br />
                  Rua Elias João de Medeiros, nº 2001<br />
                  Bairro Santorini, Xangri-lá - RS
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#0B2C4D] shrink-0" aria-hidden="true" />
                <span>WhatsApp: (51) 99487-4760</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0B2C4D] shrink-0" aria-hidden="true" />
                <span>atendimento@lifeendoclinica.com.br</span>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé Legal CFM */}
        <div className="mt-12 pt-8 border-t border-zinc-300 space-y-4 text-[11.5px] text-zinc-900">
          <div className="bg-white p-4 rounded-2xl border border-zinc-300 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-extrabold text-zinc-950">
                Razão Social: Zamin & Saad Serviços Médicos Ltda. &bull; CNPJ: 50.951.926/0001-30
              </p>
              <p className="mt-0.5 font-semibold text-zinc-900">
                Responsáveis Técnicos Médicos: Dr. Idílio Zamin Júnior (CRM 19.623) & Dr. José Antônio Saad (CRM 16.043)
              </p>
            </div>
            <div className="text-right text-[11px] text-zinc-800 font-bold">
              <span>Resolução CFM nº 2.336/2023</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left font-bold text-zinc-950">
            <p>
              © {new Date().getFullYear()} Life Endo Clínica. Todos os direitos reservados.
            </p>
            <p className="text-zinc-950 flex items-center gap-1 font-bold">
              Desenvolvido com excelência por <strong className="text-[#0B2C4D]">Hunter Assessoria</strong>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
