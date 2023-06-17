/* Variable */
let scoreUser = 0;
let scoreComputer = 0;

/* Function */
/* It serves to make the computer play by causally choosing between rock paper scissors */

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

/* Play a round with the computer */

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

/* Games 5 rounds with final score */

function game() {
    for (let i = 1; i <= 5; i++) {
        let userChoice = prompt("Let's play rock paper scissors", '');
        let play = playRound(userChoice, getComputerChoice());

        console.log(play);

        if (play.includes('You win')) {
            scoreUser++;
        } else if (play.includes('You lose')) {
            scoreComputer++;
        }
    }

    if (scoreUser > scoreComputer) {
        console.log(
            `You win! score User:${scoreUser} score Computer:${scoreComputer} `
        );
    } else if (scoreUser < scoreComputer) {
        console.log(
            `You lose! score User:${scoreUser} score Computer:${scoreComputer} `
        );
    } else {
        console.log(
            `Draw! score User:${scoreUser} score Computer:${scoreComputer} `
        );
    }
}

game();
