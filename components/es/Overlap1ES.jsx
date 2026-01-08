import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, color, delay }) => (
  <motion.div
    className={`${color} p-8 text-white flex flex-col justify-between transition-all duration-400 hover:-translate-y-2 hover:brightness-110`}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay / 1000, duration: 0.6, ease: 'easeOut' }}
  >
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-white/80 font-light text-sm mb-6">
      Descubre lo que Dios está haciendo a través de New Creation Life Church y cómo puedes ser parte de ello.
    </p>
    <button className="flex items-center text-sm font-medium group mt-auto">
      Saber Más
      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  </motion.div>
);

const Overlap1 = () => {
  const features = [
    { title: 'Nuestra Familia de la Iglesia', color: 'bg-[#2C7A7B]' },
    { title: 'Nuestra Misión y Visión', color: 'bg-[#8B3A3A]' },
    { title: 'Únete a un Grupo de Vida', color: 'bg-[#D97706]' },
    { title: 'Lo Que Creemos', color: 'bg-[#F59E0B]' }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto -mt-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl rounded-[20px] overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            color={feature.color}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default Overlap1;
