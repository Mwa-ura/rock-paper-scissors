// Rock paper scissors game

window.onload = () => {
    game();
}
//Complete logic of  the game.
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    // Function to..
    const playGame = () => {
        let rockBtn = document.querySelector('#rock');
        let paperBtn = document.querySelector('#paper');
        let scissorsBtn = document.querySelector('#scissors');
        let PlayerOptions = [rockBtn, paperBtn, scissorsBtn];
        let computerOptions = ['rock', 'paper', 'scissors'];
        PlayerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const movesLeft = document.querySelector('#movesLeft');
                moves++;
                movesLeft.textContent = `Moves left: ${10-moves}.`;

                const random = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[random];
                // Function to check who wins
                winner(this.innerText, computerChoice);
                // Calling gameOver function after 10 moves.
                if (moves === 10) {
                    gameOver(PlayerOptions, movesLeft);
                }
            })
        })
    }
    const winner = (player, computer) => {
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        let result = document.querySelector('#result');
        let playerScoreBoard = document.querySelector('#p-score');
        let computerScoreBoard = document.querySelector('#c-score');
        if (player === computer) {
            result.textContent = 'Tie';
        } else if (player === 'rock' && (computer==='paper' || computer==='scissors')) {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } else if (player === 'paper' && (computer==='rock' || computer==='scissors')) {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else if (player === 'scissors' && computer === 'paper') {
            result.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } else if (player === 'scissors' && computer === 'rock') {
            result.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }
    }
    // Function to call game over
    const gameOver = (PlayerOptions, movesLeft) => {
        const chooseMove = document.querySelector('#moves');
        const result = document.querySelector('#result');
        const reloadBtn = document.querySelector('#reload');
        PlayerOptions.forEach(option => {option.style.display = 'none'});
        chooseMove.textContent = 'Game Over';
        movesLeft.style.display = 'none';
        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.textContent = 'You Won the Game!';
            result.style.color = '#308d46';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.textContent = 'You Lost the Game!';
            result.style.color = 'red';
        } else {
            result.style.fontSize = '2rem';
            result.textContent = 'It\'s a Tie';
            result.style.color = 'grey';
        }
        reloadBtn.textContent = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', function() {window.location.reload()});
    }
    playGame();
}