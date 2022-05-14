"use strict";

// selecting elements
let player0El = document.querySelector(".player0_container");
let player1El = document.querySelector(".player1_container");
let score0El = document.querySelector(".total_score_player0");
let score1El = document.querySelector(".total_score_player1");
let current0El = document.querySelector(".current_score_player0");
let current1El = document.querySelector(".current_score_player1");

let diceEl = document.querySelector(".dice");

let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let btnNew = document.querySelector(".btn--new");
let btnClose = document.querySelector(".close_modal");

let scores, currentScore, activePlayer;

const newGame = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player0El.classList.add("active_overlay");
  player1El.classList.remove("active_overlay");
  diceEl.classList.add("hidden");
  document.querySelector(".modal").classList.add("hidden");
};
newGame();

const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("active_overlay");
  player1El.classList.toggle("active_overlay");
};

// adding HIDDEN class to the dice, so it disappears
diceEl.classList.add("hidden");
document
  .getElementById(`player${activePlayer}_container`)
  .classList.add("active_overlay");

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScore += diceNumber;
    console.log(currentScore);
    document.getElementById(`current_score_player${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player
    document.getElementById(
      `current_score_player${activePlayer}`
    ).textContent = 0;
    switchPlayer();
  }
});

// holding score functionality
btnHold.addEventListener("click", function () {
  // add current score to the active player's total score
  scores[activePlayer] += currentScore;
  document.getElementById(`total_score_player${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(
    `current_score_player${activePlayer}`
  ).textContent = 0;
  // check if score is equal or more than 100
  if (scores[activePlayer] >= 100) {
    document.querySelector(".modal").classList.remove("hidden");
    if (scores[0] > scores[1]) {
      document.getElementById(
        "winner_text"
      ).textContent = `Player 1 is a winner`;
    } else {
      document.getElementById(
        "winner_text"
      ).textContent = `Player 2 is a winner`;
    }
    document.querySelector(
      ".winning_score_modal"
    ).textContent = `Winning score: ${scores[activePlayer]}`;
  } else {
    switchPlayer();
  }
});

btnClose.addEventListener("click", newGame);

btnNew.addEventListener("click", newGame);
