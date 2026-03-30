"use client";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "5 Ways to Achieve Glass Skin Naturally",
    excerpt: "The secret to radiant Korean skin that you can try at home with selected products...",
    category: "Skincare Tips",
    date: "March 15, 2024",
    image: "/article/glass_skin_tips.jpg",
  },
  {
    id: 2,
    title: "Easiest Way to Find Your Perfect Lipstick Shade",
    excerpt: "Many people are confused about the order of using lip products. Let's discuss the differences...",
    category: "Makeup Tutorial",
    date: "March 12, 2024",
    image: "/article/lipstick_shade_tips.jpg",
  },
  {
    id: 3,
    title: "The Importance of Double Cleansing in Your Skincare Routine",
    excerpt: "Cleansing your face once is not enough. Why is double cleansing necessary?",
    category: "Beauty Routine",
    date: "March 10, 2024",
    image: "/article/double_cleansing.jpg",
  },
];

export default function Article() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-15 pb-20">
      <div className="min-h-[40vh] flex flex-col items-center justify-center pt-32 pb-16">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">Journal & Tips</span>
        <h1 className="text-4xl md:text-7xl text-center font-playfair font-semibold text-(--primary-color) italic">
          Our Articles
        </h1>
        <div className="w-20 h-px bg-black mt-8 opacity-20"></div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post, index) => (
          <article 
            key={post.id} 
            className={`group cursor-pointer ${index === 0 ? "md:col-span-2 md:flex gap-8" : ""}`}
          >
            {/* Image Container */}
            <div className={`relative overflow-hidden rounded-2xl bg-gray-100 ${index === 0 ? "md:w-3/5 aspect-16/10" : "aspect-4/5 mb-6"}`}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Text Content */}
            <div className={`${index === 0 ? "md:w-2/5 flex flex-col justify-center mt-6 md:mt-0" : ""}`}>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">{post.date}</p>
              <h2 className={`font-playfair text-black group-hover:text-(--secondary-color)/70 transition-colors leading-tight mb-4 ${index === 0 ? "text-3xl md:text-4xl" : "text-xl"}`}>
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>
              <button className="text-[10px] uppercase font-bold tracking-widest border-b border-black pb-1 w-fit hover:text-(--secondary-color)/70 cursor-pointer transition-opacity">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Section (Optional Bonus) */}
      <div className="mt-32 p-12 bg-gray-50 rounded-3xl text-center">
        <h3 className="font-playfair text-2xl mb-4 italic">Join our beauty circle</h3>
        <p className="text-gray-500 text-sm mb-8">Get exclusive beauty tips straight to your email.</p>
        <div className="flex max-w-md mx-auto border-b border-black pb-2">
          <input type="email" placeholder="Your email address" className="bg-transparent flex-1 outline-none text-sm" />
          <button className="text-[10px] uppercase font-bold tracking-widest cursor-pointer hover:text-gray-600">Subscribe</button>
        </div>
      </div>
    </div>
  );
}