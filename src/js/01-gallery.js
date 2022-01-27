import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
// create html
const items = galleryItems.map(( { preview, original, description } ) => {
    const listEl = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    return listEl;
}).join("");

galleryRef.insertAdjacentHTML("beforeend", items);

//create event
galleryRef.addEventListener("click", onImageClick);

function onImageClick(e){
    if(e.target.nodeName !== 'IMG'){
        return;
    }
    console.log("click", e);
}


console.log(galleryRef);

//script https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
//head https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css



