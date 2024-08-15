'use strict';

console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = "not guessing..."

document.querySelector('.number').textContent = "!"

// document.querySelector('.guess').value = 25;
const numbers = Math.trunc(Math.random() * 20) + 1;
console.log(numbers);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const value = document.querySelector('.guess').value
    console.log(value);
    // if (document.querySelector('.score').textContent === 0) {

    // }

    if (numbers > value) {
        if (score > 1) {
            document.querySelector('.message').textContent = "too low"
            document.querySelector('.score').textContent = --score
        }
        else {
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0

        }
    }
    else if (numbers < value) {
        if (score > 1) {
            document.querySelector('.message').textContent = "too high"
            document.querySelector('.score').textContent = --score
        }
        else {
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0

        }
    }
    else {


        document.querySelector('.message').textContent = "correct"
        document.querySelector('.number').textContent = numbers
        document.querySelector('.highscore').textContent = document.querySelector('.score').textContent
        document.querySelector('body').style.backgroundColor = 'green'
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

    }
})

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.message').textContent = "Start guessing.."
    document.querySelector('.number').textContent = "!"
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''

})