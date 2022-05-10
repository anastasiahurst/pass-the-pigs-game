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

let currentScore = 0;
let activePlayer = 0;

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
      currentScore; /* CHANGE LATER */
  } else {
    // switch to next player
    document.getElementById(
      `current_score_player${activePlayer}`
    ).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("active_overlay");
    player1El.classList.toggle("active_overlay");
  }
});

// holding score functionality
