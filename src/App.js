import React, { useCallback, useState } from 'react'
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
    const [charactersPerPage] = useState(10)

    const particlesInit = useCallback(main => {
        loadFull(main)
    }, [])

    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Container>
            <Particles options={particlesOptions} init={particlesInit} />
            <Header />
            <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate} />
            <CharacterCard characterCard={currentCharacters} />
        </Container>
    )
}

export default App
