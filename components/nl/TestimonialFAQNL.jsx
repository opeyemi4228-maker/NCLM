import React from 'react';
import FAQAccordion from './FAQAccordionNL';
import TestimonialCarousel from './TestimonialCarouselNL';

const TestimonialFAQ = () => {
  return (
    <section className="w-full">
      <TestimonialCarousel />
      <FAQAccordion />
    </section>
  );
};

export default TestimonialFAQ;