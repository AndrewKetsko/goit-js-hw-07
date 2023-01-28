import { galleryItems } from './gallery-items.js';

const galleryItemsToInsert = galleryItems.map(({ preview, original, description }) =>
    `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`).join('');

const placeToInsertGallery = document.querySelector('.gallery');
placeToInsertGallery.innerHTML = galleryItemsToInsert;

placeToInsertGallery.addEventListener('click', allRestMagic);

function allRestMagic(event) {
  event.preventDefault();
        
    if (!event.target.classList.contains('gallery__image')) { return };
    
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  window.addEventListener('keydown', escBtnClicked);

  function escBtnClicked (event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', escBtnClicked);
    };
  };
};

