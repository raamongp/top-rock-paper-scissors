function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex);
  if (randomIndex === 0) {
    return "Rock";
  } else if (randomIndex === 1) {
    return "Paper";
  } else {
    return "Scissor";
  }
}

function getHumanChoice() {
  let choicePrompt = prompt("Digite a sua escolha: ");
  let formatedHumanChoice = choicePrompt
    .at(0)
    .concat("", choicePrompt.slice(1, choicePrompt.length).toLowerCase());
  return console.log(formatedHumanChoice);
}
