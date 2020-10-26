import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .catch(Error => {
      error({
        text: 'You must enter query parameters!',
        delay: 1000,
      });
      console.log(Error);
    });
}

export default fetchCountries;
