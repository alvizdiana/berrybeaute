import { motion } from "framer-motion";

export default function AboutBbOvv() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-playfair font-semibold text-(--primary-color) italic">
          About BerryBeauté
        </h2>
        <div className="w-20 h-px bg-(--secondary-color) mx-auto mt-8 rounded-full opacity-20" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <motion.div variants={itemVariants} className="md:col-span-7 p-8 bg-(--additional-color)/40 backdrop-blur-sm border-l-4 border-(--secondary-color) rounded-2xl shadow-sm">
          <h4 className="text-xl font-playfair font-bold text-(--primary-color) mb-4 uppercase tracking-wider">What is BerryBeauté?</h4>
          <p className="font-montserrat text-gray-700 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nostrum amet tenetur, eum blanditiis unde quod consequatur.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-5 p-8 bg-(--secondary-color) text-(--additional-color) rounded-2xl shadow-lg">
          <h4 className="text-xl font-playfair font-bold mb-4">Vision & Mission</h4>
          <ul className="font-montserrat space-y-3 text-sm italic">
            <li className="flex gap-2"><span>✦</span> Corrupti vel excepturi porro vel excepturi.</li>
            <li className="flex gap-2"><span>✦</span> Similique ipsam animi facere impedit?</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-5 p-8 bg-(--secondary-color)/10 border border-(--secondary-color)/30 rounded-2xl">
          <h4 className="text-xl font-playfair font-bold text-(--active-color) mb-4">Brand Value</h4>
          <div className="flex flex-wrap gap-2">
            {['Cruelty-Free', 'Paraben-Free', 'Eco-Friendly'].map((val) => (
              <span key={val} className="px-3 py-1 bg-(--active-color)/10 text-(--active-color) rounded-full text-xs font-bold">
                {val}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-7 p-8 bg-(--additional-color)/40 border-r-4 border-(--secondary-color) text-right rounded-2xl">
          <h4 className="text-xl font-playfair font-bold text-(--primary-color) mb-4 uppercase">Our Commitment</h4>
          <p className="font-montserrat text-gray-700">
            Sapiente nobis temporibus quisquam animi maxime porro iusto iure voluptates minus magnam.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}