import React from 'react';

import { List, ListSubheader } from '@material-ui/core';
import CollapseList from '@/view/drawer/collapse-list';
import { useStyles } from '@/layout/style';
import { DRAWER_LIST } from '@/helpers/constants/increment-item-list';

const IncrementItemList: React.FC = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Increment Item List
      //   </ListSubheader>
      // }
      className={classes.listRoot}
    >
      {DRAWER_LIST.map((list, index) => (
        <CollapseList
          key={index}
          parentListName={list.listName}
          parentListIcon={list.mUiIcon}
          childList={list.childList}
        />
      ))}
    </List>
  );
};

export default IncrementItemList;
