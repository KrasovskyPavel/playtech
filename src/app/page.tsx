import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SEOContent } from './components/SEOContent';
import { StickyBonusBanner } from './components/StickyBonusBanner';
import { WelcomeBonusBanner } from './components/WelcomeBonusBanner';
import { WhyPlaytechSection } from './components/WhyPlaytechSection';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://playtech-demo.nz/#organization',
  name: 'Playtech',
  url: 'https://playtech-demo.nz/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://playtech-demo.nz/logo.png',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@playtech-demo.nz',
    },
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://playtech-demo.nz/#website',
  url: 'https://playtech-demo.nz/',
  name: 'Playtech',
  description: 'Official Playtech website with detailed information on games and features.',
  inLanguage: 'en',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://playtech-demo.nz/#faq',
  url: 'https://playtech-demo.nz/',
  name: 'Playtech NZ FAQ',
  isPartOf: {
    '@id': 'https://playtech-demo.nz/#website',
  },
  inLanguage: 'en',
  description:
    'Frequently asked questions about Playtech, including safety, free play, games, bonuses, and legitimate casinos in New Zealand.',
  mainEntity: [
    {
      '@type': 'Question',
      '@id': 'https://playtech-demo.nz/#q1',
      name: 'Is Playtech safe for NZ players?',
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': 'https://playtech-demo.nz/#a1',
        text: 'Yes. Is playtech nz legit and is playtech legit platforms follow strict licensing and security protocols.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://playtech-demo.nz/#q2',
      name: 'Can I play Playtech games for free?',
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': 'https://playtech-demo.nz/#a2',
        text: 'Absolutely. You can play free playtech games in demo mode on many playtech online casino sites.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://playtech-demo.nz/#q3',
      name: 'What types of Playtech games are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': 'https://playtech-demo.nz/#a3',
        text: 'Playtech offers a wide variety of playtech games, including playtech slots, playtech pokies, table games, and live dealer options.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://playtech-demo.nz/#q4',
      name: 'Are there bonuses for Playtech casinos in NZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': 'https://playtech-demo.nz/#a4',
        text: 'Yes. Many sites offer a playtech discount code, welcome bonuses, and loyalty rewards to enhance gameplay.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://playtech-demo.nz/#q5',
      name: 'How do I know if a Playtech casino is legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        '@id': 'https://playtech-demo.nz/#a5',
        text: "Check the platform's licensing, security measures, and playtech reviews from other players to confirm trustworthiness.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <HeroSection />
        <WhyPlaytechSection />
        <WelcomeBonusBanner />
        <SEOContent />
        <CTASection />
      </main>
      <Footer />
      <StickyBonusBanner />
    </div>
  );
}
