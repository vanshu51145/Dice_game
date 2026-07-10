//generate a random number between 1 and 6 using Math.random() and Math.floor()
// create a dice image filename dynamically(eg, dice1.png) based on the random number
//update the src attribute of the first dice image using setAttribute() method
//generate a another random number for the second player's dice
//update the src attribute of the second dice image using setAttribute() method
//compare both random number using if...else statement
//display "Player 1 Wins!" if the first player's number is greater 
//display "Player 2 Wins!" if the second player's number is greater
//display "Draw!" if both players get the same number
//change the <h1> text dynamically using innerHTML to show the game result
//select HTML elements using document.querySelector() 
//select multiple images using document.querySelectorAll() 
//refresh the page to roll the dice again and observe the updated result
//Bonus:Add  a Role Dice button that generates new dice values without refreshing the page

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1= "images/" + randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2= "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}   
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}  

 var rollDiceButton = document.querySelector("button");
rollDiceButton.addEventListener("click", function() {
    location.reload();
});
rollDiceButton.addEventListener("click", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImageSource1= "images/" + randomDiceImage1;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);
});

 var rollDiceButton2 = document.querySelector("button");
rollDiceButton2 .addEventListener("click", function() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";     
    var randomImageSource2= "images/" + randomDiceImage2;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);
} );