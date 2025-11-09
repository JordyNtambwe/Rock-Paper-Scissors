function getComputerChoice() {
  const choice = Math.random();
  if (choice <= 1 / 3) {
    return 'rock';
  } else if (choice > 1 / 3 && choice <= 2 / 3) {
    return 'paper';
  } else {
    return 'scissors';
  };
};

function getHumanChoice() {
  return prompt('Make your choice: Rock, Paper, or Scissors?');
};

function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    if (human === computer) {
      console.log(`It is a tie! The score is still ${humanScore} - ${computerScore}`);
    } else if (
      (human === 'rock' && computer === 'scissors') ||
      (human === 'paper' && computer === 'rock') ||
      (human === 'scissors' && computer === 'paper')) {
      humanScore++;
      console.log(`You won this round! The score is now ${humanScore} - ${computerScore}`);
    } else {
      computerScore++;
      console.log(`You lost this round! The score is now ${humanScore} - ${computerScore}`);
    };
  };

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice()
    playRound(humanSelection, computerSelection)
  }

    if (humanScore === computerScore) {
      console.log(`The final score of ${humanScore} - ${computerScore} determines that it is a tie!`);
    } else if (humanScore > computerScore) {
      console.log(`CONGRATULATIONS, YOU WON!!! The final score is ${humanScore} - ${computerScore}!`)
    } else {
      console.log(`You lost... Maybe next time! The final score is ${humanScore} - ${computerScore}`)
    };
  };

playGame();