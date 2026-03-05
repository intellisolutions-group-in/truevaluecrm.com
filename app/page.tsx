import StaticNavbar from './components/StaticNavbar';
import Hero from './components/Hero';
import SuiteSection from './components/SuiteSection';
import AISection from './components/AISection';
import ProductsGrid from './components/ProductsGrid';
import EnterpriseSection from './components/EnterpriseSection';
import CoreValues from './components/CoreValues';
import PricingSection from './components/PricingSection';
import PrivacySection from './components/PrivacySection';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <StaticNavbar />
      <main>
        <Hero />
        <SuiteSection />
        <AISection />
        <ProductsGrid />
        <EnterpriseSection />
        <CoreValues />
        <PricingSection />
        <PrivacySection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
