'use client';

import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "What are your services like?",
      answer: "Our services are vibrant, Spirit-filled, and centered on the Word of God. Expect heartfelt worship, powerful teachings, and the tangible presence of the Holy Spirit. Each gathering is an opportunity to encounter God and grow in faith."
    },
    {
      question: "What happens when I visit New Creation Life Church?",
      answer: "You’ll be warmly welcomed by our greeters and ushers who are ready to assist you. You’ll experience genuine love, uplifting worship, and a life-transforming message. Whether it’s your first time or you’re returning, you’ll feel right at home."
    },
    {
      question: "What should I bring to church?",
      answer: "Just come with an open heart ready to receive from God. You can bring your Bible and a notepad if you wish to take notes. We provide everything else you might need to enjoy your worship experience."
    },
    {
      question: "Is there a dress code?",
      answer: "Not at all. We believe God looks at the heart, not the outfit. Feel free to come as you are—whether in casual wear or your Sunday best. Our focus is on worship and fellowship, not appearance."
    },
    {
      question: "Can I invite family and friends?",
      answer: "Absolutely! At New Creation Life Church, we love welcoming new faces. Every service is a great opportunity to invite someone to experience the love, joy, and transforming power of Jesus Christ."
    },
    {
      question: "What if I have more questions?",
      answer: "We’d love to connect with you! Visit the ‘Contact Us’ page, send us a message, or speak to any of our hospitality team members after service. We’re here to serve and help you grow in your walk with God."
    }
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
            Common questions about our church
          </p>
          <p className="text-white/70 text-base max-w-[280px] mb-7 leading-relaxed">
            Discover who we are, what we believe, and how you can be a part of our growing family at New Creation Life Church.
          </p>
          <button className="px-8 py-3.5 bg-[#F5C842] text-black font-medium rounded-full
            transition-all duration-300 hover:bg-[#FCD34D] hover:scale-105 
            hover:shadow-lg hover:shadow-[#F5C842]/40 active:scale-98">
            About Us
          </button>
        </div>

        {/* Right Column - Accordion */}
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
