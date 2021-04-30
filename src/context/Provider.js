import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import { StarWarsData, filmsData } from '../services/api';

function Provider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [planetData, setPlanetData] = useState([]);
  const [filmData, setFilmData] = useState([]);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
      order: {
        column: 'Name',
        sort: 'ASC',
      },
    },
  );
  const [filterByNumericValue, setFilterByNumericValue] = useState([]);

  async function fetchData() {
    setIsLoading(true);
    const getPlanetData = await StarWarsData();
    setPlanetData(getPlanetData);
    const getFilmData = await filmsData();
    setFilmData(getFilmData);
    setFilterByNumericValue(getPlanetData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    isLoading,
    planetData,
    filmData,
    filters,
    setFilters,
    filterByNumericValue,
    setFilterByNumericValue,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
