'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const TestimonialCarouselen = dynamic(() => import('./Netherlands/en/TestimonialCarouselen'), { ssr: false });
const FAQAccordionen = dynamic(() => import('./Netherlands/en/FAQAccordionen'), { ssr: false });

const TestimonialFAQ = () => {
  return (
    <section className="w-full">
      <TestimonialCarouselen />
      <FAQAccordionen />
    </section>
  );
};

export default TestimonialFAQ;