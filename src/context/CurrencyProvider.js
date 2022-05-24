import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CurrencyContext from './CurrencyContext';
import fetchAPI from '../services/fetchAPI';

function CurrencyProvider({ children }) {
  const [data, setData] = useState([]); // desestruturando array
  const [nameFiltro, setName] = useState({ name: '' });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const pegarAPI = async () => {
    const planetasResponse = await fetchAPI();
    setData(planetasResponse);
  };

  const objTeste = {
    pegarAPI,
    data,
    nameFiltro,
    setName,
    setData,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filterByNumericValues,
    setfilterByNumericValues,
  };

  useEffect(() => {
    pegarAPI();
  }, []);

  return (
    <CurrencyContext.Provider value={ objTeste }>
      { children }
    </CurrencyContext.Provider>
  );
}

CurrencyProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default CurrencyProvider;
