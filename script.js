let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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

function playRound(humanSelection, computerSelection) {
  if (humanSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    console.log("Paper > Rock , o computador venceu!");
    return computerScore;
  } else if (humanSelection === "Rock" && computerSelection === "Scissor") {
    humanScore++;
    console.log("Rock > Scissor , você venceu!");
    return humanScore;
  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    humanScore++;
    console.log("Paper > Rock , você venceu!");
    return humanScore;
  } else if (humanSelection === "Paper" && computerSelection === "Scissor") {
    computerScore++;
    console.log("Scissor > Rock , o computador venceu!");
    return computerScore;
  } else if (humanSelection === "Scissor" && computerSelection === "Rock") {
    computerScore++;
    console.log("Rock > Scissor , o computador venceu!");
    return computerScore;
  } else if (humanSelection === "Scissor" && computerSelection === "Paper") {
    humanScore++;
    console.log("Scissor > Paper , você venceu!");
    return humanScore;
  } else {
    return console.log("Draw!");
  }
}

playRound(humanSelection, computerSelection);
