function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const number = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const createBoxes = (amount) => {
  for (amount = 1; amount <= (number.value); amount += 1) {
    boxes.insertAdjacentHTML("beforeend", '<div class = box_${amount}></div>');
const box_${amount} = document.querySelector(.box_${amount})
    box_${amount}.style.backgroundColor = getRandomHexColor();
  }
}
const destroyBoxes = () => {
  boxes.innerHTML = '';
}
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

