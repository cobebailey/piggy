'use strict';

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

const player0el = document.querySelector('.player--0');
const player1el = document.querySelector('.player--1');

const scores = [0, 0];
let rolledNum = 0;
let playerOne = true;
let currentScore = 0;
let activePlayer = 0;

const lights = function () {
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};

const roll = function () {
  rolledNum = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rolledNum}.png`;
  //rolls dice and adds to current score
  if (activePlayer === 0) {
    if (rolledNum === 1) {
      document.getElementById(`current--${activePlayer}`).textContent = '0';
      currentScore = 0;
      activePlayer = 1;
      console.log(activePlayer, 's1');

      lights();
    } else {
      console.log(activePlayer);

      currentScore += rolledNum;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  } else {
    if (rolledNum === 1) {
      document.getElementById(`current--${activePlayer}`).textContent = '0';
      currentScore = 0;
      activePlayer = 0;
      console.log(activePlayer, 's0');
      lights();
    } else {
      console.log(activePlayer);

      currentScore += rolledNum;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  }
};
//make big score current score and reset to zero
const hold = function () {
  scores[activePlayer] += currentScore;
  console.log(scores, activePlayer, 'hold');
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  lights();
};
rollBtn.addEventListener('click', roll);

holdBtn.addEventListener('click', hold);

/*
const scoreOne = document.querySelector('#score--0');

const scoreTwo = document.querySelector('#score--1');

const diceEl = document.querySelector('.dice');

let currentScore = 0;
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
scoreOne.textContent = 0;
scoreTwo.textContent = 0;
diceEl.classList.add('hidden');
const roll = function () {
  //rolls dice and adds to current score

  const rolledNum = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rolledNum}.png`;
};

rollBtn.addEventListener('click', roll);
*/
