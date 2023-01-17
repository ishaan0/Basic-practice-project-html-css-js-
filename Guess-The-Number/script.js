"use strict";

let randomNumber = getRandomNumber() ;
let msgElement = document.querySelector('.message') ;
let scoreElement = document.querySelector('.score') ;
let checkButton = document.querySelector('.check') ;
let highScore = document.querySelector('.highscore') ;
let hiddenNumber = document.querySelector('.number') ;
let inputNumber = document.querySelector('.guess') ; 


document.querySelector('.check').addEventListener('click', () => {

  if(Number(inputNumber.value)){
    if(Number(inputNumber.value) === randomNumber){
      showWin() ;
      if(Number(scoreElement.textContent) > Number(highScore.textContent))
        highScore.textContent = scoreElement.textContent ;
    }
    else{
      scoreElement.textContent = Number(scoreElement.textContent) - 1 ;
      if(scoreElement.textContent === '0') showLose() ;
      else {
        if(Number(inputNumber.value) < randomNumber)
          msgElement.textContent = 'Too low' ;
        else msgElement.textContent = 'Too high' ;
      }
    }
  }
  else msgElement.textContent = "please give a valid input." ;

}) ;


document.querySelector('.again').addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  hiddenNumber.textContent = '?' ;
  randomNumber = getRandomNumber() ;
  checkButton.style.visibility = 'visible' ;
  msgElement.textContent = 'Start guessing...' ;
  scoreElement.textContent = '10' ;
  inputNumber.value = '' ;
}) ;


function showWin(){
  checkButton.style.visibility = 'hidden' ;
  document.body.style.backgroundColor = "green";
  hiddenNumber.textContent = inputNumber.value ;
  msgElement.textContent = "congratulation !!! you won." ;
}

function showLose(){
  document.body.style.backgroundColor = "red";
  checkButton.style.visibility = 'hidden' ;
  msgElement.textContent = "you lose !!!" ;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}
