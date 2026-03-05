import React from 'react';

const AboutComponent = () => {
  // Data konten
  const items = [
    { id: 1, type: 'image', src: "/about/about_1.jpg", alt: 'Got a random idea' },
    { id: 2, type: 'text', content: 'March 2006', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 2006. Harum eum aspernatur asperiores.' },
    { id: 3, type: 'text', content: 'August 2006', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eum aspernatur asperiores..' },
    { id: 4, type: 'image', src: "/about/about_2.jpg", alt: 'Start discussion with team' },
    { id: 5, type: 'image', src: "/about/about_3.jpg", alt: 'Product launching' },
    { id: 6, type: 'text', content: 'June 2008', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A rerum temporibus ullam!' },
    { id: 7, type: 'text', content: 'April 2015', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae architecto ipsum voluptatibus.' },
    { id: 8, type: 'image', src: "/about/about_4.jpg", alt: 'Visit Berrybeuté first offline store'},
    { id: 9, type: 'image', src: "/about/about_5.jpg", alt: 'Berrybeauté Company Building'},
    { id: 10, type: 'text', content: 'November 2021', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae architecto ipsum voluptatibus.' }
  ];

  // Clip path
  const shapeStyle = {
    clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
  };

  const shapeStyleMirror = {
    clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%, 0% 50%)",
  };

  // Style baru untuk panah ke atas (item paling bawah)
  const shapeStyleUp = { clipPath: "polygon(0% 20%, 50% 0%, 100% 20%, 100% 100%, 0% 100%)" };

  return (
    <div className="max-w-4xl mx-auto p-8 relative">
      {/* Garis Tengah (Divider) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-(--secondary-color) -translate-x-1/2 hidden md:block" style={{ bottom: '300px' }}></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
        {items.map((item, index) => {
          const isLastTwo = index >= items.length - 2;

          // Render untuk 2 item terakhir (Full Width / Tengah)
          if (isLastTwo) {
            return (
              <div key={item.id} className="md:col-span-2 flex justify-center">
                {item.type === 'image' ? (
                  <div className="w-full md:w-1/2 h-48 md:h-64 bg-gray-200 overflow-hidden shadow-lg">
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ) : (
                  <div 
                    style={shapeStyleUp}
                    className="w-full md:w-1/2 h-auto bg-(--secondary-color) text-white flex flex-col justify-center items-center p-8 md:p-12 text-center"
                  >
                    <h2 className="text-xl md:text-2xl font-bold mb-2 mt-4">{item.content}</h2>
                    <p className="md:text-(--additional-color)">{item.desc}</p>
                  </div>
                )}
              </div>
            );
          }
          
          if (item.type === 'image') {
            return (
              <div key={item.id} className="w-full h-32 md:h-64 bg-gray-200 overflow-hidden shadow-lg">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            );
          } else {
            // Logika untuk menentukan arah panah (kekanan atau kiri)
            const isRightSide = (index + 1) % 2 === 0;
            return (
              <div 
                key={item.id} 
                style={isRightSide ? shapeStyleMirror : shapeStyle}
                className="w-full h-12 md:h-64 bg-(--secondary-color) text-white flex flex-col justify-center p-6 md:p-12 mb-10"
              >
                <h2 className="text-xl md:text-2xl font-bold mb-2">{item.content}</h2>
                <p className="hidden md:block md:text-(--additional-color)">{item.desc}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AboutComponent;