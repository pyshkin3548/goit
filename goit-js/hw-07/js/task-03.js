const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=360',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=360',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=240&w=360',
    alt: 'Group of Horses Running',
  },
];

const createImageCard = image => {

  let listRef = document.querySelector('#gallery');
  let liRef = document.createElement('li');
  liRef.classList.add('gallery_list__element')
  let imgRef = document.createElement('img');
  imgRef.classList.add('gallery_list__img')
  imgRef.setAttribute("src", image.url)
  imgRef.setAttribute("alt", image.alt)

  listRef.appendChild(liRef)
  liRef.appendChild(imgRef)
  return listRef;

}

const imageCards = images.map(image => createImageCard(image))


