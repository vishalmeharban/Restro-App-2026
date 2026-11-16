import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Dishes from './sections/Dishes'
import Features from './sections/Features'
import Booking from './sections/Booking'
import Testimonials from './sections/Testimonials'
import Faq from './sections/Faq'
import Banner from './sections/Banner'
import Footer from './components/Footer'

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Navbar />
      <HeroSection />
      <About/>
      <Dishes />
      <Features />
      <Booking />
      <Testimonials />
      <Faq />
      <Banner />
      <Footer />
    </>
  )
}

export default App