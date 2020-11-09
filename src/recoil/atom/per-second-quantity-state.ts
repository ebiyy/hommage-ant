import { atom, RecoilState } from 'recoil';

interface PerSecondQuantityAtom {
  [key: string]: RecoilState<number>;
}

const generatePerSecondQuantityAtom = (
  key: string,
  defaultPerSecondQuantity: number,
) =>
  atom({
    key: key,
    default: defaultPerSecondQuantity,
  });

export const perSecondQuantityState: PerSecondQuantityAtom = {
  food: generatePerSecondQuantityAtom('foodPerSecondQuantity', 0),
  ant: generatePerSecondQuantityAtom('antPerSecondQuantity', 0),
};
