let resultDisplay = document.getElementById('result')

let userChoice
let compChoice
let result

document.getElementById('rock').addEventListener('click', (e) => {
    userChoice = 'rock'
    genCompChoice()
    getResult()
    
})
document.getElementById('paper').addEventListener('click', (e) => {
    userChoice = 'paper'
    genCompChoice()
    getResult()
})
document.getElementById('scissors').addEventListener('click', (e) => {
    userChoice = 'scissors'
    genCompChoice()
    getResult()
})

function genCompChoice() {
    let num = Math.floor(Math.random() * 3)

    if (num === 0) {
        compChoice = 'rock'
    }
    if (num === 1) {
        compChoice = 'paper'
    }
    if ( num === 2) {
        compChoice === 'scissors'
    }
}
function getResult() {
    if (userChoice === compChoice) {
        result = 'Draw. You both suck.'
    }
    if (userChoice === 'rock' && compChoice === 'paper') {
        result = 'Paper beats rock. You lose.'
    }
    if (userChoice === 'rock' && compChoice === 'scissors') {
        result = 'Rock beats scissors. You win.'
    }
    if (userChoice === 'paper' && compChoice === 'rock') {
        result === 'Paper beats rock. You win.'
    }
    if (userChoice === 'paper' && compChoice === 'scissors') {
        result = 'Scissors beats paper patrick. You lost nerd.'
    }
    if (userChoice === 'scissors' && compChoice === 'rock') {
        result = 'Rock beats scissors. Are you even trying?'
    }
    if (userChoice === 'scissors' && compChoice === 'paper') {
        result = 'Scissors beats paper. You win.'
    }
    resultDisplay.innerHTML = result
}
