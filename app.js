// import functions and grab DOM elements
import { compareNumbers } from './compareNumbers.js';

const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('button-submit');
const guessResult = document.getElementById('guess-result');
//const gameResult = document.getElementById('game-result');
const remainingTries = document.getElementById('remaining-tries');
//const infoAboutOutcome = document.getElementById('high-or-low');
//const resetButton = document.getElementById('reset-button');

// initialize state
const correctNumber = Math.ceil(Math.random() * 20);

let attempts = 4;
// set event listeners to update state and DOM

/*const updateSpans = () => {
    remainingTries.textContent = 4;
    //submitButton.addEventListener('click');
};
*/

submitButton.addEventListener('click', () => {

    if (compareNumbers(userInput.value, correctNumber) === 1) {
        attempts--;
        remainingTries.textContent = attempts;
        guessResult.textContent = 'Your guess is to high, try again.';
    } 

    if (compareNumbers(userInput.value, correctNumber) === -1) {
        attempts--;
        remainingTries.textContent = attempts;
        guessResult.textContent = 'Your guess is to low, try again.';
    }

    if (compareNumbers(userInput.value, correctNumber) === 0) {
        guessResult.textContent = 'You guessed right, You win!';
        submitButton.disabled = true;
    }

    if (attempts === 0) {
        guessResult.textContent = 'Your four tries are up, You lose!';
        remainingTries.textContent = attempts;
        submitButton.disabled = true;
        return;
    }
});

userInput.value = '';

//remainingTries.textContent = attempts;


/*Button for Reset of Game
const resetGame = () => {
    //remainingTries.textContent = 0;
    updateSpans(remainingTries);
    //updateSpans(submitButton);
};

resetButton.addEventListener('click', resetGame);
*/
