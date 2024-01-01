function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
//console.log(getComputerChoice());

function game(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
        if (playerSelection === computerSelection) {
            return 'It is a tie!';
        }
        else if ((playerSelection==='rock' && computerSelection==='scissors') || 
        (playerSelection==='scissors' && computerSelection==='paper') ||
        (playerSelection==='rock' && computerSelection==='paper')){
            return `You win! ${playerSelection} beat ${computerSelection}`
        }
        else {
            return `You lose! ${computerSelection} beat ${playerSelection}`
        }
    }
}
var playerChoice= prompt('Enter your choice.').toLowerCase();
//console.log(playerChoice);
var computerChoice = getComputerChoice();
//console.log(computerChoice)
console.log(game(playerChoice, computerChoice));