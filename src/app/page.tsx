import V1Home from '@/themes/v1/pages/V1Home'
import { getAllEpisodes } from '@/lib/data'
import { siteConfig, attorney, contact, faqGroups, episodes as episodeData, stats } from '@/data/siteData'

export const revalidate = 3600

const SITE_URL = 'https://podcast-bocaratoncaraccidentlawyer.vercel.app'

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": siteConfig.podcastName,
      "url": SITE_URL,
      "inLanguage": "en",
      "publisher": { "@id": `${SITE_URL}/#org` }
    },
    {
      "@type": ["LegalService", "Organization"],
      "@id": `${SITE_URL}/#org`,
      "name": attorney.firm,
      "url": contact.website,
      "telephone": contact.phone,
      "email": contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6111 Broken Sound Pkwy NW, Suite 300",
        "addressLocality": "Boca Raton",
        "addressRegion": "FL",
        "postalCode": "33487",
        "addressCountry": "US"
      },
      "areaServed": [
        { "@type": "City", "name": "Boca Raton" },
        { "@type": "State", "name": "Florida" }
      ],
      "priceRange": "Free Consultation",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": stats.rating,
        "ratingCount": stats.reviewCount,
        "bestRating": 5,
        "worstRating": 1
      },
      "knowsAbout": [
        "Personal Injury",
        "Car Accidents",
        "Truck Accidents",
        "Motorcycle Accidents",
        "Medical Malpractice",
        "Wrongful Death",
        "Premises Liability"
      ]
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#attorney`,
      "name": attorney.name,
      "jobTitle": attorney.title,
      "description": attorney.bio[0],
      "image": `${SITE_URL}/images/attorney.jpg`,
      "worksFor": { "@id": `${SITE_URL}/#org` },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Nova Southeastern University"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Hofstra University"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Bar Admission",
          "name": "Florida Bar",
          "dateCreated": "2005"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Bar Admission",
          "name": "U.S. District Court, Southern District of Florida"
        }
      ],
      "knowsAbout": [
        "Personal Injury",
        "Car Accidents",
        "Truck Accidents",
        "Motorcycle Accidents",
        "Bicycle Accidents",
        "Pedestrian Accidents",
        "Medical Malpractice",
        "Wrongful Death",
        "Premises Liability",
        "Slip and Fall",
        "Cruise Ship Accidents",
        "Product Liability"
      ]
    },
    {
      "@type": "PodcastSeries",
      "@id": `${SITE_URL}/#podcast`,
      "name": siteConfig.podcastName,
      "description": episodeData[0]?.description || "",
      "url": SITE_URL,
      "author": { "@id": `${SITE_URL}/#attorney` },
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": faqGroups.flatMap(group =>
        group.questions.map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      )
    }
  ]
}

export default async function Home() {
  const episodes = await getAllEpisodes()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <V1Home episodes={episodes} />
    </>
  )
}
