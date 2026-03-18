'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-zinc-950 to-teal-900/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              New Fitness Studio in Hamilton, NJ
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              <span className="text-white">Transform Your Body.</span>
              <br />
              <span className="gradient-text">Transform Your Life.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
              Personalized fitness training designed for <em className="text-emerald-400">your</em> goals. 
              One-on-one sessions, expert nutrition coaching, and a supportive community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="btn-primary text-lg">
                Book Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#services" className="btn-secondary text-lg">
                View Programs
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                ISSA Certified Trainer
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                PN Nutrition Coach
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-500">✓</span>
                100+ Clients
              </div>
            </div>
          </motion.div>
          
          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 md:p-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-semibold text-sm">
                  GRAND OPENING SPECIAL
                </div>
              </div>
              
              <div className="text-center pt-4">
                <h3 className="text-2xl font-serif font-bold mb-2">First Week Free</h3>
                <p className="text-zinc-400 mb-8">Try unlimited classes and one personal training session</p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    '3 Personal Training Sessions',
                    'Nutrition Assessment',
                    'Fitness Goal Setting',
                    'Weekly Progress Check-ins'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-left">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="btn-primary w-full justify-center text-lg">
                  Claim Your Free Week
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-emerald-500 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}