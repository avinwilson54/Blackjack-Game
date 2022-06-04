
let firstCard = 1 ;
let secondCard = 11 ;
let hasBlackjack = false ;
let isAlive = true ;
let message = "" ;
let messageEl = document.getElementById("message-el") ;
let sumEl = document.querySelector("#sum-el") ; // querySelector s another powerful way of selecting html elements based on their classes or id's

let sum = firstCard + secondCard  ;

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? " ;
        sumEl.textContent = "Sum: " + sum ;
    } else if (sum === 21) {
        message =  "You've got Blackjack! " ;
        sumEl.textContent = "Sum: " + sum ;
        hasBlackjack = true ;
    } else {
        message = "You're out of the game! " ;
        sumEl.textContent = "Sum: " + sum ;
        isAlive = false ;
    }
    messageEl.textContent = message ;
}

startGame() ;
