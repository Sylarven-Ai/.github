import React from 'react';
import { ArrowRight, Bot, Users, LayoutTemplate, Briefcase, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-mist font-sans">
      {/* Navigation */}
      <nav className="bg-white px-6 py-4 sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/1000167786.png" alt="Sylarven Logo" className="h-10 w-auto" />
            <span className="font-heading font-semibold text-xl text-navy tracking-tight">SYLARVEN</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-slate">
            <a href="#services" className="hover:text-sblue transition-colors">Services</a>
            <a href="#about" className="hover:text-sblue transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-sblue transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-coral hover:bg-opacity-90 text-white px-6 py-2.5 rounded-xl font-medium transition-all">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-navy pt-24 pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-slate bg-opacity-20 text-cyan text-sm font-medium mb-6">
            Intelligent Systems. Scalable Growth.
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-semibold text-white mb-6 leading-tight">
            Let AI handle the repetitive work. You focus on growing.
          </h1>
          <p className="text-xl text-mist mb-10 max-w-2xl mx-auto opacity-90">
            Smart technology, fairly priced, delivered with care. We build systems and provide talent that reduce cost, remove friction, and accelerate your delivery.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-sblue hover:bg-cyan text-white px-8 py-4 rounded-xl font-medium transition-all text-lg shadow-lg">
            Start Saving Time <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Sylarven AI */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-mist text-sblue rounded-xl flex items-center justify-center mb-6">
              <Bot size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-navy mb-3">Sylarven AI</h3>
            <p className="text-slate">Intelligent automation workflows that reduce cost and remove operational friction.</p>
          </div>

          {/* Sylarven Studio */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-mist text-sblue rounded-xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-navy mb-3">Sylarven Studio</h3>
            <p className="text-slate">Curated expert freelance talent for high-impact projects demanding speed and craft.</p>
          </div>

          {/* Sylarven Digital */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-mist text-sblue rounded-xl flex items-center justify-center mb-6">
              <LayoutTemplate size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-navy mb-3">Sylarven Digital</h3>
            <p className="text-slate">Ready-to-deploy digital products, automation kits, and robust software platforms.</p>
          </div>

          {/* Business Consultancy */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-mist text-sblue rounded-xl flex items-center justify-center mb-6">
              <Briefcase size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl text-navy mb-3">Business Consultancy</h3>
            <p className="text-slate">Strategic advisory aligning technology, talent, and operations with measurable outcomes.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12 border-t border-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/1000167786.png" alt="Sylarven Logo" className="h-8 w-auto brightness-200" />
            <span className="font-heading font-semibold text-xl tracking-tight">SYLARVEN</span>
          </div>
          <div className="flex items-center gap-2 text-slate text-sm">
            <Mail size={16} /> hello@sylarven.com
          </div>
        </div>
      </footer>
    </div>
  );
}
