import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import CharacterCard from '../character/CharacterCard'
import '@fontsource/inter'
import '@fontsource/orbitron'
import './app.css'

function App() {

  return(
    <div className="container">
      <Header />
      <CharacterCard />
    </div>
  )
}

export default App
