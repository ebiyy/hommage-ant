import React from 'react';
import ListItem from '@material-ui/core/ListItem/ListItem';

import { SvgIconTypeMap, ListItemIcon, ListItemText } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

import './collapse-list.scss';
import { useStyles } from '@/layout/style';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { quantityState } from '@/recoil/atom/quantity-state';
import { perSecondQuantityState } from '@/recoil/atom/per-second-quantity-state';

type Props = {
  displayName: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  link: string;
  itemKey: string;
};

const CollapseListChild: React.FC<Props> = props => {
  const classes = useStyles();
  const [perSecondQuantity] = useRecoilState(
    perSecondQuantityState[props.itemKey],
  );
  const [quantity] = useRecoilState(quantityState[props.itemKey]);

  return (
    <Link to={props.link}>
      <ListItem button className={classes.nested}>
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
        <ListItemText primary={props.displayName} />
        <ListItemText
          primary={perSecondQuantity ? `${perSecondQuantity}/s` : ''}
        />
        <ListItemText
          primary={
            String(Math.round(quantity)).length > 2
              ? Math.round(quantity)
              : quantity.toFixed(1)
          }
        />
      </ListItem>
    </Link>
  );
};

export default CollapseListChild;
