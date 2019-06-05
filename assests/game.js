
///Generate a random number 
///Assign a random value to the crystals
///When the user clicks the crystal it adds a randnom number to the total
///If the number matches the score the user wins 
///Add to the win counter
///If the number goes over the user loses
///Add to loss counter
///Start over

var userScore = 0; 
var userWins = 0; 
var userLosses = 0; 
var redScore = (Math.floor(Math.random() * 12) + 1); 
var blueScore = (Math.floor(Math.random() * 12) + 1); 
var greenScore = (Math.floor(Math.random() * 12) + 1); 
var purpleScore = (Math.floor(Math.random() * 12) +1); 
var randomNumber = Math.floor(Math.random() * 120) + 12; 

function reset () {

    randomNumber = (Math.floor(Math.random() * 120) + 12);  
    $("#random-number").text("Number: " + randomNumber); 
    $("#random-number").css("text-align", "center", "font-size", "18px"); 
    console.log(randomNumber); 
    userScore = 0; 
    $("#score").text("Your Score" + " "); 

}

reset(); 

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

