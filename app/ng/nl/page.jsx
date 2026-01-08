'use client';

import React from 'react';
import HeroNL from '@/components/nl/HeroNL';
import Overlap1 from '@/components/nl/Overlap1NL';
import Mission1 from '@/components/nl/Mission1NL';
import JoinUs from '@/components/nl/JoinUsNL';
import StoriesArticles from '@/components/nl/StoriesNL';
import TestimonialFAQ from '@/components/TestimonialFAQ';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroNL />
      <Overlap1 />
      <Mission1 />
      <JoinUs />
      <StoriesArticles />
      <TestimonialFAQ />
    </div>
  );
}
