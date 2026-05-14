// Example :
// const playerChoice = 'rock';
// const computerChoice = 'paper';

// if (playerChoice === 'rock' && computerChoice === 'paper') {
// 	console.log(
// 		`Player chose: ${playerChoice}, and computer chose ${computerChoice}. Computer wins!`
// 	);
// }

// Rock beats Scissors
// Scissors beat Paper
// Paper beats Rock 

// only 'rock', 'paper' , or 'scissors' allowed as input from the player

const playerChoice = process.argv.slice(2)[0];
// const playerChoice = play[0];
const computerChoice = 'scissors';

let choices = ['rock', 'paper', 'scissors'];

// if (playerChoice !== 'rock' && 'scissors' && 'paper') {

if (!choices.includes(playerChoice)) {
    console.error('You have to choose between rock, paper, or scissors as an input!');
} else if 
    (playerChoice === 'rock' && computerChoice === 'scissors') {
    console.log(
        `You chose ${playerChoice}, and computer chose ${computerChoice}. You win!`
    );
} else if  
    (playerChoice === 'paper' && computerChoice === 'scissors') {
    console.log(
        `You chose ${playerChoice}, and computer chose ${computerChoice}. Computer wins, you loose! Sorry :(`
    );
} else if 
    (playerChoice === computerChoice ) {
    console.log(`You both chose ${playerChoice}, its a draw!`);
    return;
};

// if (playerChoice === 'scissors' && computerChoice === 'scissors') {
//     console.log(`You both chose ${playerChoice}, its a draw!`);
// }

