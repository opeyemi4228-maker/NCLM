'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const TestimonialCarouselen = dynamic(() => import('./Vene/en/TestimonialCarouselen'), { ssr: false });
const FAQAccordionen = dynamic(() => import('./Vene/FAQAccordionen'), { ssr: false });

const TestimonialFAQ = () => {
  return (
    <section className="w-full">
      <TestimonialCarouselen />
      <FAQAccordionen />
    </section>
  );
};

export default TestimonialFAQ;