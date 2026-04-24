import V2Home from '@/themes/v2/pages/V2Home'
import { getAllEpisodes } from '@/lib/data'

export const revalidate = 3600

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thegrifelawfirm.com/#org",
      "name": "The Grife Law Firm",
      "legalName": "The Grife Law Firm",
      "url": "https://thegrifelawfirm.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/logo.svg",
        "width": 200,
        "height": 60
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/Hero.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "The Grife Law Firm is a Boca Raton, Florida personal injury and medical malpractice firm founded by Michael K. Grife. The firm has recovered over $100 million for clients across Florida in car, truck, motorcycle, medical negligence, nursing home, and premises cases.",
      "telephone": "+15619980770",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6111 Broken Sound Pkwy NW, Suite 300",
        "addressLocality": "Boca Raton",
        "addressRegion": "FL",
        "postalCode": "33487",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "knowsAbout": [
        "Car Accident Law",
        "Truck Accident Law",
        "Motorcycle Accident Law",
        "Medical Malpractice Law",
        "Nursing Home Neglect Law"
      ],
      "sameAs": [
        "https://thegrifelawfirm.com/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "200"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#website",
      "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/",
      "name": "Boca Raton Injury Law w. Mike Grife",
      "description": "A podcast by Michael K. Grife of The Grife Law Firm helping Florida accident victims and families understand personal injury, medical malpractice, and nursing home claims.",
      "publisher": {
        "@id": "https://thegrifelawfirm.com/#org"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#webpage",
      "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/",
      "name": "Boca Raton Injury Law w. Mike Grife | The Grife Law Firm",
      "description": "Michael K. Grife covers Florida personal injury, medical malpractice, and nursing home neglect — PIP, negligent security, and when a case has to be tried.",
      "isPartOf": {
        "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#website"
      },
      "about": {
        "@id": "https://thegrifelawfirm.com/#org"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".podcast-description",
          ".about-section",
          ".episode-description"
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
          }
        ]
      }
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#podcast",
      "name": "Boca Raton Injury Law w. Mike Grife",
      "description": "Boca Raton Injury Law with Michael K. Grife covers Florida personal injury, medical malpractice, nursing home neglect, and premises liability — including how Florida's PIP threshold works, what happens when a case has to go to trial, and what insurance companies don't want injured Floridians to know.",
      "url": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/",
      "image": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/Hero.jpg",
      "author": {
        "@type": "Person",
        "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#host",
        "name": "Michael K. Grife",
        "givenName": "Michael",
        "familyName": "K. Grife",
        "jobTitle": "Founder & Personal Injury Attorney",
        "image": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/headshot-michael-grife.png",
        "worksFor": {
          "@id": "https://thegrifelawfirm.com/#org"
        },
        "sameAs": [
          "https://thegrifelawfirm.com/"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Nova Southeastern University Shepard Broad College of Law"
        }
      },
      "webFeed": [],
      "genre": [
        "Legal",
        "Personal Injury Law",
        "Education"
      ],
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://thegrifelawfirm.com/#org"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://podcast-bocaratoncaraccidentlawyer.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What topics does Michael K. Grife cover on Boca Raton Injury Law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Michael K. Grife covers Florida personal injury and medical malpractice law, including how Florida's PIP and permanent-injury threshold works, negligent security cases, surgical errors and stroke/heart-attack misdiagnosis, nursing home neglect, and when an injury case should go to trial. Episodes draw on real file experience — 150 trials and more than $100M recovered statewide — rather than general talking points."
          }
        },
        {
          "@type": "Question",
          "name": "How often are new episodes released?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Grife Law Firm releases new episodes on a rolling basis. Episodes typically run 45–90 minutes and focus on one topic in depth. Subscribe via the links in the footer to be notified when a new episode publishes."
          }
        },
        {
          "@type": "Question",
          "name": "Why does Michael Grife handle so many cases through trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Michael Grife explains that Florida insurance carriers track which plaintiff firms are willing and prepared to try cases, and reserve values often follow. The Grife Law Firm prepares every case as if it is going to trial; when a fair settlement is not offered, the firm litigates. That reputation lifts pre-trial offers on the rest of the firm's cases as well."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact The Grife Law Firm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach The Grife Law Firm at thegrifelawfirm.com or by calling (561) 998-0770 (toll-free (855) 998-0770). The firm offers free consultations, works on contingency — no attorney’s fees unless a recovery is obtained — and serves clients throughout the State of Florida from its Boca Raton office."
          }
        }
      ]
    }
  ]
}

export default async function Page() {
  const episodes = await getAllEpisodes()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <V2Home episodes={episodes} />
    </>
  )
}
