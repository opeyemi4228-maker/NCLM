import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen min-h-screen bg-black overflow-hidden -mx-[50vw] left-[50%] right-[50%]">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={assets.SUIT}
          alt="Community worship gathering"
          fill
          priority
          className="object-cover"
          quality={100}
          sizes="100vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-[GreatVibes] text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 tracking-wide"
        >
          Living the Life, Manifesting God's Power
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-3 sm:mb-4"
        >
          The Family
        </motion.h1>

        {/* Sub Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 sm:mb-10"
        >
          The • Life • Share
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-white rounded-full text-base sm:text-lg font-semibold
            hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;