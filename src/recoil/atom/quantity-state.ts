import { atom, RecoilState } from 'recoil';

interface QuantityAtom {
  [key: string]: RecoilState<number>;
}

const generateQuantityAtom = (key: string, defaultQuantity: number) =>
  atom({
    key: key,
    default: defaultQuantity,
  });

export const quantityState: QuantityAtom = {
  food: generateQuantityAtom('foodQuantityState', 100),
  ant: generateQuantityAtom('antQuantityState', 0),
};
