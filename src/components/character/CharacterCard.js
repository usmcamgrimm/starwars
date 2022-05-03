import React from 'react'
import Card from 'react-bootstrap'

function CharacterCard() {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title>
          {character.name}
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>{character.homeworld}</ListGroup.Item>
          <ListGroup.Item>{character.species}</ListGroup.Item>
          <ListGroup.Item>{character.birth_year}</ListGroup.Item>
          <ListGroup.Item>{character.height}</ListGroup.Item>
          <ListGroup.Item>{character.mass}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default CharacterCard