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
galleryRef.addEventListener("click", onImageClick);

function onImageClick(e){
  if(e.target.nodeName !== 'IMG'){
      return;
  }
  e.preventDefault();

  let gallery = new SimpleLightbox('.gallery a');
  // gallery.on('show.simplelightbox', function () {
  	
  //   console.log(e.target.alt)

  // });
  



    //import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
//     
//     show.simplelightbox();
//     console.log(lightbox)
 }

//  :pushpin: Модальное окно с увеличенным изображением должно открываться исключительно при клике на само изображение 
//  (делайте проверку на то, куда пришелся клик пользователя, внутри функции, отвечающей за открытие модального окна); 

//  :pushpin: Если вы реализуете дополнительный функционал в части закрытия модального окна по клику на оверлей, 
//  дополнительную функцию для этого создавать нет необходимости: при создании слушателя используйте ту же функцию, 
//  что используете для закрытия модального окна по кнопке. Аналогично для закрытия модального окна по нажатию на клавишу ESC: 
//  дублировать код не нужно, достаточно после проверки на то, что нажата была именно нужная клавиша,
//  вызывать общую функцию по закрытию модалки;
//   
// :pushpin: Если хотите выполнить задание в части реализации пролистывания изображений, 
//   при создании разметки путем дополнения тега img атрибутом записывайте для каждого из изображений его индекс 
//   (разумеется, листание можно реализовать и путем навигации по DOM, но это куда менее оптимальный вариант);
//   :pushpin: Слушатели для закрытия модального окна и листания изображений создавайте только при открытии модального окна 
//   (то есть внутри ответственной за это функции). Соответственно, удаляйте при закрытии (внутри функции, отвечающей за закрытие модалки) 