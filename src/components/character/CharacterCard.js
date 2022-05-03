import React from 'react'
import Card from 'react-bootstrap/Card'

function CharacterCard(props) {
  const {
    name,
    homeworld,
    species,
    birth_year,
    height,
    mass
  } = props
  
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title>
          {name}
        </Card.Title>
        <Card.Text>{homeworld}</Card.Text>
        <Card.Text>{species}</Card.Text>
        <Card.Text>{birth_year}</Card.Text>
        <Card.Text>{height}</Card.Text>
        <Card.Text>{mass}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CharacterCard