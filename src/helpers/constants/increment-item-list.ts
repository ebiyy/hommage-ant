import FastfoodIcon from '@material-ui/icons/Fastfood';
import SchoolIcon from '@material-ui/icons/School';
import TerrainIcon from '@material-ui/icons/Terrain';
import GavelIcon from '@material-ui/icons/Gavel';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import WorkIcon from '@material-ui/icons/Work';
import InboxIcon from '@material-ui/icons/Inbox';
import ClassIcon from '@material-ui/icons/Class';
import BuildIcon from '@material-ui/icons/Build';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

import { FaChessQueen, FaSchool } from 'react-icons/fa';
import {
  GiCrystalGrowth,
  GiWoodPile,
  GiMiner,
  GiFarmTractor,
  GiAxeInLog,
  GiHuntingBolas,
  GiAnt,
  GiMadScientist,
  GiDesert,
  GiMushroomGills,
  GiWinchesterRifle,
  GiAnts,
  GiFactory,
  GiHoneypot,
  GiDigHole,
  GiHoneycomb,
} from 'react-icons/gi';
import { IconType } from 'react-icons/lib';
import { SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export const MATERIAL_ITEM_LIST: ItemInfo = {
  food: {
    link: 'food',
    displayName: 'Food',
    icon: FastfoodIcon,
    defaultQuantity: 100,
  },
  crystal: {
    link: 'crystal',
    displayName: 'Crystal',
    icon: GiCrystalGrowth,
  },
  soil: {
    link: 'soil',
    displayName: 'Soil',
    icon: TerrainIcon,
  },
  science: {
    link: 'science',
    displayName: 'Science',
    icon: SchoolIcon,
  },
  fungus: {
    link: 'fungus',
    displayName: 'Fungus',
    icon: GiMushroomGills,
  },
  wood: {
    link: 'wood',
    displayName: 'Wood',
    icon: GiWoodPile,
  },
  sand: {
    link: 'sand',
    displayName: 'Sand',
    icon: GiDesert,
  },
  nectar: {
    link: 'nectar',
    displayName: 'Nectar',
    icon: LocalDrinkIcon,
  },
  honey: {
    link: 'honey',
    displayName: 'Honey',
    icon: GiHoneypot,
  },
};

export const JOBS_ITEM_LIST = {
  geologist: {
    link: 'geologist',
    displayName: 'Geologist',
    icon: GiMiner,
  },
  farmer: {
    link: 'farmer',
    displayName: 'Farmer',
    icon: GiFarmTractor,
  },
  carpenter: {
    link: 'carpenter',
    displayName: 'Carpenter',
    icon: GavelIcon,
  },
  lumberjack: {
    link: 'lumberjack',
    displayName: 'Lumberjack',
    icon: GiAxeInLog,
  },
  hunter: {
    link: 'hunter',
    displayName: 'Hunter',
    icon: GiHuntingBolas,
  },
  advancedHunter: {
    link: 'advanced-hunter',
    displayName: 'Advanced Hunter',
    icon: GiWinchesterRifle,
  },
};

export const ANTS_ITEM_LIST = {
  nest: {
    link: 'nest',
    displayName: 'Nest',
    icon: LineStyleIcon,
  },
  queen: {
    link: 'queen',
    displayName: 'Queen',
    icon: FaChessQueen,
  },
  ant: {
    link: 'ant',
    displayName: 'Ant',
    icon: GiAnt,
    defaultQuantity: 0,
    costTarget: {
      food: {
        baseCost: 15,
        growFactor: 1.1,
      },
    },
  },
};

export const SCIENCE_ITEM_LIST = {
  student: {
    link: 'student',
    displayName: 'Student',
    icon: GiAnts,
  },
  scientistAnt: {
    link: 'scientist-ant',
    displayName: 'Scientist Ant',
    icon: GiMadScientist,
  },
  university: {
    link: 'university',
    displayName: 'University',
    icon: SchoolIcon,
  },
  departmentOfEducation: {
    link: 'department-of-education',
    displayName: 'Department Of Education',
    icon: CastForEducationIcon,
  },
};

export const ADVANCED_JOBS_ITEM_LIST = {
  composterAnt: {
    link: 'composter-ant',
    displayName: 'Composter Ant',
    icon: MATERIAL_ITEM_LIST.soil.icon,
  },
  refineryAnt: {
    link: 'refinery-ant',
    displayName: 'Refinery Ant',
    icon: MATERIAL_ITEM_LIST.sand.icon,
  },
  laserAnt: {
    link: 'laser-ant',
    displayName: 'Laser Ant',
    icon: MATERIAL_ITEM_LIST.crystal.icon,
  },
  hydroponicAnt: {
    link: 'hydroponic-ant',
    displayName: 'Hydroponic Ant',
    icon: MATERIAL_ITEM_LIST.fungus.icon,
  },
  planterAnt: {
    link: 'planter-ant',
    displayName: 'Planter Ant',
    icon: MATERIAL_ITEM_LIST.wood.icon,
  },
};

export const MACHINERY_ITEM_LIST = {
  composterStation: {
    link: 'composter-station',
    displayName: 'Composter Station',
    icon: MATERIAL_ITEM_LIST.soil.icon,
  },
  refineryStation: {
    link: 'refinery-station',
    displayName: 'Refinery Station',
    icon: MATERIAL_ITEM_LIST.sand.icon,
  },
  laserStation: {
    link: 'laser-station',
    displayName: 'Laser Station',
    icon: MATERIAL_ITEM_LIST.crystal.icon,
  },
  hydroponicFarm: {
    link: 'hydroponic-farm',
    displayName: 'Hydroponic Farm',
    icon: MATERIAL_ITEM_LIST.fungus.icon,
  },
  plantingMachine: {
    link: 'planting-machine',
    displayName: 'Planting Machine',
    icon: MATERIAL_ITEM_LIST.wood.icon,
  },
  sandDigger: {
    link: 'sand-digger',
    displayName: 'Sand Digger',
    icon: GiDigHole,
  },
  honeyMaker: {
    link: 'honey-maker',
    displayName: 'Honey Maker',
    icon: GiHoneycomb,
  },
};

export const ENGINEER_ITEM_LIST = {
  composterE: {
    link: 'composter-e',
    displayName: 'Composter E.',
    icon: MATERIAL_ITEM_LIST.soil.icon,
  },
  refineE: {
    link: 'refine-e',
    displayName: 'Refine E.',
    icon: MATERIAL_ITEM_LIST.sand.icon,
  },
  laserE: {
    link: 'laser-e',
    displayName: 'Laser E.',
    icon: MATERIAL_ITEM_LIST.crystal.icon,
  },
  hydroE: {
    link: 'hydro-e',
    displayName: 'hydro E.',
    icon: MATERIAL_ITEM_LIST.fungus.icon,
  },
  plantingE: {
    link: 'planting-e',
    displayName: 'planting E.',
    icon: MATERIAL_ITEM_LIST.wood.icon,
  },
};

export interface ItemInfo {
  [key: string]: {
    link: string;
    displayName: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType;
    defaultQuantity?: number;
    costTarget?: {
      [key: string]: {
        baseCost: number;
        growFactor: number;
      };
    };
  };
}

export const INCREMENT_ITEM_LIST: ItemInfo = {
  ...MATERIAL_ITEM_LIST,
  ...JOBS_ITEM_LIST,
  ...ADVANCED_JOBS_ITEM_LIST,
  ...ANTS_ITEM_LIST,
  ...SCIENCE_ITEM_LIST,
  ...MACHINERY_ITEM_LIST,
  ...ENGINEER_ITEM_LIST,
};

export const DRAWER_LIST = [
  {
    listName: 'Material',
    mUiIcon: InboxIcon,
    childList: MATERIAL_ITEM_LIST,
  },
  {
    listName: 'Jobs',
    mUiIcon: WorkIcon,
    childList: JOBS_ITEM_LIST,
  },
  {
    listName: 'Advanced Jobs',
    mUiIcon: ClassIcon,
    childList: ADVANCED_JOBS_ITEM_LIST,
  },
  {
    listName: 'Ants',
    mUiIcon: GiAnt,
    childList: ANTS_ITEM_LIST,
  },
  {
    listName: 'Science',
    mUiIcon: FaSchool,
    childList: SCIENCE_ITEM_LIST,
  },
  {
    listName: 'Machinery',
    mUiIcon: GiFactory,
    childList: MACHINERY_ITEM_LIST,
  },
  {
    listName: 'Engineers',
    mUiIcon: BuildIcon,
    childList: ENGINEER_ITEM_LIST,
  },
];
