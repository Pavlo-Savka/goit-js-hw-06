function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const number = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const createBoxes = (amount) => {
  for (amount = 1; amount <= (number.value); amount += 1) {
    const boxNum = 'box_' + amount;
    boxes.insertAdjacentHTML("beforeend", '<div class = ' + boxNum + '></div>');
    const boxClass = document.querySelector('.' + boxNum);
    boxClass.style.backgroundColor = getRandomHexColor();
    boxClass.style.width = 20 + 10 * amount + 'px';
    boxClass.style.height = 20 + 10 * amount + 'px';
    console.log(boxClass); 
  }
}
const destroyBoxes = () => {
  boxes.innerHTML = '';
}
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);