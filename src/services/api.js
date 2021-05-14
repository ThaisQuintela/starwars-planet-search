// https://oieduardorabelo.medium.com/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0
// https://stackoverflow.com/questions/42489918/async-await-inside-arraymap
const planetUrls = [
  'https://swapi-trybe.herokuapp.com/api/planets/?page=1',
  'https://swapi-trybe.herokuapp.com/api/planets/?page=2',
  'https://swapi-trybe.herokuapp.com/api/planets/?page=3',
  'https://swapi-trybe.herokuapp.com/api/planets/?page=4',
  'https://swapi-trybe.herokuapp.com/api/planets/?page=5',
  'https://swapi-trybe.herokuapp.com/api/planets/?page=6',
];

async function fetchData() {
  const promises = planetUrls.map(async (url) => {
    const requestData = await fetch(url);
    const data = await requestData.json();
    return data.results;
  });
  return Promise.all(promises);
}

export const StarWarsData = async () => {
  const results = await fetchData();
  const finalResult = results.flat();
  return finalResult;
};

export const filmsData = async () => {
  const requestData = await fetch('https://swapi-trybe.herokuapp.com/api/films/');
  const { results } = await requestData.json();
  return results;
};

const charactersUrls = [
  'https://swapi-trybe.herokuapp.com/api/people/?page=1',
  'https://swapi-trybe.herokuapp.com/api/people/?page=2',
  'https://swapi-trybe.herokuapp.com/api/people/?page=3',
  'https://swapi-trybe.herokuapp.com/api/people/?page=4',
  'https://swapi-trybe.herokuapp.com/api/people/?page=5',
  'https://swapi-trybe.herokuapp.com/api/people/?page=6',
  'https://swapi-trybe.herokuapp.com/api/people/?page=7',
  'https://swapi-trybe.herokuapp.com/api/people/?page=8',
  'https://swapi-trybe.herokuapp.com/api/people/?page=9',
];

async function fetchCharactersData() {
  const promises = charactersUrls.map(async (url) => {
    const requestCharactersData = await fetch(url);
    const data = await requestCharactersData.json();
    return data.results;
  });
  return Promise.all(promises);
}

const SEVENTEEN = 17;
export const charactersData = async () => {
  const results = await fetchCharactersData();
  const finalResult = results.flat();
  // solve the problem with non-existent characters
  finalResult.splice(SEVENTEEN, 0, '');
  return finalResult;
};
