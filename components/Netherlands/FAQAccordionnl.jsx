import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQAccordionNL = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "Hoe zien jullie diensten eruit?",
      answer:
        "Onze diensten zijn levendig, Geest-vervuld en volledig gericht op het Woord van God. Verwacht oprechte aanbidding, krachtige prediking en de tastbare aanwezigheid van de Heilige Geest. Elke samenkomst is een kans om God te ontmoeten en te groeien in geloof.",
    },
    {
      question: "Wat gebeurt er wanneer ik New Creation Life Church bezoek?",
      answer:
        "Je wordt hartelijk verwelkomd door onze gastheren en begeleiders die klaarstaan om je te helpen. Je zult oprechte liefde, opwekkende aanbidding en een leven-veranderende boodschap ervaren. Of het nu je eerste bezoek is of dat je terugkomt — je zult je direct thuis voelen.",
    },
    {
      question: "Wat moet ik meenemen naar de kerk?",
      answer:
        "Kom gewoon met een open hart, bereid om van God te ontvangen. Je kunt je Bijbel en een notitieboekje meenemen als je aantekeningen wilt maken. Wij zorgen voor alles wat je verder nodig hebt om van de dienst te genieten.",
    },
    {
      question: "Is er een kledingvoorschrift?",
      answer:
        "Helemaal niet. Wij geloven dat God naar het hart kijkt, niet naar de kleding. Voel je vrij om te komen zoals je bent — of dat nu in je dagelijkse kleding is of in je mooiste outfit. Onze focus ligt op aanbidding en gemeenschap, niet op uiterlijk.",
    },
    {
      question: "Mag ik familie en vrienden uitnodigen?",
      answer:
        "Zeker! Bij New Creation Life Church heten we nieuwe gezichten van harte welkom. Elke dienst is een geweldige gelegenheid om iemand uit te nodigen om de liefde, vreugde en transformerende kracht van Jezus Christus te ervaren.",
    },
    {
      question: "Wat als ik nog meer vragen heb?",
      answer:
        "We komen graag met je in contact! Bezoek de pagina ‘Contact’, stuur ons een bericht of spreek na de dienst een van onze gastvrijheidsteammedewerkers aan. We zijn er om je te helpen groeien in je wandel met God.",
    },
  ];

  return (
    <section className="bg-[#1E4E4E] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[30%_70%] gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-4">
            FAQ
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Veelgestelde vragen over onze kerk
          </p>
          <p className="text-white/70 text-base max-w-[280px] mb-7 leading-relaxed">
            Ontdek wie we zijn, wat we geloven en hoe je deel kunt uitmaken van onze groeiende familie bij New Creation Life Church.
          </p>
          <button
            aria-label="Meer over ons"
            className="px-8 py-3.5 bg-[#F5C842] text-black font-medium rounded-full
              transition-all duration-300 hover:bg-[#FFD94B] hover:scale-105 
              hover:shadow-lg hover:shadow-[#F5C842]/40 active:scale-95"
          >
            Over Ons
          </button>
        </div>

        {/* Right Column - Accordion */}
        <div className="space-y-px">
          {faqItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-md">
              <button
                onClick={() =>
                  setOpenItem(openItem === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left bg-white/5
                  hover:bg-white/10 transition-colors duration-200 border-b border-white/15"
                aria-expanded={openItem === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-lg font-normal text-white">
                  {item.question}
                </span>
                <FiPlus
                  className={`text-white text-2xl transition-transform duration-300 ${
                    openItem === index ? "rotate-45" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-panel-${index}`}
                className={`transition-all duration-500 ease-in-out bg-white/5 overflow-hidden
                  ${
                    openItem === index
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                aria-hidden={openItem !== index}
              >
                <div className="p-6 font-light text-white/85 leading-relaxed border-l-4 border-[#F5C842]">
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

export default FAQAccordionNL;
