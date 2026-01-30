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
    <nav className={`py-2 px-5 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
        ? "bg-(--additional-color)/70 backdrop-blur-md shadow-md"
        : "bg-(--additional-color)/60 backdrop-blur-md shadow-md" 
      }`}>
      <div>
        <img src="/berrybeaute_full.png" alt="BerryBeaute logo" className=" w-18 md:w-30"/>
      </div>
      <div className="flex space-x-4 font-montserrat items-center">
        <a className="relative group text-sm md:text-base hover:text-(--secondary-color) transition-colors ease-in-out duration-300" href="/">
          Overview
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
        <a className="relative group text-sm md:text-base hover:text-(--secondary-color) transition-colors ease-in-out duration-300" href="/about">
          About Us
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
        <a className="relative group text-sm md:text-base hover:text-(--secondary-color) transition-colors ease-in-out duration-300" href="/catalog">
          Catalog
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-(--secondary-color) transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
      </div>
      <div className="flex items-center font-montserrat">
        <a href="/contact" className="bg-(--primary-color) text-(--additional-color) text-sm md:text-base rounded-full hover:bg-(--secondary-color) transition-colors ease-in-out duration-300 px-2 md:px-4 py-1 md:py-2">Contact Us</a>
      </div>
    </nav>
  )
}