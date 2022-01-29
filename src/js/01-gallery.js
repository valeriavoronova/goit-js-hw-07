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

    //if (imRef.forEach(value => value.dataset.source) === linkRef.forEach( value => value.href)){
      e.preventDefault();
      const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">
      `)

      instance.show();
  //}

   
    console.log("click", e);
}


// console.log(items);


// "C:/Users/val/AppData/Local/Microsoft/TypeScript/4.5/node_modules/@types/basiclightbox/index"
//import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg" width="800" height="600">
// `)

// instance.show()




