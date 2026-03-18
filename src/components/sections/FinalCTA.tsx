'use client'

import { motion } from 'framer-motion'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-900/30 via-zinc-950 to-teal-900/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-badge mb-8">
            <span>Start Today</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Your Transformation <span className="gradient-text">Starts Now</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join 100+ Hamilton residents who have already transformed their lives. 
            Your first week is free—no risk, all reward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg">
              Book Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="tel:+16094140091" className="btn-secondary text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (609) 414-0091
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Free first week
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              No contracts
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              Cancel anytime
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}