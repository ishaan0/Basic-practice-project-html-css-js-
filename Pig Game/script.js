'use strict';

// selecting element
const player1 = document.querySelector(`.player--0`) ;
const player2 = document.querySelector(`.player--1`) ;
const score1El = document.querySelector('#score--0') ;
const score2El = document.querySelector('#score--1') ;
const currentScore1El = document.querySelector('#current--0') ;
const currentScore2El = document.querySelector('#current--1') ;
const diceEl = document.querySelector('.dice') ;
const newGameBtnEl = document.querySelector('.btn--new') ;
const roleDiceBtnEl = document.querySelector('.btn--roll') ;
const holdBtnEl = document.querySelector('.btn--hold') ;

let activePlayer, currentScore, scores, playing ;


// starting condition
initGame() ;


newGameBtnEl.addEventListener('click', initGame) ;

roleDiceBtnEl.addEventListener('click', () => {
  if(!playing) return ;

  let dice = getRandomNumber() ;
  updateDiceImage(dice) ;

  if(dice !== 1){
    currentScore += dice ;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore ;
  }
  else switchPlayer() ;
}) ;


holdBtnEl.addEventListener('click', () => {
  if(!playing) return ;

  scores[activePlayer] += currentScore ;

  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

  if(scores[activePlayer] >= 100){
    playing = 0 ;
    diceEl.classList.add('hidden') ;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
  else switchPlayer() ;
}) ;



// Functions

function initGame(){
  activePlayer = currentScore = 0 ;
  scores = [0, 0] ;
  playing = 1 ;
  score1El.textContent = score2El.textContent = 0 ;
  currentScore1El.textContent = currentScore2El.textContent = 0 ;
  diceEl.classList.add('hidden') ;
  player1.classList.remove('player--winner') ;
  player2.classList.remove('player--winner') ;
  player1.classList.add('player--active') ;
  player2.classList.remove('player--active') ;
}

function getRandomNumber(){
  return Math.floor(Math.random()*6) + 1 ;
}

function updateDiceImage(dice){
  diceEl.src = `dice-${dice}.png` ;
  if(diceEl.classList.contains('hidden'))
    diceEl.classList.remove('hidden') ;
}

function switchPlayer(){
  document.querySelector(`#current--${activePlayer}`).textContent = 0 ;
  currentScore = 0 ;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active') ;
  player2.classList.toggle('player--active') ;
}