import debounce from 'lodash.debounce';
import refs from '../js/refs';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { alert } from '@pnotify/core/dist/PNotify.js';
import { defaults } from '@pnotify/core';

import fetchCountries from './fetchCountries';
import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';

defaults.styling = 'material';
defaults.icons = 'material';

refs.searchInputRef.addEventListener(
  'input',
  debounce(searchInputHandler, 500),
);

function searchInputHandler() {
  if (refs.searchInputRef.value.length === 0) {
    ClearArticleContainer();
    alert({
      text: 'You must enter query parameters!',
      type: 'error',
      delay: 1000,
    });
    return;
  }

  fetchCountries(refs.searchInputRef.value)
    .then(data => {
      ClearArticleContainer();
      let markup = null;

      if (data.length === 1) {
        markup = countryTpl(data);
        refs.countriesInsertRef.innerHTML = markup;
      } else if (data.length > 1 && data.length <= 10) {
        markup = countriesTpl(data);
        refs.countriesInsertRef.innerHTML = markup;
      } else if (data.length > 10) {
        alert({
          text: 'Too many matches found. Please enter a more specific query!',
          type: 'error',
          delay: 1500,
        });
      } else if (data.status === 404) {
        alert({
          text:
            'No country has been found. Please enter a more specific query!',
          type: 'error',
          delay: 2000,
        });
      }
    })
    .catch(console.log);
}

function ClearArticleContainer() {
  refs.countriesInsertRef.innerHTML = '';
}
