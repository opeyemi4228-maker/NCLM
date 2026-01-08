import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiMonitor } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { assets } from "@/assets/assets";
import Image from "next/image";

const JoinUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative w-full py-24 px-6 md:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #D1E7F5 0%, #E8DFF5 100%)",
      }}
    >
      {/* Live Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-6 right-6 flex items-center px-4 py-2 bg-emerald-500 rounded-full shadow-lg animate-pulse"
      >
        <div className="w-2 h-2 rounded-full bg-white mr-2" />
        <span className="text-white text-xs font-bold tracking-wider">
          EN VIVO
        </span>
      </motion.div>

      {/* Decorative Script Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="font-script font-bold text-[60px] md:text-[80px] text-white text-center leading-tight">
          No podemos esperar para adorar contigo
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-[1000px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1E3A8A] tracking-tight mb-4"
        >
          Únete a Nosotros Este Domingo
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
        >
          10:30AM — en persona y en línea. <br /> Experimenta la presencia de Dios,
          conéctate con la familia y crece en gracia.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            className="flex items-center px-8 py-4 bg-[#1A1A1A] text-white rounded-full
              font-semibold transition-all duration-300 hover:bg-[#2A2A2A] hover:scale-[1.05]
              hover:shadow-xl active:scale-[0.98] min-w-[220px]"
          >
            <FiMapPin className="mr-2" />
            Asistir en Persona
          </button>

          <button
            className="flex items-center px-8 py-4 bg-white text-[#1A1A1A] rounded-full
              font-semibold border-2 border-gray-200 transition-all duration-300 
              hover:bg-gray-50 hover:border-gray-400 hover:scale-[1.05] hover:shadow-lg
              active:scale-[0.98] min-w-[220px]"
          >
            <FiMonitor className="mr-2" />
            Ver en Línea
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 1 }}
          className="relative h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-2xl"
        >
          <Image
            src={assets.churchworship}
            alt="Congregación gozosa adorando junta en New Creation Life Church"
            className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
