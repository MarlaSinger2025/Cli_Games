// Convert each word to Pig Latin:

//     If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
//         Example: Happy = appyh + ay = appyhay

//     If a word starts with two consonants move the two consonants to the end of the word and add "ay."
//         Example: Child = Ildch + ay = Ildchay

//     If a word starts with a vowel add the word "way" at the end of the word.
//         Example: Awesome = Awesome +way = Awesomeway


let abc = [];
let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = [''];
let toVowel = 'way';

// let choices = ['rock', 'paper', 'scissors'];

const text = process.argv.slice(2)[0];

// const translate = text.startsWith(vowels);

// if (text.startsWith('Hello')) { //checks if text starts with a specific word (How can I add the vowels variable instead?). Case Sesitive
//     console.log(text.concat(toVowel)), //adds variable to the end of the word
//     console.log(text.substring(1)) // returns part of string from start index up to the end of the string if no end index is supplied.
// };

if (vowels.includes(text[0].toLowerCase())) { // determines whether a given string may be found within this string
    console.log(text.substring(1).concat(toVowel))
};



// const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     console.log(`Computer: ${computerChoice}`);

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


