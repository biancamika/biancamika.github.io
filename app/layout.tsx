import './global.css'
import type { Metadata } from 'next'
import { Funnel_Display } from 'next/font/google'
import { Funnel_Sans } from 'next/font/google'
import { Azeret_Mono } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-funnel-display'
})

const funnelSans = Funnel_Sans({
  subsets: ['latin'],
  variable: '--font-funnel-sans'
})

const azeretMono = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-azeret-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Bianca Aguilar',
    template: '%s | Bianca Aguilar',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-white bg-black',
        funnelDisplay.variable,
        funnelSans.variable,
        azeretMono.variable
      )}
    >
      <head>
        <link rel="icon" type="image/x-icon" href="favicon.ico"/>
      </head>
      <body className="antialiased w-full h-screen">
        <main className="flex-auto min-w-0 flex flex-col h-full">
          <Navbar />
          {children}
          {/* <Footer /> */}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
