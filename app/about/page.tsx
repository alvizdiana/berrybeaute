"use client";
import AboutComponent from "@/components/aboutComponent";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-15 pb-20">
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-h-[40vh] flex flex-col items-center justify-center pt-32 pb-16">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">How's Berrybeauté Start</span>
                <h1 className="text-4xl md:text-7xl text-center font-playfair font-semibold text-(--primary-color) italic">
                About Us
                </h1>
                <div className="w-20 h-px bg-black mt-8 opacity-20"></div>
            </motion.div>
            <AboutComponent/>
        </div>
    );
}