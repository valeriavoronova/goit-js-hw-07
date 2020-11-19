const itemRef = document.querySelectorAll('.item').forEach(element =>
    console.log(`Категория ${element.querySelector('h2').textContent} \n Количество элементов ${element.querySelectorAll('li').length}`));


