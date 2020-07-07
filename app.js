// import functions and grab DOM elements
import { translateToAYes } from './utils.js';

const quizButton = document.getElementById("quiz-button");
const homeButton = document.getElementById("home-button");
const resultSpan = document.getElementById("result-span");

let hideSection1 = document.getElementById("hide1");
let hideSection2 = document.getElementById("hide2");
let hideSection3 = document.getElementById("hide3");
let hideSection4 = document.getElementById("hide4");
let hideSection5 = document.getElementById("hide5");

const body = document.getElementById("body");
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

    if (translateToAYes(eyepatchQ)) {
        quizScore++;
    };

    if (translateToAYes(heroQ)) {
        quizScore++;
    };

    if (!translateToAYes(saviorQ)) {
        quizScore++;
    };

    if (quizScore === 0) {
        resultSpan.textContent = name + ", Your score is: " + quizScore +
         ". I am thoroughly disapointed in you. You know nothing about Snake Plissken!";

        hideSection1.style.display = 'none';
        hideSection2.style.display = 'none';
        hideSection3.style.display = 'none';
        hideSection4.style.display = 'none';
        hideSection5.style.display = 'none';

        body.style.backgroundImage = "url('Confused-Snake.jpg')";
    }

    if (quizScore === 1) {
        resultSpan.textContent = name + ", Your score is: " + quizScore +
         ". I am very dissapointed in you.";

         hideSection1.style.display = 'none';
         hideSection2.style.display = 'none';
         hideSection3.style.display = 'none';
         hideSection4.style.display = 'none';
         hideSection5.style.display = 'none';

         body.style.backgroundImage = "url('Confused-Snake.jpg')";
    }

    if (quizScore === 2) {
        resultSpan.textContent = "Not bad " + name + ", Your score is: " + quizScore +
         ". Your knowledge of Snake Plissken is admirable.";

         hideSection1.style.display = 'none';
         hideSection2.style.display = 'none';
         hideSection3.style.display = 'none';
         hideSection4.style.display = 'none';
         hideSection5.style.display = 'none';

         body.style.backgroundImage = "url('Snake-Plissken.jpg')";
    }

    if (quizScore === 3) {
        resultSpan.textContent = "Outstanding! " + name + ", Your score is: " + quizScore +
         ". You know the legend of Snake Plissken by heart!";

         hideSection1.style.display = 'none';
         hideSection2.style.display = 'none';
         hideSection3.style.display = 'none';
         hideSection4.style.display = 'none';
         hideSection5.style.display = 'none';

         body.style.backgroundImage = "url('Call-Me-Snake.jpg')";
    }
    homeButton.style.display = 'flex';
})

homeButton.addEventListener('click', () => {
    hideSection1.style.display = 'flex';
    hideSection2.style.display = 'flex';
    hideSection3.style.display = 'flex';
    hideSection4.style.display = 'flex';
    hideSection5.style.display = 'flex';
    homeButton.style.display = 'none';
    body.style.backgroundImage = "";
    resultSpan.style.display = 'none';
})