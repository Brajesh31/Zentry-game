import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Features from './components/Features'
import Story from './components/Story'
import LatestUpdate from './components/LatestUpdate'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="w-screen min-h-dvh relative overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Story />
      <LatestUpdate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App