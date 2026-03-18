'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <span className="text-xl">💪</span>
              </div>
              <span className="font-serif text-xl font-bold">Feel the Fit</span>
            </div>
            <p className="text-zinc-500 mb-4">
              Personalized fitness training for Hamilton, NJ. Transform your body, transform your life.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/fitgirl17/" target="_blank" rel="noopener" className="text-2xl hover:scale-110 transition-transform">📘</a>
              <a href="https://www.instagram.com/malisat.fitness/" target="_blank" rel="noopener" className="text-2xl hover:scale-110 transition-transform">📷</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-zinc-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Personal Training</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Nutrition Coaching</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Group Fitness</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-zinc-400">
              <li>📍 29 George Dye Road</li>
              <li>Hamilton, NJ 08690</li>
              <li><a href="tel:+16094140091" className="hover:text-emerald-400 transition-colors">📞 (609) 414-0091</a></li>
              <li><a href="mailto:info@feelthefithamilton.com" className="hover:text-emerald-400 transition-colors">✉️ Email Us</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2025 Feel the Fit by MaLisa. All rights reserved.
          </p>
          <p className="text-zinc-600 text-sm">
            ✅ <a href="https://www.hamiltonnj.com/m/newsflash/Home/Detail/287" target="_blank" rel="noopener" className="hover:text-emerald-400 transition-colors">Featured on HamiltonNJ.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}