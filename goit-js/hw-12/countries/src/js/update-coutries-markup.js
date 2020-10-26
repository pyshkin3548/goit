import articleTpl from '../templates/article-items.hbs';
import articlesTpl from '../templates/article-items_2-10.hbs';
import refs from '../js/refs';
// import * as _ from 'lodash';
// import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
const { error } = require('@pnotify/core');

function updateArticlesMarkup(data) {
  const markup1 = articleTpl(data);
  const markup2 = articlesTpl(data);
  //   console.log(data.status);

  //   if (data.length <= 1) {
  if (data.length === 1) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup1);
  } else if (data.length >= 11) {
    error({
      title: 'Oh No!',
      text: 'To many matches found.Please enter a more specific query!',
      delay: 1500,
    });
  } else if (data.status === 404) {
    error({
      title: 'No country has been found.',
      text: 'Please enter a more specific query!',
      delay: 1500,
    });
  } else if (data.length <= 10) {
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup2);
  }
}

export default updateArticlesMarkup;
