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

      e.preventDefault();

      const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">
      `, {
        onShow: (instance) => console.log('onShow', instance),
        onClose: (instance) => console.log('onClose', instance)
      })

      instance.show();

      if (basicLightbox.visible()){
        window.addEventListener('keydown', onEscClose);
        //console.log('повесила слушатель');
      }

      function onEscClose(e){
        //console.log(e);
        if(e.code === 'Escape')
        instance.close();

      }
}









