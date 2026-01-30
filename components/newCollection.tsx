"use client";
import { useState } from "react";
import Image from "next/image";

const collections = [
  { id: 1, name: "Lip Liner", price: "£120", img: "/product-images/lippie_1.jpg", discount: "20% Off" },
  { id: 2, name: "Cleansing Oil", price: "£120", img: "/product-images/skincare_1.jpg", discount: "30% Off" },
  { id: 3, name: "Glow Serum", price: "£250", img: "/product-images/skincare_2.jpg", discount: "15% Off" },
  { id: 4, name: "Lipstick", price: "£150", img: "/product-images/lippie_3.jpg", discount: "10% Off" },
];

export default function NewCollection() {
  const [activeIndex, setActiveIndex] = useState(0); // Mulai dari 0 agar gambar 1 di paling kiri

  return (
    <section className="py-16 overflow-hidden bg-white">
      {/* Header */}
      <div className="md:flex md:justify-between md:items-end mb-12 md:pr-10">
        <div className="max-w-xl md:pl-10">
          <h2 className="text-5xl font-playfair font-bold text-(--primary-color) mb-4">New Collection</h2>
          <p className="text-gray-500 font-montserrat max-w-md">
            Elevate your beauty routine with our range of stylish and minimalist products.
          </p>
        </div>
        <button className="flex items-center gap-2 group mt-7 md:mt-0">
          <span className="bg-(--secondary-color) text-(--additional-color) hover:bg-(--secondary-color)/70 cursor-pointer px-6 py-2 rounded-full font-semibold">All collection</span>
          <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative pl-0 md:pl-80 md:pr-30">
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] gap-6"
          // Logika geser: Jika index 0, tidak geser. Jika index 1, geser secukupnya.
          style={{ transform: `translateX(-${activeIndex * 25}%)` }} 
        >
          {collections.map((item, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;

            return (
                <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative flex-none transition-all duration-700 cursor-pointer
                    ${isActive ? "w-[75%] md:w-[50%]" : "w-[60%] md:w-[30%]"} 
                    ${isPast ? "scale-95 opacity-50" : "scale-100 opacity-100"}
                    `}
                >
                    {/* Image Card */}
                    <div className="relative aspect-4/5 overflow-hidden flex items-center justify-center">
                      <div className={`relative w-full h-full transition-transform duration-700 ${isActive ? 'scale-95' : 'scale-70'}`}>
                        {item.discount && (
                            <div className="absolute top-8 right-8 bg-white px-5 py-2 rounded-full shadow-sm font-bold text-sm">
                            {item.discount}
                            </div>
                        )}
                        <Image src={item.img} alt={item.name} fill className="object-contain" priority />
                      </div>
                    </div>

                    {/* Info - Tetap muncul agar tidak kosong, atau bisa disembunyikan jika tidak aktif */}
                    <div className={`mt-6 transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="textbase font-bold mt-1 tracking-tighter">{item.price}</p>
                    </div>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}