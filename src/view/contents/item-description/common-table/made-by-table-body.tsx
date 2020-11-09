import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import { MadeByTableBodyData } from '@/helpers/models/increment-table.model';

type Props = {
  bodyData: MadeByTableBodyData[];
};

const arrayToSumValue = (arr: number[]) => {
  return arr.reduce((prev, current) => prev + current);
};

const MadeByTableBody: React.FC<Props> = props => {
  return (
    <>
      {props.bodyData.map((data, index) => (
        <TableRow key={index}>
          <TableCell align="center">{data.unit}</TableCell>
          <TableCell align="center">{data.quantity}</TableCell>
          <TableCell align="center">{data.total}</TableCell>
          <TableCell align="center">{data.percent}</TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell align="center">Total</TableCell>
        <TableCell align="center">
          {arrayToSumValue(props.bodyData.map(data => data.quantity))}
        </TableCell>
        <TableCell align="center">
          {arrayToSumValue(props.bodyData.map(data => data.total))}
        </TableCell>
        <TableCell align="center">
          {arrayToSumValue(props.bodyData.map(data => data.percent))}
        </TableCell>
      </TableRow>
    </>
  );
};

export default MadeByTableBody;
