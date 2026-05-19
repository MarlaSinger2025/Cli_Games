// Convert each word to Pig Latin:

//     If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add "ay."
//         Example: Happy = appyh + ay = appyhay

//     If a word starts with two consonants move the two consonants to the end of the word and add "ay."
//         Example: Child = Ildch + ay = Ildchay

//     If a word starts with a vowel add the word "way" at the end of the word.
//         Example: Awesome = Awesome +way = Awesomeway

let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

const text = process.argv.slice(2); // transforms everything starting from index 2 into an array


const translation = text.map(word => { //map () creates a new array populated with the results of calling a provided function on every element in the calling array
    word = word.toLowerCase(); // converts everything to lowercase 
    if (vowels.includes(word[0])) { // word[0] checking the first letter of the word
    return word + 'way'
} else if (
    consonants.includes(word[0]) &&
    consonants.includes(word[1])) {
        return word.slice(2) + word.slice(0, 2) + 'ay'
} else if (
    consonants.includes(word[0]) &&
    vowels.includes(word[1])) {
        return word.slice(1) + word.slice(0, 1) + 'ay'
}}).join(' ');

console.log('Translation:', translation);
