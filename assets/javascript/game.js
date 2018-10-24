var wins = 0;
var losses = 0;
var crystal1 = 0
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var randomNum = 0;
var totalscore = 0;
var backgroundTune = document.getElementById("playMaze");


function crystalMethod() {
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
}

function winSound() {
    document.getElementById('audiotag1').play();
}

function lossSound() {
    document.getElementById('audiotag2').play();
}

function playBkgrd() {
    backgroundTune.addEventListener("click", function(){
    document.getElementById("audiotag3").muted = false;
    document.getElementById("audiotag3").play();
    document.getElementById("audiotag3").loop = true;
  });
}

function stopBkgrd() {
    document.getElementById("stopMaze").addEventListener("click", function(){
    document.getElementById("audiotag3").muted = true;
  })
};

function gameStart() {
    randomNum = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#random-num").text(randomNum);
    totalscore = 0;
    updateScore();
    playBkgrd();
    stopBkgrd();
    crystalMethod();   
}

function updateScore() {
    $("#total-score").text(totalscore);
};

function winOrLose() {
    if (randomNum === totalscore) {
        wins++;
        console.log(wins);  
        $("#wins").text(wins);
        $("#score-board").text("YOU WIN");
        winSound();
        gameStart();

    } else if (totalscore > randomNum) {
        losses++;
        console.log(losses);
        $("#losses").text(losses);
        $("#score-board").text("YOU LOSE");
        lossSound();
        gameStart();
    }
}

$(document).ready(function() {
    gameStart();
});


$("#crystal-1").on("click", function() {
   totalscore += crystal1;
   updateScore();
   winOrLose();
});

$("#crystal-2").on("click", function() {
   totalscore += crystal2;
   updateScore();
   winOrLose();
});

$("#crystal-3").on("click", function() {
   totalscore += crystal3;
   updateScore();
   winOrLose();
});

$("#crystal-4").on("click", function() {
   totalscore += crystal4;
   updateScore();
   winOrLose();
});

console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);
console.log(randomNum);