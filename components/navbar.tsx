"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 20 pixel, set true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
      >
      <div className="font-montserrat text-xl text-white">Genherba</div>
      <div className="flex space-x-4 font-montserrat">
        <a href="/" className="rounded-full text-white hover:bg-(--primary-color) hover:rounded-full hover:text-white px-3 py-2 transition-colors duration-300">Overview</a>
        <a href="/about" className="rounded-full text-white hover:bg-(--primary-color) hover:rounded-full hover:text-white px-3 py-2 transition-colors duration-300">About</a>
        <a href="/artikel" className="rounded-full text-white hover:bg-(--primary-color) hover:rounded-full hover:text-white px-3 py-2 transition-colors duration-300">Artikel</a>
        <a href="/katalog" className="rounded-full text-white hover:bg-(--primary-color) hover:rounded-full hover:text-white px-3 py-2 transition-colors duration-300">Katalog</a>
      </div>
      <div className="font-montserrat">
        <a href="/contact" className="bg-transparent border border-(--primary-color) text-(--primary-color) hover:bg-(--primary-color) hover:text-white px-3 py-2 rounded-full transition-colors duration-300">Kontak Kami</a>
      </div>
    </nav>
  )
}