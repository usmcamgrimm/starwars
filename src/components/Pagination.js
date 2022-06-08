function Pagination({ charactersPerPage, totalCharacters, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <span key={number} className="page-number" onClick={() => paginate(number)}>
                    {number}
                </span>
            ))}
        </div>
    )
}

export default Pagination