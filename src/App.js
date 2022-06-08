import React, { useCallback, useState, useEffect } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesOptions from './particles.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Header from './components/Header/Header'
import CharacterCard from './components/Character/CharacterCard'
import Pagination from './components/Pagination'
import '@fontsource/inter'
import '@fontsource/orbitron'
import './index.css'

function App() {
    const [characters, setCharacters] = useState([])
    // const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerpage] = useState(10)

    const particlesInit = useCallback(main => {
        loadFull(main)
    }, [])

    useEffect(() => {
        fetchCharacters()
      }, [])
    
      const api_url = 'https://swapi.dev/api/'
    
      async function fetchCharacters() {
        const res = await fetch(`${api_url}/people`)
        const data = await res.json()
        setCharacters(data.results)
        console.log(data.results)
      }

    const indexOfLastCharacter = currentPage * charactersPerpage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerpage
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Container>
            <Particles options={particlesOptions} init={particlesInit} />
            <Header />
            <CharacterCard characterCard={currentCharacters} />
            <Pagination charactersPerPage={charactersPerpage} totalCharacters={characters.length} paginate={paginate} />
        </Container>
    )
}

export default App
