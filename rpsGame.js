function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
//console.log(getComputerChoice());

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

const container = document.querySelector('#container');

const game = () => {
    for (let i = 0; i < 1; i++) {
        let computerChoice = getComputerChoice();
        // var playerChoice = prompt('Enter your choice.').toLowerCase();
        playRound(playerChoice, computerChoice);
    }
}
game();
const rockValue = () => rockButton.value;
const paperValue = () => paperButton.value;
const scissorsValue = () => scissorButton.value;

// Test rock
let computerChoice = getComputerChoice();
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.value = 'rock';
rockButton.style.marginRight = '4px';
rockButton.addEventListener('click', () => {
    let playerChoice = rockButton.value;
    if (computerChoice===playerChoice) {
        console.log('Its a tie!')
    } else if (playerChoice &&(computerChoice==='scissors' || computerChoice==='paper')){
        console.log('You won');
    }
})
container.appendChild(rockButton);

// Test paper
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.value = 'paper';
paperButton.style.marginRight = '4px';
paperButton.addEventListener('click', ()=> {
    let playerChoice = paperButton.value;
    if (playerChoice===computerChoice) {
        console.log('Its a tie!');
    } else if (playerChoice && (computerChoice==='rock' || computerChoice==='scissors')){
        console.log('You lose');
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
        console.log('Its a tie!');
    } else if (playerChoice && computerChoice==='paper') {
        console.log('You win!');
    } else if (playerChoice && computerChoice==='rock') {
        console.log(`You lose ${computerChoice} beat ${playerChoice}`);
    }
});
container.appendChild(scissorButton);




