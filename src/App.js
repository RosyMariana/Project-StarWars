import React from 'react';
import './App.css';
import Table from './components/Table ';
import Filtros from './components/Filtros';

import CurrencyProvider from './context/CurrencyProvider';

function App() {
  return (
    <CurrencyProvider>
      <Filtros />
      <Table />
    </CurrencyProvider>
  );
}

export default App;
