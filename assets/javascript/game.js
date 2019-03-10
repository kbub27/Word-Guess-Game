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

    userChoice: function () {
        const word = this.guessingWord;

        document.onkeyup = function (event) {
            let userGuess = event.key.toLowerCase();

            for (let i = 0; i < word.length; i++) {

                if (userGuess === word.charAt(i)) {

                    if (game.correctChoices.indexOf(userGuess) === -1) {
                        game.correctChoices.push(userGuess);
                        console.log(game.correctChoices);
                    }
                }
            };
        }
    },
};

game.generateWord();
game.userChoice();