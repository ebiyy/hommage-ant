import React from 'react';
import RadioTypeOption from '../../../components/radio-type-option';
import SelectTypeOption from '../../../components/select-type-option';

import './setting-ui.scss';

const NUMBER_FORMAT_TYPE = [
  'Standard',
  'Scientific',
  'Engineering',
  'Long Scale',
];

const SettingUI: React.FC = () => {
  const [theme, setTheme] = React.useState(false);
  const [headerColor, setHeaderColor] = React.useState('5');
  const [numberFormat, setNumberFormat] = React.useState(false);
  const [numberFormatType, setNumberFormatType] = React.useState(
    NUMBER_FORMAT_TYPE[0],
  );

  return (
    <div className="setting-ui-options">
      <h1>UI Options</h1>
      <div className="option-list">
        <RadioTypeOption
          optionName="Theme:"
          radioLabel="Dark"
          checkState={theme}
          setState={setTheme}
        />
        <SelectTypeOption
          optionName="Header color"
          selectedValue={headerColor}
          setSelectedValue={setHeaderColor}
          selectItem={[...Array(7)].map((_, i) => (i + 1).toString())}
        />
        <RadioTypeOption
          optionName="Alternative number format:"
          radioLabel="On"
          checkState={numberFormat}
          setState={setNumberFormat}
        />
        <SelectTypeOption
          optionName="Number format:"
          selectedValue={numberFormatType}
          setSelectedValue={setNumberFormatType}
          selectItem={NUMBER_FORMAT_TYPE}
        />
      </div>
    </div>
  );
};

export default SettingUI;
