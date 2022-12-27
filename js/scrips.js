'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const highScoreTxt = document.querySelector('.high-score');

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

// Check button
btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('لطفا یک عدد وارد کنید');
  } else if (guess === randomNumber) {
    displayMessage('درست حدس زدی');
    number.textContent = randomNumber;
    document.body.classList.add('body-background');

    if (score > highScore) {
      highScore = score;
      highScoreTxt.textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'حدست زیاد بود' : 'حدست کم بود');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('باختی');
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

// Again Button
btnAgain.addEventListener('click', () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('...شروع به حدس زدن کن');
  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = Number('');
  document.body.classList.remove('body-background');
  document.body.style.backgroundColor = '';
});
