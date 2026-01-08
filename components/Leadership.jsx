'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const leaders = [
  {
    id: 1,
    name: 'Apostle Kingsley Lawend',
    role: 'Senior Pastor & Founder',
    image: assets.Apostle2,
    isLocalAsset: true, // Flag to identify local assets
    bio: 'With over 25 years of ministry experience, Pastor David founded New Creation Life Church with a vision to raise transformational leaders who would impact nations. His passion for discipleship and kingdom advancement has shaped thousands of lives across the globe.',
    expertise: ['Leadership Development', 'Church Planting', 'Prophetic Ministry'],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastor.david@nclc.org'
    },
    quote: 'Every believer is called to lead, influence, and transform their sphere of influence for the Kingdom.',
    achievements: [
      'Founded 50+ churches globally',
      'Authored 8 bestselling books',
      'Mentored 1,000+ pastors'
    ]
  },
  {
    id: 2,
    name: 'Rev. Sarah Mitchell',
    role: 'Associate Pastor & Women\'s Ministry Leader',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    isLocalAsset: false,
    bio: 'Rev. Sarah brings a powerful combination of compassion and wisdom to her ministry. She oversees our women\'s ministry, counseling department, and community outreach programs, touching lives with the transformative love of Christ.',
    expertise: ['Women Empowerment', 'Counseling', 'Community Outreach'],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'rev.sarah@nclc.org'
    },
    quote: 'God\'s grace is sufficient to heal every broken heart and restore every shattered dream.',
    achievements: [
      'Led 500+ women to Christ',
      'Established 20+ support groups',
      'Certified Biblical Counselor'
    ]
  },
  {
    id: 3,
    name: 'Pastor Michael Roberts',
    role: 'Youth & Next Generation Pastor',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    isLocalAsset: false,
    bio: 'Pastor Michael is passionate about equipping the next generation with a strong biblical foundation and authentic faith. His innovative approach to youth ministry has created a thriving community where young people encounter God\'s presence.',
    expertise: ['Youth Ministry', 'Worship', 'Media & Technology'],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastor.michael@nclc.org'
    },
    quote: 'The next generation isn\'t the church of tomorrow—they\'re the church of today.',
    achievements: [
      'Youth ministry grew 300%',
      'Launched 5 campus ministries',
      'Produced 50+ worship albums'
    ]
  },
  {
    id: 4,
    name: 'Dr. Grace Okonkwo',
    role: 'Director of Missions & Global Outreach',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    isLocalAsset: false,
    bio: 'Dr. Grace oversees our international missions and humanitarian efforts across 30+ nations. Her heart for the unreached and commitment to holistic ministry has brought hope, healing, and the Gospel to countless communities worldwide.',
    expertise: ['Missions Strategy', 'Cross-Cultural Ministry', 'Humanitarian Aid'],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'dr.grace@nclc.org'
    },
    quote: 'Missions isn\'t just about going—it\'s about being sent with purpose and returning with testimony.',
    achievements: [
      'Active in 30+ countries',
      'Planted 100+ mission stations',
      'PhD in Missiology'
    ]
  },
  {
    id: 5,
    name: 'Pastor James Anderson',
    role: 'Executive Pastor & Operations Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    isLocalAsset: false,
    bio: 'Pastor James brings strategic leadership and administrative excellence to our church operations. His gift for organization and systems development ensures our ministry runs smoothly while maintaining our focus on people and purpose.',
    expertise: ['Church Administration', 'Strategic Planning', 'Team Building'],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastor.james@nclc.org'
    },
    quote: 'Excellence in ministry isn\'t about perfection—it\'s about honoring God with our best.',
    achievements: [
      'MBA in Nonprofit Management',
      'Streamlined 20+ ministries',
      '15 years corporate leadership'
    ]
  },
  {
    id: 6,
    name: 'Pastor Emily Chen',
    role: 'Creative Arts & Worship Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    isLocalAsset: false,
    bio: 'Pastor Emily leads our creative arts ministry with a vision to create powerful worship experiences that usher people into God\'s presence. Her artistic excellence and spiritual sensitivity have transformed our worship culture.',
    expertise: ['Worship Leading', 'Creative Direction', 'Arts Ministry'],
    social: {
      twitter: '#',
      linkedin: '#',
      email: 'pastor.emily@nclc.org'
    },
    quote: 'True worship isn\'t a performance—it\'s a passionate response to who God is.',
    achievements: [
      'Led worship for 100K+ events',
      'Trained 200+ worship leaders',
      'Grammy-nominated artist'
    ]
  }
];

const departments = [
  {
    name: 'Worship & Creative Arts',
    icon: '🎵',
    description: 'Creating powerful worship experiences that transform lives',
    team: 45
  },
  {
    name: 'Children & Family Ministry',
    icon: '👨‍👩‍👧‍👦',
    description: 'Building strong spiritual foundations for the next generation',
    team: 32
  },
  {
    name: 'Community Outreach',
    icon: '🤝',
    description: 'Serving our community with the love of Christ',
    team: 28
  },
  {
    name: 'Discipleship & Growth',
    icon: '📖',
    description: 'Equipping believers to grow in faith and maturity',
    team: 24
  },
  {
    name: 'Media & Communications',
    icon: '📱',
    description: 'Spreading the Gospel through digital platforms',
    team: 18
  },
  {
    name: 'Prayer & Intercession',
    icon: '🙏',
    description: 'Building a house of prayer for all nations',
    team: 36
  }
];

export default function LeadershipSection() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'pastoral', 'ministry', 'administration'];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-800 via-purple-950 to-orange-800 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block mb-4 text-sm font-bold tracking-wider uppercase bg-white/20 backdrop-blur px-5 py-2 rounded-full">
              Meet Our Leadership Team
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Raising Leaders Who
              <span className="block">Transform Nations</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Our leadership team is committed to raising up, equipping, and releasing godly leaders who will make a lasting impact for the Kingdom of God across the earth.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black mb-1">25+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Years Ministry</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">50+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Churches Planted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">30+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Nations Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black mb-1">1000+</div>
                <div className="text-sm text-white/80 uppercase tracking-wide">Leaders Trained</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP TEAM GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Our Pastoral Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced, anointed, and passionate leaders dedicated to shepherding God's people and advancing His kingdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {leader.isLocalAsset ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      <a href={leader.social.twitter} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href={leader.social.linkedin} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={`mailto:${leader.social.email}`} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-red-600 font-semibold mb-3 uppercase tracking-wide">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {leader.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {leader.expertise.slice(0, 2).map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button className="text-red-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Full Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MINISTRY DEPARTMENTS */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Ministry Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated teams work together to fulfill the Great Commission and serve our community with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{dept.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                  <span className="font-semibold">{dept.team} Team Members</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4">
              Join Our Leadership Team
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Are you passionate about serving God and His people? We're always looking for gifted, called, and committed individuals to join our ministry team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                View Open Positions
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                Volunteer With Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LEADER DETAIL MODAL */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-72 bg-gradient-to-br from-red-600 to-orange-600">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur hover:bg-white/30 rounded-full flex items-center justify-center transition z-10"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="relative h-full flex items-end p-8">
                  <div className="flex items-end gap-6">
                    <div className="relative w-32 h-32 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
                      {selectedLeader.isLocalAsset ? (
                        <Image
                          src={selectedLeader.image}
                          alt={selectedLeader.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <img
                          src={selectedLeader.image}
                          alt={selectedLeader.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="pb-2">
                      <h2 className="text-3xl font-black text-white mb-1">{selectedLeader.name}</h2>
                      <p className="text-lg text-white/90 font-semibold">{selectedLeader.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Quote */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl mb-8 border-l-4 border-red-600">
                  <svg className="w-8 h-8 text-red-600 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-xl text-gray-700 italic font-medium">{selectedLeader.quote}</p>
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedLeader.bio}</p>
                </div>

                {/* Expertise */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedLeader.expertise.map((skill, i) => (
                      <span key={i} className="px-5 py-2 bg-red-50 text-red-600 font-semibold rounded-full border border-red-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                  <ul className="space-y-3">
                    {selectedLeader.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200">
                  <a href={selectedLeader.social.twitter} className="flex-1 min-w-[150px] bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition text-center">
                    Follow on Twitter
                  </a>
                  <a href={selectedLeader.social.linkedin} className="flex-1 min-w-[150px] bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition text-center">
                    Connect on LinkedIn
                  </a>
                  <a href={`mailto:${selectedLeader.social.email}`} className="flex-1 min-w-[150px] bg-red-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-red-700 transition text-center">
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}