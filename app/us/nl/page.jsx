'use client';

import React from 'react';
import Hero from '@/components/Netherlands/en/Heroen';
import Overlap1 from '@/components/Netherlands/en/Overlap1en';
import Mission1 from '@/components/Netherlands/en/Mission1en';
import JoinUs from '@/components/Netherlands/en/JoinUsen';
import StoriesArticles from '@/components/Netherlands/en/StoriesArticlesen';
import TestimonialFAQ from '@/components/TestimonialFAQ';

export const dynamic = 'force-dynamic';

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
