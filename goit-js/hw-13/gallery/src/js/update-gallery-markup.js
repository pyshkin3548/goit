import articlesTpl from '../templates/article-items.hbs';
import refs from './refs';

function updateGalleryMarkup(hits) {
  const markup = articlesTpl(hits);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateGalleryMarkup;
