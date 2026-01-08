import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "¿Cómo son sus servicios?",
      answer: "Nuestros servicios son vibrantes, llenos del Espíritu y centrados en la Palabra de Dios. Espera adoración sincera, enseñanzas poderosas y la presencia tangible del Espíritu Santo. Cada reunión es una oportunidad para encontrarte con Dios y crecer en la fe."
    },
    {
      question: "¿Qué sucede cuando visito New Creation Life Church?",
      answer: "Serás recibido calurosamente por nuestros anfitriones y ujieres, listos para ayudarte. Experimentarás amor genuino, adoración edificante y un mensaje que transforma vidas. Ya sea tu primera vez o estés regresando, te sentirás como en casa."
    },
    {
      question: "¿Qué debo llevar a la iglesia?",
      answer: "Solo ven con un corazón abierto, listo para recibir de Dios. Puedes traer tu Biblia y un cuaderno si deseas tomar notas. Nosotros proporcionamos todo lo demás que puedas necesitar para disfrutar de la adoración."
    },
    {
      question: "¿Hay código de vestimenta?",
      answer: "Para nada. Creemos que Dios mira el corazón, no la ropa. Siéntete libre de venir como eres, ya sea con ropa casual o tu mejor atuendo dominical. Nuestro enfoque está en la adoración y la comunión, no en la apariencia."
    },
    {
      question: "¿Puedo invitar a familiares y amigos?",
      answer: "¡Por supuesto! En New Creation Life Church nos encanta recibir nuevas caras. Cada servicio es una excelente oportunidad para invitar a alguien a experimentar el amor, la alegría y el poder transformador de Jesucristo."
    },
    {
      question: "¿Y si tengo más preguntas?",
      answer: "¡Nos encantaría conectarnos contigo! Visita la página de 'Contáctanos', envíanos un mensaje o habla con cualquier miembro de nuestro equipo de hospitalidad después del servicio. Estamos aquí para servirte y ayudarte a crecer en tu caminar con Dios."
    }
  ];

  return (
    <section className="bg-[#1E4E4E] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[30%_70%] gap-12 lg:gap-16">
        {/* Columna Izquierda */}
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Preguntas comunes sobre nuestra iglesia
          </p>
          <p className="text-white/70 text-base max-w-[280px] mb-7 leading-relaxed">
            Descubre quiénes somos, en qué creemos y cómo puedes ser parte de nuestra creciente familia en New Creation Life Church.
          </p>
          <button className="px-8 py-3.5 bg-[#F5C842] text-black font-medium rounded-full
            transition-all duration-300 hover:bg-[#FCD34D] hover:scale-105 
            hover:shadow-lg hover:shadow-[#F5C842]/40 active:scale-98">
            Sobre Nosotros
          </button>
        </div>

        {/* Columna Derecha - Acordeón */}
        <div className="space-y-px">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white/5
                  hover:bg-white/8 transition-colors duration-200 border-b border-white/15"
                aria-expanded={openItem === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-normal text-white">{item.question}</span>
                <FiPlus
                  className={`text-white text-2xl transition-transform duration-300
                    ${openItem === index ? 'rotate-45' : ''}`}
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-out bg-white/5 
                  ${openItem === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={openItem !== index}
              >
                <div className="p-6 font-light text-white/85 leading-relaxed border-l-3 border-[#F5C842]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
