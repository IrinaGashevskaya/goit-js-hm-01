const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if(event.target.value.length == event.target.dataset.length) {
    
    changeClass("valid","invalid");
    console.log(event.target.dataset.length);
    
    } else {
        changeClass("invalid","valid"); 
    }
}
function changeClass(addClass, removeClass){
    inputRef.classList.remove(removeClass);
    inputRef.classList.add(addClass);
}