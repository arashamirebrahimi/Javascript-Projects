
let sum = 0;
let cards=[];

let hasBlackJack = false;

let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let namePlace = document.getElementById("nameholder");
let Name1 = document.getElementById("name");
let player = {
    name:"Your Name",
    chips:100
}
playerEl.innerHTML = player.name + ": $" + player.chips; 

function getRandomcard(){
let randomNumber = Math.floor(Math.random()*13+1);
if (randomNumber > 10){
    return 10;
}
else if (randomNumber == 1){
    return 11;
}
else {
    return randomNumber;
}

}
function save(){
    namePlace.textContent = "Name: " + Name1.value;
    Name1.value="";
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomcard();
let secondCard = getRandomcard();
 cards = [firstCard,secondCard ];
 sum = firstCard + secondCard; 
    renderGame();
}
function renderGame(){
if (sum <= 20){
    message = "Do You Want To Draw Another Card?";
}
else if(sum === 21){
    message = "Black Jack";
    hasBlackJack = true;
}
else{
    message = "Busted!!!!!";
    isAlive = false;
}
cardsEl.textContent = "Cards: ";
for(let i = 0;i < cards.length ; i++){
    cardsEl.textContent += cards[i]+" ";
}
sumEl.textContent = "Sum: " + sum;
messageEl.textContent = message;
}
function newCard(){
   // console.log("Drawn new card!")
   if (isAlive == true && sum < 21){
   let card = getRandomcard();
   sum += card;
    cards.push(card);
   renderGame();
   }
   else{
       messageEl.textContent = "No More Cards,Game is Done!!!!";
   }
}
