import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector(".gallery");
// create html
const items = galleryItems.map(( { preview, original, description } ) => {
    const listEl = `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
    return listEl;
}).join("");

galleryRef.insertAdjacentHTML("beforeend", items);
//console.log(galleryItems);
