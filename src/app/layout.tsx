import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MarkerWidget } from '@/components/MarkerWidget'
import SchemaJsonLd from '@/components/SchemaJsonLd'
import { about, attorney, contact, siteConfig } from '@/data/siteData'
import './globals.css'
import '@/themes/v1/variables.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

const SITE_URL =
  siteConfig.podcastUrl || contact.website || 'https://thegrifelawfirm.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.podcastName,
    template: `%s | ${siteConfig.podcastName}`,
  },
  description: about.description,
  applicationName: siteConfig.podcastName,
  authors: [{ name: attorney.name, url: contact.website || SITE_URL }],
  keywords: [
    attorney.firm,
    attorney.name,
    siteConfig.podcastName,
    'Boca Raton accident attorney',
    'Florida personal injury podcast',
    'Florida medical malpractice attorney',
    'car accident lawyer Boca Raton',
    'truck accident lawyer Florida',
    'wrongful death attorney Florida',
    'nursing home neglect attorney Florida',
  ],
  category: 'Legal Podcast',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.podcastName,
    title: siteConfig.podcastName,
    description: about.description,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.podcastName} — ${attorney.name}, ${attorney.title} at ${attorney.firm}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.podcastName,
    description: about.description,
    images: ['/opengraph-image'],
  },
  // Next's file-convention `app/icon.tsx` + `app/apple-icon.tsx` auto-wire
  // `<link rel="icon" href="/icon">` and `<link rel="apple-touch-icon" href="/apple-icon">`.
  // Don't add an explicit `icons` block — it overrides the auto-detection.
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2B56B5' },
    { media: '(prefers-color-scheme: dark)', color: '#2B56B5' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <MarkerWidget />
      </body>
    </html>
  )
}
