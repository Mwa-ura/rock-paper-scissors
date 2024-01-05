function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
//console.log(getComputerChoice());

 /* function game(playerSelection, computerSelection) {
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
 */

/*
//console.log(playerChoice);
var computerChoice = getComputerChoice();
//console.log(computerChoice)
//console.log(
let count = 1;
for (let i = 0; i < count; i++) {
    var playerChoice = prompt('Enter your choice.').toLowerCase();
    game(playerChoice, computerChoice);
}
*/
const container = document.querySelector('#container');
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.style.marginRight = '4px';
/*
// rockButton.addEventListener('click', )
const rockPress = () => {
    if (playerSelection==='rock' && (computerSelection==='scissors' || computerSelection==='paper')) {
        console.log(`You win! ${playerSelection} beat ${computerSelection}`); 
    }

};

// paperButton eventListener
const scissorPress = () => {
    if ((playerSelection==='scissors' && computerSelection==='paper')) {
        console.log(`You win! ${playerSelection} beat ${computerSelection}`);
    }
};

// scissorsButton
const paperPress = () => {
    if (playerSelection === 'paper' && (computerChoice==='rock' || computerSelection==='scissors')) {
        console.log(`You lose! ${playerSelection} beat ${computerSelection}`);
    }
}
*/

container.appendChild(rockButton);
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.value = 'paper';
console.log(paperButton.value);
paperButton.style.marginRight = '4px';
container.appendChild(paperButton);
const scissorButton = document.createElement('button');
scissorButton.textContent = 'Scissors';
scissorButton.style.marginRight = '4px';
container.appendChild(scissorButton);
