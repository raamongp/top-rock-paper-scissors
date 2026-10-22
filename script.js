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
  let choicePrompt = prompt("Digite a sua escolha: ");
  let formatedHumanChoice = choicePrompt
    .at(0)
    .concat("", choicePrompt.slice(1, choicePrompt.length).toLowerCase());
  console.log(`Human Choice: ${formatedHumanChoice}`);
  return formatedHumanChoice;
}

function playRound(getHumanChoice, getComputerChoice) {
  if (getHumanChoice === "Rock" && getComputerChoice === "Paper") {
    computerScore++;
    console.log("Paper > Rock , o computador venceu!");
    return computerScore;
  } else if (getHumanChoice === "Rock" && getComputerChoice === "Scissor") {
    humanScore++;
    console.log("Rock > Scissor , você venceu!");
    return humanScore;
  } else if (getHumanChoice === "Paper" && getComputerChoice === "Rock") {
    humanScore++;
    console.log("Paper > Rock , você venceu!");
    return humanScore;
  } else if (getHumanChoice === "Paper" && getComputerChoice === "Scissor") {
    computerScore++;
    console.log("Scissor > Rock , o computador venceu!");
    return computerScore;
  } else if (getHumanChoice === "Scissor" && getComputerChoice === "Rock") {
    computerScore++;
    console.log("Rock > Scissor , o computador venceu!");
    return computerScore;
  } else if (getHumanChoice === "Scissor" && getComputerChoice === "Paper") {
    humanScore++;
    console.log("Scissor > Paper , você venceu!");
    return humanScore;
  } else {
    return console.log("Draw!");
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(
    `Placar: Jogador (${humanScore}) vs Computador(${computerScore})`,
  );
  if (humanScore > computerScore) {
    console.log("O Jogador venceu!");
    return "O Jogador venceu!";
  } else if (humanScore < computerScore) {
    console.log("O Computador venceu!");
    return "O Computador venceu!";
  } else {
    console.log("Empate!");
    return "Draw";
  }
}

playGame();
