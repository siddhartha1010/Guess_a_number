"use strict";
//console.log(document.querySelector(".message").textContent);

/*
document.querySelector(".message").textContent = "Correct Number 🎁";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 14;
document.querySelector(".score").textContent = 12;

// todo This is important
document.querySelector(".guess").value = 2;
*/
let randomNumber = Math.trunc(Math.random() * 20) + 1; // *A random num from 0-20

let score = 20;
let highScore = 0;

const enter_value = function () {
  const guess = Number(document.querySelector(".guess").value);
  // *The Number function is used to convert the value of document.querySelector(".guess").value to a numeric data type.
  console.log(guess);

  if (!guess) {
    // *If there is no guess or khali vako bela check click garyo vani
    document.querySelector(".message").textContent = "Number Can't be empty! ";
  } else if (guess === randomNumber) {
    // *When player wins we are going to chnage the background color to green of whole body
    document.querySelector(".message").textContent =
      "Congrates Same guess 🎈🎈🎈🎈";
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "High";
      score--;
      document.querySelector(".score").textContent = score; // !Value is used to i/p element so wont work here instead of textCOntent
    } else {
      document.querySelector(".message").textContent = "You lose 🙃";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lose 🙃";
      document.querySelector(".score").textContent = 0;
    }
  }
};

const reset = function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1; // *A random num from 0-20

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("number").style.width = "15rem";
  document.querySelector(".highscore").textContent = highScore;
};
document.querySelector(".check").addEventListener("click", enter_value);
document.querySelector(".again").addEventListener("click", reset);
