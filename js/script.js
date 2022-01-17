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
let word = "magnolia                                                                                                                                                                        ";
let guessedLetters =[];
let remainingGuesses = 8;
const getWord = async function(){
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt")
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random()*wordArray.length)
    word = wordArray[randomIndex].trim();
    placeHolder(word)
}
getWord()
const placeHolder = function(word){
    const placeHolderLetter =[];
    for(const letter of word) {
        console.log(letter);
        placeHolderLetter.push("●")
        console.log(placeHolderLetter);

    }
    wordInProgress.innerText = placeHolderLetter.join("");
}

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
        message.innerText = "you have already guessed that letter. please try again"
    } else{
        guessedLetters.push(guess);
       countGuess(guess);
        showedGuessedLetter();
        updateTheWord(guessedLetters)

    }


}
const showedGuessedLetter = function() {
    guessLetters.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerHTML = letter;
        guessLetters.append(li);
    }

}
const updateTheWord = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
       revealWord.push(letter.toUpperCase());
        } else{
            revealWord.push("●")
        }

}
    wordInProgress.innerText = revealWord.join("");
    checkTheWord()
}
const countGuess = function(guess){
    const upperWord = word.toUpperCase()
    if(!upperWord.includes(guess)){
        message.innerText = `Sorry, the word has no ${guess}.`;
        remainingGuesses -= 1;
    }
    else{
        message.innerText = `Good guess! The word has the letter ${guess}.`;
    }
    if (remainingGuesses === 0) {
        message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`
        startOver();
    }
    else if (remainingGuesses === 1){
        span.innerText = `${remainingGuesses} guess`;
    }
    else
        {
        span.innerText = `${remainingGuesses} guesses`;
    }


}
const checkTheWord = function(){
    if(word.toUpperCase() === wordInProgress.innerText){
        message.classList.add("win");
        message.innerHTML = "<p class=\"highlight\">You guessed the correct the word! Congrats!</p>"
        startOver();
    }

}
const startOver = function(){
    button.classList.add("hide");
    remainingParagraph.classList.add("hide")
    guessLetters.classList.add("hide")
    playAgain.classList.remove("hide")

}
playAgain.addEventListener("click",function(){
    message.classList.remove("win");
    guessedLetters =[];
    remainingGuesses = 8;
    span.innerText = `${remainingGuesses} guesses`;
    guessLetters.innerText = "";
    message.innerText ="";
    getWord()
    button.classList.remove("hide");
    playAgain.classList.add("hide");
    remainingParagraph.classList.remove("hide")
    guessLetters.classList.remove("hide")


})