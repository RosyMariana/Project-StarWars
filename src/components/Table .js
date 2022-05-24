import React, { useContext, useEffect } from 'react';
import CurrencyContext from '../context/CurrencyContext';

function Table() {
  const { setData, data, pegarAPI, nameFiltro: { name } } = useContext(CurrencyContext);
  const titulos = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter',
    'Climate', 'Gravity', 'Terrain', 'Surface Water', 'Population', 'Films',
    'Created', 'Edited', 'URL'];

  // const { filterByNumericValues } = useContext(CurrencyContext);

  function filtrarNomes() {
    const chulambes = data.filter(
      (planeta) => planeta.name.toLowerCase().includes(name.toLowerCase()),
    );
    setData(chulambes);
  }

  // { filterByNumericValues: [{ column, comparison, value }] }

  useEffect(() => {
    filtrarNomes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    pegarAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table>
      <tbody>
        <tr>
          {titulos.map((titulo) => (
            <th key={ titulo }>
              {' '}
              { titulo }
            </th>))}
        </tr>
        {data.map((planeta) => (
          <tr key={ planeta.name }>
            <td>{planeta.name}</td>
            <td>{planeta.rotation_period}</td>
            <td>{planeta.orbital_period}</td>
            <td>{planeta.diameter}</td>
            <td>{planeta.climate}</td>
            <td>{planeta.gravity}</td>
            <td>{planeta.terrain}</td>
            <td>{planeta.surface_water}</td>
            <td>{planeta.population}</td>
            <td>{planeta.films}</td>
            <td>{planeta.created}</td>
            <td>{planeta.edited}</td>
            <td>{planeta.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
