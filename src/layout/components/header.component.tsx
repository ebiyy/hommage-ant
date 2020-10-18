import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../style';

import './collapse-list.scss';

type Props = {
  handleDrawerToggle: () => void;
};

const Header: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Idle Ant
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
