const inputText = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
inputText.addEventListener("input", (typingText) => {
    nameOutput.textContent = typingText.currentTarget.value;
    if (inputText = "") {
        inputText.textContent = "Anonymous";
    }
});