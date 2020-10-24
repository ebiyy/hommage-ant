import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useStyles } from './style';

import Header from './header/header.component';
import DrawerDispSwitch from './drawer/drawer-disp-switch';

import './index.scss';
import MaterialHeader, {
  MATERIAL_DATA,
} from './material-header/material-header';
import ItemDescription from './item-description/item-description';

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
        {/* <MaterialHeader /> */}
        <BrowserRouter>
          <MaterialHeader />
          <Switch>
            {MATERIAL_DATA.map((data, index) => (
              <Route path={`/${data.materialName.toLowerCase()}`} key={index}>
                <ItemDescription materialName={data.materialName} />
              </Route>
            ))}
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}
