let randomNumber = parseInt(Math.random()*100 +1);
const submit = document.querySelector('#inputsubmit');
const userInput =document.querySelector('#inputnumber');
const prevGuesses = document.querySelector('.gueses');
const remaining = document.querySelector('.lastresult');
const lowOrhi = document.querySelector('.loworhigh');
const startOver = document.querySelector('.resultparas');

const p = document.createElement('p');

let prev =  [];
let numguess = 1;
let  playgame = true;
    if(playgame){
        submit.addEventListener('click' , function(e){
            e.preventDefault();
            const guess = parseInt(userInput.value);
            validate(guess);
        })
    }
function validate(guess){
    if(isNaN(guess)){
        alert('Please enter Valid Number');
    }
    else if(guess < 1){
        alert('Please Enter a number more than 1 ');
    }
    else if(guess > 100){
        alert('Please Enter a number less than 100 ');
    }
    else{
        prev.push(guess);
        if(numguess === 11){
            displayGuess(guess);
            displayMessage(`Game Over ! The Number Was ${randomNumber}`);
            endgame();
        }
        else{
            displayGuess(guess);
            check(guess);
        }
    }
}

function check(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You Guessed correct`)
        endgame();
    }
    else if(guess > randomNumber){
        displayMessage(`Too High`);
    }
    else if(guess < randomNumber){
        displayMessage(`Too Low`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    prevGuesses.innerHTML += `${guess}, `
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}

function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start a new Game </h2>`
    startOver.appendChild(p);
    playgame = false;
    newgame();
}

function newgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random()*100 +1);
        prev = [];
        numguess = 1;
        prevGuesses.innerHTML = '';
        remaining.innerHTML = `${11 - numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playgame = true;
    })

}