'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const givingOptions = [
  { id: 1, title: 'Eenmalige Gift', icon: 'https://img.icons8.com/flat-round/100/filled-like.png', description: 'Doe een eenmalige donatie om onze missie te ondersteunen', popular: false },
  { id: 2, title: 'Maandelijks Geven', icon: 'https://img.icons8.com/external-soft-fill-juicy-fish/100/external-give-hands-and-gestures-soft-fill-soft-fill-juicy-fish-2.png', description: 'Word een maandelijkse partner met terugkerende ondersteuning', popular: true },
  { id: 3, title: 'Speciale Projecten', icon: 'https://img.icons8.com/clouds/100/worker-male.png', description: 'Ondersteun specifieke bediening initiatieven en bouwprojecten', popular: false }
];

const projectCategories = [
  { 
    title: 'Algemene Bediening', 
    description: 'Ondersteuning van dagelijkse activiteiten', 
    icon: '⛪', 
    accounts: [
      { name: 'Tienden & Offeranden', number: 'IBAN op aanvraag', bank: 'SEPA Bankoverschrijving' },
      { name: 'Algemeen Fonds', number: 'IBAN op aanvraag', bank: 'SEPA Bankoverschrijving' }
    ], 
    color: 'from-blue-500 to-blue-600' 
  },
  { 
    title: 'Bouwprojecten', 
    description: 'Nieuwe faciliteiten bouwen', 
    icon: '🏛️', 
    accounts: [
      { name: 'Gebouwfonds', number: 'IBAN op aanvraag', bank: 'SEPA Bankoverschrijving' },
      { name: 'Huur & Faciliteiten', number: 'IBAN op aanvraag', bank: 'SEPA Bankoverschrijving' }
    ], 
    color: 'from-orange-500 to-red-600' 
  },
  { 
    title: 'Internationale Zending', 
    description: 'Naties bereiken met het Evangelie', 
    icon: 'https://img.icons8.com/doodle/48/europe.png', 
    accounts: [
      { name: 'Zendingsfonds', number: 'IBAN op aanvraag', bank: 'SEPA Bankoverschrijving' }
    ], 
    color: 'from-green-500 to-teal-600' 
  },
  { 
    title: 'Speciale Behoeften', 
    description: 'Ondersteuning van gemeenschapswerk', 
    icon: '🤝', 
    accounts: [
      { name: 'Liefdadigheidsfonds', number: 'IBAN op aanvraag', bank: 'SEPA Bankoverschrijving' }
    ], 
    color: 'from-purple-500 to-pink-600' 
  }
];

const faqs = [
  { question: 'Hoe wordt mijn donatie gebruikt?', answer: 'Uw gift ondersteunt direct de bediening, outreach programma\'s, zendingswerk en uitbreiding van het Koninkrijk.' },
  { question: 'Kan ik kiezen waaraan mijn donatie wordt besteed?', answer: 'Absoluut! U kunt uw gift toewijzen aan specifieke gebieden of ons laten bepalen waar het het meest nodig is.' },
  { question: 'Zijn er andere manieren om te geven dan online?', answer: 'Ja! U kunt geven via bankoverschrijving, iDEAL, PayPal, persoonlijk, of een cheque sturen naar ons kantoor.' },
  { question: 'Is mijn betaalinformatie veilig?', answer: 'Uw veiligheid is onze prioriteit. We gebruiken industrie-standaard encryptie en bewaren nooit volledige kaartinformatie.' },
  { question: 'Kan ik een belastingontvangst krijgen?', answer: 'Ja, alle donaties zijn fiscaal aftrekbaar waar van toepassing. U ontvangt automatisch ontvangstbewijzen via e-mail.' },
  { question: 'Met wie kan ik contact opnemen bij vragen?', answer: 'Neem contact op met ons financiële team via finance@nclc.org of bel ons kerkbureau voor assistentie.' }
];

export default function DutchGivePage() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    amount: '',
    message: ''
  });

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(name);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form ingediend:', { ...formData, type: selectedType });
    alert('Dank u voor uw gift. Wij nemen spoedig contact met u op.');
    setShowPaymentModal(false);
    setFormData({ name: '', email: '', country: '', amount: '', message: '' });
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&h=1080&fit=crop" alt="Geven" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:mt-14 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-yellow-500 bg-red-400/10 backdrop-blur px-5 py-2 rounded-full border border-red-400/20">Vrijgevigheid Verandert Levens</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">Uw Gift<span className="block text-yellow-500">Maakt Verschil</span></h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">Elk zaad gezaaid in geloof brengt een oogst voort. Uw vrijgevigheid stelt ons in staat de verlorenen te bereiken, de geredden toe te rusten en leiders vrij te zetten.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-600 via-yellow-800 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Uw Impact in Cijfers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-5xl font-black mb-2">10.000+</div><div className="text-sm font-medium">Levens Beïnvloed</div></div>
            <div><div className="text-5xl font-black mb-2">50+</div><div className="text-sm font-medium">Kerken Geplant</div></div>
            <div><div className="text-5xl font-black mb-2">30+</div><div className="text-sm font-medium">Naties Bereikt</div></div>
            <div><div className="text-5xl font-black mb-2">1.000+</div><div className="text-sm font-medium">Leiders Getraind</div></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Kies Uw Geefmethode</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {givingOptions.map((option) => (
            <motion.div key={option.id} whileHover={{ y: -8 }} onClick={() => setSelectedOption(option.id)} className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all ${selectedOption === option.id ? 'border-red-600 shadow-xl bg-red-50' : 'border-gray-200 hover:border-red-300 bg-white'}`}>
              {option.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">Meest Populair</div>}
              <img src={option.icon} alt={option.title} className="w-20 h-20 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => setShowPaymentModal(true)} className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition">Doorgaan met Geven</button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Waar Uw Giften Naartoe Gaan</h2>
            <p className="text-lg text-gray-600">Geef aan specifieke bestemmingen via SEPA bankoverschrijving</p>
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
                          {copiedAccount === account.name ? '✓ Gekopieerd!' : 'Kopiëren'}
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-mono text-gray-900">{account.number}</span>
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

      <section className="bg-blue-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Geef via iDEAL of PayPal</h2>
          <p className="text-gray-600 mb-8">Veilige online donatie binnen Nederland en internationaal</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.paypal.me/nclminternational" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                Geef via PayPal →
              </button>
            </a>
            <button onClick={() => setShowPaymentModal(true)} className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition">
              Geef via iDEAL →
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Veelgestelde Vragen</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-300 transition-all">
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center p-6 text-left">
                <span className="font-bold text-lg text-gray-900">{String(index + 1).padStart(2, '0')}. {faq.question}</span>
                <motion.span animate={{ rotate: openFaq === index ? 45 : 0 }} className="text-red-600 text-2xl font-bold">{openFaq === index ? '−' : '+'}</motion.span>
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

      <section className="bg-red-700 py-16 px-6">
        <div className="max-w-6xl mx-auto bg-red-50 rounded-xl p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Geef aan New Creation Life Ministries</h3>
            <p className="text-gray-600">Uw vrijgevigheid blijft levens zegenen en het Koninkrijk uitbreiden.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setShowPaymentModal(true)} className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              NU GEVEN
            </button>
            <button onClick={() => { setSelectedType('bouwproject'); setShowPaymentModal(true); }} className="px-8 py-4 rounded-full bg-white border-2 border-black font-semibold hover:bg-gray-50 transition">
              GEBOUWPROJECT
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showPaymentModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPaymentModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white flex justify-between items-start">
                <div><h3 className="text-3xl font-black mb-2">Voltooi Uw Gift</h3><p className="text-white/90">Uw vrijgevigheid maakt het verschil</p></div>
                <button onClick={() => setShowPaymentModal(false)} className="text-white text-4xl hover:text-white/80 transition leading-none">&times;</button>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Volledige Naam</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Uw volledige naam" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">E-mailadres</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="uw.email@voorbeeld.nl" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Land</label>
                    <select value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                      <option value="">Selecteer uw land</option>
                      <option value="Netherlands">Nederland</option>
                      <option value="Belgium">België</option>
                      <option value="Germany">Duitsland</option>
                      <option value="France">Frankrijk</option>
                      <option value="Other">Overig</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bedrag (EUR)</label>
                    <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Voer bedrag in" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bestemming</label>
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                      <option value="">Selecteer bestemming</option>
                      <option value="tienden">Tienden & Offeranden</option>
                      <option value="gebouw">Gebouwfonds</option>
                      <option value="zending">Internationale Zending</option>
                      <option value="speciaal">Speciale Behoeften</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bericht (optioneel)</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Aanvullende informatie of gebedsverzoeken..." />
                  </div>
                  <button onClick={handleSubmit} className="w-full bg-red-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg">
                    Verzenden & Doorgaan naar Betaling
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}