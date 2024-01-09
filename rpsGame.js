function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
//console.log(getComputerChoice());
/*
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('It is a tie!');
    }
    else if ((playerSelection==='rock' && computerSelection==='scissors') || 
        (playerSelection==='scissors' && computerSelection==='paper') ||
        (playerSelection==='rock' && computerSelection==='paper')){
            console.log(`You win! ${playerSelection} beat ${computerSelection}`)
     }
    else {
        console.log(`You lose! ${computerSelection} beat ${playerSelection}`)
    }
 }
//console.log(playerChoice);
//console.log(computerChoice)
*/
const container = document.querySelector('#container');
// Display results div
const displayContainer = document.createElement('div');

//Display win
const displayWin = () => {
    const p = document.createElement('p');
    p.textContent = 'You win!';
    displayContainer.appendChild(p);
    container.appendChild(displayContainer);
};

// Display lose
const displayLose = () => {
    const p1 = document.createElement('p');
    p1.textContent = 'You lose!';
    displayContainer.appendChild(p1);
    container.appendChild(displayContainer);
};

// Display a tie
const displayTie = () => {
    const p3 = document.createElement('p');
    p3.textContent = 'Its a tie!'
    displayContainer.appendChild(p3);
    container.appendChild(displayContainer);
};
// Test rock
const playRound = () => {
    let computerChoice = getComputerChoice();
    const rockButton = document.createElement('button');
    rockButton.textContent = 'Rock';
    rockButton.value = 'rock';
    rockButton.style.marginRight = '4px';
    rockButton.addEventListener('click', () => {
    let playerChoice = rockButton.value;
        if (computerChoice===playerChoice) {
            // console.log('Its a tie!')
            displayTie();
        } else if (playerChoice &&(computerChoice==='scissors' || computerChoice==='paper')){
            // console.log('You won');
            displayWin();
        }
    });
    container.appendChild(rockButton);
// Test paper
    const paperButton = document.createElement('button');
    paperButton.textContent = 'Paper';
    paperButton.value = 'paper';
    paperButton.style.marginRight = '4px';
    paperButton.addEventListener('click', ()=> {
    let playerChoice = paperButton.value;
        if (playerChoice===computerChoice) {
            // console.log('Its a tie!');
            displayTie();
        } else if (playerChoice && (computerChoice==='rock' || computerChoice==='scissors')){
            // console.log('You lose');
            displayLose();
        }
    });
    container.appendChild(paperButton);
// Test Scissors
    const scissorButton = document.createElement('button');
    scissorButton.textContent = 'Scissors';
    scissorButton.value = 'scissors';
    scissorButton.style.marginRight = '4px';
    scissorButton.addEventListener('click', () => {
        let playerChoice = scissorButton.value;
        if (playerChoice===computerChoice) {
            // console.log('Its a tie!');
            displayTie();
        } else if (playerChoice && computerChoice==='paper') {
            // console.log('You win!');
            displayWin();
        } else if (playerChoice && computerChoice==='rock') {
            // console.log(`You lose ${computerChoice} beat ${playerChoice}`);
            displayLose();
        }
    });
    container.appendChild(scissorButton);
}

const game = () => {
    for (let i = 0; i < 1; i++) {
        //let computerChoice = getComputerChoice();
        // var playerChoice = prompt('Enter your choice.').toLowerCase();
        playRound();
    };
}
game();





