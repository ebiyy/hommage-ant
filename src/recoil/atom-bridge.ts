import { RecoilState } from 'recoil';
import { antUnitsState } from './atom/ant-state';
import { foodUnitsState } from './atom/food-state';

interface AtomBridgeObj {
  [key: string]: RecoilState<AtomBridge>;
}

export interface AtomBridge {
  materialName: string;
  possessionNumber: number;
  possessionNumberPerSec: string;
  cost?: { [key: string]: number };
  description: string;
}

export const ATOM_BRIDGE: AtomBridgeObj = {
  food: foodUnitsState,
  ant: antUnitsState,
};
