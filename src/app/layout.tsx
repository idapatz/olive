import type { Metadata } from 'next'
import { Inter, Playfair_Display, Marcellus } from 'next/font/google'
import './globals.css'

// Marcellus als Futura-Ersatz (für die Hero-Überschrift)
const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-futura', // Wir behalten den Namen für Konsistenz
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Olive - Transparenz für deine Gesundheit',
  description: 'Unabhängige und wissenschaftlich fundierte Tests von Nahrungsergänzungsmitteln, Lebensmitteln und frischem Obst & Gemüse.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} ${marcellus.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
