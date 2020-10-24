import { Button, Switch, TextareaAutosize } from '@material-ui/core';
import React from 'react';

import './setting-save.scss';

const SettingSave: React.FC = () => {
  const [autoSave, setAutoSave] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoSave(event.target.checked);
  };

  return (
    <div className="setting-save">
      <h1>Save</h1>
      <p>
        Game autosaves every 3 minutes. You can also maually save, load and
        export savegames. Saves are stored in localstorage.
        <br />
        <b>Clear button deletes everything !</b>
      </p>

      <div className="button-group">
        <Button variant="contained" size="large">
          SAVE
        </Button>
        <Button variant="contained" size="large">
          LOAD
        </Button>
        <Button variant="contained" size="large">
          CLEAR
        </Button>
      </div>

      <h3>Export / Import Save</h3>
      <div>Save</div>
      <TextareaAutosize aria-label="minimum height" rowsMin={4} />
      <div className="button-group">
        <Button variant="contained" color="primary">
          EXPORT
        </Button>
        <Button variant="contained" color="secondary">
          IMPORT
        </Button>
      </div>
      <p>
        Hide success save notification
        <Switch
          checked={autoSave}
          onChange={handleChange}
          color="primary"
          name="AutoSave"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </p>
    </div>
  );
};

export default SettingSave;
