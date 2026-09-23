import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CapabilityStrip from '@/components/CapabilityStrip';
import Services from '@/components/Services';
import AnnotationExamples from '@/components/AnnotationExamples';
import QualityAssurance from '@/components/QualityAssurance';
import HowWeWork from '@/components/HowWeWork';
import Scalability from '@/components/Scalability';
import OutputFormats from '@/components/OutputFormats';
import UseCases from '@/components/UseCases';
import DataSecurity from '@/components/DataSecurity';
import WhyWorkWithUs from '@/components/WhyWorkWithUs';
import Portfolio from '@/components/Portfolio';
import SamplePilot from '@/components/SamplePilot';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CapabilityStrip />
        <Services />
        <AnnotationExamples />
        <QualityAssurance />
        <HowWeWork />
        <Scalability />
        <OutputFormats />
        <UseCases />
        <DataSecurity />
        <WhyWorkWithUs />
        <Portfolio />
        <SamplePilot />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
