'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'Do I need to be fit to start?',
    answer: 'Absolutely not! We meet you where you are. Whether you\'re a complete beginner or getting back into fitness after years, we\'ll create a plan that works for your current level.'
  },
  {
    question: 'What should I bring to my first session?',
    answer: 'Just comfortable workout clothes, a water bottle, and a positive attitude! We provide all the equipment you\'ll need.'
  },
  {
    question: 'How often should I train?',
    answer: 'It depends on your goals and schedule. Most clients see great results with 2-3 sessions per week, but we\'ll discuss what works best for you during your free consultation.'
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer: 'No problem! Just give us 24 hours notice and you can reschedule at no charge. We understand life happens.'
  },
  {
    question: 'Is nutrition coaching included?',
    answer: 'All packages include basic nutrition guidance. The Transformation and Elite packages include custom meal plans and ongoing nutrition support.'
  }
]

export function Location() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="contact" className="section bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span>Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span>?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Book your free consultation today. No pressure, no sales—just a conversation about your goals.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Location</h3>
                  <p className="text-zinc-400">29 George Dye Road</p>
                  <p className="text-zinc-400">Hamilton, NJ 08690</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+16094140091" className="text-emerald-400 hover:underline">(609) 414-0091</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a href="mailto:info@feelthefithamilton.com" className="text-emerald-400 hover:underline">info@feelthefithamilton.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-2xl flex-shrink-0">
                  🕐
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Hours</h3>
                  <p className="text-zinc-400">Mon-Fri: 5:00 AM - 9:00 PM</p>
                  <p className="text-zinc-400">Sat: 7:00 AM - 5:00 PM</p>
                  <p className="text-zinc-400">Sun: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/fitgirl17/" 
                target="_blank" 
                rel="noopener"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-white/10 transition-colors"
              >
                📘
              </a>
              <a 
                href="https://www.instagram.com/malisat.fitness/" 
                target="_blank" 
                rel="noopener"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-white/10 transition-colors"
              >
                📷
              </a>
            </div>
          </motion.div>
          
          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4 text-zinc-400">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}