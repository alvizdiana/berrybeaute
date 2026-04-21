"use client";

import ProductCard from "@/components/productCard";
import PromoCarousel from "@/components/promoCarousel";
import { motion } from  "framer-motion";

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/berrybeaute' : '';
 
const promosData = [
    { id: 1, title: 'Summer Sale', description: 'Get up to 30% off on selected items!', imageUrl: `${prefix}/promos/summer_sale.png` },
    { id: 2, title: 'New Arrivals', description: 'Check out our latest collection of skincare products.', imageUrl: `${prefix}/promos/new_arrivals.png` },
    { id: 3, title: 'Exclusive Offer', description: 'Get a free gift with every purchase over $500.', imageUrl: `${prefix}/promos/special_offers.png` },
    { id: 4, title: 'Holiday Special', description: 'Enjoy special discounts during the holiday season.', imageUrl: `${prefix}/promos/holiday_special.png` },
]
export default function Catalog() {
    return (
        <div className="px-15 pt-25">
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
                <PromoCarousel promos={promosData} />
            </motion.div>
            <div className="min-h-screen pt-8 md:pt-20">
                <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-6xl text-center font-playfair font-semibold text-(--primary-color) py-7 mb-5 italic">Find Your Perfect Product Here</h1>
                    <div className="w-20 h-px bg-black mt-2 md:mt-5 opacity-20"></div>
                </motion.div>
                <ProductCard/>
            </div>
        </div>
    );
}