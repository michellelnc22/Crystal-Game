

var userScore = 0; 
var userWins = 0; 
var userLosses = 0; 

//Generates a random number for each of the crystals 
var redScore = (Math.floor(Math.random() * 12) + 1); 
var blueScore = (Math.floor(Math.random() * 12) + 1); 
var greenScore = (Math.floor(Math.random() * 12) + 1); 
var purpleScore = (Math.floor(Math.random() * 12) +1); 

//Generates a random number between 1 and 120 
var randomNumber = Math.floor(Math.random() * 120) + 12; 

//Reset the game 
function reset () {

    randomNumber = (Math.floor(Math.random() * 120) + 12);  
    $("#random-number").text("Number: " + randomNumber); 
    $("#random-number").css("text-align", "center", "font-size", "18px"); 
    console.log(randomNumber); 
    userScore = 0; 
    $("#score").text("Your Score: " + " "); 

}

reset(); 

//The Red Gem
$("#red").on("click", function() {
    userScore += redScore;

if (userScore < randomNumber) {
    $("#score").text("Your Score: " + userScore); 
}   else if (userScore > randomNumber) {
    userLosses++; 
    $("#score").text("Your Score: " + userScore); 
    $("#user-losses").text("Losses: " + userLosses); 
    alert("You lose! Play again?"); 
    reset(); 
} else {
    userWins++; 
    $("#score").text("Your Score: " + userScore); 
    $("user-wins").text("Wins: " + userWins); 
    alert("You win! Try again?"); 
    reset(); 
}; 

}); 

//The Blue Gem
$("#blue").on("click", function() {
userScore += blueScore; 

if (userScore < randomNumber) {
    $("#score").text("Your Score: " + userScore); 
}   else if (userScore > randomNumber) {
    userLosses++; 
    $("#score").text("Your Score: " + userScore); 
    $("#user-losses").text("Losses: " + userLosses); 
    alert("You lose! Play again?"); 
    reset(); 
} else {
    userWins++; 
    $("#score").text("Your Score: " + userScore); 
    $("user-wins").text("Wins: " + userWins); 
    alert("You win! Try again?"); 
    reset(); 
}; 

}); 

//The Purple Gem
$("#purple").on("click", function() {
userScore += purpleScore; 

if (userScore < randomNumber) {
    $("#score").text("Your Score: " + userScore); 
}   else if (userScore > randomNumber) {
    userLosses++; 
    $("#score").text("Your Score: " + userScore); 
    $("#user-losses").text("Losses: " + userLosses); 
    alert("You lose! Play again?"); 
    reset (); 
} else {
    userWins++; 
    $("#score").text("Your Score: " + userScore); 
    $("user-wins").text("Wins: " + userWins); 
    alert("You win! Try again?"); 
    reset (); 
}; 

}); 

//The Green Gem
$("#green").on("click", function() {
userScore += greenScore;  

if (userScore < randomNumber) {
    $("#score").text("Your Score: " + userScore); 
}   else if (userScore > randomNumber) {
    userLosses++; 
    $("#score").text("Your Score: " + userScore); 
    $("#user-losses").text("Losses: " + userLosses); 
    alert("You lose! Play again?"); 
    reset(); 
} else {
    userWins++; 
    $("#score").text("Your Score: " + userScore); 
    $("user-wins").text("Wins: " + userWins); 
    alert("You win! Try again?"); 
    reset (); 
}; 

}); 

