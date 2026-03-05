"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface Promo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const PromoCarousel = ({ promos = [] }: { promos?: Promo[] }) => {
  // Setup Embla dengan plugin Autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <div className="overflow-hidden w-full rounded-2xl bg-gray-100 shadow-lg" ref={emblaRef}>
      <div className="flex">
        {promos?.map((promo) => (
          <div 
            key={promo.id} 
            className="flex-[0_0_100%] min-w-0 relative h-75 md:h-112.5"
          >
            {/* Menggunakan Next.js Image untuk optimasi gambar */}
            <Image
              src={promo.imageUrl}
              alt={promo.title}
              fill
              className="object-cover"
              priority={promo.id === 1} // Prioritaskan gambar pertama
            />
            
            {/* Overlay untuk Text Promo */}
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 text-white">
              <h2 className="text-2xl md:text-4xl font-bold">{promo.title}</h2>
              <p className="mt-2 text-sm md:text-lg opacity-90">{promo.description}</p>
              <button className="mt-4 w-fit px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition">
                Cek Promo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCarousel;