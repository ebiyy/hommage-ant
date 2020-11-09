import React from 'react';
import './increment-contents.scss';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import IncrementDiscriptionTable from '@/view/contents/item-description/common-table/table';
import CommonSlider from '@/components/common-slider/slider';
import { RecoilState, useRecoilState } from 'recoil';
import { ATOM_BRIDGE } from '@/recoil/atom-bridge';
import { DICTIONARY } from '@/helpers/constants/dictionary';
import BuyingButtonGroup from './buying-button-group';
import { quantityState } from '@/recoil/atom/quantity-state';
import { costState } from '@/recoil/atom/cost-state';
import { timeManagerState } from '@/recoil/atom/time-manager-state';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  itemKey: string;
};

const IncrementContents: React.FC<Props> = props => {
  const classes = useStyles();
  const [descriptionData] = useRecoilState(ATOM_BRIDGE[props.itemKey]);
  const [quantity] = useRecoilState<number>(
    quantityState[props.itemKey] as RecoilState<number>,
  );
  const [cost, setCost] = useRecoilState<number>(
    costState[props.itemKey] as RecoilState<number>,
  );

  const [timeManager, setTimeManager] = useRecoilState<number>(
    timeManagerState,
  );

  return (
    <>
      {descriptionData ? (
        <div className="increment-contents">
          <div className="contents-left">
            <div className="discription-title">
              <div>{descriptionData.materialName}</div>
              <div>{quantity}</div>
              <p>{timeManager}</p>
            </div>
            {descriptionData.materialName === 'Fungus' ? (
              <>
                <CommonSlider />
                <IncrementDiscriptionTable
                  tableType="prodTable"
                  materialName={descriptionData.materialName}
                  tableBodyData={[{ product: 'Food', one: 2, all: 2 }]}
                />
                <IncrementDiscriptionTable
                  tableType="madeByTable"
                  materialName={descriptionData.materialName}
                  tableBodyData={[
                    { unit: 'Food', quantity: 2, total: 2, percent: 2 },
                  ]}
                />
              </>
            ) : (
              <p>{descriptionData.description}</p>
            )}
          </div>
          <div className="contents-right">
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {`Hire (${quantity})`}
                </Typography>
                <Typography variant="body1" component="p">
                  Get more units.
                  <br />
                  Getting one will costs:
                  {Math.round(cost)} Food
                  {/* {Object.keys(
                    descriptionData.cost ? descriptionData.cost : {},
                  ).map((key, index) => {
                    let dispText = '';
                    if (index > 0) dispText += ',';
                    if (descriptionData.cost) {
                      dispText += ` ${descriptionData.cost[key]} ${DICTIONARY[key]}`;
                    }
                    return dispText;
                  })} */}
                </Typography>
              </CardContent>
              <CardActions>
                {descriptionData.cost ? (
                  <BuyingButtonGroup itemKey={props.itemKey} />
                ) : null}
              </CardActions>
            </Card>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Teamwork (28)
                </Typography>
                <Typography variant="body1" component="p">
                  Get a better production bonus.
                  <br />
                  Getting one will costs: 7.20Qi Science,
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup
                  color="primary"
                  size="large"
                  aria-label="outlined primary button group"
                >
                  <Button>2</Button>
                  <Button>78</Button>
                  <Button>14</Button>
                </ButtonGroup>
              </CardActions>
            </Card>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Twin (22)
                </Typography>
                <Typography variant="body1" component="p">
                  Get more units for the same price.
                  <br />
                  Getting one will costs: 13.1Qi Science,
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup
                  color="primary"
                  size="large"
                  aria-label="outlined primary button group"
                >
                  <Button>2</Button>
                  <Button>78</Button>
                  <Button>14</Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default IncrementContents;
