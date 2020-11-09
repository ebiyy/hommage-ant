import React, { useEffect, useState } from 'react';
import './increment-contents.scss';
import { Button, ButtonGroup } from '@material-ui/core';
import {
  RecoilState,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ATOM_BRIDGE } from '@/recoil/atom-bridge';
import { quantityState } from '@/recoil/atom/quantity-state';
import { costState } from '@/recoil/atom/cost-state';
import { INCREMENT_ITEM_LIST } from '@/helpers/constants/increment-item-list';
import { perSecondQuantityState } from '@/recoil/atom/per-second-quantity-state';
import { timeManagerState } from '@/recoil/atom/time-manager-state';
import {
  getCurrentSumGeometricProgression,
  getGeometricProgression,
  getMaxTerm,
  getSumGeometricProgression,
} from '@/helpers/utilities/geometric-progression';

type Props = {
  itemKey: string;
};

const BuyingButtonGroup: React.FC<Props> = props => {
  const [canBuy, setCanBuy] = useState(false);
  const [buyLimit, setBuyLimit] = useState<number>();
  const [buyLimitHalf, setBuyLimitHalf] = useState<number>();
  const [quantity, setQuantity] = useRecoilState<number>(
    quantityState[props.itemKey] as RecoilState<number>,
  );

  const [cost, setCost] = useRecoilState<number>(
    costState[props.itemKey] as RecoilState<number>,
  );
  const [foodQuantity, setFoodQuantity] = useRecoilState<number>(
    quantityState.food,
  );
  const [foodperSecondQuantity, setFoodPerSecondQuantity] = useRecoilState<
    number
  >(perSecondQuantityState.food);
  const [timeManager, setTimeManager] = useRecoilState<number>(
    timeManagerState,
  );

  useEffect(() => {
    setCanBuy(foodQuantity > cost);
    const costTarget = INCREMENT_ITEM_LIST[props.itemKey].costTarget;
    if (costTarget) {
      const limitTerm = getMaxTerm(
        foodQuantity,
        cost,
        costTarget.food.growFactor,
      );
      setBuyLimit(limitTerm);
      setBuyLimitHalf(Math.round(limitTerm / 2));
    }
  }, [foodQuantity, cost, timeManager, props.itemKey]);

  const upgrade = (sellQuantity: number) => {
    const costTarget = INCREMENT_ITEM_LIST[props.itemKey].costTarget;
    if (costTarget) {
      const currentSumGeometricProgression = getCurrentSumGeometricProgression(
        costTarget.food.baseCost,
        costTarget.food.growFactor,
        quantity,
        sellQuantity,
      );
      setFoodQuantity(preState => preState - currentSumGeometricProgression);
      setQuantity(preState => preState + sellQuantity);
      setFoodPerSecondQuantity(preState => preState + sellQuantity);
      setCost(preState =>
        getGeometricProgression(
          preState,
          costTarget.food.growFactor,
          sellQuantity,
        ),
      );
    }
  };

  const minimumValue = buyLimitHalf
    ? Math.round(Math.sqrt(buyLimitHalf / 2))
    : 1;

  return (
    <>
      {canBuy && buyLimit ? (
        <ButtonGroup
          color="primary"
          size="large"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => upgrade(minimumValue)}>{minimumValue}</Button>
          {buyLimitHalf && buyLimitHalf > 1 ? (
            <Button onClick={() => upgrade(buyLimitHalf)}>
              {buyLimitHalf}
            </Button>
          ) : null}
          {buyLimit && buyLimit > 1 ? (
            <Button onClick={() => upgrade(buyLimit)}>{buyLimit}</Button>
          ) : null}
        </ButtonGroup>
      ) : null}
    </>
  );
};

export default BuyingButtonGroup;
