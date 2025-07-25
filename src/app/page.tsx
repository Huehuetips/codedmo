import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
// import PortfolioSection from "@/components/portfolio-section"
// import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        {/* <PortfolioSection /> */}
        {/* <AboutSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
