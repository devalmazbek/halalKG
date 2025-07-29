
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header/Header'
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import Breadcrumbs from "@/components/breadcrumbs";

import 'leaflet/dist/leaflet.css'

import './../i18n'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  display: 'swap', // Оптимизация отображения шрифта
  variable: '--font-inter', // Переменная CSS для использования в tailwind
});

export const metadata: Metadata = {
  title: "Халал Даму - Центр стандартизации и сертификации",
  description: "Центр стандартизации и сертификации «Халал Даму» при Духовном управлении мусульман Казахстана",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="font-sans">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Breadcrumbs />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
