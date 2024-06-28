function takeInput(){
    var player1 = prompt("Enter the name of Player-1:");
    var player2 = prompt("Enter the name of Player-2:");
    var arr = [player1, player2];
    document.querySelector(".p1").innerHTML = player1;
    document.querySelector(".p2").innerHTML = player2;
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    return arr;
}

var players = takeInput();

function diceGame(){
    var num1 = Math.floor(Math.random()*6)+1;
    var num2 = Math.floor(Math.random()*6)+1;
    if(num1 == 1){
      document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    }
    if(num1 == 2){
      document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    }
    if(num1 == 3){
      document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    }
    if(num1== 4){
      document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    }
    if(num1 == 5){
      document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    }
    if(num1 == 6){
      document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

    if(num2 == 1){
      document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    }
    if(num2 == 2){
      document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    }
    if(num2 == 3){
      document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    }
    if(num2== 4){
      document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    }
    if(num2 == 5){
      document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    }
    if(num2 == 6){
      document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

    if(num1 > num2){
      document.querySelector("h1").innerHTML = players[0]+" wins!!";
    }
    if(num1 < num2){
      document.querySelector("h1").innerHTML = players[1]+" wins!!";
    }
    if(num1 === num2){
      document.querySelector("h1").innerHTML = "It's a draw"
    }
  }