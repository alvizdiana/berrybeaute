import React from 'react';
import { motion } from 'framer-motion';

const AboutComponent = () => {
  const items = [
    { id: 1, type: 'image', src: "/berrybeaute/about/about_1.jpg", alt: 'Idea' },
    { id: 2, type: 'text', content: 'March 2006', desc: 'Got a random idea. Lorem ipsum dolor sit amet.' },
    { id: 3, type: 'image', src: "/berrybeaute/about/about_2.jpg", alt: 'Discussion' },
    { id: 4, type: 'text', content: 'August 2006', desc: 'Start discussion with team. Harum eum aspernatur.' },
    { id: 5, type: 'image', src: "/berrybeaute/about/about_3.jpg", alt: 'Product launching' },
    { id: 6, type: 'text', content: 'June 2008', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum temporibus ullam!' },
    { id: 7, type: 'image', src: "/berrybeaute/about/about_4.jpg", alt: 'Visit Berrybeuté first offline store'},
    { id: 8, type: 'text', content: 'April 2015', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae architecto ipsum voluptatibus.' },
    { id: 9, type: 'image', src: "/berrybeaute/about/about_5.jpg", alt: 'Berrybeauté Company Building'},
    { id: 10, type: 'text', content: 'November 2021', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae architecto ipsum voluptatibus.' }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 overflow-hidden">
      <div className="flex flex-col gap-y-10 md:gap-y-30">
        {items.map((item, index) => {
          const isImage = item.type === 'image';
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex w-full ${isImage ? 'justify-start' : 'justify-end'} md:-mt-16 first:mt-0`}
            >
              <div className={`w-full md:w-7/12 ${isImage ? 'md:pr-10' : 'md:pl-10'}`}>
                {isImage ? (
                  <div className="relative group">
                    <div className="overflow-hidden rounded-2xl shadow-2xl">
                      <img 
                        src={item.src} 
                        alt={item.alt} 
                        className="w-full h-64 md:h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-(--secondary-color) -z-10 opacity-30" />
                  </div>
                ) : (
                  <div className="p-8 md:p-12 bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-playfair font-bold text-(--primary-color) mb-3 italic">
                      {item.content}
                    </h3>
                    <p className="font-montserrat text-gray-600 leading-relaxed border-l-2 border-(--secondary-color) pl-4">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutComponent;