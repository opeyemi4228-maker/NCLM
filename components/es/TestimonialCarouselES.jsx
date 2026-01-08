import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      quote:
        "Formar parte de New Creation Life Church ha transformado por completo mi caminar con Dios. Cada servicio se siente como un encuentro personal con Su presencia.",
      author: "Grace Okon",
      title: "Miembro desde 2019",
      image: "/images/testimonials/worship-bg-1.jpg",
    },
    {
      id: 2,
      quote:
        "Esta familia me ha enseñado lo que significa el verdadero amor y compañerismo en Cristo. Encontré no solo una iglesia, sino un hogar lleno de alegría, sanación y crecimiento.",
      author: "John Peter",
      title: "Líder Juvenil",
      image: "/images/testimonials/worship-bg-2.jpg",
    },
    {
      id: 3,
      quote:
        "Cada vez que entro al servicio, experimento paz y restauración. Agradezco a Dios por conectarme con este ministerio; realmente es un lugar de nuevos comienzos.",
      author: "Ngozi Chukwu",
      title: "Miembro del Coro",
      image: "/images/testimonials/worship-bg-3.jpg",
    },
    {
      id: 4,
      quote:
        "New Creation Life Church me ayudó a redescubrir mi fe y mi propósito. La Palabra es poderosa, práctica y llena de gracia.",
      author: "David Lawrence",
      title: "Profesional de Negocios",
      image: "/images/testimonials/worship-bg-4.jpg",
    },
    {
      id: 5,
      quote:
        "La calidez, unidad y amor en esta iglesia son incomparables. Puedes sentir verdaderamente el corazón de Jesús en todo lo que hacen.",
      author: "Sarah James",
      title: "Departamento de Ujieres",
      image: "/images/testimonials/worship-bg-5.jpg",
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 20000); // 20 segundos
      return () => clearInterval(timer);
    }
  }, [isPaused, testimonials.length]);

  const navigate = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === "next") return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      className="relative h-[600px] md:h-[500px] sm:h-[380px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence custom={1}>
          <motion.div
            key={testimonials[currentSlide].id}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${testimonials[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Testimonio */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[currentSlide].id}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="max-w-[850px] text-center mx-auto"
          >
            <p className="text-2xl md:text-[28px] text-white font-medium leading-relaxed tracking-[0.01em] drop-shadow-lg">
              “{testimonials[currentSlide].quote}”
            </p>
            <div className="mt-8 flex flex-col items-center">
              <div className="w-[60px] h-[2px] bg-white/40 mb-5" />
              <cite className="font-script text-2xl text-white not-italic">
                {testimonials[currentSlide].author},{" "}
                {testimonials[currentSlide].title}
              </cite>
            </div>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={() => navigate("prev")}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/15 
        backdrop-blur border-2 border-white/40 flex items-center justify-center transition-all
        duration-300 hover:scale-110 hover:bg-white/30 hover:border-white/70 focus:outline-none
        focus:ring-2 focus:ring-white/50 sm:bottom-6 sm:top-auto"
        aria-label="Testimonio anterior"
      >
        <FiChevronLeft className="text-white text-2xl" />
      </button>

      <button
        onClick={() => navigate("next")}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/15 
        backdrop-blur border-2 border-white/40 flex items-center justify-center transition-all
        duration-300 hover:scale-110 hover:bg-white/30 hover:border-white/70 focus:outline-none
        focus:ring-2 focus:ring-white/50 sm:bottom-6 sm:top-auto"
        aria-label="Siguiente testimonio"
      >
        <FiChevronRight className="text-white text-2xl" />
      </button>

      {/* Dots de Navegación */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${
                currentSlide === index
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
