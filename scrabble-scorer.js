// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
 let userResponse = input.question("Let's play some scrabble!\nEnter a word to score: ");
 return userResponse;
};


let simpleScorer = (word) => {
   let score = word.length;

   return score;
}
   
let vowelBonusScorer = (word) => {
    word = word.toUpperCase();
    let score = 0;
    
   for (let k = 0; k < word.length; k++) {
      if (word[k] === "A" || word[k] === "E" || word[k] === "I" || word[k] === "O" || word[k] === "U") {
           score = Number(score + 3)
      } else {
          score = Number(score + 1)
      }
    }  
   return score
}

function scrabbleScorer(word) {
   let score = 0;
   const lowercaseWord = word.toLowerCase();
 
   for (let i = 0; i < lowercaseWord.length; i++) {
     const letter = lowercaseWord[i];
     if (newPointStructure.hasOwnProperty(letter)) {
       score += newPointStructure[letter];
     }
   }
 
   return score;
 }

const scoringAlgorithms = [
   objectOne = {name: "Simple Score", description: "Each letter is worth 1 point.", scorerFunction: simpleScorer},
   objectTwo = {name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt.", scorerFunction: vowelBonusScorer},
   objectThree = {name: "Scrabble", description: "The traditional scoring algorithm.", scorerFunction: scrabbleScorer}
]


function scorerPrompt(userInput) {
   console.log("Which scoring algorithm would you like to use?\n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble uses scrabble point system");
   scorerChoice = input.question("Enter 0, 1, or 2: ");
    if (scorerChoice === "0"){
    console.log(`Score for ${userInput}: ` + simpleScorer(userInput));
   } else if (scorerChoice === "1") {
      console.log(`Score for ${userInput}: ` + vowelBonusScorer(userInput));
   } else {
      console.log(`Score for ${userInput}: ` + scrabbleScorer(userInput));
} 
}

function transform(oldPointStructure) {
   let newPointStructure = {};
 
   for (let key in oldPointStructure) {
     let value = parseInt(key);
 
     for (let i = 0; i < oldPointStructure[key].length; i++) {
       let letter = oldPointStructure[key][i].toLowerCase();
       newPointStructure[letter] = value;
     }
   }
 
   return newPointStructure;
 }
let newPointStructure = transform(oldPointStructure);


function runProgram() {
   let userWord = initialPrompt();
   scorerPrompt(userWord);
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
