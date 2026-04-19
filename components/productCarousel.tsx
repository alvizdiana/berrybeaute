"use client";

import { useState } from 'react';
import ProductSlide from './productSlides';
import { products } from '@/app/data/product'; 

export default function ProductCarousel() {
  // Filter produk yang hanya memiliki code "1" atau barang baru
  const filteredProducts = products.filter(product => product.code === "1");
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Jika tidak ada produk dengan code "1", tampilkan pesan kosong agar tidak error
  if (filteredProducts.length === 1) {
    return <div className="text-center p-10">Tidak ada produk untuk ditampilkan.</div>;
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? filteredProducts.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === filteredProducts.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Tampilan Slide Aktif */}
      <ProductSlide product={filteredProducts[currentIndex]} />

      {/* Tombol Navigasi Kiri */}
      <button
        onClick={goToPrevious}
        className="flex align-center absolute top-1/2 left-4 transform -translate-y-1/2 bg-(--secondary-color) text-(--additional-color) p-2 rounded-full shadow-lg hover:bg-(--primary-color) focus:outline-none cursor-pointer"
      >
        ‹
      </button>

      {/* Tombol Navigasi Kanan */}
      <button
        onClick={goToNext}
        className="flex align-center absolute top-1/2 right-4 transform -translate-y-1/2 bg-(--secondary-color) text-(--additional-color) p-2 rounded-full shadow-lg hover:bg-(--primary-color) focus:outline-none cursor-pointer"
      >
        ›
      </button>

      {/* Indikator Dot */}
      <div className="flex justify-center mt-2">
        {filteredProducts.map((_, slideIndex) => (
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