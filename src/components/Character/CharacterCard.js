import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './character-card.css'

function CharacterCard() {
  const [characters, setCharacters] = useState([])
  const cardsPerRow = 5


  useEffect(() => {
    const getCharacters = async () => {
      const getCharacterData = await fetchCharacters()
      setCharacters(getCharacterData)
    }

    getCharacters()
  }, [])

  const fetchCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    const data = await res.json()

    return data.results
  }


  const setCardLayout = () => {
    let charCards = characters.map((character, index) => {
      return (
        <Col>
          <Card
            border="primary"
            key={index}
            className="mb-4"
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
    <Container className="mt-5">
      <Row xs={1} md={cardsPerRow}>
        {setCardLayout()}
      </Row>
    </Container>
  )
}

export default CharacterCard