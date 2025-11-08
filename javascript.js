function getComputerChoice() {
  const choice = Math.random();
  if (choice <= 1/3) {
    return 'rock';
  } else if (choice > 1/3 && choice <= 2/3) {
    return 'paper';
  } else {
    return 'scissors';
  };
};

console.log(getComputerChoice());

function getHumanChoice() {
  return prompt ('Make your choice: Rock, Paper, or Scissors?');
};

console.log(getHumanChoice());

