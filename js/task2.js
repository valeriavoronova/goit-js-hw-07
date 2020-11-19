const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingridContainerRef = document.querySelector('#ingridients');



for (ingredient of ingredients) {

    let a = '';
    
    document.createElement('li');
   a += ingredient;

}


ingridContainerRef.append(a);

console.log(ingridContainerRef);


//ingridContainerRef.append(ingredients.forEach(element => document.createElement('li').classList.add()));