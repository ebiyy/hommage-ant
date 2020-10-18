import React from 'react';

import { Divider, List, ListSubheader } from '@material-ui/core';
import { useStyles } from '../style';

import './collapse-list.scss';
import { DRAWER_LIST } from '../drawer-list.constant';
import CollapseList from './collapse-list';

const DrawerList: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
        className={classes.listRoot}
      >
        {DRAWER_LIST.map((list, index) => (
          <CollapseList
            parentListName={list.category}
            parentListIcon={list.mUiIcon}
            childList={list.cildCategory}
            key={index}
          />
        ))}
      </List>
    </div>
  );
};

export default DrawerList;
