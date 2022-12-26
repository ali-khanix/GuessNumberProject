'use strict';

const message = document.querySelector('.message');
const btnCheck = document.querySelector('.check');
const number = document.querySelector('.number');

const randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(randomNumber);

btnCheck.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'لطفا یک عدد وارد کنید';
  } else if (guess > randomNumber) {
    if (score > 1) {
      message.textContent = 'حدست زیاد بود';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = ' باختی';
    }
  } else if (guess < randomNumber) {
    message.textContent = 'حدست کم بود';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    message.textContent = 'درست حدس زدی';
    number.textContent = randomNumber;
  }
});
