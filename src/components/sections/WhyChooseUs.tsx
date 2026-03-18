'use client'

import { motion } from 'framer-motion'

const differentiators = [
  {
    icon: '🎯',
    title: 'Personalized Approach',
    description: 'No cookie-cutter programs. Every plan is built around your unique goals, schedule, and lifestyle.'
  },
  {
    icon: '📈',
    title: 'Proven Results',
    description: '100+ clients have transformed their bodies and lives. See the testimonials below.'
  },
  {
    icon: '🤝',
    title: 'Supportive Community',
    description: 'Join a welcoming group of like-minded individuals who cheer each other on.'
  },
  {
    icon: '🧠',
    title: 'Expert Guidance',
    description: 'ISSA Certified Personal Trainer and PN Level 1 Nutrition Coach by your side.'
  },
  {
    icon: '📅',
    title: 'Flexible Scheduling',
    description: 'Morning, afternoon, or evening. Find a time that works for your busy life.'
  },
  {
    icon: '💯',
    title: 'No Contracts',
    description: 'Month-to-month pricing. No long-term commitments. Cancel anytime.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="section gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            What Makes <span className="gradient-text">Feel the Fit</span> Different
          </h2>
          <p className="section-description">
            We're not just another gym. We're your partners in transformation, 
            committed to helping you achieve lasting results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}