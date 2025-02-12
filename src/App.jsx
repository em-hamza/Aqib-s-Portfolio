import React from 'react'
import './style.css'
import LocomotiveScroll from 'locomotive-scroll';
import Header from './Components/Header/Header'
import HeroSec from './Components/Hero-Section/HeroSec'
import Counts from './Components/Counts/Counts'
import Services from './Components/Services/Services'
import TheSlider from './Components/Slider/TheSlider'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-slate-900'>
      <Header/>
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
