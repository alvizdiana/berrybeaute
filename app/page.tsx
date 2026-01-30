"use client";

import AboutBbOvv from "@/components/aboutBbOvv";
import Achievement from "@/components/achievement";
import NewCollection from "@/components/newCollection";
import ProductCarousel from "@/components/productCarousel";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="px-15">
      <div className="flex flex-col justify-center text-center min-h-screen pt-35">
        <div className="pb-5">
          <h1 className="font-playfair text-5xl md:text-8xl text-(--primary-color)">BerryBeauté</h1>
          <p className=" px-5 md:px-0 pt-5 font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas incidunt, possimus suscipit ab alias laudantium et cupiditate itaque repudiandae modi!</p>
          <p className="pt-2 font-montserrat">Our famous products:</p>
        </div>
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
