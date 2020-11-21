const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//console.log(ingredients);

//const ingridContainerRef = document.querySelector('#ingridients');



function getIngrid(arr) {
    const items = arr.map(item => document.createElement('li').textContent = item);
    const ingridContainerRef = document.querySelector('#ingridients');
    ingridContainerRef.append(item);
    
}




console.log(getIngrid(ingredients));


//ingridContainerRef.append(ingredients.forEach(element => document.createElement('li').classList.add()));