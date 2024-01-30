import React from 'react'
import "../../index.css"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Mission from '../mission/Mission';

const About = () => {
  return (
      <>
          <Header />
          <div class="hero-section p-4 ">
            <h1>About Us</h1>
            <p>Learn a little about us, our organisation, ours goals and values</p>
          </div>

            <Mission />
          <Footer />
      </>
  )
}

export default About