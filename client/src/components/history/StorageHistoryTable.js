import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import useDataTableDaily from '../hooks/useDataTableDaily';


const columns = [
    { id: 'name', label: 'Produto', align: 'left', minWidth: 100 },
    { id: 'units', label: 'Unidades', minWidth: 70, align: 'center' },
    { id: 'date', label: 'Hora', align: 'center', minWidth: 70 },
]

const useStyles = makeStyles({
    root: {
        width: '550px',
        height: '657px',
        wordBreak: 'break-all'
      
    },
  
    
})

const StorageHistoryTable = ({ itemSales, type }) => {
    const classes = useStyles();
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    const { rows } = useDataTableDaily(itemSales, type)
    const handleChangePage = (e, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(+e.target.value);
        setPage(0);
    }

    return ( 
            <Paper className={classes.root}>
                            <TableContainer>
                            <Table stickyHeader aria-label='sticky table'>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                                <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                            
                                            return (
                                                <TableRow 
                                                hover role="checkbox" 
                                                tabIndex={-1} key={row._id}
                                                >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            )
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[9, 5]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}>
                        </TablePagination>
            </Paper>
           
         

    )
}
export default StorageHistoryTable