let choices = ['rock', 'paper', 'scissors'];

const playerChoice = process.argv.slice(2)[0];

const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer: ${computerChoice}`);

if (!choices.includes(playerChoice)) {
    console.error('You have to choose between rock, paper, or scissors as an input!');

} else if (  // Winning against Computer
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')
){
    console.log(
        `You chose ${playerChoice}, and computer chose ${computerChoice}. You win!`
    );

} else if  ( // Loosing against Computer
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock') ||
    (playerChoice === 'rock' && computerChoice === 'paper')
) {
    console.log(
        `You chose ${playerChoice}, and computer chose ${computerChoice}. Computer wins, you loose! Sorry :(`
    );
} else if 
    (playerChoice === computerChoice ) {
    console.log(`You both chose ${playerChoice}, its a draw!`);
    return;
};


