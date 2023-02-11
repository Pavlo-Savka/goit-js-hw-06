function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const handleClick = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
};
button.addEventListener("click", handleClick);