import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import './App.scss';
import Layout from './layout';

const App: React.FC = () => (
  <RecoilRoot>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </RecoilRoot>
);

export default App;
