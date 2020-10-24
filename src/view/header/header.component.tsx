import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PauseIcon from '@material-ui/icons/Pause';
import SettingsIcon from '@material-ui/icons/Settings';
import { ImLab } from 'react-icons/im';

import { makeStyles, Theme, createStyles } from '@material-ui/core';
import BulkPurchase from '../../components/bulk-purchase';

import './header.component.scss';
import { Link } from 'react-router-dom';
import { ROUTING_PATH } from '../../routes/routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

type Props = {
  handleDrawerToggle: () => void;
};

const Header: React.FC<Props> = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const menuId = 'primary-search-account-menu';
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.grow}>
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
          <Link to="/">
            <Typography variant="h6" noWrap>
              Idle Ant
            </Typography>
          </Link>
          <IconButton
            aria-label="pause button"
            color="inherit"
            style={{ marginLeft: '25px' }}
          >
            <ImLab />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <form noValidate autoComplete="off">
              <div id="buy-number">
                <TextField
                  id="filled-multiline-flexible"
                  label="Buy N"
                  type="number"
                />
              </div>
            </form>
            <BulkPurchase />
            <IconButton aria-label="pause button" color="inherit">
              <PauseIcon />
            </IconButton>
            <Link to={ROUTING_PATH.setting}>
              <IconButton
                edge="end"
                aria-label="setting button"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <SettingsIcon />
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
