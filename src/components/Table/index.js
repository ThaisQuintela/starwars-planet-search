import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Table() {
  const {
    isLoading, filters, filterByNumericValue, filmData, charData,
  } = useContext(StarWarsContext);

  const filterByName = filterByNumericValue
    .filter((planet) => planet.name.toLowerCase()
      .includes(filters.filterByName.name.toLowerCase()));

  return (
    isLoading ? 'loading...'
      : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Rotation Period</th>
              <th>Orbital Period</th>
              <th>Diameter</th>
              <th>Climate</th>
              <th>Gravity</th>
              <th>Terrain</th>
              <th>Surface Water</th>
              <th>Population</th>
              <th>Films</th>
              <th>Residents</th>
            </tr>
          </thead>
          <tbody>
            {filterByName.map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>
                  {(planet.films).map(
                    (film) => ` - ${filmData[(film[film.length - 2]) - 1].title}`,
                  )}
                </td>
                <td>
                  {(planet.residents).map(
                    (char) => ` - ${charData[(char.replace('https://swapi-trybe.herokuapp.com/api/people/', '').replace('/', '')) - 1].name}`,
                  )}
                </td>
              </tr>))}
          </tbody>
        </table>
      )
  );
}

export default Table;
