import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const dancing = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dancing',
});

export const metadata: Metadata = {
  title: "Gestoría y Diligenciamiento Judicial — Córdoba",
  description: "Servicios profesionales de gestoría, cédulas, mandamientos y oficios en Córdoba."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dancing.variable}`} style={{ margin: 0, padding: 0, width: '100%', backgroundColor: '#ffffff' }}>
      <body style={{ margin: 0, padding: 0, width: '100%', backgroundColor: '#ffffff', color: '#0f172a' }}>
        {children}
      </body>
    </html>
  );
}