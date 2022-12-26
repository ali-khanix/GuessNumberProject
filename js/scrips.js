'use strict';

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const highScoreTxt = document.querySelector('.high-score');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;
let highScore = 0;

btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'لطفا یک عدد وارد کنید';
  } else if (guess === randomNumber) {
    message.textContent = 'درست حدس زدی';
    number.textContent = randomNumber;
    document.body.classList.add('body-background');

    if (score > highScore) {
      highScore = score;
      highScoreTxt.textContent = score;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = 'حدست زیاد بود';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = ' باختی';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      message.textContent = 'حدست کم بود';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = ' باختی';
      document.querySelector('.score').textContent = 0;
      document.body.style.backgroundColor = 'red';
    }
  }
});

btnAgain.addEventListener('click', () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = '...شروع به حدس زدن کن';
  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = Number('');
  document.body.classList.remove('body-background');
  document.body.style.backgroundColor = '';

  console.log(randomNumber);
});
