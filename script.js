let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(`Random Index: ${randomIndex}`);
  if (randomIndex === 0) {
    alert(`Computer Choice: Rock`);
    return "Rock";
  } else if (randomIndex === 1) {
    alert(`Computer Choice: Paper`);
    return "Paper";
  } else {
    alert(`Computer Choice: Scissor`);
    return "Scissor";
  }
}

function getHumanChoice() {
  let choicePrompt = prompt("Type your choice: ");
  let formatedHumanChoice = choicePrompt
    .at(0)
    .concat("", choicePrompt.slice(1, choicePrompt.length).toLowerCase());
  alert(`Human Choice: ${formatedHumanChoice}`);
  return formatedHumanChoice;
}

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice === "Rock" && getComputerChoice === "Paper") {
    computerScore++;
    alert("Paper > Rock , the computer won!");
    return computerScore;
  } else if (getHumanChoice === "Rock" && getComputerChoice === "Scissor") {
    humanScore++;
    alert("Rock > Scissor , you won!");
    return humanScore;
  } else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
    humanScore++;
    alert("Paper > Rock , you won!");
    return humanScore;
  } else if (getHumanChoice === "Paper" && getComputerChoice === "Scissor") {
    computerScore++;
    alert("Scissor > Rock ,  the computer won!");
    return computerScore;
  } else if (getHumanChoice === "Scissor" && getComputerChoice === "Rock") {
    computerScore++;
    alert("Rock > Scissor ,  the computer won!");
    return computerScore;
  } else if (getHumanChoice === "Scissor" && getComputerChoice === "Paper") {
    humanScore++;
    alert("Scissor > Paper , you won!");
    return humanScore;
  } else {
    return alert("Draw!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  alert(`Score: Player (${humanScore}) vs Computer(${computerScore})`);
  if (humanScore > computerScore) {
    alert("The player wins!");
    return "The player wins!";
  } else if (humanScore < computerScore) {
    alert("The computer wins!");
    return "The computer wins";
  } else {
    alert("Draw!");
    return "Draw!";
  }
}

playGame();
