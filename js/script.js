// unordered list for player's to guess the letter
const guessedLetters = document.querySelector(".guessed-letters");
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
    const guess = textLetter.value
    console.log(guess);
    textLetter.value = "";

})