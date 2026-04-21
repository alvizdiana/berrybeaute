"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav 
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`py-2 px-5 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
        ? "bg-(--additional-color)/70 backdrop-blur-md shadow-md"
        : "bg-(--additional-color)/60 backdrop-blur-md shadow-md" 
      }`}>
      <div>
        <img src="/berrybeaute_full.png" alt="BerryBeaute logo" className=" w-18 md:w-30"/>
      </div>
      <div className="flex space-x-4 font-montserrat items-center">
        <Link 
          href="/" 
          className={`relative group text-sm md:text-base transition-colors ease-in-out duration-300 
            ${isActive('/') ? 'text-(--active-color)' : 'hover:text-(--secondary-color)'}`}
        >
          Overview
          {/* Garis bawah yang stay kalau aktif ATAU muncul pas hover */}
          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out 
            ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
          </span>
        </Link>
        <Link 
          href="/about"
          className={`relative group text-sm md:text-base transition-colors ease-in-out duration-300 
            ${isActive('/about') ? 'text-(--active-color)' : 'hover:text-(--secondary-color)'}`}
        >
          About Us
          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out 
            ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
          </span>
        </Link>
        <Link 
          href="/article" 
          className={`relative group text-sm md:text-base transition-colors ease-in-out duration-300
            ${isActive('/article') ? 'text-(--active-color)' : 'hover:text-(--secondary-color)'}`}
          >
          Article
          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out 
            ${isActive('/article') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
          </span>
        </Link>
        <Link 
          href="/catalog" 
          className={`relative group text-sm md:text-base transition-colors ease-in-out duration-300
            ${isActive('/catalog') ? 'text-(--active-color)' : 'hover:text-(--secondary-color)'}`}
          >
          Catalog
          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out 
            ${isActive('/catalog') ? 'w-full' : 'w-0 group-hover:w-full'}`}>
          </span>
        </Link>
      </div>
      <div className="flex items-center font-montserrat">
        <a href="#contact" className="hidden md:block bg-(--primary-color) text-(--additional-color) text-sm md:text-base rounded-full hover:bg-(--secondary-color) transition-colors ease-in-out duration-300 px-2 md:px-4 py-1 md:py-2">Contact Us</a>
      </div>
    </motion.nav>
  )
}