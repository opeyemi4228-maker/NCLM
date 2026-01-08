import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const FeatureCard = ({ title, color, delay }) => (
  <div 
    className={`${color} p-8 text-white transition-all duration-400 hover:-translate-y-2 hover:brightness-110`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-white/80 font-light text-sm mb-6">
      Ontdek wat God doet door New Creation Life Church en hoe jij daar deel van kunt uitmaken.
    </p>
    <button className="flex items-center text-sm font-medium group">
      Lees Meer
      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

const Overlap1NL = () => {
  const features = [
    { title: 'Onze Kerkfamilie', color: 'bg-[#2C7A7B]' },
    { title: 'Onze Missie & Visie', color: 'bg-[#8B3A3A]' },
    { title: 'Sluit je aan bij een Levensgroep', color: 'bg-[#D97706]' },
    { title: 'Wat Wij Geloven', color: 'bg-[#F59E0B]' }
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto -mt-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl">
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

export default Overlap1NL;
