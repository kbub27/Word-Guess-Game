const bands = ["nirvana", "pearl jam", "soundgarden", "everclear", "flowerhead", "smashing pumpkins", "stone temple pilots", "melvins"];


const shownWord = document.getElementById("word");
const wins = document.getElementById("userWins");
const losses = document.getElementById("userLosses");
const alrdy = document.getElementById("guessesMade");
const remaining = document.getElementById("guessesLeft");

const game = {

    win: 0,
    lose: 0,
    guessesLeft: 0,
    correctChoices: [],
    guessingWord: "",
    incorrectChoices: [],

    generateWord: function () {
        const randNum = Math.floor(Math.random() * bands.length);
        this.guessingWord = bands[randNum];
    },

    userChoice: function (keyPress) {
        const word = this.guessingWord;
        console.log(word);
        
            let userGuess = keyPress.toLowerCase();
        // LOOP THROUGH ALL LETTERS IN WORD ARRAY
            for (let i = 0; i < word.length; i++) {
                // CHECKS USERGUESS AGAINST SPECIFIC CHARACTER IN ARRAY
                if (userGuess === word.charAt(i)) {
                    // PUSHES USERGUESS INTO ARRAY IF ITS NOT ALREADY IN THERE
                    if (game.correctChoices.indexOf(userGuess) === -1) {
                        game.correctChoices.push(userGuess);
                        console.log(game.correctChoices);
                    } 
                // PUSHES INCORRECT CHOICES INTO THEIR OWN ARRAY
                } 
            };
    },
};

game.generateWord();
document.onkeyup = function (event) {
    game.userChoice(event.key);
}