import React from 'react';
import Collapse from '@material-ui/core/Collapse/Collapse';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { SvgIconTypeMap, ListItemIcon, ListItemText } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import { IconType } from 'react-icons/lib/esm/iconBase';

import './collapse-list.scss';
import { useStyles } from '@/layout/style';

interface CildCategory {
  category: string;
  mUiIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType;
}

interface DrawerList {
  category: string;
  mUiIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType;
  cildCategory: CildCategory[];
}

const generateListItem = (
  IconElm: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType,
  itemName: string,
) => {
  return (
    <>
      <ListItemIcon>
        <IconElm />
      </ListItemIcon>
      <ListItemText primary={itemName} />
    </>
  );
};

type Props = {
  parentListName: string;
  parentListIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  childList: CildCategory[];
};

const CollapseList: React.FC<Props> = props => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        {generateListItem(props.parentListIcon, props.parentListName)}
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.childList.map((list, index) => (
            <ListItem button className={classes.nested} key={index}>
              {generateListItem(list.mUiIcon, list.category)}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseList;
