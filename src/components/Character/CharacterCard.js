import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './character-card.css'

export const charFetch = async url => {
  const res = await fetch(url)

  if (!res.ok) {
    throw Error("Error fetching data")
  }

  const data = await res.json()
  return data.results
}

function CharacterCard() {
  const [characters, setCharacters] = useState([])
  // const [loading, setLoading] = useState(true);
  const cardsPerRow = 2

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = 'https://swapi.dev/api/people/'
      const charList = await charFetch(url)
      const fetchPlanets = await resolvePlanets(charList.results)
      const fetchSpecies = await resolveSpecies(fetchPlanets)

      return fetchSpecies
    }

    const resolvePlanets = async charactersList => {
      const rawCharacterList = await charactersList.map(async character => {
        const homeworld = await charFetch(character.homeworld)
        const { name } = homeworld

        return {
          ...character,
          homeworld: name
        }
      })
      return Promise.all(rawCharacterList)
    }

    const resolveSpecies = async charactersList => {
      const rawCharacterList = await charactersList.map(async character => {
        if (character.species.length > 0) {
          const species = await charFetch(character.species[0])
          const { name, homeworld } = species

          return {
            ...character,
            species: name,
            name,
            homeworld
          }
        } else {
          return {
            ...character,
            species: 'Unknown Origin'
          }
        }
      })
      return Promise.all(rawCharacterList)
    }

    const fetchPlanets = async () => {
      const url = 'https://swapi.dev/api/planets/'
      const planetList = await charFetch(url)
      const showPlanets = await resolvePlanets(planetList.results)

      return showPlanets
    }

    console.error()
  }, [])

  // useEffect(() => {
  //   async function fetchCharacters() {
  //     const res = await fetch('https://swapi.dev/api/people/')
  //     const data = await res.json()
  //     setCharacters(data.results)
  //     console.log(data.results)
  //   }

  //   fetchCharacters()
  // }, [])

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