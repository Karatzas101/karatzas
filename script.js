
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
    ).textContent = `⛔  I need a number!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `💥  Win !`;
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
      ).textContent = `🔥Too High`;
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
      document.querySelector(`.message`).textContent = `🥶  Too Low`;
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
