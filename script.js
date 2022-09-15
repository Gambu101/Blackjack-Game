
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message =""
let messageEl =  document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let player  = {
    name: "User",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.innerHTML = player.name + ": $" + player.chips

function getRandomCard(){
    let x = Math.floor(Math.random()*13)+1
    if(x>10){
        return 10
    }else if(x==1){
        return 11
    }else{
        return x
    }
}
function renderGame(){
    
    if (sum <= 20) {
      message = "Do you want to draw another card?";
    } else if (sum == 21) {
      message = "BlackJack! You have won";
      hasBlackjack = true;
    } else {
      message = "You have lost out! Let's try again";
      isAlive = false;
    }
    messageEl.innerHTML = message;
    cardsEl.innerHTML = "Cards: ";
    for (i = 0; i < cards.length; i++) {
      cardsEl.innerHTML += cards[i] + ", ";
    }
    sumEl.innerHTML = "Sum: " + sum;
}

function newCard(){
    if(isAlive==true && hasBlackjack== false){
        nu_card = getRandomCard();
        cards.push(nu_card);
        console.log(cards);
        sum += nu_card;
        renderGame();
    }
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    isAlive= true
    return renderGame()
}