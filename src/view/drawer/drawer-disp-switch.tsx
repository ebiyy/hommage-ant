import React from 'react';

import { Drawer, Hidden, useTheme } from '@material-ui/core';
import DrawerList from '@/layout/drawer-layout';
import { useStyles } from '@/layout/style';

type Props = {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

const DrawerDispSwitch: React.FC<Props> = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={undefined}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerList />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <DrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default DrawerDispSwitch;
