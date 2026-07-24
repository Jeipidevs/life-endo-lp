import React from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { DoctorsSection } from "@/components/DoctorsSection";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const TechSection = dynamic(() => import("@/components/TechSection").then((m) => m.TechSection));
const PatientGuide = dynamic(() => import("@/components/PatientGuide").then((m) => m.PatientGuide));
const FaqSection = dynamic(() => import("@/components/FaqSection").then((m) => m.FaqSection));

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 flex flex-col font-sans overflow-x-hidden w-full max-w-full relative">
      {/* 1. Header Navigation & Top Social Proof Bar */}
      <Header />

      {/* 2. Hero Section (Ultra-fast LCP < 1.8s) */}
      <Hero />

      {/* 3. Social Proof & Numbers Bar */}
      <StatsBar />

      {/* 4. Services & Specialties Grid */}
      <ServicesGrid />

      {/* 5. Technology & Facility */}
      <TechSection />

      {/* 6. Medical Team & Authority */}
      <DoctorsSection />

      {/* 7. Patient Guide & Reimbursement */}
      <PatientGuide />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Footer & Sticky WhatsApp CTA */}
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
