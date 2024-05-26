import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

import Footer from './components/Footer'
import Form from './components/Form'
import About from './components/About'
import Faq from './components/Faq'




function App() {

  return (
    <div>
      {/* < Navbar/> */}
      <Hero/>
      <About/>
      <Form />
      <Faq/>
      <Footer/>
     </div>
  )
}

export default App
