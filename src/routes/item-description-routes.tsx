import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemDescription from '../view/contents/item-description/item-description';
import { MATERIAL_DATA } from '../view/material-header/material-header';

const ItemDescriptionRouting: React.FC = () => {
  return (
    <Switch>
      {MATERIAL_DATA.map((data, index) => (
        <Route path={`/${data.materialName.toLowerCase()}`} key={index}>
          <ItemDescription materialName={data.materialName} />
        </Route>
      ))}
    </Switch>
  );
};

export default ItemDescriptionRouting;
