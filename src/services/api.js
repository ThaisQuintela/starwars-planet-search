// https://oieduardorabelo.medium.com/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0
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
}

/* export const filmsData = async () {

} */
