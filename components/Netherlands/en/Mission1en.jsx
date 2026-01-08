'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { assets } from '@/assets/assets';

// Typewriter effect
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

// Feature Card
const FeatureCard = ({ title, description, cta, image, delay }) => {
  // resolve image import objects (Next.js/static) or plain URL strings
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

// Mission Section
const Mission1 = () => {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mission Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center max-w-[900px] mx-auto leading-tight text-gray-900"
        >
          A church that believes in Jesus, a{' '}
          <TypewriterText text="church that loves God" /> and people.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-[700px] mx-auto mt-6 mb-16 leading-relaxed"
        >
          Overwhelmed by the grace we’ve received through Jesus Christ, we are a family
          passionate about worship, anchored in community, and driven by a vision to see
          God’s Kingdom transform lives across the earth.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            title="I'm New"
            description="We’re thrilled to welcome you. Let us help you find your place in the family."
            cta="Plan a Visit"
            image={assets.welcome}
            delay={0}
          />
          <FeatureCard
            title="Connect With A Pastor"
            description="Our pastors are here to walk with you, pray with you, and help you grow in faith."
            cta="Get Connected"
            image={assets.PORTRAIT}
            delay={150}
          />
          <FeatureCard
            title="Join a Group"
            description="No matter where you are on your faith journey, there’s a circle where you belong."
            cta="View Groups"
            image={assets.join}
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Mission1;
