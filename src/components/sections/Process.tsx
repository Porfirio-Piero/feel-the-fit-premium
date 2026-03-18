'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'We start with a no-pressure conversation about your goals, history, and lifestyle. No sales, just understanding.',
    icon: '💬'
  },
  {
    number: '02',
    title: 'Custom Plan',
    description: 'Based on your consultation, we create a personalized fitness and nutrition plan tailored to your needs.',
    icon: '📋'
  },
  {
    number: '03',
    title: 'Start Training',
    description: 'Begin your journey with one-on-one sessions. We meet you where you are and build from there.',
    icon: '🏋️'
  },
  {
    number: '04',
    title: 'Track Progress',
    description: 'Weekly check-ins, progress photos, and measurements to keep you accountable and motivated.',
    icon: '📊'
  },
  {
    number: '05',
    title: 'Celebrate Results',
    description: 'Reach your goals, build confidence, and maintain your transformation for life.',
    icon: '🎉'
  }
]

export function Process() {
  return (
    <section className="section bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span>How It Works</span>
          </div>
          <h2 className="section-title">
            Your <span className="gradient-text">Transformation Journey</span>
          </h2>
          <p className="section-description">
            Simple, straightforward, and focused on results. Here's what to expect.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative md:flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="glass rounded-xl p-6 md:max-w-md inline-block">
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <div className="text-emerald-500 font-mono text-sm mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-zinc-400">{step.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                
                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}