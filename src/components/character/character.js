import React from 'react'
import Table from 'react-bootstrap/Table'

function Character() {
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
            <th>Planet</th>
            <th>Species</th>
            <th>Birth</th>
          </tr>
        </thead>
        <tbody classname='table-body'>
          <tr>
            <td>{Character.name}</td>
            <td>{Character.homeworld}</td>
            <td>{Character.species}</td>
            <td>{Character.birth_year}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Character