import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/parallax';
import Services from './Components/services/Services';
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import './App.scss'
// import Test from './test'

const App = () => {
  return (
    <div>    
    <section>
    <Navbar/>
    <Hero />
    </section>
    <section id="services">
    <Parallax type="services" />
    </section>
    <section>
        <Services />
      </section>
    <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    {/* <Test/> */}
    </div>
  )
}

export default App