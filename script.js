let minNum = 1;
let maxNum = 100;
let answer;
let attempts = 0;

setDifficulty();

function setDifficulty() {
    const level = document.getElementById("difficulty").value;

    if (level === "easy") maxNum = 50;
    else if (level === "medium") maxNum = 100;
    else maxNum = 200;

    document.getElementById("rangeText").textContent =
        `Guess a number between ${minNum} and ${maxNum}`;

    restartGame();
}

function generateAnswer() {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    let guess = Number(guessInput.value);

    if (isNaN(guess)) {
        message.textContent = "❌ Enter a valid number";
        return;
    }

    if (guess < minNum || guess > maxNum) {
        message.textContent = "⚠️ Guess out of range";
        return;
    }

    attempts++;

    if (guess < answer) {
        message.textContent = "📉 Too low!";
    } else if (guess > answer) {
        message.textContent = "📈 Too high!";
    } else {
        message.textContent = `🎉 Correct! Number was ${answer}`;
        guessInput.disabled = true;
    }

    attemptsText.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
}

function restartGame() {
    attempts = 0;
    generateAnswer();

    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}
