const refs = {
    input:document.querySelector('#font-size-control'),
    sizeText:document.querySelector('#text'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.sizeText.style.fontSize = event.target.value +"px";
}
   
    
