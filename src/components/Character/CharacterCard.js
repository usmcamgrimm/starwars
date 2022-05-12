import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './character-card.css'

function CharacterCard() {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [species, setSpecies] = useState([])
  // const [loading, setLoading] = useState(true);
  const cardsPerRow = 5

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch('https://swapi.dev/api/people/')
      const data = await res.json()
      setCharacters(data.results)
      console.log(data.results)
    }

    async function fetchPlanets() {
      const res = await fetch('https://swapi.dev/api/planets/')
      const data = await res.json()
      setPlanets(data.results)
      console.log(data.results)
    }

    async function fetchSpecies() {
      const res = await fetch('https://swapi.dev/api/species/')
      const data = await res.json()
      setSpecies(data.results)
      console.log(data.results)
    }

    async function resolveData(characters) {
      for (const element of characters.results) {
        await fetchPlanets(element.planets.toString().slice(21)).then(async planetTitle => {
          await fetchSpecies(element.species.toString().slice(21)).then(async speciesName => {

            return {
              ...character,
              homeworld: planets.name,
              species: species.name
            }
          }
        })
      }
    }

    fetchCharacters()
    fetchPlanets()
    fetchSpecies()
  }, [])

  const setCardLayout = () => {
    let charCards = characters.map((character, index) => {
      return (
        <Col>
          <Card
            key={index}
            className="mb-3"
          >
            <Card.Header>
              <Card.Title className="text-center">
                {character.name}
              </Card.Title>
            </Card.Header>
            <Card.Text>Home: {character.homeworld}</Card.Text>
            <Card.Text>Species: {character.species}</Card.Text>
            <Card.Text>Born: {character.birth_year}</Card.Text>
            <Card.Text>Height: {character.height}</Card.Text>
            <Card.Text>Weight: {character.mass}</Card.Text>
          </Card>
        </Col>
      )
    })
    return charCards
  }

  return (
    <Container className="mt-4">
      <Row xs={1} md={cardsPerRow}>
        {setCardLayout()}
      </Row>
    </Container>
  )
}

export default CharacterCard