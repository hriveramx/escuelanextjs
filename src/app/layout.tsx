import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escuela NextJS - Navegación",
  description: "Escuela NextJS - Página de inicio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header>
          
          <div className="bg-gray-200">
            <ul className="flex gap-4 text-lg text-purple-500">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/oferta-educativa">Oferta Educativa</Link>
              </li>
              <li>
                <Link href="/quienes-somos">¿Quiénes Somos?</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
        </header>

        <main className="p-4 h-screen w-full bg-gray-100">
          <h1 className="text-2xl font-bold text-purple-900">Escuela NextJS - Navegación</h1>
          {children}
        </main>


        <footer className="text-center text-purple-500">Derechos reservados @2025</footer>
      </body>
    </html>
  );
}
