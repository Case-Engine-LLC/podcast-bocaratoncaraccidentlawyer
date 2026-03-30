import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import '@/themes/v1/variables.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Boca Raton Injury Law w. Michael Grife | The Grife Law Firm',
  description: 'Join Michael Grife as he breaks down personal injury law for Boca Raton and South Florida residents. Expert insights on car accidents, medical malpractice, and injury claims.',
  metadataBase: new URL('https://podcast-bocaratoncaraccidentlawyer.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Boca Raton Injury Law w. Michael Grife',
    description: 'Expert personal injury law insights for Boca Raton and South Florida from attorney Michael Grife.',
    url: 'https://podcast-bocaratoncaraccidentlawyer.vercel.app',
    siteName: 'The Grife Law Firm Injury Lawyers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Script id="marker-io" strategy="afterInteractive">
          {`
            window.markerConfig = {
              project: '${process.env.NEXT_PUBLIC_MARKER_PROJECT_ID || '682f691521b85228e225d98f'}',
              source: 'snippet'
            };

            !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","clearReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
          `}
        </Script>
      </body>
    </html>
  )
}
