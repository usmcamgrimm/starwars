import React from 'react'

const Character = () => {
  return (
    <div className="container">
      <h2>Characters</h2>
      <table>
        <thead className="mt-12">
          <tr>
            <th>Name</th>
            <th>Planet</th>
            <th>Species</th>
            <th>Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Character.homeworld}</td>
            <td>{Character.name}</td>
            <td>{Character.species}</td>
            <td>{Character.birth_year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Character