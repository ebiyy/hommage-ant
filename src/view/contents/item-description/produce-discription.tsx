import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import Slider from '@material-ui/core/Slider/Slider';
import React, { useState } from 'react';

import './produce-discription.scss';

const rows = [
  {
    product: 'Food',
    one: 2,
    all: '95,9M',
  },
];

const ProduceDescription: React.FC = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <>
      <div>
        Fungus is a source of food.
        <br />
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          style={{ width: '500px' }}
        />
        <br />
        {value} % operative
      </div>
      <div className="discription-table-title"> Fungus produces:</div>
      <TableContainer className="discription-table" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Product</TableCell>
              <TableCell align="center">One</TableCell>
              <TableCell align="center">All</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" align="center">
                  {row.product}
                </TableCell>
                <TableCell align="center">{row.one}</TableCell>
                <TableCell align="center">{row.all}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProduceDescription;
