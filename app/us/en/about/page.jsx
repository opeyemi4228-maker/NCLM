'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export const dynamic = 'force-dynamic';

const values = [
  {
    icon: 'https://img.icons8.com/plasticine/100/book.png',
    title: 'Word-Centered',
    description: 'We believe the Bible is the inspired, infallible Word of God and the final authority for faith and practice.',
    verse: 'Psalm 119:105'
  },
  {
    icon: 'https://img.icons8.com/doodle/48/fire-element--v1.png',
    title: 'Spirit-Empowered',
    description: 'We pursue the fullness and power of the Holy Spirit in every aspect of our ministry and personal lives.',
    verse: 'Acts 1:8'
  },
  {
    icon: 'https://img.icons8.com/bubbles/100/earth-planet.png',
    title: 'Kingdom-Focused',
    description: 'We are committed to advancing God\'s Kingdom on earth through discipleship, evangelism, and transformation.',
    verse: 'Matthew 6:33'
  },
  {
    icon: 'https://img.icons8.com/clouds/100/filled-like.png',
    title: 'Love-Driven',
    description: 'We demonstrate Christ\'s love through authentic relationships, compassionate service, and sacrificial giving.',
    verse: '1 John 4:19'
  },
  {
    icon: 'https://img.icons8.com/hands/100/pray.png',
    title: 'Prayer-Dependent',
    description: 'We recognize that nothing of eternal value happens apart from fervent, persistent prayer.',
    verse: '1 Thessalonians 5:17'
  },
  {
    icon: 'https://img.icons8.com/external-tal-revivo-fresh-tal-revivo/100/external-star-rated-users-for-seo-works-isolated-on-a-white-background-seo-fresh-tal-revivo.png',
    title: 'Excellence-Oriented',
    description: 'We pursue excellence in everything we do as an offering of worship to God who gave His best for us.',
    verse: 'Colossians 3:23'
  }
];

const beliefs = [
  {
    title: 'The Scriptures',
    content: 'We believe that the Bible is the verbally inspired and infallible word of God, the foundation and ground for the establishment of all truth.',
    verse: '2 Timothy 3:16, 2 Peter 1:20-21'
  },
  {
    title: 'God',
    content: 'We believe that there is only one God, existent in three persons, God the Father, God the Son and God the Holy Spirit. Each is a distinct Person, but They are all of one essence. They have the same nature, perfection and attributes, and worthy to be worshipped in the beauty of holiness and in total obedience.',
    verse: 'Genesis 1:1-3,26; Matthew 3:16-17; Ephesians 4:5-6'
  },
  {
    title: 'Jesus Christ',
    content: 'We believe in the deity of the Lord Jesus Christ, that He is God and also man. We believe that He is the begotten Son of God, born of the virgin Mary, by the Holy Spirit; that He physically walked on this earth, died on the cross of Calvary in our place, was buried, rose again the third day and ascended into Heaven to be with the Father.',
    verse: 'John 1:1-4, John 10:30, Hebrews 1:1-5'
  },
  {
    title: 'Holy Spirit',
    content: 'We believe that the Holy Spirit is the third Person in the Godhead. He coexists with the Father and the Son. The Holy Spirit was and still is the power of God in creation, the Chief Convictor of sin, the Chief Agent in the rebirth of the human soul, and the Chief Comforter of the believer. The Holy Spirit is in charge of the church – the Body of Christ. In addition, He is the only Giver of spiritual gifts to the believer.',
    verse: 'John 16:1-13; Matthew 3:11; Acts 5:3-4; 1 Corinthians 12:1-11; Ephesians 1:13-14'
  },
  {
    title: 'Man',
    content: 'We believe that man is God\'s direct creation- body, soul and spirit. Man was created in the image and likeness of God. Therefore, man is not in any way a result of evolution. Adam\'s sin and fall resulted in the fall of creation and the human race, both spiritually and physically.',
    verse: 'Genesis 1:26-27; Romans 3:10, 5:12, 8:18-23'
  },
  {
    title: 'Salvation',
    content: 'We believe that salvation can only be achieved through genuine repentance and faith in the cleansing blood of Jesus. That all who by faith accepts, confesses and believes in Jesus Christ as Savior, are born again by the Holy Spirit and thus become the children of God. Salvation involves redemption, regeneration, sanctification and glorification.',
    verse: 'Luke 24:47; John 17:16-22; Acts 3:19; Romans 10:9-10, 5:7-11; Colossians 1:13-14, 21-22'
  },
  {
    title: 'New Man',
    content: 'We believe that anyone who is genuinely born again is no longer a sinner, but the righteousness of God in Christ Jesus. That by faith the believer can live the new life of holiness and righteousness before God.',
    verse: '2 Corinthians 5:17; Galatians 2:20; Romans 3:22, 4:25, 6:6, 8:10'
  },
  {
    title: 'Baptism of the Holy Spirit',
    content: 'We believe in the baptism and the indwelling of the Holy Spirit, that when a person receives the Holy Spirit he receives divine power and enablement for the Christian life, service and witness.',
    verse: 'Acts 1:8, 2:4, 4:5-12'
  },
  {
    title: 'Healing',
    content: 'We believe that the redemptive work of Christ on the cross provides divine healing for the human body, soul and spirit. That divine healing in the name of Jesus Christ is attainable by faith in His name.',
    verse: 'Acts 3:16, Acts 9:32-35, 1 Peter 2:24'
  },
  {
    title: 'Prosperity',
    content: 'We believe in the prosperity of the Church and saints. We believe that it is God\'s will for His children to be rich and wealthy in all areas of their lives including financially.',
    verse: 'Deuteronomy 8:18; Matthew 19:29; Mark 10:30; Ephesians 1:3; 2 Peter 1:3; 3 John 1:2'
  },
  {
    title: 'Marriage',
    content: 'We believe in the sanctity of marriage, that the union of marriage is honorable and it is only between a man and a woman according to the Bible; in accordance with the divine establishment in the Garden of Eden.',
    verse: 'Genesis 2:21-25, Genesis 5:2, Matthew 19:4-6'
  },
  {
    title: 'The Rapture',
    content: 'We believe in the second coming of Christ and the Rapture of the Church. That our Lord Jesus Christ will descend from Heaven with the sound of the trumpets or the arch angels to take His bride- the church which are the saints to reign with Him.',
    verse: 'Matthew 29:30, 1 Thessalonians 4:16-17'
  },
  {
    title: 'God\'s Final Judgement',
    content: 'We believe in the final resurrection of both the saved and unsaved, the former to eternal life and the latter to eternal judgement. We believe that whoever accepts Jesus Christ as Lord and savior and remains in the faith until the end shall be saved and that everyone who refused the gift of salvation shall face the wrath of God.',
    verse: '1 Corinthians 15:12-23, Revelation 20:11-15'
  }
];

const timeline = [
  {
    year: '2012',
    title: 'The Beginning',
    description: 'New Creation Life Ministries was birthed with a vision to raise godly leaders and transform lives through the Gospel.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=600&h=400&fit=crop'
  },
  {
    year: '2012',
    title: 'First Church Plant',
    description: 'Expanded ministry with the establishment of our first church plant, marking the beginning of our global reach.',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop'
  },
  {
    year: '2020',
    title: 'International Expansion',
    description: 'Launched operations in multiple nations including USA, Netherlands, Nigeria, and Venezuela.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop'
  },
  {
    year: '2021',
    title: 'Leadership Institute',
    description: 'Established our Leadership Training Institute to equip and empower the next generation of kingdom leaders.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
  },
  {
    year: '2025',
    title: 'Global Impact',
    description: 'Now serving in 30+ nations with 50+ churches planted and thousands of lives transformed by the power of God.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
  },
  {
    year: '2026',
    title: 'Digital Ministry',
    description: 'Adapted and thrived during global challenges by expanding our digital outreach and online ministry platforms.',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop'
  },
];

const stats = [
  { number: '25+', label: 'Years of Ministry' },
  { number: '4+', label: 'Churches Planted' },
  { number: '10+', label: 'Nations Reached' },
  { number: '10K+', label: 'Lives Transformed' },
  { number: '1K+', label: 'Leaders Trained' },
  { number: '5+', label: 'Weekly Programs' }
];

export default function AboutUsPage() {
  const [selectedBelief, setSelectedBelief] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop"
            alt="New Creation Life Ministries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full lg:mt-10 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-yellow-500 bg-red-400/10 backdrop-blur px-5 py-2 rounded-full border border-yellow-400/20">
              About New Creation Life Ministries
            </span>
            
            <h1 className="text-5xl sm:text-7xl lg:text-7xl font-black leading-tight mb-6 text-white">
              NOT A CHURCH,
              <span className="block text-yellow-500">BUT A COMMUNITY</span>
            </h1>
            
            <p className="text-[18px] text-gray-200 leading-relaxed mb-6">
              NCLM International is commissioned with a divine mandate to raise godly leaders and saints who are fully yielded to the Gospel of Jesus Christ.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-yellow-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition shadow-lg">
                Our Story
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                What We Believe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-widest text-white/80 mb-4 block">
              Our Mission
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight max-w-5xl mx-auto mb-8">
              REACHING THE LOST, EQUIPPING THE SAVED, RELEASING LEADERS
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our mission is to reach the world with the love of God through His undiluted and uncompromising Word, positioning the saints for the prolific move of the Holy Spirit in these last days, and equipping and releasing leaders into their God-given assignments for the Body of Christ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-red-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
              Our Story
            </span>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
              A Vision Born From
              <span className="block text-red-600">Divine Encounter</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                New Creation Life Ministries International is a vibrant, dynamic, multi-ethnic, and non-denominational ministry commissioned with a divine mandate to raise godly leaders and saints who are ready to give their lives—and all—for the Gospel of our Lord and Savior, Jesus Christ.
              </p>
              <p>
                Known also as NCLM, the ministry stands as an end-time revolution committed to reaching the lost, equipping the saved, and releasing leaders into their God-ordained assignments for the Body of Christ. We believe in the power of God's Word to transform lives and emphasize its practical application in shaping who we are and what we are called to do.
              </p>
              <p>
                We understand that believing and obeying God's Word leads to the discovery of true life and eternal hope. Our commitment is to minister to destiny—helping believers, through the Word of God, to become all that God has called them to be and to reflect His nature in every facet of life, home, and community.
              </p>
            </div>

            <button className="mt-8 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
              Read Full Story
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
                  alt="Ministry"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop"
                  alt="Community"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop"
                  alt="Worship"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop"
                  alt="Teaching"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-200 rounded-full blur-3xl opacity-60 -z-10" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the non-negotiable principles that guide every decision, shape every ministry, and define who we are as a movement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all"
              >
                {typeof value.icon === 'string' && value.icon.startsWith('http') ? (
                  <img src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
                ) : (
                  <div className="text-5xl mb-4">{value.icon}</div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{value.description}</p>
                <div className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                  </svg>
                  {value.verse}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">
            Statement of Faith
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            What We Believe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our beliefs are rooted in the timeless truth of God's Word and the historic Christian faith.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((belief, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedBelief(belief)}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 flex-1">{belief.title}</h3>
                <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">{belief.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition">
            Download Full Statement of Faith
          </button>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              A Legacy of Impact
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From humble beginnings to global impact—see how God has worked through New Creation Life Ministries.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-gray-900" />
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Join the Revolution
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
              You were created for more than ordinary living. Discover your purpose, embrace your destiny, and make an eternal impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
                Visit Us This Sunday
              </button>
              <button className="bg-white/10 backdrop-blur border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition">
                Connect With Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BELIEF DETAIL MODAL */}
      <AnimatePresence>
        {selectedBelief && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedBelief(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-black text-gray-900">{selectedBelief.title}</h3>
                <button
                  onClick={() => setSelectedBelief(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedBelief.content}</p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="text-red-600 font-semibold hover:text-red-700 flex items-center gap-2">
                  Read More in Our Full Statement
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}