import React from 'react';
import { useStyles } from './style';

import './index.scss';
import Header from '@/view/header/header.component';
import ItemDescriptionRouting from '@/view/contents/item-description/item-description-routes';
import SettingRouting from '@/routes/setting-routes';
import DrawerDispSwitch from '@/view/drawer/drawer-disp-switch';
import MaterialHeader from '@/view/material-header/material-header';

const Layout: React.FC = () => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.drawerRoot}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      {/* <MaterialHeader /> */}
      <div className={classes.toolbar} />
      <div className={classes.toolbar} />
      <DrawerDispSwitch
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.content}>
        {/* <div className={classes.toolbar} />
        <div className={classes.toolbar} /> */}

        <ItemDescriptionRouting />
        <SettingRouting />
      </main>
    </div>
  );
};

export default Layout;
