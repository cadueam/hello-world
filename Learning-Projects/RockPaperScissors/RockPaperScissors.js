const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerText = document.querySelector("#player-choice");
const computerText = document.querySelector("#robot-choice");
var enemyHealth = document.getElementById("enemy-health");
var playerHealth = document.getElementById("player-health");

let hit = 10;

let player;
let computerChoice;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    checkWinner();
    loser();
    playerText.innerText = player;
    computerText.innerText = computerChoice;

    console.log(checkWinner());
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player === computerChoice) {
    return "Draw";
  } else if (computerChoice == "Rock") {
    return player == "Paper" ? "Player Win!" : "Player Lose!";
  } else if (computerChoice == "Paper") {
    return player == "Scissors" ? "Player Win!" : "Player Lose!";
  } else if (computerChoice == "Scissors") {
    return player == "Rock" ? "Player Win!" : "Player Lose!";
  }
}

var winnerText = checkWinner();

function loser() {
  if (checkWinner() === "Player Win!") {
    return (enemyHealth.value -= hit);
  } else {
    return (playerHealth.value -= hit);
  }
}
