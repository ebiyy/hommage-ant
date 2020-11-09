import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const prodTableHeadArr = ['Product', 'One', 'All'];

const ProdTableHead: React.FC = () => {
  return (
    <TableRow>
      {prodTableHeadArr.map((str, index) => (
        <TableCell key={index} align="center">
          {str}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default ProdTableHead;
