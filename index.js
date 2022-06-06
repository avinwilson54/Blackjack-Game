
let firstCard = getRandomCard() ;
let secondCard = getRandomCard() ;
let cards = [firstCard, secondCard] ;
let hasBlackjack = false ;
let isAlive = true ;
let message = "" ;
let messageEl = document.getElementById("message-el") ;
let sumEl = document.querySelector("#sum-el") ; // querySelector s another powerful way of selecting html elements based on their classes or id's
let cardsEl = document.querySelector("#cards-el") ;
let sum = firstCard + secondCard  ;
 
function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1 ;
    if (randomNumber > 10) {
        return 10;
    } else if(randomNumber === 1) {
        return 11;
    } else {
    return randomNumber ;
}
}

function startGame() {
    renderGame() ;
} 

function renderGame() {
    cardsEl.textContent = "Cards: " ;
    for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " " ;
    }
    sumEl.textContent = "Sum: " + sum ;
    if (sum <= 20) { 
        message = "Do you want to draw a new card? " ;
    } else if (sum === 21) {
        message =  "You've got Blackjack! " ;
        hasBlackjack = true ;
    } else {
        message = "You're out of the game! " ;
        isAlive = false ;
    }
    messageEl.textContent = message ;
}

function newCard() {
    console.log("Drawing a new card from the deck!") ;
    let card = getRandomCard() ;
    sum += card ;
    cards.push(card) ;
    renderGame() ;
}