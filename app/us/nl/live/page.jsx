'use client';

export const dynamic = 'force-dynamic';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  'Featured',
  'Live Services',
  'Sunday Messages',
  'Bible Study',
  'Worship Sessions',
  'Youth Programs',
  'Prayer Meetings',
  'Special Events',
];

const media = [
  {
    id: 1,
    title: 'The Power of Faith',
    desc: 'Discovering the transformative power of unwavering faith in Christ.',
    thumb: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop',
    duration: '45:30',
    date: 'Dec 24, 2025',
    featured: true,
    live: false,
  },
  {
    id: 2,
    title: 'Living in Grace',
    desc: 'Understanding and walking in the fullness of God\'s grace.',
    thumb: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop',
    duration: '52:15',
    date: 'Dec 22, 2025',
    live: false,
  },
  {
    id: 3,
    title: 'Prayer That Moves Mountains',
    desc: 'Unlocking the supernatural power of effectual, fervent prayer.',
    thumb: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=400&h=300&fit=crop',
    duration: '38:42',
    date: 'Dec 20, 2025',
    live: false,
  },
  {
    id: 4,
    title: 'Kingdom Purpose',
    desc: 'Finding and fulfilling your divine assignment on earth.',
    thumb: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
    duration: '48:20',
    date: 'Dec 18, 2025',
    live: false,
  },
  {
    id: 5,
    title: 'The Holy Spirit\'s Power',
    desc: 'Walking in the fullness and power of the Holy Spirit today.',
    thumb: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&h=300&fit=crop',
    duration: '55:10',
    date: 'Dec 15, 2025',
    live: false,
  },
  {
    id: 6,
    title: 'Worship Night',
    desc: 'An evening of powerful worship and praise to our King.',
    thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    duration: '1:15:30',
    date: 'Dec 13, 2025',
    live: false,
  },
];

export default function ChurchStreamPage() {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Featured');
  const [playing, setPlaying] = useState(null);
  const [showGiving, setShowGiving] = useState(false);
  const [showDownload, setShowDownload] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [videoProgress, setVideoProgress] = useState({});

  // Remove default body margin/padding on mount
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);

  // Simulated video progress tracking
  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      if (videoRef.current) {
        setVideoProgress(prev => ({
          ...prev,
          [playing.id]: (videoRef.current.currentTime / videoRef.current.duration) * 100
        }));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  // Auto-show donation modal after watching for a while
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setShowGiving(true);
      }
    }, 90000); // 90 seconds
    return () => clearTimeout(timer);
  }, [playing]);

  const featured = media.find(m => m.featured) || media[0];

  const handleDonation = (amount) => {
    const donationAmount = typeof amount === 'number' ? amount : parseFloat(customAmount);
    
    if (!donationAmount || donationAmount < 1) {
      alert('Please enter a valid amount (minimum $1)');
      return;
    }

    // Simulate payment processing
    alert(`Thank you for your generous donation of $${donationAmount.toFixed(2)}! Redirecting to secure payment...`);
    setShowGiving(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const filteredMedia = activeTab === 'Featured' 
    ? media 
    : media.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={featured.thumb}
            alt={featured.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-32 sm:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 mb-6 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-red-600 to-orange-600 px-5 py-2 rounded-full shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              New Creation Life Church
            </span>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {featured.title}
            </h1>
            
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mb-4 leading-relaxed">
              {featured.desc}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-10">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                2.4K views
              </span>
              <span>•</span>
              <span>{featured.date}</span>
              <span>•</span>
              <span>{featured.duration}</span>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPlaying(featured)}
                className="group flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-red-600/50 transition-all"
              >
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
                Watch Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowDownload(featured)}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl" />
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="sticky top-0 z-40 bg-slate-950 backdrop-blur-xl border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-6">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {categories.map(tab => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/50'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      {[1, 2].map(section => (
        <section key={section} className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              {activeTab === 'Featured' ? 'Featured Messages' : `${activeTab} Collection`}
            </h2>
            <button className="text-red-500 hover:text-red-400 font-semibold text-sm flex items-center gap-2">
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, idx) => (
              <motion.div
                key={`${item.id}-${section}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setPlaying(item)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-slate-800 shadow-xl">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold">
                      {item.duration}
                    </div>

                    {/* Progress bar */}
                    {videoProgress[item.id] > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                        <div 
                          className="h-full bg-red-600"
                          style={{ width: `${videoProgress[item.id]}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-red-500 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{item.date}</span>
                      <button className="hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* LIVE SERVICE BANNER */}
      <section className="relative overflow-hidden my-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-700 to-orange-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                </span>
                <span className="text-sm font-bold uppercase tracking-wider">Live Now</span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">
                Sunday Worship Service
              </h3>
              
              <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
                Join us live as we gather together in worship, prayer, and the powerful teaching of God's Word. Experience His presence with believers from around the world.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPlaying(featured)}
              className="flex items-center gap-3 bg-white text-red-700 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              Join Live Service
            </motion.button>
          </div>
        </div>
      </section>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPlaying(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-black">
                  <video
                    ref={videoRef}
                    controls
                    autoPlay
                    className="w-full h-full"
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{playing.title}</h3>
                  <p className="text-gray-400 mb-4">{playing.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{playing.date}</span>
                    <span>•</span>
                    <span>{playing.duration}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPlaying(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full flex items-center justify-center transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GIVING MODAL */}
      <AnimatePresence>
        {showGiving && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowGiving(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 rounded-3xl max-w-md w-full shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-3">Support Our Ministry</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your generous giving helps us spread the Gospel, support our community, and transform lives through Christ.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {[10, 25, 50, 100].map(amount => (
                  <motion.button
                    key={amount}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleDonation(amount)}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-red-600/50 transition-all"
                  >
                    Give ${amount}
                  </motion.button>
                ))}
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-slate-900 text-gray-500">or custom amount</span>
                </div>
              </div>

              <div className="flex gap-3 mb-6">
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Enter amount"
                  className="flex-1 px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDonation()}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold border border-white/20 transition-all"
                >
                  Give
                </motion.button>
              </div>

              <button
                onClick={() => {
                  setShowGiving(false);
                  if (videoRef.current) videoRef.current.play();
                }}
                className="w-full text-gray-500 hover:text-white text-sm font-medium transition-colors"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowDownload(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 p-8 rounded-3xl max-w-md w-full shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={showDownload.thumb}
                  alt={showDownload.title}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">{showDownload.title}</h4>
                  <p className="text-sm text-gray-400">{showDownload.duration}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Format</span>
                  <span className="font-semibold">MP4 • 1080p</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Size</span>
                  <span className="font-semibold">~450 MB</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  alert('Download started! Check your downloads folder.');
                  setShowDownload(null);
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 py-4 rounded-xl font-bold shadow-lg hover:shadow-red-600/50 transition-all mb-3"
              >
                Download Message
              </motion.button>

              <button
                onClick={() => setShowDownload(null)}
                className="w-full text-gray-500 hover:text-white text-sm font-medium transition-colors"
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