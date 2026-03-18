'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '💪',
    title: 'One-on-One Training',
    description: 'Personalized workout plans tailored to your fitness level and goals. Get focused attention and expert guidance.',
    features: ['Custom workout plans', 'Progress tracking', 'Form correction', 'Flexible scheduling'],
    outcome: 'Build strength, lose weight, gain confidence'
  },
  {
    icon: '🥗',
    title: 'Nutrition Coaching',
    description: 'Expert nutrition guidance to fuel your workouts and maximize results. Meal planning and ongoing support included.',
    features: ['Custom meal plans', 'Macro tracking', 'Weekly check-ins', 'Grocery lists'],
    outcome: 'Optimize nutrition for your goals',
    featured: true
  },
  {
    icon: '👥',
    title: 'Small Group Fitness',
    description: 'Fun, motivating group classes that combine cardio, strength, and flexibility. All fitness levels welcome.',
    features: ['Small class sizes', 'Various class types', 'Supportive community', 'Flexible schedule'],
    outcome: 'Stay motivated with a team'
  },
]

export function Services() {
  return (
    <section id="services" className="section bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span>Our Services</span>
          </div>
          <h2 className="section-title">
            Programs Designed for <span className="gradient-text">Your Goals</span>
          </h2>
          <p className="section-description">
            Whether you want to lose weight, build muscle, or improve your overall health, 
            we have a program tailored to your needs.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-8 ${service.featured ? 'ring-2 ring-emerald-500/50' : ''}`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-emerald-500 rounded-full text-white text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-5xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-serif font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-zinc-300">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-zinc-500 mb-3">Outcome</p>
                <p className="text-emerald-400 font-medium">{service.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}