import { useState, useEffect } from 'react'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppMain from './components/AppMain.jsx'
import animes from './data/anime.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  return (
    <>
      <AppHeader />
      <main className="bg-black">

        <AppMain />


      </main >
      <AppFooter />
    </>
  )
}

export default App
