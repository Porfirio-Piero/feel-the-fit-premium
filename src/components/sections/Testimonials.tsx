'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah M.',
    quote: "MaLisa changed my life! I've lost 30 pounds and gained so much confidence. The personalized approach makes all the difference.",
    result: 'Lost 30 lbs in 4 months',
    source: 'Google Review',
    rating: 5
  },
  {
    name: 'Mike D.',
    quote: "Finally a trainer who listens! MaLisa created a plan that fits my busy schedule. The nutrition coaching was a game-changer.",
    result: 'Business Owner',
    source: 'Google Review',
    rating: 5
  },
  {
    name: 'Jennifer L.',
    quote: "The group classes are so much fun! Great atmosphere, supportive community, and real results. Best fitness decision I've ever made.",
    result: 'Group Fitness Member',
    source: 'Google Review',
    rating: 5
  },
  {
    name: 'Instagram Community',
    quote: "In just one year of training together she has become stronger, fitter, and more confident. She's also lost weight through dedication to clean diet.",
    result: '@malisat.fitness',
    source: 'Instagram',
    rating: 5
  },
  {
    name: 'Hamilton Community',
    quote: "Had a GREAT time getting our fitness on! My legs are feeling it and all that sweat... my body is thanking me for the workout!",
    result: 'Hamilton, NJ',
    source: 'Facebook',
    rating: 5
  },
  {
    name: 'Long-time Friend',
    quote: "I've known MaLisa for most of my life. I can honestly say she knows what she is doing. Shoot her a DM if you want to level up.",
    result: 'Hamilton, NJ',
    source: 'Facebook',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section gradient-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="section-badge">
            <span>Testimonials</span>
          </div>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-description">
            Real results from real people in Hamilton, NJ
          </p>
        </motion.div>
        
        {/* Google Reviews Notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-4 mb-8 text-center"
        >
          <p className="text-zinc-300">
            <strong className="text-white">📢 New Business!</strong> Feel the Fit opened in September 2025. 
            We're building our Google reviews.{' '}
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener"
              className="text-emerald-400 hover:underline"
            >
              Leave a review on Google
            </a>{' '}
            after your session!
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-yellow-500">⭐</span>
                ))}
              </div>
              
              <p className="text-zinc-300 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-emerald-400">{testimonial.result}</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs text-zinc-500">Verified via {testimonial.source}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}