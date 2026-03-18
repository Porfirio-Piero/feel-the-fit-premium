'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <span className="text-xl">💪</span>
            </div>
            <span className="font-serif text-xl font-bold">Feel the Fit</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="text-zinc-400 hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="btn-primary">Book Free Consult</a>
          </div>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pt-4 pb-2"
          >
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-zinc-400 hover:text-white transition-colors py-2">Services</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors py-2">Pricing</a>
              <a href="#about" className="text-zinc-400 hover:text-white transition-colors py-2">About</a>
              <a href="#testimonials" className="text-zinc-400 hover:text-white transition-colors py-2">Reviews</a>
              <a href="#contact" className="btn-primary text-center mt-2">Book Free Consult</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}