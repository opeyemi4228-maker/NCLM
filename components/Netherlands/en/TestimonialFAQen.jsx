'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const TestimonialCarouselEn = dynamic(() => import('./Netherlands/en/TestimonialCarouselen'), { ssr: false });
const FAQAccordionEn = dynamic(() => import('./Netherlands/en/FAQAccordionen'), { ssr: false });

const TestimonialFAQ = () => {
  return (
    <section className="w-full">
      <TestimonialCarouselEn />
      <FAQAccordionEn />
    </section>
  );
};

export default TestimonialFAQ;