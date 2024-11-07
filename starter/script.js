'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉🎊🥳Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage= function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
('click',function() {
const guess  = Number(document.querySelector('.guess').value);
console.log(guess,typeof guess);

if(!guess) {
    displayMessage('⛔ No Number!');

    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉🎊🥳Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
//refactoring DRY principle
   else if(guess!== secretNumber){
    if (score>1){
        displayMessage(guess > secretNumber? '📉this number is too HIGH!':'📈 this is Too low!');
        score--;
        document.querySelector('.score').textContent = score; 
    }else  {
        displayMessage('😭 you lost the game');
        document.querySelector('.score').textContent = 0;
   }
   }
}) 
//when guss is too high
//   else if (guess > secretNumber){
//     if (score>1){
//         document.querySelector('.message').textContent = '📉this number is too HIGH!';
//         score--;
//         document.querySelector('.score').textContent = score; 
//     }else {
//         document.querySelector('.message').textContent = '😭 you lost the game';
//         document.querySelector('.score').textContent = 0;
//     }
    
//     //when the guss is too low 

//   } else if(guess<secretNumber){
//     if (score>1){
//         document.querySelector('.message').textContent = '📈 this is Too low!';
//         score--;
//         document.querySelector('.score').textContent = score; 
//     }else {
//         document.querySelector('.message').textContent = '😭 you lost the game';
//         document.querySelector('.score').textContent = 0;
//     }
//   }
// }) 

//Again button reset

document.querySelector('.again').addEventListener('click', function(){
secretNumber = Math.trunc(Math.random()*20)+1;
score = 20;
displayMessage('Start guessing...'); 
document.querySelector('.number').textContent='?';
document.querySelector('.score').textContent = score;
document.querySelector('.guess').value = '';
document.querySelector('.number').style.width = '15rem';
document.querySelector('body').style.backgroundColor ='#222';


})

