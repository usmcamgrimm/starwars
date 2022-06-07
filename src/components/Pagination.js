import { useState, useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination'

function dataPagination(props) {
  const [active, setActive] = useState(1)
  const pages = []

  useEffect(() => {
    setActive(props.activePage)
  }, [props.activePage])

  function handleSelect(page) {
    setActive(page)
    props.handleNewPage(page)
  }

  for (let number = 1; number <= props.paginationCount; number++) {
    pages.push(
      <Pagination.Item 
        key={number} 
        active={number === active} 
        onClick={() => { 
          handleSelect(number) 
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  
  return (
    <div>
      
    </div>
  )
}

export default dataPagination