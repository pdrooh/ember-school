import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ember School - Transforme-se em uma Brasa Viva do Altar 🔥",
  description: "8 semanas para ativar sua identidade em Cristo. Curso online com acompanhamento pastoral exclusivo. +500 alunos transformados. Garantia de 7 dias.",
  keywords: "curso cristão, identidade em cristo, discipulado, brasa viva, ember school, transformação espiritual",
  authors: [{ name: "Ember School" }],
  openGraph: {
    title: "Ember School - Transforme-se em uma Brasa Viva do Altar 🔥",
    description: "8 semanas para ativar sua identidade em Cristo. Curso online com acompanhamento pastoral exclusivo.",
    url: "https://emberschool.com",
    siteName: "Ember School",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember School - Transforme-se em uma Brasa Viva do Altar 🔥",
    description: "8 semanas para ativar sua identidade em Cristo. Curso online com acompanhamento pastoral exclusivo.",
  },
  themeColor: "#f97316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
