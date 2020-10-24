import { MenuItem, Select, Switch } from '@material-ui/core';
import React from 'react';

import './setting-ui.scss';

const NUMBER_FORMAT_TYPE = [
  'Standard',
  'Scientific',
  'Engineering',
  'Long Scale',
];

const SettingUI: React.FC = () => {
  const [thema, setThema] = React.useState(false);
  const [numberFormat, setNumberFormat] = React.useState(false);
  const [numberFormatType, setNumberFormatType] = React.useState(
    NUMBER_FORMAT_TYPE[0],
  );
  const [headerColor, setHeaderColor] = React.useState(5);

  return (
    <div className="setting-ui-options">
      <h1>UI Options</h1>
      <div className="option-list">
        <div>
          <div>Theme:</div>
          <div>
            Dark
            <Switch
              checked={thema}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setThema(event.target.checked);
              }}
              color="primary"
              name="theme-check"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
        </div>
        <div>
          <div>Header color</div>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={headerColor}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setHeaderColor(event.target.value as number);
              }}
            >
              {Array(7)
                .map((_, i) => i + 1)
                .map(n => (
                  <MenuItem value={n}>{n}</MenuItem>
                ))}
            </Select>
          </div>
        </div>
        <div>
          <div>Alternative number format:</div>
          <div>
            On
            <Switch
              checked={numberFormat}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNumberFormat(event.target.checked);
              }}
              color="primary"
              name="number-format-check"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
        </div>
        <div>
          <div>HNumber format:</div>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={numberFormatType}
              onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                setNumberFormatType(event.target.value as string);
              }}
            >
              {NUMBER_FORMAT_TYPE.map((str, index) => (
                <MenuItem key={index} value={str}>
                  {str}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingUI;
