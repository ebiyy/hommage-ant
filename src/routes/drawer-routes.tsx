import IncrementItemList from '@/view/drawer/increment-item-list';
import SettingItemList from '@/view/drawer/setting-item-list';
import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ROUTING_PATH } from './routes';

const DrawerRouting: React.FC = () => {
  return (
    <Switch>
      <Route path={ROUTING_PATH.setting}>
        <SettingItemList />
      </Route>
      <Route path={ROUTING_PATH.root}>
        <IncrementItemList />
      </Route>
    </Switch>
  );
};

export default DrawerRouting;
