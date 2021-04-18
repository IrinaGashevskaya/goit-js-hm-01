const refs = {
    input:document.querySelector('#name-input'),
    nameLabel:document.querySelector('#name-output'),
}
refs.input.addEventListener('input', onInputChange);
function onInputFocus(){

}
function onInputBlur(){

}
function onInputChange(event) {
    
    if(event.currentTarget.value.trim()){
        refs.nameLabel.textContent = event.currentTarget.value;
    } else {
        refs.nameLabel.textContent = 'незнакомец';
    }

}

