import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { assets } from '@/assets/assets';

const BlogCard = ({ article, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <article
      ref={ref}
      className="bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400 cursor-pointer group"
      style={{
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        opacity: inView ? 1 : 0,
        transition: `all 600ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      }}
    >
      {/* Afbeelding */}
      <div className="relative h-[240px] md:h-[220px] sm:h-[200px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-400 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      </div>

      {/* Inhoud */}
      <div className="p-6 flex flex-col h-[calc(100%-240px)]">
        <div className="flex items-center gap-3 mb-3">
          <span className={`inline-block px-3.5 py-1.5 text-xs font-bold tracking-wider text-white rounded-full ${article.categoryColor}`}>
            {article.category}
          </span>
          <time className="text-gray-500 text-sm">{article.date}</time>
        </div>

        <h3 className="text-[22px] font-bold leading-snug mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {article.title}
        </h3>

        <div className="mt-auto flex items-center">
          <span className="text-sm font-semibold inline-flex items-center group-hover:text-blue-600 transition-colors duration-200">
            Lees meer
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

const StoriesArticles = () => {
  const articles = [
    {
      title: "Wandelen in de kracht van de Geest",
      category: "LEVEN IN DE GEEST",
      categoryColor: "bg-blue-500",
      date: "12 oktober 2025",
      image: assets.PORTRAIT,
      imageAlt: "Gelovige heft handen op in aanbidding onder zonlicht, symbool van de Heilige Geest",
      link: "/artikelen/kracht-van-de-geest"
    },
    {
      title: "Geloof dat bergen verzet",
      category: "GELOOF & ONDERRICHT",
      categoryColor: "bg-blue-600",
      date: "8 oktober 2025",
      image: assets.WORSHIP,
      imageAlt: "Man bidt bij zonsopkomst met bergen op de achtergrond",
      link: "/artikelen/geloof-bergen"
    },
    {
      title: "De schoonheid van dienen in Gods huis",
      category: "DIENST & DOEL",
      categoryColor: "bg-blue-400",
      date: "28 september 2025",
      image: assets.SUIT,
      imageAlt: "Vrijwilligers glimlachen en dienen in de kerkelijke gemeenschap",
      link: "/artikelen/dienen-in-gods-huis"
    },
    {
      title: "Een hart van aanbidding: leven voor Zijn glorie",
      category: "AANBIDDING",
      categoryColor: "bg-blue-700",
      date: "20 september 2025",
      image: assets.VENESUIT,
      imageAlt: "Aanbiddingsteam leidt gemeente in oprechte lofprijs",
      link: "/artikelen/hart-van-aanbidding"
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Sectieheader */}
        <div className="relative mb-16">
          <span className="absolute -top-8 left-0 text-[100px] font-black text-gray-50 opacity-40 select-none">
            Nieuwe Schepping
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight relative">
            Verhalen & Boodschappen
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl">
            Ontdek krachtige onderwijzingen, getuigenissen en geloofsverhalen van New Creation Life Church die jouw wandel met Christus zullen versterken.
          </p>
        </div>

        {/* Artikelraster */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10">
          {articles.map((article, index) => (
            <BlogCard
              key={article.title}
              article={article}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesArticles;
