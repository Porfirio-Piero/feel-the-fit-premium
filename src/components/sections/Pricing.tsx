'use client'

import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '149',
    period: '/month',
    description: 'Perfect for beginners',
    features: [
      { text: '2 Personal Training Sessions', included: true },
      { text: 'Basic Nutrition Guide', included: true },
      { text: 'Progress Tracking App', included: true },
      { text: 'Email Support', included: true },
      { text: 'Custom Meal Plan', included: false },
      { text: 'Unlimited Classes', included: false }
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Transformation',
    price: '249',
    period: '/month',
    description: 'Complete transformation',
    features: [
      { text: '4 Personal Training Sessions', included: true },
      { text: 'Custom Meal Plan', included: true },
      { text: 'Weekly Check-ins', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Text Support', included: true },
      { text: 'Body Composition Analysis', included: true }
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Elite',
    price: '399',
    period: '/month',
    description: 'For serious athletes',
    features: [
      { text: 'Unlimited Personal Training', included: true },
      { text: 'Advanced Nutrition Coaching', included: true },
      { text: '24/7 Text Support', included: true },
      { text: 'Competition Prep', included: true },
      { text: 'Supplement Guidance', included: true },
      { text: 'Weekly Progress Photos', included: true }
    ],
    cta: 'Get Started',
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="section gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span>Pricing</span>
          </div>
          <h2 className="section-title">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-description">
            Choose the package that fits your goals. No hidden fees, no contracts, cancel anytime.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-emerald-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-400">{plan.description}</p>
              </div>
              
              <div className="text-center mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-zinc-500">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li 
                    key={j} 
                    className={`flex items-center gap-3 ${!feature.included ? 'text-zinc-600' : 'text-zinc-300'}`}
                  >
                    {feature.included ? (
                      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    {feature.text}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`w-full justify-center text-center ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zinc-400">
            <span className="text-emerald-500">✓</span> No contracts 
            <span className="mx-3">•</span>
            <span className="text-emerald-500">✓</span> Cancel anytime 
            <span className="mx-3">•</span>
            <span className="text-emerald-500">✓</span> 100% satisfaction guarantee
          </p>
        </motion.div>
      </div>
    </section>
  )
}