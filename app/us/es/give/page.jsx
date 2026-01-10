'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const givingOptions = [
  { id: 1, title: 'Donación Única', icon: 'https://img.icons8.com/flat-round/100/filled-like.png', description: 'Haga una donación única para apoyar nuestra misión', popular: false },
  { id: 2, title: 'Donación Mensual', icon: 'https://img.icons8.com/external-soft-fill-juicy-fish/100/external-give-hands-and-gestures-soft-fill-soft-fill-juicy-fish-2.png', description: 'Conviértase en socio mensual con apoyo recurrente', popular: true },
  { id: 3, title: 'Proyectos Especiales', icon: 'https://img.icons8.com/clouds/100/worker-male.png', description: 'Apoye iniciativas ministeriales específicas y proyectos de construcción', popular: false }
];

const projectCategories = [
  { 
    title: 'Ministerio General', 
    description: 'Apoyo de operaciones diarias', 
    icon: '⛪', 
    accounts: [
      { name: 'Diezmos y Ofrendas', number: '2007597201', bank: 'FCMB Bank', country: 'Nigeria' },
      { name: 'Fondo General', number: '5080211796', bank: 'Moniepoint MFB', country: 'Nigeria' }
    ], 
    color: 'from-blue-500 to-blue-600' 
  },
  { 
    title: 'Proyectos de Construcción', 
    description: 'Construyendo nuevas instalaciones', 
    icon: '🏛️', 
    accounts: [
      { name: 'Fondo de Construcción', number: '5080211796', bank: 'Moniepoint MFB', country: 'Nigeria' },
      { name: 'Alquiler e Instalaciones', number: '5080212023', bank: 'Moniepoint MFB', country: 'Nigeria' }
    ], 
    color: 'from-orange-500 to-red-600' 
  },
  { 
    title: 'Misiones Globales', 
    description: 'Alcanzando naciones con el Evangelio', 
    icon: 'https://img.icons8.com/doodle/48/europe.png', 
    accounts: [
      { name: 'Fondo de Misiones', number: '5540041633', bank: 'Moniepoint MFB', country: 'Nigeria' }
    ], 
    color: 'from-green-500 to-teal-600' 
  },
  { 
    title: 'Necesidades Especiales', 
    description: 'Apoyo al alcance comunitario', 
    icon: '🤝', 
    accounts: [
      { name: 'Fondo de Benevolencia', number: '5540044641', bank: 'Moniepoint MFB', country: 'Nigeria' }
    ], 
    color: 'from-purple-500 to-pink-600' 
  }
];

const faqs = [
  { question: '¿Cómo se utiliza mi donación?', answer: 'Su ofrenda apoya directamente las operaciones del ministerio, programas de alcance, trabajo misionero e iniciativas de expansión del reino.' },
  { question: '¿Puedo elegir dónde va mi donación?', answer: '¡Absolutamente! Puede designar su ofrenda a áreas específicas o permitirnos asignarla donde más se necesite.' },
  { question: '¿Hay otras formas de dar además de en línea?', answer: 'Sí! Puede dar mediante transferencia bancaria, PayPal, en persona, o enviar un cheque a nuestra oficina.' },
  { question: '¿Mi información de pago está segura?', answer: 'Su seguridad es nuestra prioridad. Utilizamos encriptación estándar de la industria y nunca almacenamos información completa de tarjetas.' },
  { question: '¿Puedo obtener un recibo fiscal?', answer: 'Sí, todas las donaciones son deducibles de impuestos cuando corresponda. Recibirá recibos automáticos por correo electrónico.' },
  { question: '¿Con quién contacto si tengo preguntas?', answer: 'Contacte a nuestro equipo de finanzas en finance@nclc.org o llame a nuestra oficina de la iglesia para asistencia.' }
];

const southAmericanCountries = [
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 
  'Ecuador', 'Guyana', 'Paraguay', 'Perú', 'Surinam', 
  'Uruguay', 'Venezuela', 'Otro'
];

export default function SpanishGivePage() {
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
    currency: 'USD',
    message: ''
  });

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(name);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', { ...formData, type: selectedType });
    alert('Gracias por su generosidad. Nos pondremos en contacto con usted pronto.');
    setShowPaymentModal(false);
    setFormData({ name: '', email: '', country: '', amount: '', currency: 'USD', message: '' });
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920&h=1080&fit=crop" alt="Ofrendar" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:mt-14 h-full flex items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-block mb-4 text-xs font-bold tracking-widest uppercase text-yellow-500 bg-red-400/10 backdrop-blur px-5 py-2 rounded-full border border-red-400/20">La Generosidad Cambia Vidas</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">Tu Ofrenda<span className="block text-yellow-500">Hace la Diferencia</span></h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">Cada semilla sembrada con fe produce una cosecha. Tu generosidad nos permite alcanzar a los perdidos, equipar a los salvos y liberar líderes.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-600 via-yellow-800 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Tu Impacto en Números</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div><div className="text-5xl font-black mb-2">10,000+</div><div className="text-sm font-medium">Vidas Impactadas</div></div>
            <div><div className="text-5xl font-black mb-2">50+</div><div className="text-sm font-medium">Iglesias Plantadas</div></div>
            <div><div className="text-5xl font-black mb-2">30+</div><div className="text-sm font-medium">Naciones Alcanzadas</div></div>
            <div><div className="text-5xl font-black mb-2">1,000+</div><div className="text-sm font-medium">Líderes Entrenados</div></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Elige Tu Método de Donación</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {givingOptions.map((option) => (
            <motion.div key={option.id} whileHover={{ y: -8 }} onClick={() => setSelectedOption(option.id)} className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all ${selectedOption === option.id ? 'border-red-600 shadow-xl bg-red-50' : 'border-gray-200 hover:border-red-300 bg-white'}`}>
              {option.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">Más Popular</div>}
              <img src={option.icon} alt={option.title} className="w-20 h-20 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600">{option.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => setShowPaymentModal(true)} className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-800 transition">Continuar para Ofrendar</button>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">A Dónde Van Tus Ofrendas</h2>
            <p className="text-lg text-gray-600">Dona a destinos específicos mediante transferencia bancaria internacional</p>
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
                          {copiedAccount === account.name ? '✓ ¡Copiado!' : 'Copiar'}
                        </button>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-mono font-bold text-gray-900">{account.number}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500 uppercase">{account.bank}</span>
                          <span className="text-gray-500">{account.country}</span>
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
          <h2 className="text-3xl font-bold mb-8">Dona en Línea con PayPal</h2>
          <p className="text-gray-600 mb-8">Donación segura en línea desde cualquier país de Sudamérica</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.paypal.me/nclminternational" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg">
                Donar con PayPal →
              </button>
            </a>
            <button onClick={() => setShowPaymentModal(true)} className="bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition">
              Transferencia Bancaria →
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Preguntas Frecuentes</h2>
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
            <h3 className="text-2xl font-bold mb-2">Dona a New Creation Life Ministries</h3>
            <p className="text-gray-600">Tu generosidad continúa bendiciendo vidas y expandiendo el Reino.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setShowPaymentModal(true)} className="px-8 py-4 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition">
              DONAR AHORA
            </button>
            <button onClick={() => { setSelectedType('construcción'); setShowPaymentModal(true); }} className="px-8 py-4 rounded-full bg-white border-2 border-black font-semibold hover:bg-gray-50 transition">
              PROYECTO DE CONSTRUCCIÓN
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showPaymentModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPaymentModal(false)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-8 text-white flex justify-between items-start">
                <div><h3 className="text-3xl font-black mb-2">Completa Tu Ofrenda</h3><p className="text-white/90">Tu generosidad hace la diferencia</p></div>
                <button onClick={() => setShowPaymentModal(false)} className="text-white text-4xl hover:text-white/80 transition leading-none">&times;</button>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="tu.correo@ejemplo.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">País</label>
                    <select value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                      <option value="">Selecciona tu país</option>
                      {southAmericanCountries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Monto</label>
                      <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Ingresa monto" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Moneda</label>
                      <select value={formData.currency} onChange={(e) => setFormData({ ...formData, currency: e.target.value })} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                        <option value="USD">USD ($)</option>
                        <option value="ARS">ARS (Peso Argentino)</option>
                        <option value="BRL">BRL (Real Brasileño)</option>
                        <option value="CLP">CLP (Peso Chileno)</option>
                        <option value="COP">COP (Peso Colombiano)</option>
                        <option value="PEN">PEN (Sol Peruano)</option>
                        <option value="VES">VES (Bolívar Venezolano)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Destino de la Ofrenda</label>
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none">
                      <option value="">Selecciona destino</option>
                      <option value="diezmos">Diezmos y Ofrendas</option>
                      <option value="construcción">Fondo de Construcción</option>
                      <option value="misiones">Misiones Globales</option>
                      <option value="especial">Necesidades Especiales</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje (opcional)</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none" placeholder="Información adicional o peticiones de oración..." />
                  </div>
                  <button onClick={handleSubmit} className="w-full bg-red-600 text-white py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition shadow-lg">
                    Enviar y Proceder al Pago
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