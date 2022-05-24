// const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

// const fetchAPI = () => (
//   fetch(API).then((response) => response.json()
//     .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))))
// );

async function fetchAPI() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();

  return data.results;
}

export default fetchAPI;
