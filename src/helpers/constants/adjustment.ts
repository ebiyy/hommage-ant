import { DICTIONARY } from './dictionary';

export const BASE_ADVANCED_ADJUSTMENT: {
  [key: string]: 'soil' | 'sand' | 'crystal' | 'fungus' | 'wood';
} = {
  composterAnt: DICTIONARY.soil as 'soil',
  refineryAnt: DICTIONARY.sand as 'sand',
  laserAnt: DICTIONARY.crystal as 'crystal',
  hydroponicAnt: DICTIONARY.fungus as 'fungus',
  planterAnt: DICTIONARY.wood as 'wood',
  composterStation: DICTIONARY.soil as 'soil',
  refineryStation: DICTIONARY.sand as 'sand',
  laserStation: DICTIONARY.crystal as 'crystal',
  hydroponicFarm: DICTIONARY.fungus as 'fungus',
  plantingMachine: DICTIONARY.wood as 'wood',
  composterE: DICTIONARY.soil as 'soil',
  refineE: DICTIONARY.sand as 'sand',
  laserE: DICTIONARY.crystal as 'crystal',
  hydroE: DICTIONARY.fungus as 'fungus',
  plantingE: DICTIONARY.wood as 'wood',
};
