'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const dynamic = 'force-dynamic';

const givingOptions = [
  { id: 1, title: 'Eenmalige gift', icon: 'https://img.icons8.com/flat-round/100/filled-like.png', description: 'Doe een eenmalige schenking ter ondersteuning van onze missie', popular: false },
  { id: 2, title: 'Maandelijkse steun', icon: 'https://img.icons8.com/external-soft-fill-juicy-fish/100/external-give-hands-and-gestures-soft-fill-soft-fill-juicy-fish-2.png', description: 'Word maandelijkse partner met terugkerende ondersteuning', popular: true },
  { id: 3, title: 'Speciale projecten', icon: 'https://img.icons8.com/clouds/100/worker-male.png', description: 'Ondersteun specifieke bedieningstrajecten en bouwprojecten', popular: false }
];

const projectCategories = [
  { 
    title: 'Algemene bediening', 
    description: 'Ondersteuning van dagelijkse werkzaamheden', 
    icon: '⛪', 
    accounts: [
      { name: 'Tienden & Offerandes', number: 'Rekeninggegevens op aanvraag', bank: 'US Bank', routing: 'Neem contact op voor routingnummer' },
      { name: 'Algemeen Fonds', number: 'Rekeninggegevens op aanvraag', bank: 'US Bank', routing: 'Neem contact op voor routingnummer' }
    ], 
    color: 'from-blue-500 to-blue-600' 
  },
  { 
    title: 'Bouwprojecten', 
    description: 'Opzetten van nieuwe faciliteiten', 
    icon: '🏛️', 
    accounts: [
      { name: 'Bouwfonds', number: 'Rekeninggegevens op aanvraag', bank: 'US Bank', routing: 'Neem contact op voor routingnummer' },
      { name: 'Huur & Faciliteiten', number: 'Rekeninggegevens op aanvraag', bank: 'US Bank', routing: 'Neem contact op voor routingnummer' }
    ], 
    color: 'from-orange-500 to-red-600' 
  },
  { 
    title: 'Wereldwijde zending', 
    description: 'Naties bereiken met het evangelie', 
    icon: 'https://img.icons8.com/doodle/48/europe.png', 
    accounts: [
      { name: 'Zendingsfonds', number: 'Rekeninggegevens op aanvraag', bank: 'US Bank', routing: 'Neem contact op voor routingnummer' }
    ], 
    color: 'from-green-500 to-teal-600' 
  },
  { 
    title: 'Bijzondere behoeften', 
    description: 'Ondersteuning van community outreach', 
    icon: '🤝', 
    accounts: [
      { name: 'Bijstandsfonds', number: 'Rekeninggegevens op aanvraag', bank: 'US Bank', routing: 'Neem contact op voor routingnummer' }
    ], 
    color: 'from-purple-500 to-pink-600' 
  }
];

const faqs = [
  { question: 'Hoe wordt mijn donatie gebruikt?', answer: 'Uw gift ondersteunt direct de bediening, outreach-programma\'s, zendingswerk en initiatieven voor de uitbreiding van het Koninkrijk in de Verenigde Staten en wereldwijd.' },
  { question: 'Kan ik kiezen waar mijn gift naartoe gaat?', answer: 'Absoluut! U kunt uw gift aanwijzen voor specifieke fondsen of ons laten toewijzen waar het het meest nodig is.' },
  { question: 'Zijn er andere manieren om te geven naast online?', answer: 'Ja! U kunt ook geven via bankoverschrijving, cheque, persoonlijk tijdens diensten of via onze mobiele app.' },
  { question: 'Zijn mijn betalingsgegevens veilig?', answer: 'Uw veiligheid is onze prioriteit. We gebruiken bankniveau-versleuteling en slaan nooit volledige kaartgegevens op. Alle transacties zijn PCI-compliant.' },
  { question: 'Kan ik een belastingbewijs ontvangen?', answer: 'Ja! Alle donaties zijn fiscaal aftrekbaar. U ontvangt automatische ontvangstbewijzen per e-mail en een jaaroverzicht voor belastingdoeleinden.' },
  { question: 'Wenst u contact over vragen?', answer: 'Neem contact op met ons financiële team via finance@nclcusa.org of bel ons kantoor op (555) 123-4567 voor hulp.' }
];

const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export default function USAGivePage() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    amount: '',
    message: ''
  });

  const copyToClipboard = (text, name) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedAccount(name);
      setTimeout(() => setCopiedAccount(null), 2000);
    } else {
      // fallback
      alert('Kopieer de gegevens handmatig: ' + text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulier verzonden:', { ...formData, type: selectedType });
    alert('Dank u voor uw vrijgevigheid! We nemen snel contact met u op met betaalgegevens.');
    setShowPaymentModal(false);
    setFormData({ name: '', email: '', phone: '', address: '', city: '', state: '', zip: '', amount: '', message: '' });
    setSelectedType('');
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
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-yellow-500 bg-red-400/10 backdrop-blur px-5 py-2 rounded-full border border-red-400/20">Gulheid Verandert Levens</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">Uw gift<span className="block text-yellow-500">Maakt impact</span></h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">Elke zaadje dat in geloof wordt gezaaid, brengt een oogst voort. Uw vrijgevigheid stelt ons in staat om de verloren te bereiken, de geredde toe te rusten en leiders uit te zenden in Amerika en daarbuiten.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-600 via-yellow-800 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Uw impact in cijfers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-5xl font-black mb-2">10.000+</div><div className="text-sm font-medium">Levens beïnvloed</div></div>
            <div><div className="text-5xl font-black mb-2">50+</div><div className="text-sm font-medium">Gestichte kerken</div></div>
            <div><div className="text-5xl font-black mb-2">30+</div><div className="text-sm font-medium">Bereikte naties</div></div>
            <div><div className="text-5xl font-black mb-2">1.000+</div><div className="text-sm font-medium">Leiders opgeleid</div></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Kies uw wijze van geven</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {givingOptions.map((option) => (
            <motion.div key={option.id} whileHover={{ y: -8 }} onClick={() => setSelectedOption(option.id)} className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all ${selectedOption === option.id ? 'border-red-600 shadow-xl bg-red-50' : 'border-gray-200 hover:border-red-300 bg-white'}`}>
              {option.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">Meest populair</div>}
              <img src={option.icon} alt={option.title} className="w-20 h-20 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => setShowPaymentModal(true)} className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition">Doorgaan met geven</button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Waar uw giften naartoe gaan</h2>
            <p className="text-lg text-gray-600">Geef aan specifieke fondsen via cheque, bankoverschrijving of online betaling</p>
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
                          {copiedAccount === account.name ? '✓ Gekopieerd!' : 'Kopieer'}
                        </button>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-700">{account.number}</div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">{account.bank}</span>
                          <span className="text-gray-500">{account.routing}</span>
                        </div>
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
          <h2 className="text-3xl font-bold mb-8">Geef veilig online</h2>
          <p className="text-gray-600 mb-8">Veilig en beveiligd online geven via creditcard, debetkaart of PayPal</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.paypal.me/nclminternational" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                Geef via PayPal →
              </button>
            </a>
            <button onClick={() => setShowPaymentModal(true)} className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition">
              Creditcard/Debetkaart →
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-600">
            <p className="mb-2">🔒 Alle transacties zijn veilig en versleuteld</p>
            <p>💳 Geaccepteerd: Visa, Mastercard, American Express, Discover</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-6">Andere manieren om te geven</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Stuur een cheque</h3>
                  <p className="text-gray-600 text-sm">Maak cheques over aan "New Creation Life Ministries" en stuur naar:<br/>Kingdom Way 123, Suite 100<br/>Uw stad, Staat 12345</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏦</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Bankoverschrijving/ACH</h3>
                  <p className="text-gray-600 text-sm">Neem contact op met ons financiële kantoor voor rekening- en routinggegevens voor directe overschrijvingen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Text to Give</h3>
                  <p className="text-gray-600 text-sm">Stuur GIVE naar (555) 123-4567 om een beveiligde link voor mobiel geven te ontvangen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎁</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Aandelen & Vermogens</h3>
                  <p className="text-gray-600 text-sm">Doneer gewaardeerde aandelen, obligaties of andere activa. Neem contact op voor overdrachtsinstructies.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Belastingvoordelen</h3>
            <p className="mb-6 leading-relaxed">New Creation Life Ministries is een belastingvrijgestelde 501(c)(3)-organisatie. Uw donaties zijn fiscaal aftrekbaar voor zover de wet dit toestaat.</p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold mb-1">Belastingnummer (EIN)</p>
              <p className="text-2xl font-bold">XX-XXXXXXX</p>
            </div>
            <p className="text-sm text-white/80">Alle donoren ontvangen een jaaroverzicht voor IRS-rapportage. Bewaar uw ontvangstbewijzen voor belastingdoeleinden.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Veelgestelde vragen</h2>
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
            <p className="text-gray-600">Uw vrijgevigheid blijft levens zegenen en het Koninkrijk uitbreiden in Amerika.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setShowPaymentModal(true)} className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              GEEF NU
            </button>
            <button onClick={() => { setSelectedType('building'); setShowPaymentModal(true); }} className="px-8 py-4 rounded-full bg-white border-2 border-black font-semibold hover:bg-gray-50 transition">
              BOUWPROJECT
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showPaymentModal && (
          // Backdrop positioned 40px below navbar and modal scrollable
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 right-0 top-[40px] bottom-0 z-50 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4"
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[calc(100vh-40px)] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white flex justify-between items-start sticky top-0 z-10">
                <div>
                  <h3 className="text-3xl font-black mb-2">Voltooi uw gift</h3>
                  <p className="text-white/90">Uw vrijgevigheid maakt een verschil</p>
                </div>
                <button onClick={() => setShowPaymentModal(false)} className="text-white text-4xl hover:text-white/80 transition leading-none" aria-label="Sluiten">&times;</button>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Volledige naam</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Uw volledige naam" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">E-mailadres</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="uw.email@voorbeeld.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Telefoonnummer</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Straatadres</label>
                    <input type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="123 Main Street" />
                  </div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Stad</label>
                      <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Stad" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Staat</label>
                      <select value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                        <option value="">Staat</option>
                        {usStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Postcode</label>
                      <input type="text" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="12345" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bedrag van gift ($)</label>
                    <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Voer bedrag in" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bestemming van gift</label>
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                      <option value="">Kies bestemming</option>
                      <option value="tithe">Tienden & Offerandes</option>
                      <option value="building">Bouwfonds</option>
                      <option value="missions">Wereldwijde zending</option>
                      <option value="special">Bijzondere behoeften</option>
                      <option value="general">Waar het het meest nodig is</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Bericht (optioneel)</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Aanvullende informatie of gebedsverzoeken..." />
                  </div>
                  <button onClick={handleSubmit} className="w-full bg-red-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg">
                    Verzend & ga door naar betaling
                  </button>
                  <p className="text-xs text-center text-gray-500">Uw donatie is fiscaal aftrekbaar. U ontvangt een ontvangst per e-mail.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}