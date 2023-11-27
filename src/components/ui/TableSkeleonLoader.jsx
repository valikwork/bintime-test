import {
  Skeleton,
  TableCell,
  TableRow
} from '@mui/material';


const TableSkeleonLoader = ({ rowsNum = 5, cellsNum = 6, }) => {
  return (
    [...Array(rowsNum)].map((row, index) => (
      <TableRow key={index}>
        {[...Array(cellsNum)].map((cell, index) => (
          <TableCell key={index} component="td" scope="row" sx={{height: '56px'}}>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
        ))}
      </TableRow>
    ))
  )
};

export default TableSkeleonLoader