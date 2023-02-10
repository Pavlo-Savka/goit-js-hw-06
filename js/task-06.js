const inputText = document.querySelector('#validation-input');
const inputLength = parseInt(inputText.getAttribute('data-length'));

inputText.addEventListener("blur", () => {
    if (inputText.value.length === inputLength) {
    inputText.classList.contains('invalid') ? 
    inputText.classList.replace('invalid', 'valid') :
    inputText.classList.add('valid')
    }
    else {
    inputText.classList.contains('valid') ?
    inputText.classList.replace('valid', 'invalid') :
    inputText.classList.add('invalid')
     }
});
