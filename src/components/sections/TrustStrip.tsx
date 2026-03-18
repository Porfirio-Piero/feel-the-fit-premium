'use client'

import { motion } from 'framer-motion'

const trustItems = [
  { icon: '🎓', label: 'ISSA Certified', sublabel: 'Personal Trainer' },
  { icon: '🥗', label: 'PN Level 1', sublabel: 'Nutrition Coach' },
  { icon: '👥', label: '100+', sublabel: 'Happy Clients' },
  { icon: '📍', label: 'Hamilton, NJ', sublabel: 'Local Business' },
  { icon: '⭐', label: '5-Star', sublabel: 'Reviews' },
]

export function TrustStrip() {
  return (
    <section className="py-12 bg-zinc-900/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <div className="font-semibold text-white">{item.label}</div>
                <div className="text-sm text-zinc-500">{item.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}