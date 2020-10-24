import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Layout from './layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
