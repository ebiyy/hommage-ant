import React from 'react';

import { List, ListSubheader } from '@material-ui/core';
import CollapseList from '@/components/collapse-list';
import { DRAWER_LIST } from '@/helpers/constant/drawer-list.constant';
import { useStyles } from '@/layout/style';

const IncrementItemList: React.FC = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Increment Item List
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
  );
};

export default IncrementItemList;
