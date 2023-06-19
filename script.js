/* Variable */
let scoreUser = 0;
let scoreComputer = 0;

let buttons = document.querySelectorAll('button');
let container = document.querySelector('.container');

buttons.forEach((btn) => {
    btn.addEventListener('click', function game(e) {
        const play = playRound(e.target.textContent, getComputerChoice());
        let textResult = play.textContent;

        if (textResult.includes('You win')) {
            scoreUser++;
        } else if (textResult.includes('You lose')) {
            scoreComputer++;
        }

        let winner = document.createElement('div');
        if (scoreUser === 5) {
            winner.textContent = `You win! Player score: ${scoreUser} Computer score: ${scoreComputer}`;
            container.appendChild(winner);
            btn.removeEventListener('click', game);
        } else if (scoreComputer === 5) {
            winner.textContent = `You lose! Player score: ${scoreUser} Computer score: ${scoreComputer}`;
            container.appendChild(winner);
            btn.removeEventListener('click', game);
        }
    });
});

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
    let result = document.createElement('div');

    if (player === computer) {
        result.textContent = `Draw! Player: "${playerSelection}" and Computer: "${computerSelection}"`;
        return container.appendChild(result);
    } else if (
        (player === 'PAPER' && computer === 'SCISSORS') ||
        (player === 'SCISSORS' && computer === 'ROCK') ||
        (player === 'ROCK' && computer === 'PAPER')
    ) {
        result.textContent = `You lose! Computer: "${computerSelection}" beats Player: "${playerSelection}"`;
        return container.appendChild(result);
    } else {
        result.textContent = `You win! Player: "${playerSelection}" beats Computer: "${computerSelection}"`;
        return container.appendChild(result);
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
