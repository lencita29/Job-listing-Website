import React from 'react'
import Header from './Header';
import './Header.css';
import Hero from './Hero';
import Jobs from './Job';
import Value from './Value/Value';
import Contact from './Contact/Contact';
import GetStarted from './GetStarted/GetStarted';
import Footer from './Footer/Footer'
import './Home.css'



export default function Home() {
  return ( 
  <div className="App">
    <div >
        <Header/>
        <Hero/>
    </div >
    <div className="background-home">
        <Jobs/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
    </div>

  </div>
    
  )
}


