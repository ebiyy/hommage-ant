import React from 'react';
import { useStyles } from './style';

import Header from '../view/header/header.component';
import DrawerDispSwitch from '../view/drawer/drawer-disp-switch';

import './index.scss';
import MaterialHeader from '../view/material-header/material-header';
import SettingRouting from '../routes/setting-routes';
import ItemDescriptionRouting from '../routes/item-description-routes';

const Layout: React.FC = () => {
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
        <MaterialHeader />
        <ItemDescriptionRouting />
        <SettingRouting />
      </main>
    </div>
  );
};

export default Layout;
