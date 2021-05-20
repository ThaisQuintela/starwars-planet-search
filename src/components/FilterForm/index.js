import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterForm() {
  const {
    planetData, filters, setFilters, setFilterByNumericValue,
  } = useContext(StarWarsContext);

  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const usedColumnFilters = filters.filterByNumericValues.map((item) => item.column);
  const newColumnFilter = columnFilter.filter((column) => !usedColumnFilters
    .includes(column));
  // https://stackoverflow.com/questions/34901593/how-to-filter-an-array-from-all-elements-of-another-array

  const comparisonFilter = ['bigger than', 'less than', 'equal to'];

  function handleCLick() {
    const numericValues = filters.filterByNumericValues;
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const { value } = document.getElementById('value');
    const filterByNumericValues = numericValues.concat({ column, comparison, value });
    setFilters({ ...filters, filterByNumericValues });
  }

  let filterIteration = planetData;
  if (filters.filterByNumericValues.length > 0) {
    filters.filterByNumericValues.map((filter) => {
      if (filter.comparison === 'bigger than') {
        filterIteration = filterIteration.filter(
          (planet) => parseInt(planet[filter.column], 10) > parseInt(filter.value, 10),
        );
      } if (filter.comparison === 'less than') {
        filterIteration = filterIteration.filter(
          (planet) => parseInt(planet[filter.column], 10) < parseInt(filter.value, 10),
        );
      } if (filter.comparison === 'equal to') {
        filterIteration = filterIteration.filter(
          (planet) => parseInt(planet[filter.column], 10) === parseInt(filter.value, 10),
        );
      }
      return filterIteration;
    });
  }

  function deleteFilter(filter) {
    const filterByNumericValues = filters.filterByNumericValues
      .filter((item) => item.column !== filter.column);
    setFilters({ ...filters, filterByNumericValues });
  }

  useEffect(() => {
    setFilterByNumericValue(filterIteration);
  }, [filters.filterByNumericValues]);

  function checkValidity() {
    if (newColumnFilter.length === 0) return true;
    return false;
  }

  /* function columnSort() {

  } */

  return (
    <header className="filters container-fluid py-3 d-flex justify-content-center">
      <form>
        <span className="ms-2 fw-bold">Filter by:</span>
        <label
          htmlFor="name-filter"
          className="form-label mx-2 d-inline-flex text-nowrap align-center"
        >
          Planet name:
          <input
            className="form-control form-control-sm ms-2"
            name="name-filter"
            id="name-filter"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => setFilters(
              { ...filters, filterByName: { name: value } },
            ) }
          />
        </label>
        <label
          htmlFor="resident-filter"
          className="form-label mx-2 d-inline-flex text-nowrap"
        >
          Resident name:
          <input
            className="form-control form-control-sm ms-2"
            name="resident-filter"
            id="resident-filter"
            onChange={ ({ target: { value } }) => setFilters(
              { ...filters, filterByResidentName: { resident: value } },
            ) }
          />
        </label>
        <div className="d-flex align-items-center mt-2">
          <label
            htmlFor="column"
            className="form-label mx-2 my-0 d-flex align-items-center"
          >
            <span>Column:</span>
            <select
              className="form-select form-select-sm ms-2"
              name="column"
              id="column"
              data-testid="column-filter"
            >
              {newColumnFilter.map(
                (column) => <option key={ column }>{ column }</option>,
              )}
            </select>
          </label>
          <label
            htmlFor="comparison"
            className="form-label mx-2 my-0 d-flex align-items-center"
          >
            Comparison:
            <select
              className="form-select form-select-sm ms-2"
              name="comparison"
              id="comparison"
              data-testid="comparison-filter"
            >
              { comparisonFilter.map((item) => <option key={ item }>{ item }</option>) }
            </select>
          </label>
          <label
            htmlFor="value"
            className="form-label mx-2 my-0 d-flex w-25 align-items-center"
          >
            Value:
            <input
              className="form-control form-control-sm ms-2"
              type="number"
              name="value"
              id="value"
              data-testid="value-filter"
            />
          </label>
          <button
            className="btn btn-sm btn-light mx-2"
            type="button"
            data-testid="button-filter"
            onClick={ () => handleCLick() }
            disabled={ checkValidity() }
          >
            Filter
          </button>
        </div>
        <label
          htmlFor="column-sort"
          className="form-label mt-3 mx-2 d-flex align-items-center text-nowrap"
        >
          <span className="fw-bold">Order by:</span>
          <select
            className="form-select form-select-sm mx-2 w-25"
            name="column-sort"
            id="column-sort"
            data-testid="column-sort"
          >
            <option>Name</option>
            <option>Rotation Period</option>
            <option>Orbital Period</option>
            <option>Diameter</option>
            <option>Surface Water</option>
            <option>Population</option>
          </select>
          <label htmlFor="ASC" className="form-label d-flex my-0">
            ASC
            <input
              className="form-check-input mx-2"
              type="radio"
              id="ASC"
              name="column-sort"
              value="ASC"
              data-testid="column-sort-input-asc"
            />
          </label>
          <label htmlFor="DESC" className="form-label d-flex my-0">
            DESC
            <input
              className="form-check-input mx-2"
              type="radio"
              id="DESC"
              name="column-sort"
              value="DESC"
              data-testid="column-sort-input-desc"
            />
          </label>
          <button
            className="btn btn-sm btn-light"
            type="button"
            data-testid="column-sort-button"
          //  onClick={ columnSort() }
          >
            Sort
          </button>
        </label>
      </form>
      <div className="filter-box bg-light rounded px-3 py-1 m-1 w-25">
        <p className="text-center py-1 m-0 fw-bold">Used filters:</p>
        { filters.filterByNumericValues.map((item, index) => (
          <div data-testid="filter" className="d-flex ms-3" id={ index } key={ index }>
            <span className="me-auto align-self-center">
              { `${item.column} ${item.comparison} ${item.value}` }
            </span>
            <button
              type="button"
              className="btn btn-sm btn-warning mb-1 mx-2"
              onClick={ () => deleteFilter(item) }
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>)) }
      </div>
    </header>
  );
}

export default FilterForm;
