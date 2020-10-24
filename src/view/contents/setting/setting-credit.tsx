import React from 'react';

const SettingCredit: React.FC = () => {
  return (
    <div>
      <h1>Credits</h1>
      <p>Idle Ant is an incremental game about ants.</p>
      <p>
        The game uses Angular 4, Clarity Design System, swam-numberformat,
        break_infinity.js, lz-string and some other library.
      </p>
      <ul>
        <li>
          Code:{' '}
          <a href="https://github.com/scorzy/IdleAnt">
            https://github.com/scorzy/IdleAnt
          </a>
        </li>
        <li>
          SubReddit:{' '}
          <a href="https://www.reddit.com/r/IdleAnts/">
            https://www.reddit.com/r/IdleAnts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SettingCredit;
