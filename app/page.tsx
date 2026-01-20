"use client";

import ProductCarousel from "@/components/productCarousel";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center text-center min-h-screen pt-35">
        <div className="pb-5">
          <h1 className="font-playfair font-semibold text-6xl text-(--primary-color)">BerryBeauté</h1>
          <p className="pt-5 font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas incidunt, possimus suscipit ab alias laudantium et cupiditate itaque repudiandae modi!</p>
        </div>
        <div>
          <ProductCarousel/>
        </div>
      </div>
      <div className="flex flex-col justify-center text-center min-h-screen pt-5">
        <div>
          <h2 className="text-4xl font-playfair font-semibold text-(--secondary-color)">About BerryBeauté</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
