"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { motion } from "framer-motion";

interface Promo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const PromoCarousel = ({ promos = [] }: { promos?: Promo[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div className="overflow-hidden w-full rounded-2xl bg-gray-100 shadow-lg" ref={emblaRef}>
      <div className="flex">
        {promos?.map((promo) => (
          <div 
            key={promo.id} 
            className="flex-[0_0_100%] min-w-0 relative h-45 md:h-90.5"
          >
            <Image
              src={promo.imageUrl}
              alt={promo.title}
              fill
              className="object-cover"
              priority={promo.id === 1}
            />
            
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-xl md:text-4xl font-bold">{promo.title}</h2>
              </motion.div>

              <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:mt-2 text-xs md:text-lg opacity-90">{promo.description}</motion.p>

              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}>
                <button className="text-xs md:text-base mt-1 md:mt-4 w-fit px-3 md:px-6 py-1 md:py-2 bg-(--primary-color) hover:bg-(--additional-color) text-white hover:text-(--secondary-color) cursor-pointer font-semibold rounded-full transition">
                  Check Promo
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;