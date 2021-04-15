const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
    if(event.target.value.length === 6) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
    
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");    
    }
}