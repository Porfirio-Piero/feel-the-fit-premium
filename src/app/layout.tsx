import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://feelthefithamilton.com'),
  title: {
    default: 'Feel the Fit by MaLisa | Personal Training & Fitness Studio | Hamilton, NJ',
    template: '%s | Feel the Fit'
  },
  description: 'Transform your body and life with personalized fitness training. One-on-one sessions, nutrition coaching, and group fitness in Hamilton, NJ. Certified trainer MaLisa Tarangioli helps you achieve your goals.',
  keywords: ['personal trainer Hamilton NJ', 'fitness studio Hamilton', 'personal training', 'nutrition coaching', 'group fitness', 'weight loss'],
  authors: [{ name: 'MaLisa Tarangioli' }],
  creator: 'MaLisa Tarangioli',
  publisher: 'Feel the Fit by MaLisa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://feelthefithamilton.com',
    siteName: 'Feel the Fit by MaLisa',
    title: 'Feel the Fit by MaLisa | Personal Training Studio',
    description: 'Transform your body and life with personalized fitness training in Hamilton, NJ.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Feel the Fit by MaLisa' }]
  },
  twitter: { card: 'summary_large_image', title: 'Feel the Fit by MaLisa', description: 'Transform your body and life with personalized fitness training in Hamilton, NJ.', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#10b981" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Feel the Fit by MaLisa",
          "image": "https://feelthefithamilton.com/og-image.jpg",
          "description": "Personal training and fitness studio offering one-on-one training, nutrition coaching, and group fitness classes.",
          "address": { "@type": "PostalAddress", "streetAddress": "29 George Dye Road", "addressLocality": "Hamilton", "addressRegion": "NJ", "postalCode": "08690", "addressCountry": "US" },
          "telephone": "(609) 414-0091",
          "openingHours": ["Mo-Fr 05:00-21:00", "Sa 07:00-17:00"],
          "url": "https://feelthefithamilton.com",
          "sameAs": ["https://www.facebook.com/fitgirl17/", "https://www.instagram.com/malisat.fitness/"],
          "founder": { "@type": "Person", "name": "MaLisa Tarangioli", "jobTitle": "Certified Personal Trainer & Nutrition Coach" }
        })}} />
      </head>
      <body className={`${inter.className} antialiased bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  )
}