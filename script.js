function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        console.log('Rock');
    } else if (random === 2) {
        console.log('Paper');
    } else {
        console.log('Scissors');
    }
    console.log(random);
}

getComputerChoice();
