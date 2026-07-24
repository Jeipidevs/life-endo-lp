import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TechSection } from "@/components/TechSection";
import { DoctorsSection } from "@/components/DoctorsSection";
import { PatientGuide } from "@/components/PatientGuide";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans">
      {/* 1. Header Navigation & Top Social Proof Bar (Biofarma Style) */}
      <Header />

      {/* 2. Hero Section (Biofarma Thin Light Typography + Real Photos) */}
      <Hero />

      {/* 3. Social Proof & Numbers Bar */}
      <StatsBar />

      {/* 4. Services & Specialties Grid (Custom Generated 3D Asset Icons) */}
      <ServicesGrid />

      {/* 5. Technology, Comfort & Hospital Life Plus Facility */}
      <TechSection />

      {/* 6. Medical Team & Authority (CRM/RQE) */}
      <DoctorsSection />

      {/* 7. Patient Guide: Preparation & Reimbursement Step-by-Step */}
      <PatientGuide />

      {/* 8. Frequently Asked Questions (Accordion) */}
      <FaqSection />

      {/* 9. Footer & Sticky WhatsApp CTA */}
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
