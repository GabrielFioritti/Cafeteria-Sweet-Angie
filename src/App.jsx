import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Menu from './components/Menu.jsx'
import Promos from './components/Promos.jsx'
import About from './components/About.jsx'
import Visit from './components/Visit.jsx'
import Footer from './components/Footer.jsx'
import WhatsFab from './components/WhatsFab.jsx'
import useReveal from './useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <Promos />
        <About />
        <Visit />
      </main>
      <Footer />
      <WhatsFab />
    </>
  )
}
