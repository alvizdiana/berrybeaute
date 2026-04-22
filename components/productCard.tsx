"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { products } from '@/app/data/product'; 
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  imageUrl: string; 
  buyBy: string;
  discount?: string;
  code: string; // 0=old, 1=new
}

export default function ProductCatalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(500);
  const [isDiscounted, setIsDiscounted] = useState(false);

  const parsePrice = (priceStr: string) => Number(priceStr.replace(/[^0-9.-]+/g, ""));

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === "all" || item.category === category;
      const matchesPrice = parsePrice(item.price) <= maxPrice;
      const matchesDiscount = isDiscounted ? (item.discount && item.discount !== "") : true;

      return matchesSearch && matchesCategory && matchesPrice && matchesDiscount;
    });
  }, [searchQuery, category, maxPrice, isDiscounted]);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "unset";
  };

  // variants untuk product grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  // variants untuk product card
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* --- FILTER BAR --- */}
      <motion.div 
      initial = {{ opacity: 0 , y : 20}}
      whileInView = {{ opacity: 1 , y : 0}}
      viewport={{ once : true}}
      transition={{ duration : 0.5}}
      className="mb-10 p-6 bg-(--additional-color) rounded-2xl flex flex-wrap gap-6 items-end shadow-sm">
        <div className="flex-1 min-w-50">
          <label className="block text-[10px] font-bold uppercase mb-2 text-gray-500">Search Product</label>
          <input 
            type="text" 
            placeholder="Search name..."
            className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black transition-colors"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="w-full md:w-40">
          <label className="block text-[10px] font-bold uppercase mb-2 text-gray-500">Category</label>
          <select 
            className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none text-black"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Category</option>
            <option value="makeup">Makeup</option>
            <option value="skincare">Skincare</option>
            <option value="haircare">Haircare</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="w-full md:w-48">
          <label className="block text-[10px] font-bold uppercase mb-2 text-gray-500">Max Price: £{maxPrice}</label>
          <input 
            type="range" 
            min="0" 
            max="300" 
            step="10"
            value={maxPrice}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* Discount Checkbox */}
        <div className="flex items-center gap-2 pb-2">
          <input 
            type="checkbox" 
            id="discount"
            className="w-4 h-4 accent-black cursor-pointer"
            onChange={(e) => setIsDiscounted(e.target.checked)}
          />
          <label htmlFor="discount" className="text-xs font-bold uppercase cursor-pointer text-gray-700">Sale Only</label>
        </div>
      </motion.div>

      {/* --- PRODUCT GRID --- */}
      {filteredProducts.length > 0 ? (
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {filteredProducts.map((item) => (
            <motion.div variants={itemVariants} key={item.id} className="group flex flex-col items-center">
              <div className="relative w-full aspect-3/4 rounded-4xl overflow-hidden mb-6 shadow-sm">
                {item.discount && (
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-md z-10 font-bold text-xs text-black">
                    {item.discount} Off
                  </div>
                )}
                
                <Image 
                  src={`/berrybeaute${item.imageUrl}`} 
                  alt={item.name} 
                  loading="lazy"
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="text-center w-full px-2">
                <h3 className="text-sm md:text-base font-semibold uppercase tracking-tight text-[#002B45] leading-tight min-h-10">
                  {item.name}
                </h3>
                <p className="font-extrabold text-lg md:text-xl text-[#002B45] mt-2">
                  {item.price}
                </p>
                
                <button 
                  onClick={() => openModal(item)}
                  className="mt-4 w-full py-3 bg-[#DE6A89] hover:bg-[#c55a77] transition-colors duration-300 text-white text-xs md:text-sm uppercase font-black rounded-2xl cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20 text-gray-400 italic">No products found.</div>
      )}

      {/* Product modal on click */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white p-5 md:p-8 rounded-2xl max-w-[90%] md:max-w-sm w-full shadow-2xl text-center">
            <button onClick={closeModal} className="absolute z-20 cursor-pointer top-4 right-4 text-gray-400 hover:text-black text-xl bg-white/80 rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-sm">✕</button>
            <div className="relative w-full aspect-square rounded-2xl md:rounded-4xl overflow-hidden mb-4 md:mb-6 shadow-inner bg-gray-50">
              <Image 
                src={`/berrybeaute${selectedProduct.imageUrl}`} 
                alt={selectedProduct.name} 
                loading="lazy"
                fill 
                className="object-cover" 
              />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-black">{selectedProduct.name}</h3>
            <p className="text-sm text-gray-500">Choose your preferred online store</p>
            <div className="flex justify-center items-center gap-8 py-4">
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/berrybeaute/shops/amazon.svg" alt="Amazon" /></a>
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/berrybeaute/shops/shopee.svg" alt="Shopee" /></a>
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/berrybeaute/shops/tiktok.svg" alt="Tiktok" /></a>
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/berrybeaute/shops/tokopedia.svg" alt="Tokopedia" /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}