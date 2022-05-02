import React from 'react'
import Table from 'react-bootstrap/Table'

function Characters(props) {
  return (
    <div className='data-table'>
      <Table
        striped
        bordered
        hover
        responsive
        variant='dark'
        className='mt-5'
      >
        <thead className='table-header'>
          <tr>
            <th>Name</th>
            <th>Planet</th>
            <th>Species</th>
            <th>Birth</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {props.characters.map((character, index) => (
            <tr key={index}>
              <td>{character.name}</td>
              <td>{character.homeworld}</td>
              <td>{character.species}</td>
              <td>{character.birth_year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Characters