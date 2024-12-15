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
score0El.textContent = 0;
score1El.textContent = 0;

const switchPlayer = function () {
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  player0El.classList.toogle("player--active");
  player1El.classList.toogle("player--active");
  diceEl.classList.remove("hidden");
};

const init = function () {
  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  activePlayer = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  diceEl.classList.add("hidden");
};
// Static variable
let currentScore, activePlayer, playing;
const score = [0, 0];
init();

// DICE ROLL BTN
btnRoll.addEventListener("click", function () {
  if (!playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (!playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.remove("hidden");
      playing = true;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
