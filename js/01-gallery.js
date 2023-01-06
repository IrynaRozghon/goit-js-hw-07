import { galleryItems } from './gallery-items.js';
// Change code below this line
// створення та рендер розмітки

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
// назначаємо слухача 
galleryElement.addEventListener('click', onClickImage);
// підключаємо скрипти у html
// ознайомитись із документацією відкриття модального вікна по кліку, використати її

function onClickImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    console.log(event.target.nodeName);

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);
    instance.show();

    galleryElement.addEventListener('keydown', clickImageClose);
// реалізуємо делегування через функцію, перевіряємо чи клікнули саме на картинку
    
function clickImageClose(event) {
   
    if (event.code === 'Escape') {
        instance.close();
    }
}
}
// шукаємо в бібліотеці інфу для закриття модального вікна після натиск. esc 
console.log(galleryItems);
