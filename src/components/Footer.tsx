"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-100 text-zinc-600 text-xs border-t border-zinc-200">
      
      {/* Bloco Principal do Rodapé Biofarma Light */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Marca & Logo Oficial Transparente */}
          <div className="space-y-4">
            <a href="#" className="flex items-center">
              <img
                src="/logo-life-endo-transparent.png"
                alt="Life Endo Clínica"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </a>

            <p className="text-zinc-600 font-light leading-relaxed">
              Centro especializado em diagnóstico e tratamento de doenças do aparelho digestivo. Localizado no Hospital Life Plus em Xangri-lá / RS.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-[#0B2C4D] text-[11px] font-semibold shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#0B2C4D]" />
              <span>Acreditação de Segurança Hospitalar</span>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider font-sans border-b border-zinc-200 pb-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-zinc-600 font-light">
              <li>
                <a href="#clinica" className="hover:text-[#0B2C4D] transition-colors">
                  A Clínica & Estrutura
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#0B2C4D] transition-colors">
                  Exames & Especialidades
                </a>
              </li>
              <li>
                <a href="#tecnologia" className="hover:text-[#0B2C4D] transition-colors">
                  Tecnologia & Sedação
                </a>
              </li>
              <li>
                <a href="#medicos" className="hover:text-[#0B2C4D] transition-colors">
                  Corpo Clínico (CRM/RQE)
                </a>
              </li>
              <li>
                <a href="#preparo" className="hover:text-[#0B2C4D] transition-colors">
                  Preparo & Reembolso (IP)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0B2C4D] transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Exames Realizados */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider font-sans border-b border-zinc-200 pb-2">
              Exames Principais
            </h4>
            <ul className="space-y-2 text-zinc-600 font-light">
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
            <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider font-sans border-b border-zinc-200 pb-2">
              Localização & Contato
            </h4>
            
            <div className="space-y-2 text-zinc-600 font-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0B2C4D] shrink-0 mt-0.5" />
                <span>
                  Hospital Life Plus - 2º Andar, Sala 209<br />
                  Rua Elias João de Medeiros, nº 2001<br />
                  Bairro Santorini, Xangri-lá - RS
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#0B2C4D] shrink-0" />
                <span>WhatsApp: (51) 99487-4760</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0B2C4D] shrink-0" />
                <span>atendimento@lifeendoclinica.com.br</span>
              </div>
            </div>
          </div>

        </div>

        {/* Rodapé Legal CFM */}
        <div className="mt-12 pt-8 border-t border-zinc-200 space-y-4 text-[11px] text-zinc-500">
          <div className="bg-white p-4 rounded-2xl border border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-bold text-zinc-800">
                Razão Social: Zamin & Saad Serviços Médicos Ltda. &bull; CNPJ: 50.951.926/0001-30
              </p>
              <p className="mt-0.5 font-normal">
                Responsáveis Técnicos Médicos: Dr. Idílio Zamin Júnior (CRM 19.623) & Dr. José Antônio Saad (CRM 16.043)
              </p>
            </div>
            <div className="text-right text-[10px] text-zinc-500">
              <span>Resolução CFM nº 2.336/2023</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Life Endo Clínica. Todos os direitos reservados.
            </p>
            <p className="text-zinc-700 flex items-center gap-1 font-medium">
              Desenvolvido com excelência por <strong className="text-[#0B2C4D]">Hunter Assessoria</strong>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
