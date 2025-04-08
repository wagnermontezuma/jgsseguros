import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HistorySection from '@/components/HistorySection'
import AboutSection from '@/components/AboutSection'
import SolutionsCarousel from '@/components/SolutionsCarousel'
import FaqSection from '@/components/FaqSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
// Importe TestimonialsSection se decidir implementá-lo

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HistorySection />
      <AboutSection />
      <SolutionsCarousel />
      <FaqSection />
      {/* <SolutionsPersonal /> */}
      {/* <SolutionsBusiness /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
    </>
  )
}
