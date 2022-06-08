// import { Pagination } from 'react-bootstrap'

function CardPagination({ charactersPerPage, totalCharacters, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      // <nav>
      //   <Pagination>
      //     {pageNumbers}
      //   </Pagination>
      // </nav>
    )
}

export default CardPagination