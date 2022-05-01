import React from 'react'
import Table from 'react-bootstrap/Table'

function Species() {
  return (
    <div className="data-table">
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
            <th>Home</th>
            <th>Classification</th>
            <th>Language</th>
            <th>Average Height</th>
            <th>Lifespan</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          <tr>
            <td>{species.name}</td>
            <td>{species.homeworld}</td>
            <td>{species.classification}</td>
            <td>{species.language}</td>
            <td>{species.average_height}</td>
            <td>{species.average_lifespan}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Species