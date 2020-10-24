import SettingCredit from '@/view/contents/setting/setting-credit';
import SettingSave from '@/view/contents/setting/setting-save';
import SettingUI from '@/view/contents/setting/setting-ui';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTING_PATH } from './routes';

const SettingRouting: React.FC = () => {
  return (
    <Switch>
      <Route path={ROUTING_PATH.ui}>
        <SettingUI />
      </Route>
      <Route path={ROUTING_PATH.credit}>
        <SettingCredit />
      </Route>
      <Route path={ROUTING_PATH.setting}>
        <SettingSave />
      </Route>
    </Switch>
  );
};

export default SettingRouting;
