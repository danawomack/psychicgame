

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessesSoFar.push(userGuess);


    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
        guessesSoFar.length = 0;
    }
    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;

        guessesLeft = 9;
        guessesSoFar.length = 0;
    }

    if (guessesSoFar.length == 9) {
        resetObject.value

    }


    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesleft').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guessessofar').innerHTML = "Your Guesses so far:" + guessesSoFar;



} 