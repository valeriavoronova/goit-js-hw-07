const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulList = document.getElementById("ingredients");

ingredients.forEach(ingredient => {
	let items = document.createElement("li");
	items.innerHTML = ingredient;
	ulList.append(items);
});

// //console.log(ingredients);

// //const ingridContainerRef = document.querySelector('#ingridients');



// function getIngrid(arr) {
//     const items = arr.map(item => document.createElement('li').textContent = item);
//     const ingridContainerRef = document.querySelector('#ingridients');
//     ingridContainerRef.append(items);
//   return ingridContainerRef;
    
// }
'use strict'
let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  items.innerHTML = ingredients;
  ulList.append(items);
  parent.append(...items)
});

console.log(foodIngredients);




// console.log(getIngrid(ingredients));


// //ingridContainerRef.append(ingredients.forEach(element => document.createElement('li').classList.add()));