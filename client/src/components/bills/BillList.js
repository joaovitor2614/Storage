import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import BillItem from './BillItem'
import ReactPaginate from 'react-paginate'
import selectBills from '../../selectors/bills'
import { removeBill } from '../../actions/bills';
const BillList = ({ bills, filters }) => {
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeBill(id))
    }
    // logica paginação
    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 3;
    const itemsVisited = pageNumber * dataPerPage;
    
    let filteredBills = selectBills(bills, filters)
    const displayPages = filteredBills.length > 0
    ? filteredBills.slice(itemsVisited, itemsVisited + dataPerPage)
    .map((bill) => {
        return (
        <div className='bills__list' key={bill._id}>
            <BillItem handleRemove={handleRemove} bill={bill} />
        </div>
        )
    }) : (
        <div className='bills__list' >
           <h5>Sem contas a pagar adicionadas</h5>
        </div>
    )
    const pageCount = Math.ceil(filteredBills.length / dataPerPage)
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

export default BillList
