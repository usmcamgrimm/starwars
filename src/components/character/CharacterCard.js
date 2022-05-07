import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './charactercard.css'

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
          <Card style={{ width: '16rem' }}>
            <Card.Title key={index}>
              {character.name}
            </Card.Title>
            <Card.Text>{character.homeworld}</Card.Text>
            <Card.Text>{character.species}</Card.Text>
            <Card.Text>{character.birth_year}</Card.Text>
            <Card.Text>{character.height}</Card.Text>
            <Card.Text>{character.mass}</Card.Text>
          </Card>
        </Col>
      )
    })
    return charCards
  }

  return (
    <Container>
      <Row xs={1} md={cardsPerRow}>
        {setCardLayout()}
      </Row>
    </Container>
  )
}

export default CharacterCard