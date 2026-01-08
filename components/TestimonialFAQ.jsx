'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const TestimonialCarousel = dynamic(() => import('./TestimonialCarousel'), { ssr: false });
const FAQAccordion = dynamic(() => import('./FAQAccordion'), { ssr: false });

const TestimonialFAQ = () => {
  return (
    <section className="w-full">
      <TestimonialCarousel />
      <FAQAccordion />
    </section>
  );
};

export default TestimonialFAQ;