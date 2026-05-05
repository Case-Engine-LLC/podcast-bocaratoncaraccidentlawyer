import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'
import type { Episode } from '@/lib/data'
import type { TranscriptSegment } from '@/lib/rss'

const episodeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/episode/1#webpage",
      "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/episode/1",
      "name": "The YOU Interview with Michael Grife | Episode 1 | Boca Raton Injury Law w. Mike Grife",
      "description": "Michael K. Grife shares his path into trial law, how The Grife Law Firm evaluates Florida personal injury and medical malpractice cases, and what insurance companies expect from unrepresented claimants.",
      "isPartOf": {
        "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#website"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".episode-description",
          ".episode-overview",
          ".key-takeaways"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Episodes",
            "item": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#episodes"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "The YOU Interview with Michael Grife",
            "item": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/episode/1"
          }
        ]
      }
    },
    {
      "@type": "PodcastEpisode",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/episode/1#episode",
      "name": "The YOU Interview with Michael Grife",
      "description": "In this debut episode of Boca Raton Injury Law, founding attorney Michael Grife sits down with co-host Abby for an unfiltered conversation about his life, his law practice, and the values that drive The Grife Law Firm. Michael shares his Brooklyn origin story, how a friend's Fort Lauderdale invite led him to Nova Southeastern University School of Law, why he built a practice around catastrophic injury and medical malpractice, how the firm's contingency fee structure actually works, and why Florida needs mandatory bodily injury insurance.",
      "episodeNumber": 1,
      "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/episode/1",
      "image": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/cover.jpg",
      "duration": "PT1H21M0S",
      "partOfSeries": {
        "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#podcast"
      },
      "author": {
        "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#host"
      },
      "publisher": {
        "@id": "https://thegrifelawfirm.com/#org"
      },
      "inLanguage": "en-US",
      "genre": [
        "Personal Injury Law",
        "Legal Education",
        "Florida Personal Injury Law"
      ],
      "keywords": [
        "The Grife Law Firm",
        "Boca Raton",
        "Personal Injury",
        "Medical Malpractice",
        "Florida Injury Law"
      ],
      "isAccessibleForFree": true
    },
    {
      "@type": "FAQPage",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/episode/1#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is The YOU Interview with Michael Grife about?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The YOU Interview is the debut episode of Boca Raton Injury Law. Michael K. Grife sits down with co-host Abby for an unfiltered conversation about his life, his path into trial law, and the values that guide The Grife Law Firm — so potential clients understand the attorney first, not just the firm name."
          }
        },
        {
          "@type": "Question",
          "name": "How does Michael Grife decide which cases to take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grife explains that the firm takes cases selectively so every matter can be prepared for trial. He evaluates the strength of liability, the severity and documentation of injury, and whether insurance coverage supports a meaningful recovery — the same criteria an insurance carrier uses when setting reserves."
          }
        },
        {
          "@type": "Question",
          "name": "What does Grife say about Florida's PIP system and injury thresholds?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grife walks through how PIP works, the permanent-injury threshold for non-economic damages, and the common mistakes injured Floridians make — including giving recorded statements, accepting early offers, and assuming their own medical bills will be paid automatically."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reach Michael Grife after this episode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Listeners can reach The Grife Law Firm through thegrifelawfirm.com, on Instagram (@grifelaw), or by calling (561) 998-0770. Consultations are free and cases are handled on contingency — no attorney’s fees unless a recovery is obtained."
          }
        }
      ]
    }
  ]
}

export function generateEpisodeSchema(_episodeId: string) {
  return episodeSchema
}

interface V1EpisodePageProps {
  episodeId: string
  episode?: Episode | null
  allEpisodes?: Episode[]
  transcript?: TranscriptSegment[]
}

const V1EpisodePage = ({ episodeId: _episodeId, episode: rssEpisode, allEpisodes, transcript }: V1EpisodePageProps) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeSchema) }}
      />
      <Header variant="light" />

      <main className="pt-[6rem]">
        <EpisodeHero episode={rssEpisode} />
        <EpisodeContent episode={rssEpisode} transcript={transcript} />
        <OtherEpisodes episodes={allEpisodes} />
        <FAQ />
      </main>

      <Footer episodes={allEpisodes} />
    </div>
  )
}

export default V1EpisodePage
