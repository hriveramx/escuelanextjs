import type { Metadata } from "next";
import Image from 'next/image'
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

        <main className="p-4 w-full bg-gray-100">
          <Image src="/img/escuelaNextJs.png" alt="Logo" width={60} height={60}></Image>
          <h1 className="text-2xl font-bold text-purple-900">Escuela NextJS - Navegación</h1>
          {children}
        </main>


        <footer className="fixed bottom-0 left-0 right-0 bg-gray-200 py-4 text-center text-purple-500 z-10">
          <div className="container mx-auto px-4">
            <p className="text-sm">Derechos reservados @2025</p>
          </div>
        </footer>

      </body>
    </html>
  );
}
