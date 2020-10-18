import WorkIcon from '@material-ui/icons/Work';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SchoolIcon from '@material-ui/icons/School';
import TerrainIcon from '@material-ui/icons/Terrain';
import AppleIcon from '@material-ui/icons/Apple';
import GavelIcon from '@material-ui/icons/Gavel';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import InboxIcon from '@material-ui/icons/Inbox';

import { FaChessQueen } from 'react-icons/fa';
import {
  GiCrystalGrowth,
  GiWoodPile,
  GiMiner,
  GiFarmTractor,
  GiAxeInLog,
  GiHuntingBolas,
  GiAnt,
  GiMadScientist,
} from 'react-icons/gi';

export const DRAWER_LIST = [
  {
    category: 'Material',
    mUiIcon: InboxIcon,
    cildCategory: [
      {
        category: 'Food',
        mUiIcon: FastfoodIcon,
      },
      {
        category: 'Crystal',
        mUiIcon: GiCrystalGrowth,
      },
      {
        category: 'Soil',
        mUiIcon: TerrainIcon,
      },
      {
        category: 'Science',
        mUiIcon: SchoolIcon,
      },
      {
        category: 'Fungus',
        mUiIcon: AppleIcon,
      },
      {
        category: 'Wood',
        mUiIcon: GiWoodPile,
      },
    ],
  },
  {
    category: 'Jobs',
    mUiIcon: WorkIcon,
    cildCategory: [
      {
        category: 'Geologist',
        mUiIcon: GiMiner,
      },
      {
        category: 'Farmer',
        mUiIcon: GiFarmTractor,
      },
      {
        category: 'Carpenter',
        mUiIcon: GavelIcon,
      },
      {
        category: 'Lumberjack',
        mUiIcon: GiAxeInLog,
      },
      {
        category: 'Hunter',
        mUiIcon: GiHuntingBolas,
      },
    ],
  },
  {
    category: 'Ants',
    mUiIcon: GiAnt,
    cildCategory: [
      {
        category: 'Nest',
        mUiIcon: LineStyleIcon,
      },
      {
        category: 'Queen',
        mUiIcon: FaChessQueen,
      },
      {
        category: 'Ant',
        mUiIcon: GiAnt,
      },
    ],
  },
  {
    category: 'Science',
    mUiIcon: SchoolIcon,
    cildCategory: [
      {
        category: 'Student',
        mUiIcon: AccessibilityIcon,
      },
      {
        category: 'Scientist Ant',
        mUiIcon: GiMadScientist,
      },
    ],
  },
];
