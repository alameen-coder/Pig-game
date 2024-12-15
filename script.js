const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];

// DICE ROLL BTN
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;

  diceEl.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    currentScore = 0;
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
