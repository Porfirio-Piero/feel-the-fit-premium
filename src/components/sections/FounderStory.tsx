'use client'

import { motion } from 'framer-motion'

export function FounderStory() {
  return (
    <section id="about" className="section bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-emerald-900/50 to-teal-900/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏋️</div>
                  <p className="text-zinc-400 text-sm">MaLisa Tarangioli</p>
                  <p className="text-emerald-400">Certified Personal Trainer</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-6"
            >
              <div className="text-4xl font-bold gradient-text">100+</div>
              <div className="text-zinc-400">Clients Transformed</div>
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge">
              <span>Meet Your Trainer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Hi, I'm <span className="gradient-text">MaLisa</span>
            </h2>
            
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              After years of struggling with my own fitness journey, I discovered that sustainable results 
              come from <strong className="text-emerald-400">personalized plans</strong>—not one-size-fits-all programs.
            </p>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              That's why I created Feel the Fit: a place where every client gets the individual attention 
              they deserve. No judgment, no intimidation—just real support and proven methods.
            </p>
            
            <blockquote className="border-l-4 border-emerald-500 pl-6 mb-8">
              <p className="text-xl text-white italic mb-3">
                "Our mission is to create a supportive and motivating environment where every client 
                feels empowered to take control of their health and fitness."
              </p>
              <cite className="text-zinc-500">— MaLisa Tarangioli, Owner</cite>
            </blockquote>
            
            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4">
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-semibold">ISSA Certified</div>
                <div className="text-sm text-zinc-500">Personal Trainer</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-2xl mb-2">🥗</div>
                <div className="font-semibold">PN Level 1</div>
                <div className="text-sm text-zinc-500">Nutrition Coach</div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">
              Start Your Journey
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}