import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { ProdTableBodyData } from '@/helpers/models/increment-table.model';

type Props = {
  bodyData: ProdTableBodyData[];
};

const ProdTableBody: React.FC<Props> = props => {
  return (
    <>
      {props.bodyData.map((data, index) => (
        <TableRow key={index}>
          <TableCell align="center">{data.product}</TableCell>
          <TableCell align="center">{data.one}</TableCell>
          <TableCell align="center">{data.all}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default ProdTableBody;
