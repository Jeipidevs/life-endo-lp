import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Life Endo Clínica | Gastroenterologia & Endoscopia no Hospital Life Plus (Xangri-lá / RS)",
  description:
    "Centro de Diagnóstico e Tratamento do Aparelho Digestivo no Hospital Life Plus em Xangri-lá / RS. Endoscopia e Colonoscopia com sedação consciente 100% sem dor.",
  keywords: [
    "Endoscopia em Capão da Canoa",
    "Colonoscopia Xangri-lá",
    "Gastroenterologista Litoral Norte RS",
    "Life Endo Clínica",
    "Endo Plus",
    "Dr Idilio Zamin Junior",
    "Dr Jose Antonio Saad",
    "Hospital Life Plus",
    "Exame sem dor",
    "PillCam Cápsula Endoscópica",
  ],
  authors: [{ name: "Hunter Assessoria" }],
  openGraph: {
    title: "Life Endo Clínica | Gastroenterologia & Endoscopia Avançada",
    description:
      "Diagnóstico preciso e tratamento avançado do Aparelho Digestivo com sedação consciente e equipe médica com mais de 30 anos de experiência no Hospital Life Plus.",
    url: "https://lifeendoclinica.com.br/",
    siteName: "Life Endo Clínica",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} scroll-smooth overflow-x-hidden w-full max-w-full`}>
      <head>
        <link
          rel="preload"
          href="/hero-clinic-mobile.webp"
          as="image"
          type="image/webp"
          media="(max-width: 640px)"
          // @ts-ignore
          fetchpriority="high"
        />
        <link
          rel="preload"
          href="/hero-clinic.webp"
          as="image"
          type="image/webp"
          media="(min-width: 641px)"
          // @ts-ignore
          fetchpriority="high"
        />
      </head>
      <body className="bg-white font-sans text-zinc-950 antialiased selection:bg-[#0B2C4D] selection:text-white overflow-x-hidden w-full max-w-full">
        {children}
      </body>
    </html>
  );
}
