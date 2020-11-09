import { atom } from 'recoil';
import { AtomBridge } from '../atom-bridge';

export const antUnitsState = atom<AtomBridge>({
  key: 'antUnitsState',
  default: {
    materialName: 'Ant',
    possessionNumber: 0,
    possessionNumberPerSec: '0/s',
    cost: {
      food: 15,
    },
    description:
      'Ants are the lowest class of worker. They continuously gather food.',
  },
});
