import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.scss'
import {Header, About, Work, Testimonials, Footer} from './container/index.js'
import Skills from './container/Skills/Skills.jsx'
function App() {
  return (
    <>
        <NavBar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default App