import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesOptions from './particles.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import CharacterCard from './components/Character/CharacterCard'
import '@fontsource/inter'
import '@fontsource/orbitron'
import './index.css'

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main)
    }, [])

    return(
        <div className="container">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Header />
            <CharacterCard />
        </div>
    )
}

export default App
