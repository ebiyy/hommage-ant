import { Switch } from '@material-ui/core';
import React from 'react';

type Props = {
  optionName: string;
  radioLabel: string;
  checkState: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const RadioTypeOption: React.FC<Props> = props => (
  <div>
    <div>{props.optionName}</div>
    <div>
      {props.radioLabel}{' '}
      <Switch
        checked={props.checkState}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.setState(event.target.checked);
        }}
        color="primary"
      />
    </div>
  </div>
);

export default RadioTypeOption;
