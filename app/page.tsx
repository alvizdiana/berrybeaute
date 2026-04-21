"use client";

import AboutBbOvv from "@/components/aboutBbOvv";
import Achievement from "@/components/achievement";
import NewCollection from "@/components/newCollection";
import ProductCarousel from "@/components/productCarousel";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="px-15">
      <div className="flex flex-col justify-center text-center min-h-screen pt-33">
        <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pb-5 flex flex-col items-center justify-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">As Beauty As Berry</span>
          <h1 className="font-playfair text-5xl md:text-8xl text-(--primary-color) italic">BerryBeauté</h1>
          <p className=" px-5 md:px-0 pt-5 font-montserrat">"Stay unpretentious, stay spellbinding; a beauty as rich and rare as the finest berry"</p>
          <div className="w-20 h-px bg-black mt-15 mb-10 opacity-20"></div>
          <p className="pt-2 font-montserrat">Our famous products:</p>
        </motion.div>
        <div>
          <ProductCarousel/>
        </div>
      </div>
      <div>
        <Achievement/>
      </div>
      <div>
        <AboutBbOvv/>
      </div>
      <div>
        <NewCollection/>
      </div>
    </div>
  );
}
