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

// Meta/SEO title — brand name with "Podcast" appended (visible on-page
// headings use siteConfig.podcastName directly and are unaffected).
const META_TITLE = `${siteConfig.podcastName} Podcast`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: META_TITLE,
    template: `%s | ${META_TITLE}`,
  },
  description: about.description,
  applicationName: META_TITLE,
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
    siteName: META_TITLE,
    title: META_TITLE,
    description: about.description,
    url: SITE_URL,
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${META_TITLE} — ${attorney.name}, ${attorney.title} at ${attorney.firm}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
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
