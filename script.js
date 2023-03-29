"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When it's Agmon
  if (guess === 666) {
    document.querySelector(".message").textContent =
      "T⍑ᒷ ꖎ𝙹∷↸ 𝙹⎓ ⍑ᒷꖎꖎ ╎ᓭ ∴ᔑ╎ℸ ̣ ╎リ⊣ ⎓𝙹∷ ||𝙹⚍";

    // When it's nice
  } else if (guess === 69) {
    document.querySelector(".message").textContent = "Nice";

    // When there is no input
  } else if (!guess) {
    displayMessage("🚫 No Number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "#FF0000";

      document.querySelector(".number").style.width = "30rem";

      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 100;
    displayMessage("Start guessing...");

    document.querySelector(".score").textContent = score;

    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";

    document.querySelector(".number").style.width = "15rem";

    document.querySelector(".number").textContent = "?";
  });
});
