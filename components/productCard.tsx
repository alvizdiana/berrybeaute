"use client";
import { useState, useMemo } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  img: string;
  discount?: string;
}

const collections: Product[] = [
  { id: 10, name: "Forever Young Package", price: "£120", category: "skincare", img: "/product-images/produk_pink_1.jpg", discount: "30% Off" },
  { id: 11, name: "Beaute With Me Serum", price: "£120", category: "skincare", img: "/product-images/produk_pink_2.jpg" },
  { id: 12, name: "Glassy Berry Serum", price: "£120", category: "skincare", img: "/product-images/produk_pink_3.jpg", discount: "15% Off" },
  { id: 7, name: "Hairfall Treatment Oil", price: "£120", category: "haircare", img: "/product-images/produk_abu_1.jpg"},
  { id: 8, name: "Beaute Bby All Package", price: "£325", category: "skincare", img: "/product-images/produk_abu_2.jpg", discount: "25% Off" }, //ini ga muncul
  { id: 9, name: "Twin Beaute Bby Serum Package", price: "£230", category: "skincare", img: "/product-images/produk_abu_3.jpg", discount: "30% Off" },
  { id: 1, name: "LipBeaute Lip Liner", price: "£120", category: "makeup", img: "/product-images/lippie_1.jpg", discount: "20% Off" },
  { id: 4, name: "LipBeaute Hydrate Lipstick", price: "£150", category: "makeup", img: "/product-images/lippie_3.jpg", discount: "10% Off" },
  { id: 5, name: "Buy 1 Get 3 (LipBeaute)", price: "£120", category: "makeup", img: "/product-images/lippie_2.jpg", discount: "20% Off" },
  { id: 2, name: "Extra Hydration Serum", price: "£120", category: "skincare", img: "/product-images/skincare_1.jpg", discount: "30% Off" },
  { id: 3, name: "Extra Snail Glow Serum", price: "£250", category: "skincare", img: "/product-images/skincare_2.jpg", discount: "15% Off" },
  { id: 6, name: "10% Aloe Vera Cleansing Oil", price: "£120", category: "skincare", img: "/product-images/skincare_3.jpg" },
  { id: 13, name: "HerBeaute Your Hair", price: "£130", category: "haircare", img: "/product-images/produk_warm_1.jpg" },
  { id: 14, name: "2in1 HerBeaute Oil & Scrub", price: "£120", category: "skincare", img: "/product-images/produk_warm_2.jpg" },
  { id: 15, name: "HerBeaute Your Skin All Package", price: "£350", category: "skincare", img: "/product-images/produk_warm_3.jpg", discount: "20% off" },
];

export default function ProductCatalog() {
  // --- STATE UNTUK FILTER ---
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(500);
  const [isDiscounted, setIsDiscounted] = useState(false);

  // Helper: Ubah "£120" jadi angka 120
  const parsePrice = (priceStr: string) => Number(priceStr.replace(/[^0-9.-]+/g, ""));

  // --- LOGIC FILTERING ---
  const filteredProducts = useMemo(() => {
    return collections.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === "all" || item.category === category;
      const matchesPrice = parsePrice(item.price) <= maxPrice;
      const matchesDiscount = isDiscounted ? item.discount !== undefined : true;

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

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* --- FILTER BAR --- */}
      <div className="mb-10 p-6 bg-(--additional-color) rounded-2xl flex flex-wrap gap-6 items-end shadow-sm">
        {/* Search */}
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
      </div>

      {/* --- PRODUCT GRID --- */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 animate-in fade-in duration-500">
          {filteredProducts.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-4/5 bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                {item.discount && (
                  <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow-sm font-bold text-[10px] z-10 text-black">
                    {item.discount}
                  </div>
                )}
                <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>

              <div className="text-center">
                <h3 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-800">{item.name}</h3>
                <p className="font-bold text-gray-900 mt-1">{item.price}</p>
                <button 
                  onClick={() => openModal(item)}
                  className="mt-3 w-full py-2 bg-(--primary-color) hover:bg-(--secondary-color) transition-colors duration-300 ease-in-out text-white text-[10px] uppercase font-bold rounded-lg cursor-pointer"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 italic">No products found matching your filters.</div>
      )}

      {/* --- MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative bg-white p-8 rounded-2xl max-w-sm w-full shadow-2xl text-center">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-black">✕</button>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-2 text-black">{selectedProduct.name}</h3>
            <p className="text-sm text-gray-500">Choose your preferred online store</p>
            <div className="flex justify-center items-center gap-8 py-4">
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/shops/amazon.svg" alt="Amazon" /></a>
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/shops/shopee.svg" alt="Shopee" /></a>
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/shops/tiktok.svg" alt="Tiktok" /></a>
              <a href="/"><img className="w-8 opacity-70 hover:opacity-100" src="/shops/tokopedia.svg" alt="Tokopedia" /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}