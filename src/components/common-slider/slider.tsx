import { withStyles } from '@material-ui/core';
import Slider from '@material-ui/core/Slider/Slider';
import React from 'react';

const PrettoSlider = withStyles({
  root: {
    color: '#0078ae',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid #77d5f7',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const CommonSlider: React.FC = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <>
      <div style={{ marginBottom: '2.2rem' }}>
        Fungus is a source of food.
        <br />
        <PrettoSlider
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={20}
          style={{ width: '90%' }}
        />
        <br />
        {value} % operative
      </div>
    </>
  );
};

export default CommonSlider;
