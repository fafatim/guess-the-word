// unordered list for player's to guess the letter
const guessLetters = document.querySelector(".guessed-letters");
//button with the text in it
const button = document.querySelector(".guess")
//text input
const textLetter = document.querySelector(".letter");
// word in progress paragraph
const wordInProgress = document.querySelector(".word-in-progress");
// remaining guesses paragraph
const remainingParagraph = document.querySelector(".remaining");
// span for the remaining guesses paragraph
const span = document.querySelector("span");
//empty paragraph for message to display
const message = document.querySelector(".message");
// play again button
const playAgain = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters =[];

const placeHolder = function(word){
    const placeHolderLetter =[];
    for(const letter of word) {
        console.log(letter);
        placeHolderLetter.push("●")
        console.log(placeHolderLetter);

    }
    wordInProgress.innerText = placeHolderLetter.join("");
}
placeHolder(word)
button.addEventListener("click",function(e){
    e.preventDefault();
    message.innerText = "";
    const guess = textLetter.value
    const goodGuess = validateTheInput(guess);
    if(goodGuess){
        makeGuess(guess)
    }
    textLetter.value = "";

})
const validateTheInput = function(input){
    const acceptedLetter = /[a-zA-Z]/
    if(input.length === 0 ){
    message.innerText = "Please enter a letter."
    }else if(input.length>1){
    message.innerText = "Please enter a single letter."
    }else if(!input.match(acceptedLetter)){
        message.innerText = "Please enter a letter from A to Z."
    }else{
        return input;
    }
}
const makeGuess = function(guess){
    guess = guess.toUpperCase();
    if(guessedLetters.includes(guess) ){
        message.innerText = "you have already guessed that letter and please try again"
    } else{
        guessedLetters.push(guess)
        console.log(guessedLetters)
    }
}