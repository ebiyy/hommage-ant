import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

import NestedMenuItem from 'material-ui-nested-menu-item';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const PEARENT_MENU_ITEMS: string[] = ['Material', 'Jobs', 'Ants', 'Science'];

const NESTED_MANU_ITEMS: string[] = [
  'Buy n',
  'Twins',
  'Team',
  '100%',
  '90%',
  '80%',
  '70%',
  '60%',
  '50%',
  '40%',
  '30%',
  '20%',
  '10%',
  '0%',
];

const BulkPurchase: React.FC = () => {
  const [menuPosition, setMenuPosition] = useState<any>(null);

  const handleLeftClick = (event: React.MouseEvent) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleItemClick = (event: React.MouseEvent) => {
    console.log('click list name: ' + event.currentTarget.textContent);
    console.log(
      'click parent list name: ' +
        event.currentTarget.parentNode?.firstChild?.textContent,
    );
    setMenuPosition(null);
  };

  const generateNestedMenuItem = (pearentMenuName: string, index: number) => (
    <NestedMenuItem
      label={pearentMenuName}
      parentMenuOpen={!!menuPosition}
      key={index}
    >
      {NESTED_MANU_ITEMS.map((itemName, index) => (
        <MenuItem onClick={handleItemClick} key={index}>
          {itemName}
        </MenuItem>
      ))}
    </NestedMenuItem>
  );

  return (
    <div onClick={handleLeftClick}>
      <IconButton aria-label="bulk purchase button" color="inherit">
        <BusinessCenterIcon />
      </IconButton>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        <MenuItem onClick={handleItemClick}>All 100%</MenuItem>
        {PEARENT_MENU_ITEMS.map((listName, index) =>
          generateNestedMenuItem(listName, index),
        )}
      </Menu>
    </div>
  );
};

export default BulkPurchase;
