'use client';

import React from 'react';
import Hero from '@/components/Vene/en/Heroen';
import Overlap1 from '@/components/Vene/en/Overlap1en';
import Mission1 from '@/components/Vene/en/Mission1en';
import JoinUs from '@/components/Vene/en/JoinUsen';
import StoriesArticles from '@/components/Vene/en/StoriesArticlesen';
import TestimonialFAQ from '@/components/Vene/en/TestimonialFAQen';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <Overlap1 />
      <Mission1 />
      <JoinUs />
      <StoriesArticles />
      <TestimonialFAQ />
    </div>
  );
}
