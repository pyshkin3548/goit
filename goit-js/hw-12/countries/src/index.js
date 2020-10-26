import './sass/styles.scss';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './js/notify';
import updateArticlesMarkup from './js/update-coutries-markup';
var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(countrySearchInputHandler, 500));
function countrySearchInputHandler(event) {
  refs.articlesContainer.innerHTML = '';
  let req = event.target.value;

  refs.articlesContainer.innerHTML = '';
  fetchCountries(req).then(updateArticlesMarkup);
}
