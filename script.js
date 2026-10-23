let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(`Random Index: ${randomIndex}`);
  if (randomIndex === 0) {
    console.log(`Computer Choice: Rock`);
    return "Rock";
  } else if (randomIndex === 1) {
    console.log(`Computer Choice: Paper`);
    return "Paper";
  } else {
    console.log(`Computer Choice: Scissor`);
    return "Scissor";
  }
}

function getHumanChoice() {
  let choicePrompt = prompt("Type your choice: ");
  let formatedHumanChoice = choicePrompt
    .at(0)
    .concat("", choicePrompt.slice(1, choicePrompt.length).toLowerCase());
  console.log(`Human Choice: ${formatedHumanChoice}`);
  return formatedHumanChoice;
}

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice === "Rock" && getComputerChoice === "Paper") {
    computerScore++;
    console.log("Paper > Rock , the computer won!");
    return computerScore;
  } else if (getHumanChoice === "Rock" && getComputerChoice === "Scissor") {
    humanScore++;
    console.log("Rock > Scissor , you won!");
    return humanScore;
  } else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
    humanScore++;
    console.log("Paper > Rock , you won!");
    return humanScore;
  } else if (getHumanChoice === "Paper" && getComputerChoice === "Scissor") {
    computerScore++;
    console.log("Scissor > Rock ,  the computer won!");
    return computerScore;
  } else if (getHumanChoice === "Scissor" && getComputerChoice === "Rock") {
    computerScore++;
    console.log("Rock > Scissor ,  the computer won!");
    return computerScore;
  } else if (getHumanChoice === "Scissor" && getComputerChoice === "Paper") {
    humanScore++;
    console.log("Scissor > Paper , you won!");
    return humanScore;
  } else {
    return console.log("Draw!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(`Score: Player (${humanScore}) vs Computer(${computerScore})`);
  if (humanScore > computerScore) {
    console.log("The player wins!");
    return "The player wins!";
  } else if (humanScore < computerScore) {
    console.log("The computer wins!");
    return "The computer wins";
  } else {
    console.log("Draw!");
    return "Draw!";
  }
}

playGame();
