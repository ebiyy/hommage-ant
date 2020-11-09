import { atom } from 'recoil';
import { AtomBridge } from '../atom-bridge';

export const foodUnitsState = atom<AtomBridge>({
  key: 'foodUnitsState',
  default: {
    materialName: 'Food',
    possessionNumber: 100,
    possessionNumberPerSec: '0/s',
    description: 'Food is used to support almost all your units.',
  },
});
