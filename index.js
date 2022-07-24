let player = { //OBJECTS IN Js

    name: "Ankita", chips: 145
}


let hasBlackJack = false
let isAlive = false
let cards = []
let sum = 0
let message = ""

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el") //This could also be used instead of the above command
// console.log(messageEl)

let cardEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : " + "$" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10 //treating king queen jack as 10
    }
    else if (randomNumber === 1) {
        return 11 //treating ace as 11
    }
    else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }


    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card? 🤔 "
    }
    else if (sum === 21) {
        message = "Wohooo!! You've got BlackJack! 🥳"
        hasBlackJack = true
    }
    else if (sum > 21) {
        message = "You're out of the game! 😬 "
        isAlive = false
    }
    messageEl.textContent = message
}

// console.log(message)

//== in Js can't differentiate between a string and a number, that's why we use === here

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

