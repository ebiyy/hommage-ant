import React, { useEffect, useState } from 'react';
import Collapse from '@material-ui/core/Collapse/Collapse';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

import { SvgIconTypeMap, ListItemIcon, ListItemText } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import { IconType } from 'react-icons/lib/esm/iconBase';

import './collapse-list.scss';
import { ItemInfo } from '@/helpers/constants/increment-item-list';
import CollapseListChild from './collapse-list-child';

interface CildCategory {
  listName: string;
  mUiIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType;
}

// interface DrawerList {
//   category: string;
//   mUiIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType;
//   cildCategory: CildCategory[];
// }

const generateListItem = (
  IconElm: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> | IconType,
  itemName: string,
  dispDiscription: boolean = false,
) => {
  return (
    <>
      <ListItemIcon>
        <IconElm />
      </ListItemIcon>
      <ListItemText primary={itemName} />
      {dispDiscription ? (
        <>
          <ListItemText primary={'7,76Qa/s'} />
          <ListItemText primary={'1,85Sx'} />
        </>
      ) : null}
    </>
  );
};

type Props = {
  parentListName: string;
  parentListIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  childList: ItemInfo;
};

const CollapseList: React.FC<Props> = props => {
  const [open, setOpen] = useState(false);
  const [haveChild, setHaveChild] = useState(false);

  useEffect(() => {
    const dispItems = Object.keys(props.childList)
      .map(key => props.childList[key].defaultQuantity)
      .filter(v => v !== undefined);
    setHaveChild(dispItems.length > 0);
  }, [props.childList]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {haveChild ? (
        <>
          <ListItem button onClick={handleClick}>
            {generateListItem(props.parentListIcon, props.parentListName)}
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {Object.keys(props.childList).map((incrementItemKey, index) => {
                const itemObj = props.childList[incrementItemKey];
                if (itemObj.defaultQuantity !== undefined) {
                  return (
                    <CollapseListChild
                      displayName={itemObj.displayName}
                      icon={itemObj.icon}
                      link={itemObj.link}
                      itemKey={incrementItemKey}
                      key={index}
                    />
                  );
                }
              })}
            </List>
          </Collapse>
        </>
      ) : null}
    </>
  );
};

export default CollapseList;
