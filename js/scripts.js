//Business Logic
var firstPlayer;
var secondPlayer;

var dieRoll=function(){
  return Math.floor(Math.random()*6)+1;
}
function ActivePlayer(round){
  this.roll=0;
  this.currentScore=0;
  this.globalScore=0;
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
  this.globalScore += this.currentScore;
  this.currentScore=0;
  alert(this.playerName+",Change player");
}
ActivePlayer.prototype.findWinner=function(){
  if(this.globalScore>=100){
    alert("Bravo! "+this.playerName+",you are the winner!");
  }
}
ActivePlayer.prototype.newGame=function(){
  this.roll=0;
  this.currentScore=0;
  this.globalScore=0;
  this.playerName="";
}
var resetField=function(){
  $(".player1").val("");
  $(".player2").val("");
}
function validation(){
  var player1Name=document.forms["players"]["Player1"];
  var player2Name=document.forms["players"]["Player2"];
  if(player1.value=""){
    window.alert("To proceed,Please enter Player One name");
    return false;
  }
  if(player2.value=""){
    window.alert("To proceed,Please enter Player Two name");
    return false;
  }
  return true;
}


//UI interface Logic

$(document).ready(function(){
  $("button.play").click(function(event){
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
    $("#total-score-1").text(firstPlayer.globalScore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
    firstPlayer.findWinner();
  });
  $("button#playerTwoHold").click(function(event){
    secondPlayer.holdGame();
    $("#total-score-2").text(secondPlayer.globalScore);
    $("#round-total-2").empty();
    $("#die-roll-1").empty();
    secondPlayer.findWinner();
  });
});
