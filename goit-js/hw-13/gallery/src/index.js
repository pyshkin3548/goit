import './sass/styles.scss';
import imageService from './js/image-service';
import refs from './js/refs';
import updateGalleryMarkup from './js/update-gallery-markup.js';
import fetchImages from './js/fetchImages';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  imageService.query = form.elements.query.value;
  refs.articlesContainer.innerHTML = '';

  imageService.resetPageNumber();
  fetchImages();
  form.reset();
});

refs.loadMoreBtn.addEventListener('click', fetchImages);
