import { INCREMENT_ITEM_LIST } from '@/helpers/constants/increment-item-list';
import { perSecondQuantityState } from '@/recoil/atom/per-second-quantity-state';
import { quantityState } from '@/recoil/atom/quantity-state';
import { timeManagerState } from '@/recoil/atom/time-manager-state';
import IncrementContents from '@/view/contents/item-description/increment-contents';
import ItemDescription from '@/view/contents/item-description/item-description';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const ItemDescriptionRouting: React.FC = () => {
  const [timeManager, setTimeManager] = useRecoilState<number>(
    timeManagerState,
  );
  const [foodperSecondQuantity, setFoodPerSecondQuantity] = useRecoilState<
    number
  >(perSecondQuantityState.food);
  const [foodQuantity, setFoodQuantity] = useRecoilState<number>(
    quantityState.food,
  );

  useEffect(() => {
    setInterval(() => {
      setTimeManager(v => v + 0.2);
    }, 200);
  }, [setTimeManager]);

  useEffect(() => {
    setFoodQuantity(v => v + foodperSecondQuantity * 0.2);
  }, [timeManager]);

  return (
    <Switch>
      {Object.keys(INCREMENT_ITEM_LIST).map((incrementItemKey, index) => {
        const itemObj = INCREMENT_ITEM_LIST[incrementItemKey];
        return (
          <Route path={`/${itemObj.link}`} key={index}>
            <IncrementContents itemKey={incrementItemKey} />
          </Route>
        );
      })}
    </Switch>
  );
};

export default ItemDescriptionRouting;
