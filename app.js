// import functions and grab DOM elements
import { compareNumbers } from './results.js';

const input = document.getElementById('number-input');
const yourGuess = document.getElementById('your-guess');
const remainingTries = document.getElementById('remaining-tries');
const winLossOutcome = document.getElementById('win-loss-outcome');
const myButton = document.getElementById('button-submit');
const resultOutcome = document.getElementById('win-loss-outcome');

// initialize state
const correctNumber = Math.ceil(Math.random() * 20);

let remainingCount = 4;
// set event listeners to update state and DOM

function submit() {
    const playerGuess = Number(input.value);

    const newResults = compareNumbers(playerGuess, correctNumber);

    function youAWinner() {
        winLossOutcome.textContent = "You a winner!";
    }
    
    function youALoser() {
        winLossOutcome.textContent = "You the biggest loser!";
    }

    function reduceTries() {
        remainingCount--;
        if (remainingCount <= 0) {
            youALoser();
        }
    }

    function displayResults(hiLow) {
        remainingTries.textContent = (`${remainingCount} tries remaining.`);
        yourGuess.textContent = `Too ${hiLow}.`;
    }

    if (newResults === 0) {
        youAWinner();
    } else if (newResults === -1) {
        reduceTries();
        displayResults('too low');
    } else if (newResults === 1) {
        reduceTries();
        displayResults('to high');
    } 
}

myButton.addEventListener('click', submit);