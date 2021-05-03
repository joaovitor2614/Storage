import React, { useState } from 'react'
import CashFlowDisplay from './CashFlowDisplay';
import ReactPaginate from 'react-paginate'

const CashFlowPagination = ({ items, handleAdd }) => {
    const [data, setData] = useState(items.slice(0, 50));
    console.log('data 11', data)
    const [pageNumber, setPageNumber] = useState(0);

    const dataPerPage = 6;
    const itemsVisited = pageNumber * dataPerPage;
    const displayPages = data
    .slice(itemsVisited, itemsVisited + dataPerPage)
    .map((dt) => {
        return (
        <div key={dt._id}>
            <CashFlowDisplay item={dt} handleAdd={handleAdd} />
          </div>
        )
    })
    // arredondar numero de pagina
    const pageCount = Math.ceil(data.length / dataPerPage)
    // mudar pagina
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div>
            {displayPages}
            <ReactPaginate 
              previousLabel={"Anterior"}
              nextLabel={"Próximo"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
        </div>
    )
      
}

export default CashFlowPagination
