import classes from '*.module.css';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from '@material-ui/core';
import Slider from '@material-ui/core/Slider/Slider';
import React, { useEffect, useState } from 'react';

import './item-description.scss';

interface mock {
  materialName: string;
  possessionNumber: string;
  possessionNumberPerSec: string;
  description: string;
}

const MOCKS = [
  {
    materialName: 'Food',
    possessionNumber: '20Qa',
    possessionNumberPerSec: '923B/s',
    description: 'Food is used to support almost all your units.',
  },
  {
    materialName: 'Crystal',
    possessionNumber: '50.7M',
    possessionNumberPerSec: '989/s',
    description: 'Crystals are needed to get science.',
  },
  {
    materialName: 'Soil',
    possessionNumber: '380M',
    possessionNumberPerSec: '6.341/s',
    description: 'Soil is used to make nests.',
  },
  {
    materialName: 'Science',
    possessionNumber: '196M',
    possessionNumberPerSec: '2.714/s',
    description: 'Science is used to improve and unlock stuff.',
  },
  {
    materialName: 'Fungus',
    possessionNumber: '12.1M',
    possessionNumberPerSec: '233/s',
    description: '',
  },
  {
    materialName: 'Wood',
    possessionNumber: '12.7M',
    possessionNumberPerSec: '197/s',
    description: 'Wood is used to make better nests and machinery.',
  },
];

const rows = [
  {
    product: 'Food',
    one: 2,
    all: '95,9M',
  },
];

type Props = {
  materialName: string;
};

const ItemDescription: React.FC<Props> = props => {
  const [descriptionData, setDescriptionData] = useState<mock>();
  const [value, setValue] = React.useState<number>(30);

  useEffect(() => {
    console.log(props.materialName);
    setDescriptionData(
      MOCKS.filter(data => props.materialName === data.materialName)[0],
    );
  }, [props.materialName]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <>
      {descriptionData ? (
        <div>
          <div className="discription-title">
            <div>{descriptionData.materialName}</div>
            <div>{descriptionData.possessionNumber}</div>
          </div>
          {descriptionData.materialName === 'Fungus' ? (
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
          ) : (
            <p>{descriptionData.description}</p>
          )}
        </div>
      ) : null}
    </>
  );
};

export default ItemDescription;
