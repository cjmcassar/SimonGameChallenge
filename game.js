
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence()
{
  randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  //console.log(randomChosenColour);
  //return randomChosenColour;
}

nextSequence();
