import { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { WelcomeBonusBanner } from './components/WelcomeBonusBanner';
import { WhyPlaytechSection } from './components/WhyPlaytechSection';
import { CTASection } from './components/CTASection';
import { SEOContent } from './components/SEOContent';
import { Footer } from './components/Footer';
import { StickyBonusBanner } from './components/StickyBonusBanner';

export default function App() {
  useEffect(() => {
    // Set SEO meta tags
    document.title = 'Playtech NZ Guide to Casinos Slots and Games in New Zealand';
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Explore Playtech NZ casinos, slots, pokies, live dealer games, and free demo games. Learn if Playtech is legit and enjoy safe, exciting online gaming in New Zealand.');
    
    // Set or update Open Graph tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    if (!ogTitle.hasAttribute('property')) {
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', 'Playtech NZ Guide to Casinos Slots and Games in New Zealand');
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    if (!ogDescription.hasAttribute('property')) {
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', 'Explore Playtech NZ casinos, slots, pokies, live dealer games, and free demo games. Learn if Playtech is legit and enjoy safe, exciting online gaming in New Zealand.');
    
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    if (!ogType.hasAttribute('property')) {
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');
  }, []);

  return (
    <div className="min-h-screen bg-white">
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