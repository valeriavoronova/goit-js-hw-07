const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

  let liStr = '';
  for(let i = 0; i < ingredients.length; i += 1){
    liStr += '<li>'+ingredients[i]+'</li>';
  }
  console.log(liStr);
  let ulList = document.getElementById("ingredients3");
  ulList.insertAdjacentHTML("afterBegin", liStr);


// let ulList = document.getElementById("ingredients");

// ingredients.map(ingredient => {
//  let items = document.createElement("li");
//  items.innerHTML = ingredient;
//  ulList.append(items);
// });

// let ulList = document.getElementById("ingredients");

// ingredients.forEach(ingredient => {
// 	let items = document.createElement("li");
// 	items.innerHTML = ingredient;
// 	ulList.append(items);
// });

// //console.log(ingredients);

// //const ingridContainerRef = document.querySelector('#ingridients');



// function getIngrid(arr) {
//     const items = arr.map(item => document.createElement('li').textContent = item);
//     const ingridContainerRef = document.querySelector('#ingridients');
//     ingridContainerRef.append(items);
//   return ingridContainerRef;
    
// }
// 'use strict'
// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredients;
//   ulList.append(items);
//   parent.append(...items)
// });

// console.log(foodIngredients);




// console.log(getIngrid(ingredients));


// //ingridContainerRef.append(ingredients.forEach(element => document.createElement('li').classList.add()));