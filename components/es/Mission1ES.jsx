'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { assets } from '@/assets/assets';

// Efecto de máquina de escribir
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      let currentText = '';
      const interval = setInterval(() => {
        if (currentText.length < text.length) {
          currentText += text[currentText.length];
          setDisplayText(currentText);
        } else {
          clearInterval(interval);
        }
      }, 60);
      return () => clearInterval(interval);
    } else {
      setDisplayText('');
    }
  }, [inView, text]);

  return (
    <span ref={ref} className="relative text-[#F5C842]">
      {displayText}
      {inView && displayText.length < text.length && (
        <span className="animate-blink">|</span>
      )}
    </span>
  );
};

// Tarjeta de Funcionalidad
const FeatureCard = ({ title, description, cta, image, delay }) => {
  const imageUrl =
    typeof image === 'string'
      ? image
      : image?.src || image?.default?.src || image?.default || image?.url || '';

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative h-[340px] rounded-2xl overflow-hidden group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
    >
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 text-white">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-white/90 text-sm mb-4 leading-relaxed">{description}</p>
        <button className="flex items-center text-sm font-medium group">
          {cta}
          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
};

// Sección Misión
const Mission1 = () => {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la Misión */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center max-w-[900px] mx-auto leading-tight text-gray-900"
        >
          Una iglesia que cree en Jesús, una{' '}
          <TypewriterText text="iglesia que ama a Dios" /> y a las personas.
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-[700px] mx-auto mt-6 mb-16 leading-relaxed"
        >
          Abrumados por la gracia que hemos recibido a través de Jesucristo, somos una familia
          apasionada por la adoración, anclada en la comunidad y guiada por la visión de ver
          el Reino de Dios transformar vidas en toda la tierra.
        </motion.p>

        {/* Tarjetas de Funcionalidades */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="Soy Nuevo"
            description="Estamos encantados de darte la bienvenida. Permítenos ayudarte a encontrar tu lugar en la familia."
            cta="Planificar una Visita"
            image={assets.welcome}
            delay={0}
          />
          <FeatureCard
            title="Conéctate con un Pastor"
            description="Nuestros pastores están aquí para caminar contigo, orar contigo y ayudarte a crecer en la fe."
            cta="Conectarse"
            image={assets.PORTRAIT}
            delay={150}
          />
          <FeatureCard
            title="Únete a un Grupo"
            description="No importa dónde te encuentres en tu camino de fe, hay un grupo donde perteneces."
            cta="Ver Grupos"
            image={assets.join}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Mission1;
