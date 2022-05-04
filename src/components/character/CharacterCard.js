import React from 'react'
import Card from 'react-bootstrap/Card'
import './charactercard.css'

function CharacterCard(character) {
  
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