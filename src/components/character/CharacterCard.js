import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './charactercard.css'

function CharacterCard(character) {
  const [cards, setCards] = useState([])
  const getCardLayout = () => {
    const characterCards = cards.map((character, index) => {
      return (
        <Col>
          <Card style={{ width: '16rem' }}>
            <Card.Body>
              <Card.Title key={index}>
                {character.name}
              </Card.Title>
              <Card.Text>{character.homeworld}</Card.Text>
              <Card.Text>{character.species}</Card.Text>
              <Card.Text>{character.birth_year}</Card.Text>
              <Card.Text>{character.height}</Card.Text>
              <Card.Text>{character.mass}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )
    })
    return characterCards
  }
  
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title>
          {character.name}
        </Card.Title>
        <Card.Text>{character.homeworld}</Card.Text>
        <Card.Text>{character.species}</Card.Text>
        <Card.Text>{character.birth_year}</Card.Text>
        <Card.Text>{character.height}</Card.Text>
        <Card.Text>{character.mass}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CharacterCard