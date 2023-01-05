import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryElement = document.querySelector('.gallery');

function createImgInMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
        .join('');
   
}
galleryElement.insertAdjacentHTML('beforeend', createImgInMarkup(galleryItems));

const gallery = new simpleLightbox('.gallery.a', {
    caption: true,
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
