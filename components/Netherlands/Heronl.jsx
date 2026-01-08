import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const HeroNL = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Achtergrondafbeelding */}
      <div className="absolute inset-0">
        <Image
          src={assets.SUIT}
          alt="Gemeenschapsaanbidding"
          fill
          priority
          className="object-cover scale-[1.05] transform"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* Hero-inhoud */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-[GreatVibes] text-lg md:text-xl lg:text-2xl text-white/90 mb-4 tracking-wide"
        >
          Levend in het Licht, Manifesterend Gods Kracht
        </motion.p>

        {/* Hoofdtitel */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-4"
        >
          De Familie
        </motion.h1>

        {/* Subtitel */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-medium text-2xl md:text-3xl lg:text-4xl text-white/90 mb-10"
        >
          Het • Leven • Delen
        </motion.h2>

        {/* CTA-knop */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="px-10 py-4 border-2 border-white rounded-full text-lg font-semibold
            hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
        >
          Lees Meer
        </motion.button>
      </div>
    </section>
  );
};

export default HeroNL;
