import React from 'react'
import styles from './page.module.css'
import LandingPage from './component/LandingPage/LandingPage'
import About from './component/About/About'
import GetInTouch from './component/GetInTouch/GetInTouch'
import ProjectLink from './component/ProjectLink/ProjectLink'

function Home() {
  return (
    <div className=''>
      <LandingPage/>
      <About />
      <GetInTouch/>
    </div>
  )
}

export default Home
