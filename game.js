var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started=false;
var level=0;



$(document).keypress(function() {

  if(!started){
    $("#level-title").text("Level 1");
    userClickedPattern=[];
    gamePattern=[];
    started=true;
    nextSequence(); 
  }
});////

$(".btn").click(function () {
  if(started){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
   animatePress(userChosenColour);
   playsound(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
}}
);


function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
 
  // var audio = new Audio(randomChosenColour + ".mp3");

  // audio.play();
}

function playsound(name) {
  var audio = new Audio(name + ".mp3");

  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function (){
    $("#"+currentColour).removeClass("pressed");
  },100);
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success")
  
  if(userClickedPattern.length===gamePattern.length){
    setTimeout(function(){
      userClickedPattern=[];
      nextSequence();
    },1000);
  }
}
  else{
    console.log("wrong");
    var audio =new Audio("wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    started=false;

    started=false;



    }

    
  }

  function startOver(){
    level=0;
    gamePattern=[];
    started=false;
  }




