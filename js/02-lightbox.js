import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryItemsToInsert = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href=${original}>
    <img class="gallery__image" src=${preview} alt='${description}' title='${description}'/>
    </a>`).join('');

const placeToInsertGallery = document.querySelector('.gallery');
placeToInsertGallery.innerHTML = galleryItemsToInsert;

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,/* options */ });

