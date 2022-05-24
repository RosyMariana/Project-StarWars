import React, { useContext, useState } from 'react';
import CurrencyContext from '../context/CurrencyContext';

const FIVE = 5;

function Filtros() {
  const { setName, pegarAPI, data, setData } = useContext(CurrencyContext);
  const { setColumn, setComparison, setValue, column,
    comparison, value } = useContext(CurrencyContext);

  const digitou = ({ target }) => {
    setName({
      name: target.value,
    });
    if (target.value === '') {
      setName({
        name: '',
      });
      pegarAPI();
    }
  };

  const selecionou1 = ({ target }) => {
    setColumn(target.value);
  };
  const selecionou2 = ({ target }) => {
    setComparison(target.value);
  };

  const Digitou = ({ target }) => {
    if (target.value === undefined || target.value === null || target.value < 0) {
      setValue(0);
    } else {
      setValue(target.value);
    }
  };

  function filtrarMaior2() {
    if (column === 'diameter') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.diameter)
          > value
        ? planeta.diameter : ''));
      setData(chulambes2);
    }
    if (column === 'rotation_period') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.rotation_period)
          > value
        ? planeta.rotation_period : ''));
      setData(chulambes2);
    }
    if (column === 'surface_water') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.surface_water)
          > value
        ? planeta.surface_water : ''));
      setData(chulambes2);
    }
  }
  function filtrarMaior() {
    if (column === 'population') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.population) > value
        ? planeta.population : ''));
      setData(chulambes2);
    }
    if (column === 'orbital_period') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.orbital_period) > value
        ? planeta.orbital_period : ''));
      setData(chulambes2);
    } else {
      filtrarMaior2();
    }
  }

  function filtrarMenor2() {
    if (column === 'diameter') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.diameter) < value
        ? planeta.diameter : ''));
      setData(chulambes2);
    }
    if (column === 'rotation_period') {
      const chulambes2 = data.filter((planeta) => (
        Number(planeta.rotation_period) < value
          ? planeta.rotation_period : ''));
      setData(chulambes2);
    }
    if (column === 'surface_water') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.surface_water) < value
        ? planeta.surface_water : ''));
      setData(chulambes2);
    }
  }

  function filtrarMenor() {
    if (column === 'population') {
      const chulambes2 = data.filter((planeta) => (Number(planeta.population) < value
        ? planeta.population : ''));
      setData(chulambes2);
    }
    if (column === 'orbital_period') {
      const chulambes2 = data.filter((planeta) => (planeta.orbital_period < value
        ? planeta.orbital_period : ''));
      setData(chulambes2);
    } else {
      filtrarMenor2();
    }
  }

  function filtrarIgual2() {
    if (column === 'diameter') {
      const chulambes2 = data.filter((planeta) => (planeta.diameter
      === value
        ? planeta.diameter : ''));
      setData(chulambes2);
    }
    if (column === 'rotation_period') {
      const chulambes2 = data.filter((planeta) => (
        planeta.rotation_period === value
          ? planeta.rotation_period : ''));
      setData(chulambes2);
    }
    if (column === 'surface_water') {
      const chulambes2 = data.filter((planeta) => (planeta.surface_water === value
        ? planeta.surface_water : ''));
      setData(chulambes2);
    }
  }

  function filtrarIgual() {
    if (column === 'population') {
      const chulambes2 = data.filter((planeta) => Number(planeta.population
        === value
        ? planeta.population : ''));
      setData(chulambes2);
    }
    if (column === 'orbital_period') {
      const chulambes2 = data.filter((planeta) => (planeta.orbital_period
      === value
        ? planeta.orbital_period : ''));
      setData(chulambes2);
    } else {
      filtrarIgual2();
    }
  }

  // array de filtros
  const [Filters] = useState({
    columns: ['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water'] });

  const [Chulambes, setChulambes] = useState({
    column: [],
    comparison: [],
    value: [],
  });

  const clicou = () => {
    if (comparison === 'maior que') {
      filtrarMaior();
      setChulambes({
        column: [...Chulambes.column, column],
        comparison: [...Chulambes.comparison, comparison],
        value: [...Chulambes.value, value],
      });
    }
    if (comparison === 'igual a') {
      filtrarIgual();
      setChulambes({
        column: [...Chulambes.column, column],
        comparison: [...Chulambes.comparison, comparison],
        value: [...Chulambes.value, value],
      });
    }
    if (comparison === 'menor que') {
      filtrarMenor();
      setChulambes({
        column: [...Chulambes.column, column],
        comparison: [...Chulambes.comparison, comparison],
        value: [...Chulambes.value, value],
      });
    }
    for (let cont = 0; cont < FIVE; cont += 1) {
      if (Filters.columns[cont] === column) {
        Filters.columns.splice(cont, 1);
      }
    }
  };
  const remover = () => {
    console.log('vai fazer alguma coisa');
  };

  return (
    <div>
      <h2 id="titulo"> Projeto STAR WARS</h2>
      <input
        id="teste"
        data-testid="name-filter"
        type="text"
        placeholder="Digite aqui"
        onChange={ digitou }
      />
      <p />
      <p id="teste3">
        <select id="selectBox" data-testid="column-filter" onChange={ selecionou1 }>
          {Filters.columns
            .map((colum) => <option value={ colum } key={ colum }>{colum}</option>)}
          {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
        </select>
        <select data-testid="comparison-filter" onChange={ selecionou2 }>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ Digitou }
          value={ value }
        />
        <button type="button" data-testid="button-filter" onClick={ clicou }>
          Acionar Filtro
        </button>

        <button type="button" data-testid="button-remove-filters" onClick={ remover }>
          Remover Filtros
        </button>
      </p>
    </div>
  );
}

export default Filtros;
