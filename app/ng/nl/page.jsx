'use client';

import React from 'react';
import HeroNL from '@/components/Netherlands/Heronl';
import Overlap1 from '@/components/Netherlands/Overlap1nl';
import Mission1 from '@/components/Netherlands/Mission1nl';
import JoinUs from '@/components/Netherlands/JoinUsnl';
import StoriesArticles from '@/components/Netherlands/Storiesnl';
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
