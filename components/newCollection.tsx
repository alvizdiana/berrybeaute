"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const collections = [
  { id: 1, name: "LipBeaute Lip Liner", price: "£120", img: "/berrybeaute/product-images/lippie_1.jpg", discount: "20% Off" },
  { id: 2, name: "Extra Hydration Serum", price: "£120", img: "/berrybeaute/product-images/skincare_1.jpg", discount: "30% Off" },
  { id: 3, name: "Extra Snail Glow Serum", price: "£250", img: "/berrybeaute/product-images/skincare_2.jpg", discount: "15% Off" },
  { id: 4, name: "LipBeaute Hydrate Lipstick", price: "£150", img: "/berrybeaute/product-images/lippie_3.jpg", discount: "10% Off" },
];

export default function NewCollection() {
  const [activeIndex, setActiveIndex] = useState(0); // Mulai dari 0 agar gambar pertama ada di paling kiri 
  const containerRef = useRef(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-5">
      <section className="py-16 overflow-hidden bg-white">
        {/* Header */}
        <div className="md:flex md:justify-between md:items-end mb-12 md:pr-10">
          <div className="max-w-xl md:pl-10">
            <h2 className="text-4xl font-playfair font-bold text-(--primary-color) mb-4 italic">New Collection</h2>
            <p className="text-gray-500 font-montserrat max-w-md text-base">
              Elevate your beauty routine with our range of stylish and minimalist products.
            </p>
          </div>
          <button className="flex items-center gap-2 group mt-7 md:mt-0">
            <Link href="/catalog">
              <span className="text-base bg-(--secondary-color) text-(--additional-color) hover:bg-(--secondary-color)/70 cursor-pointer px-6 py-1 rounded-full font-semibold">All Product</span>
              <span className="text-2xl transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden py-10">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] items-center"
            style={{ 
              transform: `translateX(calc(50% - (var(--item-width) / 2) - (${activeIndex} * var(--item-width))))`,
              "--item-width": "60%", 
            }as React.CSSProperties}
          >
            <style jsx>{`
              @media (min-width: 768px) {
                div { --item-width: 30% !important; }
              }
            `}</style>

            {collections.map((item, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  style={{ flex: "0 0 var(--item-width)" }}
                  className={`relative transition-all duration-700 cursor-pointer px-2
                    ${isActive ? "scale-110 z-10 opacity-100" : "scale-75 opacity-40"}
                  `}
                >
                  {/* Card Image */}
                  <div className="relative aspect-4/5 flex items-center justify-center rounded-xl overflow-hidden">
                    <div className={`absolute inset-0 transition-colors duration-700 ${isActive ? 'bg-transparent' : 'bg-gray-100/50'}`} />
                    
                    <div className="relative w-full h-full p-4">
                      {item.discount && isActive && (
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md font-bold text-[10px] z-20">
                          {item.discount}
                        </div>
                      )}
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        loading="lazy"
                        fill 
                        className="object-contain" 
                        priority 
                      />
                    </div>
                  </div>

                  {/* Info - Hanya muncul di bawah yang aktif */}
                  <div className={`mt-8 text-center transition-all duration-500 transform ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}>
                    <h3 className="font-montserrat text-sm md:text-xl font-semibold uppercase tracking-widest">{item.name}</h3>
                    <p className="font-montserrat font-bold text-gray-900 mt-1">{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
}