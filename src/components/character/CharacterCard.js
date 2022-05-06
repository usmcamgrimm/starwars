import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './charactercard.css'

function CharacterCard(characters) {
  const cardsPerRow = 5

  const getCardLayout = (props, characters) => {
    return (
      <Col>
        <Card style={{ width: '16rem' }}>
          <Card.Body>
          {props.characters.map((character, index) => (
            <div>
              <Card.Title key={index}>
              {character.name}
              </Card.Title>
              <Card.Text>{character.homeworld}</Card.Text>
              <Card.Text>{character.species}</Card.Text>
              <Card.Text>{character.birth_year}</Card.Text>
              <Card.Text>{character.height}</Card.Text>
              <Card.Text>{character.mass}</Card.Text>
            </div>
          ))}
          </Card.Body>
        </Card>
      </Col>
    )
  }
  
  return (
    <Container>
      <Row xs={1} md={cardsPerRow}>
        {getCardLayout()}
      </Row>
    </Container>
  )
}

export default CharacterCard