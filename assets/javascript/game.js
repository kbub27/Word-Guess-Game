const bands = ["nirvana", "pearl jam", "soundgarden", "everclear", "flowerhead", "smashing pumpkins", "stone temple pilots", "melvins"];


var word = document.getElementById("word");
var wins = document.getElementById("userWins");
var losses = document.getElementById("userLosses");
var alrdy = document.getElementById("guessesMade");
var remaining = document.getElementById("guessesLeft");

const game = {

    win: 0,
    lose: 0,
    guessesLeft: 0,
    choices: [],

    generateWord: function() {
        let randNum = Math.floor(Math.random() * bands.length);
        let finalWord = bands[randNum];
        console.log(finalWord);
    },

    userChoice: function() {

        document.onkeyup = function(event) {
            let userGuess = event.key.toLowerCase();
            
            if (game.choices.indexOf(userGuess) === -1) {
                game.choices.push(userGuess);
                console.log(userGuess);
            }
        }
    },


};

game.generateWord();
game.userChoice();