// selecting elements
let score0El = document.querySelector(".total_score_player0");
let score1El = document.querySelector(".total_score_player1");
let current0El = document.querySelector(".current_score_player0");
let current1El = document.querySelector(".current_score_player1");
let currentScoreEl = document.querySelector(".current_score");
let diceEl = document.querySelector(".dice");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");
let btnNew = document.querySelector(".btn--new");

let score0ElValue = score0El.textContent;
let score1ElValue = score1El.textContent;
let current0ElValue = current0El.textContent;
let current1ElValue = current1El.textContent;
let currentScoreValue = currentScoreEl.textContent;

score0ElValue = 0;
score1ElValue = 0;
current0ElValue = 0;
current1ElValue = 0;
currentScoreValue = 0;

// adding HIDDEN class to the dice, so it disappears
diceEl.classList.add("hidden");

// rolling dice functionality
btnRoll.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice${diceNumber}.png`;

  if (diceNumber !== 1) {
    currentScoreValue += diceNumber;
    console.log(currentScoreValue);
    current0El.textContent = currentScoreValue;
  } else {
  }
});

// the above console.log(currentScore) output equalt to [object HTMLParagraphElement] + the number. for example, if the output should have been number 5, then it writes [object HTMLParagraphElement]5?
// The working code should display the correct dice score to the Current Score of player 1.
