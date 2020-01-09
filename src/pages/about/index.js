import React from 'react'
import SidebarMenu from '../../components/SidebarMenu'
import Footer from '../../components/Footer'
import AboutHero from '../../components/about/AboutHero'
import AboutMenu from '../../components/about/AboutMenu'
import HiringMixer from '../../components/about/HiringMixer'
import JobListings from '../../components/about/JobListings'

const AboutPage = () => (
  <div style={{overflow: 'hidden'}}>
  <SidebarMenu/>
  <main style={{ textAlign: 'center', marginLeft: 300 }}>
    <AboutHero />
    <AboutMenu />
    <hr/>
    <HiringMixer />
    <JobListings />
    <hr/>
    <Footer />
  </main>
  </div>
)

export default AboutPage
