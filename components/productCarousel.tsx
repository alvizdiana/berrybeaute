"use client"; // Penting: Ini adalah Client Component karena menggunakan useState

import { useState } from 'react';
import ProductSlide from './productSlides';
import { products } from '@/app/data/product'

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Tampilan Slide Aktif */}
      <ProductSlide product={products[currentIndex]} />

      {/* Tombol Navigasi Kiri */}
      <button
        onClick={goToPrevious}
        className="flex align-center absolute top-1/2 left-4 transform -translate-y-1/2 bg-(--secondary-color) text-(--additional-color) p-2 rounded-full shadow-lg hover:bg-(--primary-color) focus:outline-none cursor-pointer"
      >
        ‹ {/* Panah Kiri */}
      </button>

      {/* Tombol Navigasi Kanan */}
      <button
        onClick={goToNext}
        className="flex align-center absolute top-1/2 right-4 transform -translate-y-1/2 bg-(--secondary-color) text-(--additional-color) p-2 rounded-full shadow-lg hover:bg-(--primary-color) focus:outline-none cursor-pointer"
      >
        › {/* Panah Kanan */}
      </button>

      {/* Indikator Dot */}
      <div className="flex justify-center mt-2">
        {products.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === slideIndex ? 'bg-(--secondary-color)' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}