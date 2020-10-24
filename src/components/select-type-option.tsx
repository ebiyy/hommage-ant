import { MenuItem, Select } from '@material-ui/core';
import React from 'react';

type Props = {
  optionName: string;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  selectItem: string[];
};

const SelectTypeOption: React.FC<Props> = props => (
  <div>
    <div>{props.optionName}</div>
    <div>
      <Select
        value={props.selectedValue}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
          props.setSelectedValue(event.target.value as string);
        }}
      >
        {props.selectItem.map((str, index) => (
          <MenuItem key={index} value={str}>
            {str}
          </MenuItem>
        ))}
      </Select>
    </div>
  </div>
);

export default SelectTypeOption;
