"use client"

import { motion } from "framer-motion";
import React, { useState } from 'react';
import { Building2, Users, Ruler, MapPin, Phone, Mail, Star, BrickWall, MapPinCheck, HardHat, KeyRound, Handshake } from 'lucide-react';
import CountUp from "react-countup";
import Image from "next/image";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    zone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu consulta! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      zone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const stats = [
    { icon: Building2, value: '15+', label: 'Edificios Entregados' },
    { icon: BrickWall, value: '450+', label: 'Departamentos Entregados' },
    { icon: Ruler, value: '35.000+', label: 'M² Construidos' },
    { icon: MapPin, value: '8', label: 'Barrios en CABA' }
  ];

  const reviews = [
    {
      name: 'María González',
      rating: 5,
      text: 'Excelente atención y profesionalismo. Cumplieron con todos los plazos de entrega.',
      date: '2 meses'
    },
    {
      name: 'Carlos Rodríguez',
      rating: 5,
      text: 'La calidad de construcción superó mis expectativas. Muy conforme con mi inversión.',
      date: '3 meses'
    },
    {
      name: 'Laura Martínez',
      rating: 5,
      text: 'Transparencia total en todo el proceso. El equipo de ventas siempre disponible.',
      date: '1 mes'
    },
    {
      name: 'Javier López',
      rating: 5,
      text: 'Encontré el departamento perfecto para mi familia. Recomiendo totalmente.',
      date: '4 meses'
    }
  ];

  const propertyTypes = [
    'Monoambiente',
    'Dos ambientes',
    'Tres ambientes',
    'Cuatro ambientes'
  ];

  const zones = [
    'Núñez',
    'Saavedra',
    'Villa Urquiza',
    'Palermo',
    'Caballito',
    'Belgrano',
    'Colegiales',
    'Villa Crespo'
  ];
  const activities = [
    {
    title: "Compra de Terrenos",
    desc: "Adquisición estratégica en zonas con potencial de desarrollo.",
    icon: MapPinCheck
  },
  {
    title: "Diseño Arquitectónico",
    desc: "Planos elaborados por profesionales para optimizar funcionalidad y estética.",
    icon: HardHat
  },
  {
    title: "Construcción de Edificios",
    desc: "Obras con materiales de calidad y supervisión técnica constante.",
    icon: Building2
  },
  {
    title: "Venta de Departamentos",
    desc: "Asesoramiento personalizado durante el proceso de compra.",
    icon: Handshake
  },
  {
    title: "Entrega Final",
    desc: "Control de calidad y entrega de llaves al nuevo propietario.",
    icon: KeyRound
  }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0d1b2a] via-[#042e5d] to-[#0d1b2a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Grupo Briones
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300">
                Tu Próximo Hogar en CABA
              </p>
              <p className="text-lg text-gray-400">
                Con más de 450 departamentos entregados, somos especialistas en construir espacios que transforman vidas.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold"> <CountUp end={15} duration={1.4} suffix="+" /> </div>
                    <div className="text-sm text-gray-400">Edificios</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold"><CountUp end={450} duration={1.4} suffix="+" /></div>
                    <div className="text-sm text-gray-400">Familias</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[#0d1b2a] mb-6">
                Encontrá tu Departamento Ideal
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Qué tipo de departamento buscás?
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  >
                    <option value="" disabled>Seleccionar:</option>
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cuál es tu zona de preferencia?
                  </label>
                  <select
                    name="zone"
                    value={formData.zone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  >
                    <option value="" disabled>Seleccionar:</option>
                    {zones.map((zone) => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-[#0d1b2a] to-[#042e5d] text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  QUIERO MÁS INFORMACIÓN
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-[#0d1b2a] to-[#042e5d] rounded-xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-[#0d1b2a] mb-2">
                    <CountUp end={parseInt(stat.value)} duration={2.5} delay={0.5} separator="." suffix={stat.value.includes('+') ? '+' : ''} />
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
  <motion.div
    className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] mb-6">
      Actividad de la Empresa
    </h2>

    <div className="w-20 h-1 bg-[linear-gradient(to_right,#0d1b2a,#042e5d)] mx-auto mb-12"></div>

    {/* Grid de Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {activities.map((item, index) => {
        const Icon = item.icon;
      
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-[#0d1b2a] text-3xl mb-4">
              <Icon />
            </div>
            <h3 className="text-xl font-semibold text-[#0d1b2a] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        );
      })}
</div>
  </motion.div>
</section>

      {/* Reviews Section */}
      <section className="py-20 bg-linear-to-br from-[#0d1b2a] via-[#042e5d] to-[#0d1b2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ duration: 0.5, delay: index * 0.15}}
              viewport={{once: true}}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-400">Hace {review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-[#0d1b2a] mb-4"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            >
              ¿Listo para dar el próximo paso?
            </motion.h2>
            <p className="text-lg text-gray-600">
              Dejanos tus datos y te contactaremos para ayudarte a encontrar tu hogar ideal
            </p>
          </div>

          <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          transition={{ duration: 0.7, ease: "easeIn"}}
          viewport={{once: true}}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre completo*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Contanos sobre tu búsqueda..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#042e5d] focus:border-transparent text-gray-900"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-linear-to-r from-[#0d1b2a] to-[#042e5d] text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                ENVIAR CONSULTA
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1b2a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Grupo Briones</h3>
              <p className="text-gray-400">
                Desarrollos inmobiliarios de calidad en Buenos Aires
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+54 11 3113 5466</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@grupobriones.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Seguinos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  IG
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  TT
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Grupo Briones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;