'use client';

import React from 'react';
import Hero from '@/components/es/HeroES';
import Overlap1 from '@/components/es/Overlap1ES';
import Mission1 from '@/components/es/Mission1ES';
import JoinUs from '@/components/es/JoinUsES';
import StoriesArticles from '@/components/es/StoriesES';
import TestimonialFAQ from '@/components/es/TestimonialFAQES';

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
