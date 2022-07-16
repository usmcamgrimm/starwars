import React, { useState, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination'

function CharPagination(props) {
  const [active, setActive] = useState(1)  
  const pageNumbers = []

  useEffect(() => {
    setActive(props.activePage);
  }, [props.activePage])

  function handleClick(page) {
      setActive(page);
      props.handleNewPage(page);
  }

  for (let number = 1; number <= props.paginationCount; number++) {
      pageNumbers.push(
        <Pagination.Item 
          key={number} 
          active={number === active} 
          onClick={() => { handleClick(number) }}
        >
          {number}
        </Pagination.Item>
      )
  }

  return (
    <nav>
      <Pagination>
        {pageNumbers}
      </Pagination>
    </nav>
  )
}

export default CharPagination