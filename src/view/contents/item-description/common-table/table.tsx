import React from 'react';
import {
  MadeByTableBodyData,
  ProdTableBodyData,
} from '@/helpers/models/increment-table.model';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
} from '@material-ui/core';
import MadeByTableBody from './made-by-table-body';
import MadeByTableHead from './made-by-table-head';
import ProdTableBody from './prod-table-body';
import ProdTableHead from './prod-table-head';

import './table.scss';

type Props = {
  tableType: 'prodTable' | 'madeByTable';
  materialName: string;
  tableBodyData: (ProdTableBodyData | MadeByTableBodyData)[];
};

const TABLE_TITLE_SWITCH = {
  prodTable: 'produces:',
  madeByTable: 'is made by:',
};

const IncrementDiscriptionTable: React.FC<Props> = props => {
  const headerSwitch = {
    prodTable: <ProdTableHead />,
    madeByTable: <MadeByTableHead />,
  };

  const bodySwitch = {
    prodTable: (
      <ProdTableBody bodyData={props.tableBodyData as ProdTableBodyData[]} />
    ),
    madeByTable: (
      <MadeByTableBody
        bodyData={props.tableBodyData as MadeByTableBodyData[]}
      />
    ),
  };

  return (
    <>
      <div className="discription-table-title">
        {`${props.materialName} ${TABLE_TITLE_SWITCH[props.tableType]}`}
      </div>
      <TableContainer className="discription-table" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>{headerSwitch[props.tableType]}</TableHead>
          <TableBody>{bodySwitch[props.tableType]}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default IncrementDiscriptionTable;
