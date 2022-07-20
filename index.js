//make an object to store in the name of the player and prize
let player = {
    name: "David",
    prize: 200
}
//declaring the variables in the game
let cards = []
let sumCard = 0
let blackJack = false
let isAlive = false
let message = ""
//get hold of the sum into sumEl variable
let sumEl = document.getElementById("sum-el")
//the displayed card into the cardEl variable
let cardEl =  document.getElementById("card-el")
//the output message into the messageEl variable
let messageEl = document.getElementById("message-el")
//the player edit
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.prize

//determining the random number to be disolayed on the game using math.floor and math.random
function getRandomCard(){
    let randonNumber = Math.floor(Math.random() * 13) + 1
    if (randonNumber > 10){
        return 10
    } else if (randonNumber === 1){
        return 11
    } else {return randonNumber}
}

//declaring startgame into another function
function runGame() {
isAlive = true
let card1 = getRandomCard()
let card2 = getRandomCard()
cards = [card1, card2]
sumCard = card1 + card2
    gameStart()
}


//declare the startgame function
function gameStart() {
  cardEl.textContent = "Cards:"
 for (let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " "
 }

 sumEl.textContent = "Sum: "+ sumCard
if(sumCard <= 20){
message = "Do you want to draw a new card?"
} else if(sumCard === 21){
    message = "You've got a blackjack"
    blackJack = true
} else {
    message = "You are out of the game"
    isAlive = false
}
messageEl.textContent = message
}

//newcard function
function newCard(){
    if (isAlive === true && blackJack === false){
    let card3 = getRandomCard()
    //add the third card onto the array
    sumCard += card3
    //push the third card onto the array
    cards.push(card3)
    //make the game start all over by calling the function gameStart()
    gameStart()
    }
} 
