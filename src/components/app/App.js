import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import Character from '../character/character'
import '@fontsource/inter'
import '@fontsource/nova-square'
import './app.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [species, setSpecies] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  async function fetchCharacters() {
    const res = await fetch('https://swapi.dev/api/people/')
    const data = await res.json()
    setCharacters(data.results)
  }

  fetchCharacters()
}, [])

  return(
    <div className="container">
      <Header />
      <Character />
    </div>
  )
}

export default App
