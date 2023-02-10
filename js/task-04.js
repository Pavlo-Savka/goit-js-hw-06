let counterValue = 0;
const countUpBtn = document.querySelector("[data-action='increment']");
const countDownBtn = document.querySelector("[data-action='decrement']");
const valuePrint = document.querySelector("#value");
countUpBtn.addEventListener('click', countUp);
countDownBtn.addEventListener('click', countDown);

function countUp() {
    counterValue += 1;
    return valuePrint.innerHTML = counterValue
};
function countDown() {
    counterValue -= 1;
    return valuePrint.innerHTML = counterValue;
}