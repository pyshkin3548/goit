import refs from './refs';
import updateGalleryMarkup from '../js/update-gallery-markup';
import imageService from './image-service';

function fetchImages() {
  refs.loadMoreBtn.classList.add('is-hidden');
  imageService.fetchImages().then(hits => {
    updateGalleryMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight - 1050,
      behavior: 'smooth',
    });
  });
}

export default fetchImages;
