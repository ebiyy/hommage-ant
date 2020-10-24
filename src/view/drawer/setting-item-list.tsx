import React from 'react';

import {
  List,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';
import { useStyles } from '../../layout/style';

import { Link } from 'react-router-dom';
import SaveIcon from '@material-ui/icons/Save';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { ROUTING_PATH } from '../../routes/routes';

const SettingItemList: React.FC = () => {
  const classes = useStyles();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Setting Item List
        </ListSubheader>
      }
      className={classes.listRoot}
    >
      <Link to={ROUTING_PATH.save}>
        <ListItem button>
          <ListItemIcon>
            <SaveIcon />
          </ListItemIcon>
          <ListItemText primary="Save" />
        </ListItem>
      </Link>
      <Link to={ROUTING_PATH.ui}>
        <ListItem button>
          <ListItemIcon>
            <AspectRatioIcon />
          </ListItemIcon>
          <ListItemText primary="UI" />
        </ListItem>
      </Link>
      <Link to={ROUTING_PATH.credit}>
        <ListItem button>
          <ListItemIcon>
            <ReceiptIcon />
          </ListItemIcon>
          <ListItemText primary="Credit" />
        </ListItem>
      </Link>
    </List>
  );
};

export default SettingItemList;
