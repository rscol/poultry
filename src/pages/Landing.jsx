import React from 'react'
import Hero from "../Components/Hero";
import About from '../Components/About';
import Contact from '../Components/Contact';
import WHoWeAre from '../Components/WHoWeAre';

const Landing = () => {
  return (
    <div>
      <Hero/>
      <div id='#about'><About/></div>
      <div id='#feature'><WHoWeAre/></div>
      <div id='#contact'><Contact/></div>
    </div>
  )
}

export default Landing
