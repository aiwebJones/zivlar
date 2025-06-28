import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Whimsy Gallery - Sketch Art from Creative AI Prompts!',
  description: 'Unleash your inner artist with AI Whimsy Gallery! Get unique AI-generated prompts and sketch hilarious or imaginative art. Share your creations and explore a gallery of digital whimsy.',
  keywords: 'AI art, creative prompts, sketch game, digital art, whimsy, gallery',
  authors: [{ name: 'Zivlar.com' }],
  creator: 'Zivlar.com',
  publisher: 'Zivlar.com',
  metadataBase: new URL('https://zivlar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Whimsy Gallery - Sketch Art from Creative AI Prompts!',
    description: 'Unleash your inner artist with AI Whimsy Gallery! Get unique AI-generated prompts and sketch hilarious or imaginative art. Share your creations and explore a gallery of digital whimsy.',
    type: 'website',
    url: 'https://www.zivlar.com/',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A preview image of AI Whimsy Gallery gameplay or logo.',
      },
    ],
    siteName: 'AI Whimsy Gallery',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Whimsy Gallery - Sketch Art from Creative AI Prompts!',
    description: 'Unleash your inner artist with AI Whimsy Gallery! Get unique AI-generated prompts and sketch hilarious or imaginative art.',
    images: ['/twitter-card-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-800 font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}