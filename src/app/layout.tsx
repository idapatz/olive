import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

// Space Grotesk als moderne, minimalistische Heading-Schrift
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
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
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased text-sage-900 bg-white`}>
        {children}
      </body>
    </html>
  )
}
