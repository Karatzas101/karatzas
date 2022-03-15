// 'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `🎇 Correct Number!`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 23;
*/
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector(`.message`).textContent = `No number ⛔`;
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `🎇 Correct Number!`;

//     document.querySelector(`.number`).textContent = secretNumber;

//     document.querySelector(`body`).style.backgroundColor = `#60b347`;
//     document.querySelector(`.number`).style.width = `30rem`;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📈Too High!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `💥You lost the game`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📉Too Low!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `💥You lost the game`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });

// document.querySelector(`.again`).addEventListener(`click`, function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector(`.message`).textContent = `start quessing...`;
//   document.querySelector(`.score`).textContent = score;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.guess`).value = ``;

//   document.querySelector(`body`).style.backgroundColor = `#222`;
//   document.querySelector(`.number`).style.width = `15rem`;
// });

`use strike`;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When the player wins
  if (!guess) {
    document.querySelector(
      `.message`
    ).textContent = `⛔ Knocked ya back to the stone age? I need a number!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `💥 Crushed me!… Win !`;
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    // HighScore code
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    } else {
    }

    //When quess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(
        `.message`
      ).textContent = `🥶 Stone cold… Too High`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `🔚 Die hard ! Game Over !`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When the quess is to Low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `🥶 Stone cold… Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `🔚 Die hard ! Game Over !`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

// Again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
