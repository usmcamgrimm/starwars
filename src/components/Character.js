import React from 'react'

const Character = () => {
  return (
    <div className="mt-24">
      <h2 className="text-blue text-3xl text-center">Characters</h2>
      <table className="table-auto border-collapse border border-white text-white flex justify-center items-center">
        <thead className="mt-12">
          <tr>
            <th className="border border-white">Name</th>
            <th className="border border-white">Planet</th>
            <th className="border border-white">Species</th>
            <th className="border border-white">Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-white">{Character.name}</td>
            <td className="border border-white">{Character.homeworld}</td>
            <td className="border border-white">{Character.species}</td>
            <td className="border border-white">{Character.birth_year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Character