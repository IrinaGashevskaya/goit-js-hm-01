const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const myList = document.querySelector('#ingredients');
  var html=''; 
  ingredients.forEach(function(item, i, arr) {
    html += '<li>'+item+'</li>';
  });
  myList.innerHTML=html;
  console.log(myList.innerHTML);