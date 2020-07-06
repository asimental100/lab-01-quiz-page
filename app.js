// import functions and grab DOM elements
import { countsAsYes } from './utils.js';

const quizButton = document.getElementById("quiz-button");
const resultSpan = document.getElementById("result-span");
// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    const name = prompt('What is your name?');

    const confirmTest = confirm('Are you sure that you want to test your Snake Plissken knowledge?');
    if (!confirmTest) return;

    const eyepatchQ = prompt('Does Snake Plissken have an eyepatch?');
    const heroQ = prompt('Was Snake Plissken a soldier?');
    const saviorQ = prompt('Does Snake Plissken kill the President?');

    let quizScore = 0;

    if (countsAsYes(eyepatchQ)) {
        quizScore++;
    };

    if (countsAsYes(heroQ)) {
        quizScore++;
    };

    if (!countsAsYes(saviorQ)) {
        quizScore++;
    };

    resultSpan.textContent = name + " " + quizScore;
})