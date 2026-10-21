function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex);
  if (randomIndex === 0) {
    return alert("Rock");
  } else if (randomIndex === 1) {
    return alert("Paper");
  } else {
    return alert("Scissor");
  }
}
