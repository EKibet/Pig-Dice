//Business Logic
var firstPlayer;
var secondPlayer;

var dieRoll=function(){
  return Math.floor(Math.random()*6)+1;
}
function ActivePlayer(round){
  this.roll=0;
  this.currentScore=0;
  this.totalScore=0;
  this.round=round;
  this.playerName;
}
ActivePlayer.prototype.roll1=function(){
  if (this.roll===1) {
    this.currentScore=0;
    alert(this.playerName+",your roll is a 1! Your turn is over!!")
  }
  else {
    this.currentScore+=this.roll;
  }
}
ActivePlayer.prototype.holdGame=function(){
  this.totalScore+=this.currentScore;
  this.currentScore=0;
  elert(this.playerName+",Change player");
}
ActivePlayer.prototype.findWinner=function(){
  if(this.totalScore>=100){
    alert("Bravo! "+this.playerName+",you are the winner!");
  }
}
ActivePlayer.prototype.newGame=function(){
  this.roll=0;
  this.currentScore=0;
  this.totalScore=0;
  this.playerName="";
}
var resetField=function(){
  $(".player1").val("");
  $(".player2").val("");
}


//UI interface Logic

$(document).ready(function(){
  $("button#play").click(function(event){
    event.preventDefault();
    firstPlayer= new ActivePlayer(true);
    secondPlayer= new ActivePlayer(false);
    var player1Name=$(".player1").val();
    $("#player1Name").text(player1Name);
    var player2Name=$(".player2").val();
    $("#player2Name").text(player2Name);

    firstPlayer.playerName=player1Name;
    secondPlayer.playerName=player2Name;
  });
  $("button#playerOneRoll").click(function(event){
    firstPlayer.roll=dieRoll();
    $("#die-roll-1").text(firstPlayer.roll);
    firstPlayer.roll1();
    $("#round-total-1").text(firstPlayer.currentScore);
  });
  $("button#playerTwoRoll").click(function(event){
    secondPlayer.roll=dieRoll();
    $("#die-roll-2").text(secondPlayer.roll);
    secondPlayer.roll1();
    $("#round-total-2").text(secondPlayer.currentScore);
  });
  $("button#playerOneHold").click(function(event){
    firstPlayer.holdGame();
    $("#total-score-1").text(firstPlayer.totalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    firstPlayer.findWinner();
  });
  $("#playerTwoHold").click(function(event){
    secondPlayer.holdGame();
    $("#total-score-1").text(secondPlayer.totalScore);
    $("#total-score-1").text(secondPlayer.totalScore);
    $("#die-roll-1").empty();
    secondPlayer.findWinner();
  });
});
