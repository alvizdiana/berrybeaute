import { motion } from "framer-motion";

export default function Achievement(){
    return(
        <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
            <div className="flex justify-center text-center pt-14">
                <div>
                    <h2 className="text-4xl font-playfair font-semibold text-(--primary-color) pt-7 italic">2025 Achievement</h2>
                    <div className="w-20 h-px bg-(--secondary-color) mx-auto mt-8 rounded-full opacity-20" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-12 cursor-pointer">
                <div className="flex flex-col items-center gap-2 group">
                    <img src="/badge/badge_1.png" alt="Most Trusted Brand 2025" className="h-28 grayscale group-hover:grayscale-0 group-hover:scale-110 transform transition-all ease-in-out duration-300"/>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <img src="/badge/badge_2.png" alt="Most Trusted Brand 2025" className="h-18 grayscale group-hover:grayscale-0 group-hover:scale-110 transform transition-all ease-in-out duration-300"/>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <img src="/badge/badge_3.png" alt="Most Trusted Brand 2025" className="h-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transform transition-all ease-in-out duration-300"/>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <img src="/badge/badge_4.png" alt="Most Trusted Brand 2025" className="h-26 grayscale group-hover:grayscale-0 group-hover:scale-110 transform transition-all ease-in-out duration-300"/>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                    <img src="/badge/badge_5.png" alt="Most Trusted Brand 2025" className="h-16 grayscale group-hover:grayscale-0 group-hover:scale-110 transform transition-all ease-in-out duration-300"/>
                </div>
            </div>
        </motion.div>
    )
}