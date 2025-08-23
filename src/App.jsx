import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import Navbar  from './Components/Navbar'
import Suggestions from './Components/Suggestion'
import UberSection from './Components/UberSections'
import Footer from './Components/Footer'
import QRSection from './Components/QRCardProps'
import SeePrices from './Components/SeePrices'
// import Captcha from './Components/generateCaptcha'

import "@fontsource/poppins"; 
import "@fontsource/poppins/600.css"; 
import Captcha from './Components/Captcha'


function App() {
  

  return (
    <div className='overflow-hidden '>
      <Navbar/>
      <Home/>
      <Captcha />
      <Suggestions/>
      <UberSection/>
      <QRSection/>
      <Footer/>
      <SeePrices />
    </div>
  )
}

export default App
