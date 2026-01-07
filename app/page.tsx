"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Ganti gambar setiap 5 detik
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Container */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 animate-slow-zoom" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            GENHERBA
          </h1>
          <p className="text-lg md:text-xl mb-8 font-montserrat">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis modi magnam qui suscipit recusandae iusto ad quam praesentium veritatis distinctio.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-(--secondary-color) hover:bg-(--additional-color) text-white hover:text-(--secondary-color) py-2 px-4 rounded-full transition duration-300">
              Explore Products
            </button>
            <button className="border-2 border-white text-white hover:bg-(--secondary-color) hover:text-(--additional-color) hover:border-(--secondary-color) py-2 px-4 rounded-full transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* About Company */}
        <div className="text-center text-black px-14 mt-16">
          <h2 className="text-3xl font-bold mb-4 font-playfair">About Company</h2>
          <p className="text-lg font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum modi, dolor impedit, fugiat illum ad maiores tenetur minus deleniti aspernatur veniam, molestiae numquam quisquam commodi omnis laboriosam natus ipsam autem officia. Animi omnis eum eius ducimus enim vero, doloremque voluptates maiores dicta quas alias. Minus laboriosam voluptatum architecto quas quae numquam ex aperiam eveniet possimus laborum impedit vitae nihil similique et dolorum, quasi quo distinctio quis eaque provident cum libero. Sed quae consectetur nihil aliquid ullam pariatur voluptatibus perferendis odit! Praesentium dolores qui corrupti, veritatis corporis ut similique doloremque quidem, ducimus, quas earum voluptates. Earum reprehenderit beatae a ipsa?
          </p>
        </div>
      </section>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Products Section */}
        <div className="text-center text-black px-14 mt-16">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Our Products</h2>
          <p className="text-lg font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum modi, dolor impedit, fugiat illum ad maiores tenetur minus deleniti aspernatur veniam, molestiae numquam quisquam commodi omnis laboriosam natus ipsam autem officia. Animi omnis eum eius ducimus enim vero, doloremque voluptates maiores dicta quas alias. Minus laboriosam voluptatum architecto quas quae numquam ex aperiam eveniet possimus laborum impedit vitae nihil similique et dolorum, quasi quo distinctio quis eaque provident cum libero. Sed quae consectetur nihil aliquid ullam pariatur voluptatibus perferendis odit! Praesentium dolores qui corrupti, veritatis corporis ut similique doloremque quidem, ducimus, quas earum voluptates. Earum reprehenderit beatae a ipsa?
          </p>
        </div>
      </section>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* News Section */}
        <div className="text-center text-black px-14 mt-16">
          <h2 className="text-3xl font-bold mb-4 font-playfair">Latest News</h2>
          <p className="text-lg font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cum modi, dolor impedit, fugiat illum ad maiores tenetur minus deleniti aspernatur veniam, molestiae numquam quisquam commodi omnis laboriosam natus ipsam autem officia. Animi omnis eum eius ducimus enim vero, doloremque voluptates maiores dicta quas alias. Minus laboriosam voluptatum architecto quas quae numquam ex aperiam eveniet possimus laborum impedit vitae nihil similique et dolorum, quasi quo distinctio quis eaque provident cum libero. Sed quae consectetur nihil aliquid ullam pariatur voluptatibus perferendis odit! Praesentium dolores qui corrupti, veritatis corporis ut similique doloremque quidem, ducimus, quas earum voluptates. Earum reprehenderit beatae a ipsa?
          </p>
        </div>
      </section>
    </div>
  );
}
