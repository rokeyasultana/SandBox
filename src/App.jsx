import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import HaveControl from './Components/HaveControl/HaveControl'
import MakeDifferent from './Components/MakeDiffernt/MakeDifferent'
import Community from './Components/Community/Community'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HaveControl/>
      <MakeDifferent/>
      <Community/>
      <Footer/>
    </div>
  )
}

export default App
