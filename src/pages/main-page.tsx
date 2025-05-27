import React, { useContext } from 'react'
import Header from '../components/header/header'
import ProductContainer from '../components/section/product-container'
import Footer from '../components/footer/Footer'
import { myContex } from '../app'

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
      <ProductContainer />
      <Footer />
    </div>
  )
}
