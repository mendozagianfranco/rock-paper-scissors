let userChoice = prompt("Let's play rock paper scissors", '');

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return 'Rock';
    } else if (random === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // I converted  the choice of player and computer into capital letters to compare them better.
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    if (player === computer) {
        return `Draw! Player: "${playerSelection}" and Computer: "${computerSelection}"`;
    } else if (
        (player === 'PAPER' && computer === 'SCISSORS') ||
        (player === 'SCISSORS' && computer === 'ROCK') ||
        (player === 'ROCK' && computer === 'PAPER')
    ) {
        return `You lose! Computer: "${computerSelection}" beats Player: "${playerSelection}"`;
    } else {
        return `You win! Computer: "${playerSelection}" beats Player: "${computerSelection}"`;
    }
}
