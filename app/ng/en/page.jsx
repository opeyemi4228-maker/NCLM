'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Overlap1 from '@/components/Overlap1';
import Mission1 from '@/components/Mission1';
import JoinUs from '@/components/JoinUs';
import StoriesArticles from '@/components/StoriesArticles';
import TestimonialFAQ from '@/components/TestimonialFAQ';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <div className="md:w-full">
      <Hero />
      <Overlap1 />
      <Mission1 />
      <JoinUs />
      <StoriesArticles />
      <TestimonialFAQ />
    </div>
  );
}
