import React, { useContext } from 'react'
import Header from '../components/header/header'
import ProductContainer from '../components/section/product-container'
import Footer from '../components/footer/footer'
import { myContex } from '../app'
import CursorTrail from '../components/cursor/mouse-cursor'
import HeroSection from '../components/section/hero-section'
import FeaturesSection from '../components/section/features-section'
import TestimonialsSection from '../components/section/testimonials-section'

type ThemeContextType = [string, () => void];

export default function MainComponent() {
  const [pageTheme] = useContext(myContex) as ThemeContextType;

  return (
    <div
      style={{
        backgroundImage: pageTheme === "light"
          ? 'linear-gradient(178.1deg, #f0f4ff 8.5%, #e6e9ff 82.4%)'
          : 'linear-gradient(178.1deg, rgb(60, 55, 106) 8.5%, rgb(23, 20, 69) 82.4%)'
      }}
      className="min-h-screen"
    >
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductContainer />
      <TestimonialsSection />
      <Footer />
      {/* <CursorTrail /> */}
    </div>
  )
}
