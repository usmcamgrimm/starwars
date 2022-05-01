import React from 'react'
import Table from 'react-bootstrap/Table'

function Planet(props) {
  return (
    <div className='data-table'>
      <Table
        striped
        bordered
        variant='dark'
        responsive
        className='mt-5'
      >
        <thead className='table-header'>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Inhabitants</th>
            <th>Diameter</th>
            <th>Orbit</th>
            <th>Rotation</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {props.planets.map((planet, index) => (
            <tr key={index}>
              <td>{planet.name}</td>
              <td>{planet.population}</td>
              <td>{planet.residents}</td>
              <td>{planet.diameter}</td>
              <td>{planet.orbit}</td>
              <td>{planet.rotation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Planet