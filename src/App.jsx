import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DivisionsSection from './components/DivisionsSection'
import ProductsSection from './components/ProductsSection'
import IndustriesSection from './components/IndustriesSection'
import WhyChooseSection from './components/WhyChooseSection'
import CorporateStructureSection from './components/CorporateStructureSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-950 antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DivisionsSection />
        <ProductsSection />
        <IndustriesSection />
        <WhyChooseSection />
        <CorporateStructureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App