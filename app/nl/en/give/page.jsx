'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const givingOptions = [
  { id: 1, title: 'One-Time Gift', icon: 'https://img.icons8.com/flat-round/100/filled-like.png', description: 'Make a single donation to support our mission', popular: false },
  { id: 2, title: 'Monthly Giving', icon: 'https://img.icons8.com/external-soft-fill-juicy-fish/100/external-give-hands-and-gestures-soft-fill-soft-fill-juicy-fish-2.png', description: 'Become a monthly partner with recurring support', popular: true },
  { id: 3, title: 'Special Projects', icon: 'https://img.icons8.com/clouds/100/worker-male.png', description: 'Support specific ministry initiatives and building projects', popular: false }
];

const projectCategories = [
  { title: 'General Ministry', description: 'Supporting day-to-day operations', icon: '⛪', accounts: [
    { name: 'Tithe & Offerings', number: '2007597201', bank: 'Fcmb Bank' },
    { name: 'General Fund', number: '5080211796', bank: 'Moniepoint MFB' }
  ], color: 'from-blue-500 to-blue-600' },
  { title: 'Building Projects', description: 'Constructing new facilities', icon: '🏛️', accounts: [
    { name: 'Building Fund', number: '5080211796', bank: 'Moniepoint MFB' },
    { name: 'Rent & Facilities', number: '5080212023', bank: 'Moniepoint MFB' }
  ], color: 'from-orange-500 to-red-600' },
  { title: 'Global Missions', description: 'Reaching nations with the Gospel', icon: 'https://img.icons8.com/doodle/48/europe.png', accounts: [
    { name: 'Missions Fund', number: '5540041633', bank: 'Moniepoint MFB' }
  ], color: 'from-green-500 to-teal-600' },
  { title: 'Special Needs', description: 'Supporting community outreach', icon: '🤝', accounts: [
    { name: 'Benevolence Fund', number: '5540044641', bank: 'Moniepoint MFB' }
  ], color: 'from-purple-500 to-pink-600' }
];

const faqs = [
  { question: 'How is my donation used?', answer: 'Your giving directly supports ministry operations, outreach programs, missions work, and kingdom expansion initiatives.' },
  { question: 'Can I choose where my donation goes?', answer: 'Absolutely! You can designate your gift to specific areas or let us allocate it where needed most.' },
  { question: 'Are there other ways to give besides online?', answer: 'Yes! You can give via bank transfer, PayPal, in-person, or mail a check to our office.' },
  { question: 'Is my payment information secured?', answer: 'Your security is our priority. We use industry-standard encryption and never store complete card information.' },
  { question: 'Can I get a tax receipt?', answer: 'Yes, all donations are tax-deductible where applicable. You\'ll receive automatic receipts via email.' },
  { question: 'Who do I contact with questions?', answer: 'Contact our finance team at finance@nclc.org or call our church office for assistance.' }
];

export default function CompleteGivePage() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(name);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&h=1080&fit=crop" alt="Giving" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:mt-14 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-yellow-500 bg-red-400/10 backdrop-blur px-5 py-2 rounded-full border border-red-400/20">Generosity Changes Lives</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">Your Giving<span className="block text-yellow-500">Makes an Impact</span></h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">Every seed sown in faith produces a harvest. Your generosity enables us to reach the lost, equip the saved, and release leaders.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-600 via-yellow-800 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Your Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-5xl font-black mb-2">10,000+</div><div className="text-sm font-medium">Lives Impacted</div></div>
            <div><div className="text-5xl font-black mb-2">50+</div><div className="text-sm font-medium">Churches Planted</div></div>
            <div><div className="text-5xl font-black mb-2">30+</div><div className="text-sm font-medium">Nations Reached</div></div>
            <div><div className="text-5xl font-black mb-2">1,000+</div><div className="text-sm font-medium">Leaders Trained</div></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your Giving Method</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {givingOptions.map((option) => (
            <motion.div key={option.id} whileHover={{ y: -8 }} onClick={() => setSelectedOption(option.id)} className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all ${selectedOption === option.id ? 'border-red-600 shadow-xl bg-red-50' : 'border-gray-200 hover:border-red-300 bg-white'}`}>
              {option.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>}
              <img src={option.icon} alt={option.title} className="w-20 h-20 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => setShowPaymentModal(true)} className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition">Continue to Give</button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Where Your Gifts Go</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projectCategories.map((category, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    {typeof category.icon === 'string' && category.icon.startsWith('http') ? (
                      <img src={category.icon} alt={category.title} className="w-12 h-12" />
                    ) : (
                      <div className="text-5xl">{category.icon}</div>
                    )}
                    <div><h3 className="text-2xl font-bold">{category.title}</h3><p className="text-white/90 text-sm">{category.description}</p></div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {category.accounts.map((account, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gray-900">{account.name}</span>
                        <button onClick={() => copyToClipboard(account.number, account.name)} className="text-red-600 text-sm font-semibold hover:text-red-700 transition">
                          {copiedAccount === account.name ? '✓ Copied!' : 'Copy'}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-mono font-bold text-gray-900">{account.number}</span>
                        <span className="text-xs text-gray-500 uppercase">{account.bank}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-300 transition-all">
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <span className="text-red-600 text-2xl font-bold">{openFaq === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {showPaymentModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPaymentModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white flex justify-between items-start">
                <div><h3 className="text-3xl font-black mb-2">Complete Your Gift</h3><p className="text-white/90">Your generosity makes a difference</p></div>
                <button onClick={() => setShowPaymentModal(false)} className="text-white text-4xl hover:text-white/80 transition leading-none">&times;</button>
              </div>
              <div className="p-8">
                <label className="block text-sm font-bold text-gray-700 mb-3">Select Amount</label>
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[25, 50, 100, 250].map((amt) => (
                    <button key={amt} onClick={() => { setDonationAmount(amt); setCustomAmount(''); }} className={`py-3 rounded-xl font-bold transition-all ${donationAmount === amt ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'}`}>${amt}</button>
                  ))}
                </div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Or Enter Custom Amount</label>
                <input type="number" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount(''); }} placeholder="Enter amount" className="w-full p-4 border-2 border-gray-200 rounded-xl mb-6 focus:border-red-600 focus:outline-none text-lg" />
                <button className="w-full bg-red-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg">Proceed to Payment</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}