'use strict'

// Выбираем элементы
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element =  document.getElementById('current--0');
const current1Element =  document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const Player0Element = document.querySelector ('.player--0');
const Player1Element = document.querySelector ('.player--1');

const showModalWindow = document.querySelector ('.btn--rules');
const modalWindow = document.querySelector ('.modal-window');
const overlay = document.querySelector('.overlay');
const closeModalWindow = document.querySelector ('.close-modal-window');

// Базовые игровые позиции
let totalScores, currentScore, activePlayer, isPlaying;

const initGame = function(){
    totalScores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    Player0Element.classList.remove('player--winner');
    Player1Element.classList.remove('player--winner');
    Player0Element.classList.remove('player--active');
    Player1Element.classList.remove('player--active');
    Player0Element.classList.add('player--active');
}
initGame();

let switchActivePlayer = function (){
    currentScore = 0; 
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        Player0Element.classList.toggle ('player--active');
        Player1Element.classList.toggle ('player--active'); 
}; 

// Бросить кубик
btnRoll.addEventListener('click', function(){
    if (isPlaying) {
    const diceNumber = Math.trunc (Math.random() * 6) + 1;

    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1){
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchActivePlayer();
    }
}
});

// финальные очки
btnHold.addEventListener('click', function(){
    if (isPlaying){
    totalScores[activePlayer] += currentScore;
    document.getElementById (`score--${activePlayer}`).textContent = totalScores[activePlayer];
    
    if (totalScores[activePlayer] >= 100){
        isPlaying = false;
 
        document.querySelector(`.player--${activePlayer}`).classList.add ('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove ('player--active');
    } else {
        switchActivePlayer();
    }
    }
});

btnNew.addEventListener('click', initGame);


showModalWindow.addEventListener('click', function(){
    modalWindow.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
});

closeModalWindow.addEventListener('click', function(){
    modalWindow.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
})




