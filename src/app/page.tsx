import HeroSection from '@/components/HeroSection'
// import FeaturesSection from '@/components/FeaturesSection'
// import HistorySection from '@/components/HistorySection'
import AboutSection from '@/components/AboutSection'
import SolutionsCarousel from '@/components/SolutionsCarousel'
import FaqSection from '@/components/FaqSection'
import BlogSection from '@/components/BlogSection'
import SimulationSection from '@/components/SimulationSection'
import PartnersSection from '@/components/PartnersSection'
import CommitmentBar from '@/components/CommitmentBar'
// import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
// Importe TestimonialsSection se decidir implementá-lo

// Mock dos dados do Hero Section (substituir pela busca real depois)
const getHeroData = async () => {
  // Simula uma busca de dados
  // No futuro, isso buscaria do Prismic, Laravel API, etc.
  return {
    title: 'JGS seu companheiro\nde viagem', // Use \n para quebras de linha no admin
    subtitle: 'Em todas as fases da vida com você',
    backgroundType: 'image' as ('image' | 'video' | 'gif'), // Tipagem explícita
    backgroundSrc: '/sunset-beach.png',
    // Exemplo se fosse vídeo:
    // backgroundType: 'video', 
    // backgroundSrc: '/hero-video.mp4',
  };
};

export default async function Home() {
  // Busca os dados do Hero
  const heroData = await getHeroData();

  return (
    <>
      {/* Passa os dados como props */}
      <HeroSection 
        title={heroData.title}
        subtitle={heroData.subtitle}
        backgroundType={heroData.backgroundType}
        backgroundSrc={heroData.backgroundSrc}
      />
      {/* <FeaturesSection /> */}
      {/* <HistorySection /> */}
      <AboutSection />
      <SolutionsCarousel />
      <FaqSection />
      <BlogSection />
      <SimulationSection />
      <PartnersSection />
      <CommitmentBar />
      {/* <SolutionsPersonal /> */}
      {/* <SolutionsBusiness /> */}
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </>
  )
}
