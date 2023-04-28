import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

import MainHeader from './components/implementing/MainHeader'
import Main from './components/implementing/Main'
import Ranking from './components/implementing/Ranking'
import Slides from './components/implementing/Slides'
import './components/implementing/main.css'
import './components/implementing/mainheader.css'
import './components/implementing/ranking.css'
import './components/implementing/slides.css'
import './components/implementing/homefooter.css'

import HomeFooter from './components/implementing/HomeFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainHeader />
    <Main />
    <Navbar />
    <Ranking />
    <Slides />
    <Slides />
    <Slides />
    <HomeFooter />
      </>
  )
}

export default App
