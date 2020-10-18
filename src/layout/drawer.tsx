import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './style';

import Header from './components/header.component';
import DrawerDispSwitch from './components/drawer-disp-switch';

export default function ResponsiveDrawer() {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.drawerRoot}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <DrawerDispSwitch
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </main>
    </div>
  );
}
