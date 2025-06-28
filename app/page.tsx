import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import GameEmbed from '@/components/GameEmbed'
import HowItWorks from '@/components/HowItWorks'
import WhyYoullLove from '@/components/WhyYoullLove'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <GameEmbed />
        <HowItWorks />
        <WhyYoullLove />
      </main>
      <Footer />
    </>
  )
}