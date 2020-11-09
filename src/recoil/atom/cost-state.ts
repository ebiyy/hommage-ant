import { atom, RecoilState } from 'recoil';

interface CostAtom {
  [key: string]: RecoilState<number | undefined>;
}

const generateCostAtom = (
  key: string,
  defaultCost: number | undefined = undefined,
) =>
  atom({
    key: key,
    default: defaultCost,
  });

export const costState: CostAtom = {
  ant: generateCostAtom('antCost', 15),
};
