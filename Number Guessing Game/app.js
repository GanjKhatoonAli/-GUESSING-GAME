let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function Guess() {
    let guessInput = document.getElementById("number");
    let guess = parseInt(guessInput.value);
    let resultText = "";

    if (isNaN(guess)) {
        resultText = "Please enter a valid number!";
    } else if (guess < 1 || guess > 100) {
        resultText = "🤖 ENTER A NUMBER BETWEEN 1 TO 100";
    } else {
        guessCount++; 
        if (guess < randomNumber) {
            resultText = "🤖 TOO LOW!";
        } else if (guess > randomNumber) {
            resultText = "🤖 TOO HIGH!";
        } else {
            resultText = `🎉 CONGRATULATIONS! YOU FOUND THE NUMBER IN ${guessCount} GUESSES! 🎉`;
        }
    }
    document.getElementById("result").innerText = resultText;
    document.getElementById("score").innerText = "Number of Guesses = " + guessCount;
}

