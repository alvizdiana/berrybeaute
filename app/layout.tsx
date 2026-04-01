import "./globals.css";
import Navbar from '@/components/navbar'
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BerryBeauté",
  icons: {
    icon: "/bbicon.png", // Pastikan ada tanda "/" di depan
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
      </head>
      <body>
        <Navbar />  {/* Header muncul di sini */}
        <main>{children}</main> {/* Isi halaman (page.tsx) akan muncul di sini */}
        <Footer /> 
      </body>
    </html>
  )
}
