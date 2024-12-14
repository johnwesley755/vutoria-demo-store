import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import VirtualTryOn from '../components/VirtualTryOn'
import Spotlight from '../components/Spotlight'
import Layer from '../components/Layer'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Slider />
        <Hero />
        <VirtualTryOn />
        <Spotlight />
        <Layer />
        <Banner />
        <Testimonials />
        </div>
  )
}

export default Home