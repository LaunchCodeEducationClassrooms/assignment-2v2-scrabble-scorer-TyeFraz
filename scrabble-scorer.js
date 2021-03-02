// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

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

const vowelPointStructure = {
  1: ['D', 'G', 'L', 'N', 'R', 'S', 'T','B', 'C', 'M', 'P','F', 'H', 'V', 'W', 'Y','K','J', 'X','Q', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
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
  console.log(letterPoints)
	return letterPoints;
 }
 

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
  let word=input.question("\nEnter a word to score:");

   
  return word
};

function simpleScore(word){
  let simpleScore = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	 simpleScore += 1
 
	  }console.log(simpleScore)
    return simpleScore
	}
function vowelBonusScore (word) {
word = word.toUpperCase();
	let vowelBonusScore = 0;
  let vowelBonusScoreString=""
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			vowelBonusScoreString += `Points for '${word[i]}': ${pointValue}\n`
      vowelBonusScore+=Number(pointValue)
		 }
 
	  }

	}
  console.log(`${vowelBonusScoreString}\nscore for ${word}: ${vowelBonusScore}`)
	return vowelBonusScore;
 }
function scrabbleScore(word){
  word = word.toLowerCase();
	let scrabbleScore = 0;
 let scrabbleScoreString=""
	for (let i = 0; i < word.length; i++) {
 
	  for (item in newPointStructure) {
        
		 if(item===(word[i])) {
       
			scrabbleScoreString += `Points for '${word[i]}': ${newPointStructure[item]}\n`;
      scrabbleScore+= newPointStructure[item]
      
		 }
 
	  }
  }console.log(`${scrabbleScoreString } \nscore for ${word}: ${scrabbleScore}`)
  

  return scrabbleScore;
};



const scoringAlgorithms =[ Object({ name: 'Simple Score', description: 'Each letter is worth 1 point.', scoringFunction: 'simpleScore'}), Object({ name: 'Bonus Vowels', description: 'Vowels are 3 pts, consonants are 1 pt.', scoringFunction: 'vowelBonusScore' }), Object({ name: 'Scrabble', description: 'The traditional scoring algorithm.', scoringFunction: 'scrabbleScore' }) ] ;
  

function scorerPrompt(word) {
let scorerPrompt=input.question("Which scoring algorithm would you like to use?\n \n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\n\nEnter 0, 1, or 2:")
if (scorerPrompt==="2"){
   console.log("algorithm name: ", scoringAlgorithms[2].name);
console.log("scorerFunction result: ", scrabbleScore(word))
}if (scorerPrompt==="0"){
  console.log("algorithm name: ", scoringAlgorithms[0].name);
console.log("scorerFunction result: ", simpleScore(word))
}if(scorerPrompt==="1") {console.log("algorithm name: ", scoringAlgorithms[1].name);
console.log("scorerFunction result: ", vowelBonusScore(word))
};

};






function transform(object) {
  let pointStructure={}
for (let a=1;a<11;a++){
for(pointValue in oldPointStructure[a]){
  let hold=oldPointStructure[a]
  hold=hold.join().toLowerCase()
  hold=hold.split(",")
  
  let it=hold.length
 for (let i=0; i<it;i++){
  pointStructure[hold[i]]=a};
  
  
}
}return pointStructure
};

let newPointStructure=transform(oldPointStructure);

function runProgram() {
  let word=initialPrompt();
   scorerPrompt(word);
   
    
   };

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

