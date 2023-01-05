import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector('.gallery');
galleryElement.insertAdjacentHTML('beforeend', createImgInMarkup(galleryItems));

function createImgInMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    })
        .join('');
}
galleryElement.addEventListener('click', onClickImage);


function onClickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);
    instance.show();

    galleryElement.addEventListener('keydown', clickImageClose);

function clickImageClose(event) {
   
    if (event.code !== 'Escape') {
        instance.close();
    }
}
}

console.log(galleryItems);
