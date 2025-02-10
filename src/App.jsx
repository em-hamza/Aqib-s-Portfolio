import React from 'react'
import './style.css'
import Header from './Components/Header/Header'
import HeroSec from './Components/Hero-Section/HeroSec'
import Counts from './Components/Counts/Counts'
import Services from './Components/Services/Services'
import TheSlider from './Components/Slider/TheSlider'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <HeroSec />
      <Counts />
      <Services />
      <TheSlider />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
