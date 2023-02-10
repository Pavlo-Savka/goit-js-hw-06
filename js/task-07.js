const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputValue.addEventListener("input", () => {   
text.style.fontSize = inputValue.value + 'px';
}); 