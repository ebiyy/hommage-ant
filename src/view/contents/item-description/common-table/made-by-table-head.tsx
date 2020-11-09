import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

const madeByTableHeadArr = ['Unit', 'Quantity', 'Total', '%'];

const MadeByTableHead: React.FC = () => {
  return (
    <TableRow>
      {madeByTableHeadArr.map((str, index) => (
        <TableCell key={index} align="center">
          {str}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default MadeByTableHead;
