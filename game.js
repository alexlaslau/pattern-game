var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
    var random = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[random];
    gamePattern.push(randomChosenColor);
}


nextSequence();