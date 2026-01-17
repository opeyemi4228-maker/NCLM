'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { assets } from '@/assets/assets';

const categories = [
  'Featured',
  'Live Now',
  'Sermons',
  'Conferences',
  'Teachings',
  'Testimonies',
  'Devotionals',
  'Music',
];

const media = [
  {
    id: 1,
    title: 'Faith That Prevails',
    desc: 'Building unshakable faith for the end-time believer.',
    thumb: '/thumb1.jpg',
    src: '/sample.mp4',
    featured: true,
  },
  {
    id: 2,
    title: 'Walking in Dominion',
    desc: 'Understanding your authority in Christ.',
    thumb: '/thumb2.jpg',
    src: '/sample.mp4',
  },
  {
    id: 3,
    title: 'Power of the Word',
    desc: 'God’s Word applied for real-life transformation.',
    thumb: '/thumb3.jpg',
    src: '/sample.mp4',
  },
  {
    id: 4,
    title: 'End-Time Revival',
    desc: 'Positioning for the move of God’s Spirit.',
    thumb: '/thumb4.jpg',
    src: '/sample.mp4',
  },
  {
    id: 5,
    title: 'Kingdom Leadership',
    desc: 'Raising leaders for global impact.',
    thumb: '/thumb5.jpg',
    src: '/sample.mp4',
  },
  {
    id: 6,
    title: 'Global Conference',
    desc: 'A call to the nations.',
    thumb: '/thumb6.jpg',
    src: '/sample.mp4',
  },
];

export default function StreamPage() {
  const videoRef = useRef(null);

  const [activeTab, setActiveTab] = useState('Featured');
  const [playing, setPlaying] = useState(null);
  const [showGiving, setShowGiving] = useState(false);
  const [showDownload, setShowDownload] = useState(null);
  const [customAmount, setCustomAmount] = useState(10);

  // Load last watched progress
  useEffect(() => {
    const saved = localStorage.getItem('nclc-progress');
    if (saved && videoRef.current) {
      videoRef.current.currentTime = Number(saved);
    }
  }, [playing]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    localStorage.setItem('nclc-progress', videoRef.current.currentTime);
  };

  // Auto-show donation modal after 60 seconds
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      videoRef.current?.pause();
      setShowGiving(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, [playing]);

  const featured = media.find(m => m.featured) || media[0];

  const handleDonation = async (amount) => {
    if (!amount || amount < 1) return alert("Enter a valid amount");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "EUR", method: "ideal" }),
      });

      const data = await res.json();
      if (data.url) {
        window.open(data.url, "_blank");
        setShowGiving(false);
        videoRef.current?.play();
      } else {
        alert("Error initializing payment. Try again.");
      }
    } catch (err) {
      console.error('[Stream Payment] Payment processing error:', err?.message || err);
      alert("Payment failed. Please try again later.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[92vh]">
        <Image
          src={assets.UNAWARE}
          alt="New Creation Life Ministries"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />

        <div className="relative z-10 max-w-4xl px-10 pt-44">
          <span className="inline-block mb-4 text-xs tracking-widest uppercase bg-red-600 px-4 py-1 rounded-full">
            New Creation Life Ministries International
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">{featured.title}</h1>
          <p className="text-white/80 mt-5 max-w-2xl text-lg">
            A global, multi-ethnic, non-denominational movement committed to raising godly leaders, equipping the saints, and releasing lives fully devoted to the Gospel of Jesus Christ.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={() => setPlaying(featured)}
              className="bg-red-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              ▶ Watch Message
            </button>
            <button
              onClick={() => setShowDownload(featured)}
              className="bg-white/20 px-10 py-4 rounded-full font-semibold backdrop-blur hover:bg-white/30 transition"
            >
              ⬇ Download
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="px-10 py-8 flex gap-3 overflow-x-auto scrollbar-hide border-b border-white/10">
        {categories.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${activeTab === tab ? 'bg-red-600' : 'bg-white/10 hover:bg-white/20'}`}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* CONTENT ROWS */}
      {[1, 2, 3].map(row => (
        <section key={row} className="px-10 mt-14">
          <h2 className="text-xl font-bold mb-5">{activeTab} — New Creation Messages</h2>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {media.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.25 }}
                className="min-w-[220px] cursor-pointer"
                onClick={() => setPlaying(item)}
              >
                <div className="relative h-[130px] rounded-xl overflow-hidden">
                  <Image src={item.thumb} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex items-center justify-center text-sm font-semibold">
                    ▶ Play
                  </div>
                </div>
                <p className="mt-3 font-medium">{item.title}</p>
                <p className="text-xs text-white/60 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* LIVE STRIP */}
      <section className="mt-24 bg-gradient-to-r from-red-700 to-red-900 px-10 py-14">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-extrabold">Live Global Service</h3>
            <p className="text-white/80 mt-3 max-w-xl">
              Join New Creation Life Ministries International live as we experience the undiluted Word and the power of God across nations.
            </p>
          </div>
          <button
            onClick={() => setPlaying(featured)}
            className="bg-black px-8 py-4 rounded-full font-semibold"
          >
            ▶ Watch Live
          </button>
        </div>
      </section>

      {/* VIDEO PLAYER */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            <div className="w-full max-w-6xl px-6 relative">
              <video
                ref={videoRef}
                controls
                autoPlay
                onTimeUpdate={handleTimeUpdate}
                className="w-full rounded-2xl"
                src={playing.src}
              />
              <button
                onClick={() => setPlaying(null)}
                className="absolute top-6 right-10 bg-black/70 px-4 py-2 rounded-full"
              >
                ✕ Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GIVING MODAL WITH iDEAL/SEPA */}
      <AnimatePresence>
        {showGiving && (
          <motion.div
            className="fixed inset-0 z-60 bg-black/85 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-zinc-900 p-10 rounded-3xl max-w-md text-center">
              <h3 className="text-2xl font-extrabold mb-4">Support the Gospel</h3>
              <p className="text-white/70 mb-6">
                Your generosity helps us reach the lost, equip the saved, and release leaders into their God-given assignments.<br/>
                Donations are securely processed via <strong>iDEAL</strong> (NL) & <strong>SEPA</strong> (EU).
              </p>

              <div className="flex flex-col gap-3 mb-4">
                {[5, 10, 25, 50].map(amount => (
                  <button
                    key={amount}
                    onClick={() => handleDonation(amount)}
                    className="bg-red-600 px-10 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                  >
                    Give €{amount}
                  </button>
                ))}
                <input
                  type="number"
                  min="1"
                  placeholder="Custom Amount (€)"
                  className="w-full px-4 py-3 rounded-md text-black font-medium text-sm"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(Number(e.target.value))}
                />
                <button
                  onClick={() => handleDonation(customAmount)}
                  className="bg-red-500 px-10 py-3 rounded-full font-semibold hover:bg-red-600 transition"
                >
                  Give Custom Amount
                </button>
              </div>

              <button
                onClick={() => { setShowGiving(false); videoRef.current?.play(); }}
                className="block mx-auto text-white/60 text-sm mt-2"
              >
                Continue Watching
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DOWNLOAD MODAL */}
      <AnimatePresence>
        {showDownload && (
          <motion.div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center">
            <motion.div className="bg-zinc-900 p-8 rounded-2xl max-w-md">
              <h4 className="text-xl font-bold mb-2">{showDownload.title}</h4>
              <p className="text-white/70 text-sm mb-5">
                MP4 • Personal devotion and offline access.
              </p>
              <a
                href={showDownload.src}
                download
                className="block text-center bg-red-600 py-4 rounded-full font-semibold"
              >
                Download Message
              </a>
              <button
                onClick={() => setShowDownload(null)}
                className="block mx-auto mt-5 text-white/60 text-sm"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
