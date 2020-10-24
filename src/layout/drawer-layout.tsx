import React from 'react';

import { Divider } from '@material-ui/core';
import { useStyles } from './style';
import DrawerRouting from '@/routes/drawer-routes';

const DrawerList: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <DrawerRouting />
    </div>
  );
};

export default DrawerList;
