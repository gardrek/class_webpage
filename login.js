const gameText = document.getElementByLd('game-text')
const userInput = document.getElementByLd('user-input')
const submitBtn = document.getElementByLd('submit-btn')

function print(text) {
    gameText.innerText += text + "\n";
    gameText.scrollTop = gameText.scrollHeight;
}
