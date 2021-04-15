const myList = document.querySelectorAll('#categories .item');
//console.log(myList); 
const itemTitle = document.querySelectorAll('h2');
console.log(itemTitle.length); 
myList.forEach(item => {
    console.log(item.firstElementChild.innerHTML);
    console.log(item.querySelectorAll('li').length);
})
//console.log(itemTitle); 