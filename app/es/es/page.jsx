'use client';

import React from 'react';
import Hero from '@/components/Vene/Heroes';
import Overlap1 from '@/components/Vene/Overlap1es';
import Mission1 from '@/components/Vene/Mission1es';
import JoinUs from '@/components/Vene/JoinUses';
import StoriesArticles from '@/components/Vene/Storieses';
import TestimonialFAQ from '@/components/Vene/TestimonialFAQ';

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
