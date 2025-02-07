import React from 'react'
import './style.css'
import Header from './Components/Header/Header'
import HeroSec from './Components/Hero-Section/HeroSec'
import Counts from './Components/Counts/Counts'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <HeroSec />
      <Counts />
    </div>
  )
}

export default App
