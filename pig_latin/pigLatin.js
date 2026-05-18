// Convert each word to Pig Latin:

//     If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
//         Example: Happy = appyh + ay = appyhay

//     If a word starts with two consonants move the two consonants to the end of the word and add "ay."
//         Example: Child = Ildch + ay = Ildchay

//     If a word starts with a vowel add the word "way" at the end of the word.
//         Example: Awesome = Awesome +way = Awesomeway


let abc = [];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

const text = process.argv.slice(2)[0];

const twoCons = text.slice(2) + text.slice(0, 2).concat('ay');

const ConsVow = text.slice(1) + text.slice(0, 1).concat('ay');

if (vowels.includes(text[0].toLowerCase())) { // determines whether a given string may be found within this string
    console.log(text.concat('way')) //adds something at the end of the word
} else if (
    consonants.includes(text[0].toLowerCase()) &&
    consonants.includes(text[1].toLowerCase())
) {
    console.log(twoCons)
} else if (
    consonants.includes(text[0].toLowerCase()) &&
    vowels.includes(text[1].toLowerCase())
) {
    console.log(ConsVow)
 };


// if (!choices.includes(playerChoice)) {
//     console.error('You have to choose between rock, paper, or scissors as an input!');

// } else if (  // Winning against Computer
//     (playerChoice === 'rock' && computerChoice === 'scissors') ||
//     (playerChoice === 'scissors' && computerChoice === 'paper') || 
//     (playerChoice === 'paper' && computerChoice === 'rock')
// ){
//     console.log(
//         `You chose ${playerChoice}, and computer chose ${computerChoice}. You win!`
//     );

// } else if  ( // Loosing against Computer
//     (playerChoice === 'paper' && computerChoice === 'scissors') ||
//     (playerChoice === 'scissors' && computerChoice === 'rock') ||
//     (playerChoice === 'rock' && computerChoice === 'paper')
// ) {
//     console.log(
//         `You chose ${playerChoice}, and computer chose ${computerChoice}. Computer wins, you loose! Sorry :(`
//     );
// } else if 
//     (playerChoice === computerChoice ) {
//     console.log(`You both chose ${playerChoice}, its a draw!`);
//     return;
// };


