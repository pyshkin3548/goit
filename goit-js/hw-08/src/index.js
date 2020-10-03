import galleryItems from './gallery-items.js'


const refs = {
    list: document.querySelector('.js-gallery'),
    modal: document.querySelector('.js-lightbox'),
    modalImage: document.querySelector('.lightbox__image'),
    card: '',
    modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'),
    overlay: document.querySelector('.lightbox__overlay'),
    currentIndex: '',
};

const createImageCard = galleryItem => {

    let liRef = document.createElement('li');
    liRef.classList.add('gallery__item');
    let aRef = document.createElement('a');
    aRef.classList.add('gallery__link');
    aRef.setAttribute("href", galleryItem.original);
    let imgRef = document.createElement('img');
    imgRef.classList.add('gallery__image');
    imgRef.setAttribute("src", galleryItem.preview);
    imgRef.setAttribute("alt", galleryItem.description);
    imgRef.setAttribute("data-source", galleryItem.original);
    imgRef.setAttribute("data-index", galleryItem.index);

    refs.list.appendChild(liRef);
    liRef.appendChild(aRef);
    aRef.appendChild(imgRef);
    return refs.list;
}

const imageCards = galleryItems.map(galleryItem => createImageCard(galleryItem));

refs.list.addEventListener('click', onCardClick);

function onCardClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    refs.card = event.target.dataset.source;
    return refs.card;


};

refs.list.addEventListener('click', onOpenModal);

function onOpenModal() {

    refs.modal.classList.add('is-open');
    refs.modalImage.setAttribute("src", refs.card);


};

refs.modalCloseBtn.addEventListener("click", onCloseModal);
refs.overlay.addEventListener("click", onCloseModal);

document.addEventListener('keydown', (event) => {
    const keyEsc = event.key;
    if (keyEsc == "Escape") {
        onCloseModal();
    }
});

function onCloseModal() {
    refs.modal.classList.remove('is-open');
    refs.modalImage.removeAttribute("src");

};
