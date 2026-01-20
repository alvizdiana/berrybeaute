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
    <html lang="en">
      <body>
        <Navbar />  {/* Header muncul di sini */}
        <main>{children}</main> {/* Isi halaman (page.tsx) akan muncul di sini */}
        <Footer /> 
      </body>
    </html>
  )
}
